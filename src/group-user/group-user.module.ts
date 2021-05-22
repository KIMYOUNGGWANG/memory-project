import { Module } from '@nestjs/common';
import { GroupUser } from './entities/group-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GroupUser])],
  // providers: [UserResolver, UserService],
  // exports: [UserService],
})
export class GroupUserModule {}
