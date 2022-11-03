import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * We do not need to use Dependency injection NOR classes for middleware in NestJs.
 * We can just use simple functional functions if desired.
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    console.log('Logger Req Path: ', req.path);
    console.log('Logger Req Params: ', req.params);
    console.log('Logger Req query: ', req.query);
    console.log('Logger Req Body: ', req.body);
    next();
  }
}
