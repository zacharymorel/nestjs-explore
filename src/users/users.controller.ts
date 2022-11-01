import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(200)
  findAll(@Req() req: Request): string {
    console.log('req: ', req.path);
    return 'This action returns all Users';
  }
}
