export class CreateUserDto {
  id: string;
  name: string;
  age: number | null;
  sex: string | null;
}

export class CreateUser {
  name: string;
  age: number | null;
  sex: string | null;
}
