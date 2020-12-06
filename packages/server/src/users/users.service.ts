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
  createOne() {
    this.logger.log('Creating User');
    const userEntity = this.usersRepository.create({
      firstName: 'one',
      lastName: 'two',
      isActive: false,
    });
    return this.usersRepository.save(userEntity);
  }
}
