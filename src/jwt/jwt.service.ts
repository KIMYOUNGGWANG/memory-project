import { Injectable, Inject } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interface';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {}

  sign(userId: number): [string, string] {
    const today = new Date().valueOf();
    return [
      jwt.sign(
        { no: userId, type: 'access', expire: today + 1000 * 60 * 30 },
        this.options.privateKey,
      ),
      jwt.sign(
        {
          no: userId,
          type: 'refresh',
          expire: today + 1000 * 60 * 60 * 24 * 3,
        },
        this.options.privateKey,
      ),
    ];
  }

  verify(token: string) {
    console.log(token);
    // return 'ddd';
    return jwt.verify(token, this.options.privateKey);
  }
}
