import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginOutput, LoginInput } from './dtos/login.dtos';
import { AuthGard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { UserProfileInput } from './dtos/user-profile.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [User])
  allUser(@Args('sns') sns: boolean): User[] {
    console.log(sns);
    return [];
  }

  @Mutation(() => Boolean)
  async createUser(
    @Args('input') createUserDto: CreateUserDto,
  ): Promise<boolean> {
    try {
      await this.userService.createUser(createUserDto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Mutation(() => LoginOutput)
  async loginUser(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      return this.userService.login(loginInput);
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
  @Query(() => User)
  @UseGuards(AuthGard)
  me(@AuthUser() authUser: User) {
    console.log(authUser);
    return authUser;
  }

  @Query(() => User)
  @UseGuards(AuthGard)
  getUser(@Args() userProfileInput: UserProfileInput) {
    const user = this.userService.findByNo(userProfileInput.userNo);
    return user;
  }
}
