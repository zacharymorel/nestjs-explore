export interface CreatedUserDto {
  id: string;
  name: string;
  age: number | null;
  sex: string | null;
}

export interface CreateUserDto {
  name: string;
  age: number | null;
  sex: string | null;
}
