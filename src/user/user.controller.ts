import { Controller, Post, Body } from '@nestjs/common';
import { createUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() createUserDto: createUserDto) {
    return this.userService.create(createUserDto);
  }
}
