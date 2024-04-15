import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// app.useGlobalPipes(new ValidationPipe())
 
const corsOptions: CorsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
  preflightContinue: false,
  optionsSuccessStatus: 200,
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization', // Allow these headers
  credentials: true, // Allow sending credentials (e.g., cookies)
};
// Enable CORS with the specified options
app.enableCors(corsOptions);
await app.listen(3000);
}
bootstrap();

