import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional } from 'class-validator';
import { CoreEntity } from 'src/common/core.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  no: number;

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
}
