import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Request } from 'express';
import { Session } from 'express-session';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { DEV_CONNECTION, TEST_CONNECTION } from './connections';
import { PostsModule } from './posts/posts.module';
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
        UsersModule,
        options.connectionType == 'test' ? TEST_CONNECTION : DEV_CONNECTION,
        GraphQLModule.forRoot({
          include: [UsersModule, PostsModule, SubblueditModule],
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
        PostsModule,
        SubblueditModule,
        VoteModule,
        CommentsModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    };
  }
}
