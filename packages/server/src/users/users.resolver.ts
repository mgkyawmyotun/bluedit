import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  Error,
  ForgetPasswordChange,
  User,
  UserInputType,
  UserLoginInput,
} from './users.type';

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
  @Query(returns => Boolean)
  isEmailExists(@Args('email') email: string) {
    return this.userService.isEmailExists(email);
  }
  @Mutation(returns => Error, { nullable: true, name: 'register' })
  createUser(@Args('userInput') user: UserInputType) {
    return this.userService.createUser(user);
  }
  @Mutation(returns => Error, { nullable: true, name: 'login' })
  loginUser(@Args('loginInput') user: UserLoginInput) {
    return this.userService.login(user.email, user.password);
  }

  @Mutation(returns => Error, { nullable: true, name: 'loginFaceBook' })
  loginFaceBook(@Args('accessToken') accessToken: string) {
    return this.userService.loginFacebook(accessToken);
  }
  @Mutation(returns => Boolean, {
    nullable: true,
    name: 'sendForgetPasswordLink',
  })
  forgetPasswordRequest(@Args('email') email: string) {
    return this.userService.forgetPasswordRequest(email);
  }
  @Mutation(returns => Error, { nullable: true, name: 'forgetPasswordChange' })
  changePassword(
    @Args('forgetPassowrdChangeInput') forget: ForgetPasswordChange,
  ) {
    return this.userService.changePassword(forget);
  }
}
