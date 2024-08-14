import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAnswerDto {
    @ApiProperty({
        example: '12',
        description: 'The updated answer text',
        required: false,
    })
    @IsString()
    @IsOptional()
    answer?: string;

    @ApiProperty({
        example: 0,
        description: 'The updated vote count for the answer',
        required: false,
    })
    @IsNumber()
    @IsOptional()
    vote?: number;
}
