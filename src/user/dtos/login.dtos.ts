import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { MutationOutput } from 'src/common/core.entity';

@InputType()
export class LoginInput {
  @Field(() => String)
  type: 'kakao' | 'naver';

  @Field(() => Number)
  idx: number;
}

@ObjectType()
export class LoginOutput extends MutationOutput {
  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;
}
