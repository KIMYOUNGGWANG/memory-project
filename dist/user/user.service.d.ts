import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginInput } from './dtos/login.dtos';
export declare class UserService {
    private readonly user;
    constructor(user: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    login({ type, idx }: LoginInput): Promise<{
        ok: boolean;
        error?: string;
        accessToken?: string;
        refreshToken?: string;
    }>;
}
