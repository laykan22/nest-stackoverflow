import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { QuestionService } from 'src/question/question.service';
import { authSchema } from '../schemas/Auth.schema';
import { TokenService } from '../utils/jwt.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Auth', schema: authSchema }]),
    ConfigModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [AuthService, QuestionService, TokenService, JwtService],
})
export class AuthModule { }
