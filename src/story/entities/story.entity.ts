import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, ManyToOne, RelationId } from 'typeorm';
import { CoreEntity } from 'src/common/core.entity';
import { GroupSpace } from 'src/group/entities/group.entity';

@InputType('userInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Story extends CoreEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Boolean)
  @Column()
  is_deleted: boolean;

  @Field(() => String, { nullable: true, defaultValue: '' })
  @Column({ default: '' })
  coverImg?: string;

  @Field(() => Date)
  @Column()
  date: Date;

  @ManyToOne(() => GroupSpace, groupSpace => groupSpace.story, {
    onDelete: 'CASCADE',
  })
  @Field(() => [GroupSpace])
  groupSpace: GroupSpace;

  @RelationId((story: Story) => story.groupSpace)
  groupSpaceNo: number;

  // @OneToMany(() => GroupUser, groupUser => groupUser.user, {
  //   nullable: true,
  //   onDelete: 'SET NULL',
  // })
  // @Field(() => [GroupUser], { nullable: true })
  // groupUser: GroupUser[];
}
