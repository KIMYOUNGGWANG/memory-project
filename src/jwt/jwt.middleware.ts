import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    if ('x-jwt' in req.headers) {
      console.log(req.headers['x-jwt']);
      const [tokenType, token] = (req.headers['x-jwt'] as string).split(' ');
      console.log('token', token);
      if (tokenType === 'bearer') {
        const decoded = this.jwtService.verify(token.toString());
        console.log(decoded);
      }
    }
    next();
  }
}
