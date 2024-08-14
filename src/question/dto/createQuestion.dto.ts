import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// class AnswerDto {
//     @ApiProperty({ example: '12', description: 'The answer text' })
//     @IsString()
//     @IsNotEmpty()
//     answer: string;

//     @ApiProperty({ example: 'user123', description: 'User ID who provided the answer' })
//     @IsString()
//     @IsNotEmpty()
//     userId: string;

//     @ApiProperty({ example: 0, description: 'Number of votes for the answer', required: false })
//     @IsNumber()
//     @IsOptional()
//     vote?: number;
// }

export class CreateQuestionDto {
    @ApiProperty({
        example: 'Grade 10',
        description: 'Grade level of the question',
    })
    @IsString()
    @IsNotEmpty()
    grade: string;

    @ApiProperty({
        example: 'Mathematics',
        description: 'Category of the question',
    })
    @IsString()
    @IsNotEmpty()
    category: string;

    @ApiProperty({
        example: 'What is the square root of 144?',
        description: 'The actual question text',
    })
    @IsString()
    @IsNotEmpty()
    question: string;

    // @ApiProperty({
    //     example: 0,
    //     description: 'Number of votes for the question',
    //     required: false,
    // })
    // @IsNumber()
    // @IsOptional()
    // vote?: number;

    // @ApiProperty({
    //     example: [],
    //     description: 'Array of user IDs who voted',
    //     required: false,
    // })
    // @IsArray()
    // @IsOptional()
    // @IsString({ each: true })
    // voters?: string[];

    // @ApiProperty({
    //     example: [{ answer: '12', userId: 'user123', vote: 0 }],
    //     description: 'Array of answers associated with the question',
    //     required: false,
    // })
    // @IsArray()
    // @ValidateNested({ each: true })
    // @Type(() => AnswerDto)
    // @IsOptional()
    // answers?: AnswerDto[];

    // @ApiProperty({
    //     example: '2024-08-14T07:00:00.000Z',
    //     description: 'Time when the question was created',
    //     required: false,
    // })
    // @IsDate()
    // @IsOptional()
    // time?: Date;
}
