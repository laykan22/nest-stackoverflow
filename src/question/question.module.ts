import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Question, questionSchema } from 'src/schemas/Question.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Question', schema: questionSchema }]),
    ConfigModule.forRoot(),
  ],
  providers: [QuestionService],
  controllers: [QuestionController,]
})
export class QuestionModule { }
