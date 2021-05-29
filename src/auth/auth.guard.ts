import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

export type allowPermission = 'N' | 'A' | 'B' | 'C';

@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const permission = this.reflector.get<allowPermission>(
      'permission',
      context.getHandler(),
    );
    console.log(permission);
    if (!permission) {
      return true;
    }
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const user = gqlContext['user'];
    if (!user) {
      return false;
    }
    if (permission.includes('Any')) {
      return true;
    }
    return permission.includes(user.permission);
  }
}
