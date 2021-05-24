import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, ManyToOne } from 'typeorm';
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

  @ManyToOne(() => GroupSpace, user => user.groupUser, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @Field(() => GroupSpace)
  group: GroupSpace;

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
