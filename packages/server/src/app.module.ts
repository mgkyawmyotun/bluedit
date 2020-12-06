import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DEV_CONNECTION } from './connections';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    DEV_CONNECTION,
    GraphQLModule.forRoot({
      include: [UsersModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
