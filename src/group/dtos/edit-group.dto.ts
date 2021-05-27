import { InputType, ObjectType, PartialType, Field } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/core.entity';
import { CreateGroupInput } from './create-group.dto';

@InputType()
export class EditGroupInput extends PartialType(CreateGroupInput) {
  @Field(() => Number)
  groupNo: number;
}

@ObjectType()
export class EditGroupOutput extends MutationOutput {}
