import { InputType, OmitType, ObjectType } from '@nestjs/graphql';
import { GroupSpace } from '../entities/group.entity';
import { MutationOutput } from 'src/common/core.entity';

@InputType()
export class CreateGroupInput extends OmitType(GroupSpace, [
  'no',
  'type',
  'is_deleted',
  'created_at',
  'updated_at',
]) {}

@ObjectType()
export class CreateGroupOutput extends MutationOutput {}
