import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Error, User, UserInputType, UserLoginInput } from './users.type';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(returns => User, { nullable: true })
  me() {
    return this.userService.me();
  }
  @Query(returns => String, { nullable: true })
  logout() {
    return this.userService.logout();
  }
  @Mutation(returns => Error, { nullable: true, name: 'register' })
  createUser(@Args('userInput') user: UserInputType) {
    return this.userService.createUser(user);
  }
  @Mutation(returns => Error, { nullable: true, name: 'login' })
  loginUser(@Args('loginInput') user: UserLoginInput) {
    return this.userService.login(user.email, user.password);
  }
}
