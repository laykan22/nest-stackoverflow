import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  create(createUserDto: createUserDto) {
    return 'the user is created';
  }
}
