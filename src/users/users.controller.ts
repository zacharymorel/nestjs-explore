import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
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
    return this.userService.findAll();
  }

  @Post()
  create(@Body() body: CreateUser): User {
    return this.userService.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: User): User {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): string {
    this.userService.delete(id);
    return 'Success Delete';
  }
}
