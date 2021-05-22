import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UserProfileInput {
  @Field(() => Number)
  userNo: number;
}
