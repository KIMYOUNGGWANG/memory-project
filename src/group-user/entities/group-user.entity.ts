import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, ManyToOne } from 'typeorm';
import { CoreEntity } from 'src/common/core.entity';
import { User } from 'src/user/entities/user.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class GroupUser extends CoreEntity {
  @ManyToOne(() => User, user => user.groupUser)
  @Field(() => User)
  @Column()
  user: User;

  // @OneToMany(() => Group, group => group.no)//나중에 그룹 추가시 넣음
  // @Field()
  // @Column()
  // groupNo: number[];

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
