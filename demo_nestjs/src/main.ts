import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('SIS257')
    .setDescription('La descripción de la API SIS257')
    .setVersion('1.0')
    .addTag('interprete, genero, album')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document, { swaggerOptions: { filter: true, displayRequestDuration: true } });

  await app.listen(process.env.APP_PORT);
  console.log(`App corriendo en ${await app.getUrl()}/apidoc`);
}
bootstrap();
