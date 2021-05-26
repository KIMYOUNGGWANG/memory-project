import { SetMetadata } from '@nestjs/common';

export const UserPermission = (permissions: string[]) =>
  SetMetadata('permission', permissions);

export const GroupPermission = (permissions: string[]) =>
  SetMetadata('permission', permissions);
