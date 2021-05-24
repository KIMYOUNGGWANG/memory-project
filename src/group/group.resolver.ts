import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GroupSpace } from './entities/group.entity';
import { CreateGroupInput, CreateGroupOutput } from './dtos/create-group.dto';
import { GroupService } from './group.service';
import { UseGuards } from '@nestjs/common';
import { AuthGard } from 'src/auth/auth.guard';
import { AuthUser } from 'src/auth/auth.decorator';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => GroupSpace)
export class GroupResolver {
  constructor(private readonly groupSevice: GroupService) {}
  @Query(() => Boolean)
  hi() {
    return true;
  }

  @Mutation(() => CreateGroupOutput)
  @UseGuards(AuthGard)
  createGroup(
    @Args('input') createGroupInput: CreateGroupInput,
    @AuthUser() user: User,
  ): Promise<CreateGroupOutput> {
    // ): { ok: boolean } {
    //   console.log('fdddd', createGroupInput);
    //   return {
    //     ok: true,
    //   };
    return this.groupSevice.createGroup(createGroupInput, user);
  }
}
