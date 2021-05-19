import { InputType, OmitType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

// @ArgsType()
// export class CreateUserDto {
//   @Field(() => String)
//   @IsString()
//   @Length(2, 10)
//   name: string;

//   @Field(() => String)
//   @IsString()
//   @Length(9, 12)
//   hp: string;

//   @Field(() => String)
//   @IsString()
//   @Length(6, 6)
//   birth: string;

//   @Field(() => String)
//   @IsString()
//   @Length(1, 1)
//   gender: string;
// }

@InputType()
export class CreateUserDto extends OmitType(User, [
  'no',
  'img',
  'is_deleted',
  'last_loged_in',
  'created_at',
  'kakao',
  'naver',
  'permission',
]) {}
