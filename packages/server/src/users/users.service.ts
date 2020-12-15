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
import { FACEBOOK_APP_ID, FACEBOOK_APP_SECRECT } from './../config';
import {
  FaceBookAppResponse,
  FaceBookUserProfile,
  GraphQLUserContext,
} from './users.d';
import { UserEntity } from './users.entity';
import { Error, User } from './users.type';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger('userService');
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    @Inject(CONTEXT) private context: GraphQLUserContext,
  ) {}
  async createUser(user: User): Promise<Error> {
    this.logger.log('Creating User');
    try {
      const result = await userValidationSchema.validate(user);
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
  async loginFacebook(accessToken: string): Promise<Error> {
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
  private setUserSession(user_id: string): void {
    const { session } = this.context;
    session.user = user_id;
  }
}
