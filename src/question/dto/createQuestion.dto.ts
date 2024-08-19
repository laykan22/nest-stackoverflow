import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


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


}