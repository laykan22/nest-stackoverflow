import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { privateDecrypt } from 'crypto';
import { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/createQuestion.dto';
import { Question } from 'src/schemas/Question.schema';
import { SearchQuestionsDto } from './dto/searchQuestion.dto';

export class QuestionService {

    constructor(
        @InjectModel('Question') private readonly questionModel: Model<Question>,
    ) { }

    async askQuestion(dto: CreateQuestionDto) {
        const { question, category, grade } = dto;
        const newQuestion = await this.questionModel.create({
            question,
            category,
            grade
        });

        return {
            statusCode: HttpStatus.CREATED,
            data: newQuestion
        }

    }

    async searchQuestion(dto: SearchQuestionsDto) {
        console.log('Searching for:', dto.question);
        const allQuestions = await this.questionModel.find({

        });
        console.log('Found questions:', allQuestions);

        return {
            statusCode: HttpStatus.OK,
            data: allQuestions,
        };
    }


}

