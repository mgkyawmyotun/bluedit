import { NestFactory } from '@nestjs/core';
import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import * as redis from 'redis';
import { AppModule } from './app.module';
import { SESSION_SECRECT } from './config';

const RedisStore = connectRedis(session);
async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.forRoot({ connectionType: 'dev' }),
    {
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    },
  );
  app.use(
    session({
      name: 'bid',
      secret: SESSION_SECRECT,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      },
      store: new RedisStore({
        client: redis.createClient(),
        host: 'localhost',
        port: 6379,
      }),
    }),
  );
  await app.listen(4000);
}
bootstrap();
