import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionService {
  findUserQuestion(userId: string) {
    return 'this is a question';
  }
}
