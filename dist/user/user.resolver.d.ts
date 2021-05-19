import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginOutput, LoginInput } from './dtos/login.dtos';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    allUser(sns: boolean): User[];
    createUser(createUserDto: CreateUserDto): Promise<boolean>;
    loginUser(loginInput: LoginInput): Promise<LoginOutput>;
}
