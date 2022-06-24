import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupSpace } from 'src/group/entities/group.entity';
import { GroupUser } from 'src/group/entities/group-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupSpace, GroupUser])],
  providers: [GroupResolver, GroupService],
  exports: [GroupService],
})
export class EpisodeModule {}
