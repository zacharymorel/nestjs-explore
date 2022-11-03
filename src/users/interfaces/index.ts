export interface CreatedUserDto {
  id: number;
  name: string;
  age: number | null;
  sex: string | null;
}

export interface CreateUserDto {
  name: string;
  age: number | null;
  sex: string | null;
}
