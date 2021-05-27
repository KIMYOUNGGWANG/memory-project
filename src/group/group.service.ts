import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupSpace } from './entities/group.entity';
import { Repository } from 'typeorm';
import { CreateGroupInput, CreateGroupOutput } from './dtos/create-group.dto';
import { User } from 'src/user/entities/user.entity';
import { GroupUser } from './entities/group-user.entity';
import { EditGroupInput, EditGroupOutput } from './dtos/edit-group.dto';

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
      const newGroup = await this.groupSpace.save(
        this.groupSpace.create({
          name: createGroupInput.name,
          description: createGroupInput.description,
          type: 'N',
          coverImg: '',
          is_deleted: false,
          created_at: today,
          updated_at: today,
        }),
      );
      await this.groupUser.save(
        this.groupUser.create({
          user: user,
          userNickname: user.name,
          group: newGroup,
          groupPermission: 'owner',
          isDeleted: false,
          created_at: today,
          updated_at: today,
        }),
      );
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
  async editGroup(
    user: GroupUser,
    editGroupInput: EditGroupInput,
  ): Promise<EditGroupOutput> {
    try {
      const group = await this.groupSpace.findOne(editGroupInput.groupNo, {
        loadRelationIds: true,
      });

      return { ok: true };
    } catch (error) {
      return {
        ok: false,
        error: 'group not found',
      };
    }
  }
}
