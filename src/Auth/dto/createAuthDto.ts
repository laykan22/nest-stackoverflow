import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumberString, IsString, MaxLength } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({
    example: 'test',
    description: 'Name of the user',
  })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'Email of the user',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'Password of the user',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
