import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/user')
  createUser() {
    return this.userService.createOne();
  }
}
