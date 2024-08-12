import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Auth extends Document {
    @Prop({
        unique: true,
        trim: true,
        lowercase: true,
    })
    email: string;

    @Prop()
    password: string;

    @Prop()
    name: string;
}

export const authSchema = SchemaFactory.createForClass(Auth);
