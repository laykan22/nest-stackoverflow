import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QuestionService } from '../question/question.service'






@ApiTags('Question')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller({
    path: 'question',
    version: '1',
})

export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }


}
