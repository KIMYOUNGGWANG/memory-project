import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Story } from './entities/story.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Story])],
  // providers: [GroupResolver, GroupService],
  // exports: [GroupService],
})
export class StoryModule {}
