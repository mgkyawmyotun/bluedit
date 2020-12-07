import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger('userService');
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}
  createUser(
    email: string,
    password: string,
    displayName: string,
    username: string,
  ) {
    this.logger.log('Creating User');

    const user = this.usersRepository.create({
      email,
      password,
      displayName,
      username,
    });
  }
}
