import { Resolver, Query } from '@nestjs/graphql';
import { Story } from './entities/story.entity';

@Resolver(() => Story)
export class StoryResolver {
  // constructor(private readonly groupSevice: GroupService) {}
  @Query(() => Boolean)
  hi() {
    return true;
  }
}
