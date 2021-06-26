import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { CoreEntity } from 'src/common/core.entity';
// import { GroupUser } from './group-user.entity';
import { Story } from 'src/story/entities/story.entity';
import { GroupUser } from 'src/group/entities/group-user.entity';
// import { User } from 'src/user/entities/user.entity';

@InputType('groupSpaceInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Episode extends CoreEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true, defaultValue: '' })
  @Column({ default: '' })
  description: string;

  @Field(() => String)
  @Column()
  coverImg: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  is_deleted: boolean;

  @Field(() => [GroupUser], { nullable: true })
  groupUser: GroupUser[];

  @OneToMany(() => Story, story => story.episodes, {
    onDelete: 'SET NULL',
  })
  @Field(() => [Story], { nullable: true })
  story: Story[];

  // @Field(() => GroupUser)
  // @OneToOne(()=>GroupUser,{on})
  // created_by: GroupUser;
}
