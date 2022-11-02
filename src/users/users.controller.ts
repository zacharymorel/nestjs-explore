import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

// Relatives
import { CreateUser, CreateUserDto } from './user.types';

@Controller('users')
export class UsersController {
  @Get()
  @HttpCode(200)
  findAll(@Req() req: Request): string {
    console.log('req: ', req.path);
    return 'This action returns all Users';
  }

  @Post()
  create(@Body() body: CreateUser): CreateUserDto {
    console.log('body: ', body);
    return { id: 'Adam123', name: 'Adam', age: 19, sex: 'm' };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateUserDto): CreateUserDto {
    console.log('id: ', id);
    console.log('body: ', body);
    const newAge = 25;
    return {
      ...body,
      age: newAge,
    };
  }
}
