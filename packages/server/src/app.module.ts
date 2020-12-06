import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DEV_CONNECTION } from './connections';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, DEV_CONNECTION],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
