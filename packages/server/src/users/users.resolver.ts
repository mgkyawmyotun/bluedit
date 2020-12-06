import { Query, Resolver } from '@nestjs/graphql';
import { User } from './users.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}
  @Query(returns => User, { nullable: true })
  createUser() {
    return { username: 'kyaw kyaw' };
  }
}
