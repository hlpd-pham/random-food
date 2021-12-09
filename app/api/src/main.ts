import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger stuffs
  const options = new DocumentBuilder().setTitle('Random Food Item').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1', app, document);

  // cors
  app.enableCors({
    origin: ['localhost', 'localhost:4200'],
  });

  await app.listen(8080);
}
bootstrap();
