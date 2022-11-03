import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

// Relatives
import { CreateUser, User } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @HttpCode(200)
  findAll(@Req() req: Request): User[] {
    console.log('req: ', req.path);
    return this.userService.findAll();
  }

  @Post()
  create(@Body() body: CreateUser): User {
    console.log('body: ', body);
    return this.userService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: User): User {
    console.log('PUT id: ', id);
    console.log('body: ', body);
    return this.userService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    console.log('DELETE id: ', id);
    this.userService.delete(id);
    return 'Success Delete';
  }
}
