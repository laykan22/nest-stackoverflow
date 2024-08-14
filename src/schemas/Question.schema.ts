import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AnswerDocument = Answer & Document;
export type QuestionDocument = Question & Document;

@Schema()
export class Answer {
    @Prop({ required: true })
    answer: string;

    @Prop({ type: Types.ObjectId, required: true, ref: 'User' })
    userId: Types.ObjectId;

    @Prop({ default: 0 })
    vote: number;
}

@Schema()
export class Question {
    @Prop({ required: [true, 'Question must have a grade'] })
    grade: string;

    @Prop({ required: [true, 'Question must have a category'] })
    category: string;

    @Prop({ required: [true, 'Question must have a description'] })
    question: string;

    @Prop({ default: 0 })
    vote: number;

    @Prop({ type: [Types.ObjectId], ref: 'User' })
    voters: Types.ObjectId[];

    @Prop({ type: [Answer], _id: false })
    answers: Answer[];

    @Prop({ default: Date.now })
    time: Date;
}

export const questionSchema = SchemaFactory.createForClass(Question);
