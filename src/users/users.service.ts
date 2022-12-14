import { Injectable } from '@nestjs/common';
import { CreateUserDto, CreatedUserDto } from './interfaces';

@Injectable()
export class UsersService {
  private readonly users: CreatedUserDto[] = [];

  create(user: CreateUserDto): CreatedUserDto {
    const u = Object.assign({}, user, { id: Math.random() });
    this.users.push(u);
    return u;
  }

  findAll(): CreatedUserDto[] {
    return this.users;
  }

  update(id: number, user: CreatedUserDto): CreatedUserDto {
    this.users.map((u) => {
      if (u.id === id) {
        return Object.assign(u, user);
      }
    });

    return this.users.find((u) => u.id === id);
  }

  delete(id: number): void {
    this.users.filter((u) => u.id !== id);
  }
}
