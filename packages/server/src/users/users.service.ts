import {
  userLoginValidationSchema,
  userValidationSchema,
} from '@bluedit/common';
import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { GraphQLUserContext } from './users.d';
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
    const { session } = this.context;
    this.context.getType();
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
      session.user = user.user_id;
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
    const { session } = this.context;
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
    session.user = userAlereadyExists.user_id;

    return null;
  }
  async logout() {
    this.context.session.destroy(err => {
      this.logger.error(err);
    });
    return null;
  }
}
