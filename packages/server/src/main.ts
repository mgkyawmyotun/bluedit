import { hello } from '@bluedit/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
hello();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
