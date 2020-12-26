import { Inject, Injectable } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';
import { GraphQLUserContext } from '../users/users';

@Injectable()
export class UserAuthHelpService {
  constructor(@Inject(CONTEXT) private context: GraphQLUserContext) {}
  getUser() {
    return this.context.session.user;
  }
}
