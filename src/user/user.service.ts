import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginInput } from './dtos/login.dtos';
import { JwtService } from 'src/jwt/jwt.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<User> {
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
    if (createUserDto.registerType === 'kakao') {
      newUser.kakao = createUserDto.kakao;
    } else {
      newUser.naver = createUserDto.naver;
    }
    return this.user.save(newUser);
  }

  async login({ type, idx }: LoginInput): Promise<{
    ok: boolean;
    error?: string;
    accessToken?: string;
    refreshToken?: string;
  }> {
    // make a JWT and give it to the user
    try {
      const user = await (type === 'kakao'
        ? this.user.findOne({ kakao: idx })
        : this.user.findOne({ naver: idx }));
      if (!user) {
        return {
          ok: false,
          error: 'User not found',
        };
      }
      const [accessToken, refreshToken] = this.jwtService.sign(user.no);
      return {
        ok: true,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }

  async findByNo(no: number): Promise<User> {
    return this.user.findOne({ no });
  }
}
