import { BullModule } from '@nestjs/bull';
import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Request } from 'express';
import { Session } from 'express-session';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheControllerModule } from './cacheController/cache.module';
import { CommentsModule } from './comments/comments.module';
import { REDIS_HOST, REDIS_PORT } from './config';
import { DEV_CONNECTION, TEST_CONNECTION } from './connections';
import { PostsModule } from './posts/posts.module';
import { SharedModule } from './shared/shared.module';
import { SubblueditModule } from './subbluedit/subbluedit.module';
import { UsersModule } from './users/users.module';
import { VoteModule } from './vote/vote.module';
interface AppModuleInteface {
  connectionType: 'dev' | 'test';
}

@Module({})
export class AppModule {
  static forRoot(options: AppModuleInteface): DynamicModule {
    return {
      module: AppModule,
      imports: [
        options.connectionType == 'test' ? TEST_CONNECTION : DEV_CONNECTION,
        BullModule.forRoot({
          redis: {
            host: REDIS_HOST,
            port: REDIS_PORT,
          },
        }),
        GraphQLModule.forRoot({
          include: [UsersModule, PostsModule, SubblueditModule, CommentsModule],
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          context: ({ req }): { session: Session; req: Request } => ({
            session: req.session,
            req: req,
          }),
          cors: {
            origin: 'http://localhost:3000',
            credentials: true,
          },
          debug: false,
        }),
        BullModule.forRoot({
          redis: {
            host: REDIS_HOST,
            port: REDIS_PORT,
          },
        }),
        SharedModule,
        UsersModule,
        PostsModule,
        SubblueditModule,
        VoteModule,
        CommentsModule,
        CacheControllerModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    };
  }
}
