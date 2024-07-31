import { IsEmail, IsNumberString, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  password: string;
  
}
