import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class VoteQuestionDto {
    @ApiProperty({
        example: 'user123',
        description: 'ID of the user voting',
    })
    @IsString()
    @IsNotEmpty()
    userId: string;

    @ApiProperty({
        example: 'upvote',
        description: 'Type of vote (upvote or downvote)',
    })
    @IsEnum(['upvote', 'downvote'])
    @IsNotEmpty()
    voteType: 'upvote' | 'downvote';
}
