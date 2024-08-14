import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchQuestionsDto {
    @ApiProperty({
        example: 'Grade 10',
        description: 'Filter by grade',
        required: false,
    })
    @IsString()
    @IsOptional()
    grade?: string;

    @ApiProperty({
        example: 'Mathematics',
        description: 'Filter by category',
        required: false,
    })
    @IsString()
    @IsOptional()
    category?: string;

    @ApiProperty({
        example: 'square root',
        description: 'Search by keyword in the question',
        required: false,
    })
    @IsString()
    @IsOptional()
    keyword?: string;

    @ApiProperty({
        example: 'popularity',
        description: 'Sort by criteria',
        required: false,
    })
    @IsEnum(['date', 'popularity'])
    @IsOptional()
    sortBy?: 'date' | 'popularity';

    @ApiProperty({
        example: 1,
        description: 'Page number for pagination',
        required: false,
    })
    @IsNumber()
    @IsOptional()
    page?: number;

    @ApiProperty({
        example: 10,
        description: 'Number of results per page',
        required: false,
    })
    @IsNumber()
    @IsOptional()
    limit?: number;
}
