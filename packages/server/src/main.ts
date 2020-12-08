import { NestFactory } from '@nestjs/core';
import * as redis from 'cache-manager-redis-store';
import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { isDev, SESSION_SECRECT } from './config';

const RedisStore = connectRedis(session);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      name: 'bid',
      secret: SESSION_SECRECT,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: isDev,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
      store: new RedisStore({
        client: redis,
        host: 'localhost',
        port: 6379,
      }),
    }),
  );
  await app.listen(4000);
}
bootstrap();
