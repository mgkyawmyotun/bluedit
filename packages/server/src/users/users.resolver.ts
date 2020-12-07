import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.type';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}
  @Query(returns => User, { nullable: true })
  createUser() {
    return { username: 'kyaw kyaw' };
  }
}
