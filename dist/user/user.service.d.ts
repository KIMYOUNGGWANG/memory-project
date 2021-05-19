import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UserService {
    private readonly user;
    constructor(user: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
