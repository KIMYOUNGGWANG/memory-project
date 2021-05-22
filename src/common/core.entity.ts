import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  no: number;

  @CreateDateColumn()
  @Field(() => Date)
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updated_at: Date;
}

@ObjectType()
export class MutationOutput {
  @Field(() => String, { nullable: true })
  error?: string;

  @Field(() => Boolean)
  ok: boolean;
}
