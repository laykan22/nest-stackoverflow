import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { QuestionService } from 'src/question/question.service';

@Module({
  controllers: [UserController],
  providers: [UserService, QuestionService]
})
export class UserModule {}
