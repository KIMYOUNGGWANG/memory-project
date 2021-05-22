import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
const mockRepository = {
  findOne: jest.fn(),
  save: jest.fn(),
  create: jest.fn(),
};
const mockJwtService = { sign: jest.fn(), verify: jest.fn() };
describe('userService', () => {
  let service: UserService;
  beforeAll(async () => {
    const modules = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();
    service = modules.get<UserService>(UserService);
  });
  it('be defined', () => {
    expect(service).toBeDefined();
  });

  it.todo('login');
  it.todo('createUser');
  it.todo('findByNo');
});
