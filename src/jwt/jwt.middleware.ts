import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from 'src/jwt/jwt.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if ('x-jwt' in req.headers) {
      const [tokenType, token] = (req.headers['x-jwt'] as string).split(' ');
      if (tokenType === 'bearer') {
        const decoded = this.jwtService.verify(token.toString());
        if (
          typeof decoded === 'object' &&
          decoded.hasOwnProperty('no') &&
          decoded.hasOwnProperty('type') &&
          decoded['type'] === 'access'
        ) {
          try {
            const user = await this.userService.findByNo(decoded['no']);
            console.log(decoded['expire']);

            console.log(new Date().valueOf());
            console.log(user);
            req['user'] = user;
            if (decoded['expire'] < new Date().valueOf()) {
              req['expire'] = true;
              throw 'expire token';
            }
          } catch (error) {}
        }
      }
    }
    next();
  }
}
