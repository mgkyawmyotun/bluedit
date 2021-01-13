import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GraphQLUserContext } from './../users/users.d';

@Injectable()
export class IsAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    if (context.getType() === 'http') {
      const [req] = context.getArgs();
      if (req.session.user) {
        return true;
      }
      return false;
    }
    const gqlContext = context.getArgByIndex<GraphQLUserContext>(2);

    if (gqlContext.session.user) {
      return true;
    }
    return false;
  }
}
