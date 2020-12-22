import {
  emailValidation,
  userLoginValidationSchema,
  userValidationSchema,
} from '@bluedit/common';
import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRECT,
  FRONT_END_URL,
} from './../config';
import { EmailCient } from './../shared/sendEmail';
import {
  FaceBookAppResponse,
  FaceBookUserProfile,
  GraphQLUserContext,
} from './users.d';
import { UserEntity } from './users.entity';
import { ForgetPasswordChange, User, UserError } from './users.type';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger('userService');
  private forgetPasswordPrefix = 'IForgetIt';
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
  ) {}
  async createUser(user: User): Promise<UserError> {
    this.logger.log('Creating User');
    try {
      const result = await userValidationSchema.validate(user);
      console.log(result);
    } catch (error) {
      return {
        path: error.path,
        message: error.message,
      };
    }
    const userAlereadyExists = await this.usersRepository.findOne(
      {
        email: user.email,
      },
      { select: ['user_id'] },
    );
    if (userAlereadyExists) {
      return {
        path: 'email',
        message: 'user already exists with these email',
      };
    }
    const usernameAlreadyExists = await this.usersRepository.findOne(
      {
        username: user.username,
      },
      { select: ['user_id'] },
    );
    if (usernameAlreadyExists) {
      return {
        path: 'username',
        message: 'username already exists',
      };
    }
    const userRepository = this.usersRepository.create(user);
    try {
      const user = await this.usersRepository.save(userRepository);
      this.setUserSession(user.user_id);
    } catch (error) {
      console.log(error);
      return {
        path: 'Internal Server Error',
        message: 'Try again later ',
      };
    }
  }
  async me() {
    const { session } = this.context;

    this.logger.log('Getting User From Session', session.user);
    const user = await this.usersRepository.findOne({ user_id: session.user });
    return user;
  }
  async login(email: string, password: string) {
    this.logger.log(' User Login');
    try {
      await userLoginValidationSchema.validate({ email, password });
    } catch (error) {
      return {
        path: error.path,
        message: error.message,
      };
    }
    const userAlereadyExists = await this.usersRepository.findOne(
      {
        email: email,
      },
      { select: ['password', 'user_id'] },
    );

    if (!userAlereadyExists) {
      return {
        path: 'email/password',
        message: 'Invalid Email or Password',
      };
    }
    const isValidPassword = await bcrypt.compare(
      password,
      userAlereadyExists.password,
    );
    if (!isValidPassword) {
      return {
        path: 'email/password',
        message: 'Invalid Email or Password',
      };
    }
    this.setUserSession(userAlereadyExists.user_id);
    return null;
  }
  async logout() {
    this.context.session.destroy(err => {
      this.logger.error(err);
    });
    return null;
  }
  async loginFacebook(accessToken: string): Promise<UserError> {
    const url = `https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${FACEBOOK_APP_ID}|${FACEBOOK_APP_SECRECT}`;
    const { data }: { data: FaceBookAppResponse } = await axios.get(url);
    const facebookData = data.data;
    if (!(facebookData.app_id === FACEBOOK_APP_ID && facebookData.is_valid)) {
      return {
        path: 'facebook',
        message: 'Error not valid',
      };
    }

    const UserProfileUrl = `https://graph.facebook.com/v9.0/me?fields=id,name,email,picture&access_token=${accessToken}`;
    const { data: UserData }: { data: FaceBookUserProfile } = await axios.get(
      UserProfileUrl,
    );
    const userAlereadyExists = await this.usersRepository.findOne(
      {
        email: UserData.email,
      },
      { select: ['user_id'] },
    );
    if (userAlereadyExists) {
      this.setUserSession(userAlereadyExists.user_id);
      return null;
    }
    const user = this.usersRepository.create({
      displayName: UserData.name,
      username: UserData.name.replace(/\s/g, '_').toLowerCase(),
      email: UserData.email,
      picture_url: UserData.picture.data.url,
    });
    try {
      const { user_id } = await this.usersRepository.save(user);
      this.setUserSession(user_id);
    } catch (error) {
      return {
        path: 'Internal Server Error',
        message: 'Try again later ',
      };
    }
  }
  async isEmailExists(email: string) {
    try {
      await emailValidation.validate({ email });
    } catch (error) {
      return false;
    }
    const user_id = await this.usersRepository.findOne(
      { email },
      { select: ['user_id'] },
    );
    if (user_id) {
      return true;
    }
    return false;
  }
  async forgetPasswordRequest(email: string): Promise<boolean> {
    const user_id = await this.usersRepository.findOne(
      { email },
      { select: ['user_id', 'forgetLocked', 'password'] },
    );
    if (!user_id || user_id.forgetLocked || !user_id.password) {
      return false;
    }
    await this.usersRepository.update(
      { user_id: user_id.user_id },
      { forgetLocked: true },
    );
    const url = this.createPasswordResetLink(user_id.user_id);
    try {
      EmailCient.sendForgetEmail(email, url);
    } catch (error) {
      Logger.error('error at sending Email');
    }
    return true;
  }
  async changePassword({
    key,
    newPassword,
  }: ForgetPasswordChange): Promise<UserError> {
    const user_id = await this.cacheManager.get(this.getForgetPasswordKey(key));
    if (!user_id) {
      return {
        message: 'forgetPassword Link is time out please request again',
        path: 'changePassword',
      };
    }
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await this.usersRepository.update(
        { user_id: user_id },
        { password: hashedPassword, forgetLocked: false },
      );
      await this.cacheManager.del(this.getForgetPasswordKey(key));
    } catch (err) {
      return {
        message: 'Error at updating user password',
        path: 'changePassword',
      };
    }
  }
  private setUserSession(user_id: string): void {
    const { session } = this.context;
    session.user = user_id;
  }
  private createPasswordResetLink(userId: string): string {
    const id = v4();
    this.cacheManager.set(this.getForgetPasswordKey(id), userId, {
      ttl: 60 * 60 * 24, // 1 day
    });
    return `${FRONT_END_URL}/change-password/${id}`;
  }
  private getForgetPasswordKey(id: string): string {
    return this.forgetPasswordPrefix + id;
  }
}
