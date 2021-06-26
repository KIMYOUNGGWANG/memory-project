import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
// import { GroupSpace } from './entities/group.entity';
// import { CreateGroupInput, CreateGroupOutput } from './dtos/create-group.dto';
import { AuthUser } from 'src/auth/auth.decorator';
import { User } from 'src/user/entities/user.entity';
// import { EditGroupOutput, EditGroupInput } from './dtos/edit-group.dto';
import { UserPermission } from 'src/user/user.decorator';
import { GroupService } from 'src/group/group.service';
import { Episode } from './entities/episode.entities';

@Resolver(() => Episode)
export class EpisodeResolver {
  constructor(private readonly groupSevice: GroupService) {}
  @Query(() => Boolean)
  hi() {
    return true;
  }

  // @Mutation(() => CreateGroupOutput)
  // @UserPermission(['any'])
  // createGroup(
  //   @Args('input') createGroupInput: CreateGroupInput,
  //   @AuthUser() user: User,
  // ): Promise<CreateGroupOutput> {
  //   return this.groupSevice.createGroup(createGroupInput, user);
  // }

  // @Mutation(() => EditGroupOutput)
  // @UserPermission(['any'])
  // editGroup(
  //   @Args('input') editGroupInput: EditGroupInput,
  //   @AuthUser() user: User,
  // ) {
  //   return {
  //     ok: true,
  //   };
  // }
}
