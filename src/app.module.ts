import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Auth/auth.module';
import { QuestionModule } from './question/question.module';
import { ConfigModule } from '@nestjs/config'; // Correct import
import { DatabaseModule } from './database/database.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    QuestionModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule { }


