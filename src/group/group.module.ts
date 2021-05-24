import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupSpace } from './entities/group.entity';
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { GroupUser } from './entities/group-user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([GroupSpace, GroupUser])],
  providers: [GroupResolver, GroupService],
  exports: [GroupService],
})
export class GroupModule {}
