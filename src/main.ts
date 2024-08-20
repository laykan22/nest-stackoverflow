import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as BasicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.use(
    ['/api', '/api-json'],
    BasicAuth({
      users: { 'admin': 'password' },
      challenge: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('A stackover clone')
    .setDescription('A simple clone')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('listening on port http://localhost:3000/api');
}
bootstrap();
function basicAuth(arg0: {
  users: { admin: string; }; // Replace with your own credentials
  challenge: boolean;
}): any {
  throw new Error('Function not implemented.');
}

