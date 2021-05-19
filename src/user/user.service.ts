import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}
  // getUser(no):Promise<User>{
  //   return this.user.findByIds()
  // }
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const today = new Date();
    const newUser = this.user.create({
      name: createUserDto.name,
      hp: createUserDto.hp,
      gender: createUserDto.gender,
      birth: createUserDto.birth,
      permission: 'N',
      created_at: today,
      last_loged_in: today,
      is_deleted: false,
    });
    return this.user.save(newUser);
  }
}
