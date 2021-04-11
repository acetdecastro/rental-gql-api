import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 8080;

  await app.listen(port);

  logger.log(`GraphQL Server Running at http://localhost:${port}/graphql`);
}
bootstrap();
