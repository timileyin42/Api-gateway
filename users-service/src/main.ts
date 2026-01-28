import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const host = process.env.SERVICE_HOST as string;
  const port = Number(process.env.SERVICE_PORT);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: { host, port },
  });

  await app.listen();
}

bootstrap();
