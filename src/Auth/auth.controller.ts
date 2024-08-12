import { Controller, Post, Body } from '@nestjs/common';
import { CreateAuthDto } from './dto/createAuthDto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { version } from 'os';
import { LoginUserDto } from './dto/loginAuthDto';

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '2',
})
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('/register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginUser(loginUserDto)
  }
}
