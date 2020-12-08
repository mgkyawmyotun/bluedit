import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Error, UserInputType } from './users.type';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(returns => String)
  me() {
    return 'HEllo';
  }
  @Mutation(returns => Error, { nullable: true })
  createUser(@Args('userInput') user: UserInputType) {
    return this.userService.createUser(user);
  }
}
