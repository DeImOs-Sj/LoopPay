import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  AccountId: string;

  @IsString()
  name: string;

  avatar: string | null;
}
