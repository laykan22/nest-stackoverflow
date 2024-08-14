import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QuestionService } from '../question/question.service'
import { CreateQuestionDto } from './dto/createQuestion.dto';






@ApiTags('Question')
@ApiBearerAuth()
// @UseGuards(AuthGuard('jwt'))
@Controller({
    path: 'question',
    version: '1',
})

export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    @Post('/askQuestion')
    async askQuestion(@Body() CreateQuestionDto: CreateQuestionDto) {
        return this.questionService.askQuestion(CreateQuestionDto)
    }
}

