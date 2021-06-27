import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupSpace } from 'src/group/entities/group.entity';
import { GroupUser } from 'src/group/entities/group-user.entity';
import { EpisodeResolver } from './episode.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([GroupSpace, GroupUser])],
  providers: [EpisodeResolver],
  exports: [],
})
export class EpisodeModule {}
