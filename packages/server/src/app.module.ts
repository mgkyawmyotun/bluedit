import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Request } from 'express';
import { Session } from 'express-session';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DEV_CONNECTION } from './connections';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    DEV_CONNECTION,
    GraphQLModule.forRoot({
      include: [UsersModule, PostsModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }): { session: Session; req: Request } => ({
        session: req.session,
        req: req,
      }),

      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
