import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    console.log(gqlContext['user']);
    const user = gqlContext['user'];
    return Boolean(user);
  }
}
