import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class User {


    @Prop()
    username: string;

    @Prop({required: true})
    firstName: string;
};


export const SchemaFactory.createForClass(User);