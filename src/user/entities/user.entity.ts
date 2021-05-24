import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { IsOptional } from 'class-validator';
import { CoreEntity } from 'src/common/core.entity';
import { GroupUser } from 'src/group/entities/group-user.entity';

@InputType('userInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  permission: string;

  @Field(() => String)
  @Column()
  hp: string;

  @Field(() => Date)
  @Column()
  last_loged_in: Date;

  @Field(() => String)
  @Column()
  birth: string;

  @Field(() => String)
  @Column()
  gender: string;

  @Field(() => Boolean)
  @Column()
  is_deleted: boolean;

  @Field(() => String, { nullable: true, defaultValue: '' })
  @Column({ default: '' })
  img?: string;

  @Field(() => Number, { nullable: true, defaultValue: 0 })
  @Column({ default: 0 })
  @IsOptional()
  kakao?: number;
  @Field(() => Number, { nullable: true, defaultValue: 0 })
  @Column({ default: 0 })
  @IsOptional()
  naver?: number;

  @OneToMany(() => GroupUser, groupUser => groupUser.user, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @Field(() => [GroupUser], { nullable: true })
  groupUser: GroupUser[];
}
