import { userValidationSchema } from '@bluedit/common';
import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cache } from 'cache-manager';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { Error, User } from './users.type';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger('userService');
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async createUser(user: User): Promise<Error> {
    this.logger.log('Creating User');
    const result = await this.cacheManager.get('one');
    console.log(result);
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
      await this.usersRepository.save(userRepository);
    } catch (error) {
      console.log(error);
      return {
        path: 'Internal Server Error',
        message: 'Try again later ',
      };
    }
  }
}
