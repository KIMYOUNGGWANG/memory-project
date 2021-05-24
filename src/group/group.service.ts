import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupSpace } from './entities/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupInput, CreateGroupOutput } from './dtos/create-group.dto';
import { User } from 'src/user/entities/user.entity';
import { GroupUser } from './entities/group-user.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupSpace)
    private readonly groupSpace: Repository<GroupSpace>,
    @InjectRepository(GroupUser)
    private readonly groupUser: Repository<GroupUser>,
  ) {}
  async createGroup(
    createGroupInput: CreateGroupInput,
    user: User,
  ): Promise<CreateGroupOutput> {
    // console.log(this.user);
    const today = new Date();
    try {
      const newGroup = this.groupSpace.create({
        name: createGroupInput.name,
        description: createGroupInput.description,
        type: 'N',
        coverImg: '',
        is_deleted: false,
        created_at: today,
        updated_at: today,
      });
      const newGroupUser = this.groupUser.create({
        user: user,
        userNickname: user.name,
        group: newGroup,
        groupPermission: 'owner',
        isDeleted: false,
        created_at: today,
        updated_at: today,
      });
      await this.groupSpace.save(newGroup);
      await this.groupUser.save(newGroupUser);
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: "group isn't created",
      };
    }
  }
}
