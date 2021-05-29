import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, ManyToOne, RelationId } from 'typeorm';
import { CoreEntity } from 'src/common/core.entity';
import { User } from 'src/user/entities/user.entity';
import { GroupSpace } from 'src/group/entities/group.entity';

@InputType('groupUserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class GroupUser extends CoreEntity {
  @ManyToOne(() => User, user => user.groupUser, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @Field(() => User)
  user: User;

  @RelationId((groupUser: GroupUser) => groupUser.user)
  @Field(() => Number)
  userId: number;

  @ManyToOne(() => GroupSpace, user => user.groupUser, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @Field(() => GroupSpace)
  group: GroupSpace;

  @RelationId((groupUser: GroupUser) => groupUser.group)
  @Field(() => Number)
  groupId: number;

  @Field(() => String)
  @Column()
  groupPermission: string;

  @Field(() => String, { nullable: true, defaultValue: '' })
  @Column({ default: '' })
  userNickname: string;

  @Field(() => Boolean)
  @Column()
  isDeleted: boolean;
}
