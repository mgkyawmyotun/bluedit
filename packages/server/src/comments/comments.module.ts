import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { CommentEntity } from './comments.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    CacheModule.register({ store: redisStore }),
  ],
})
export class CommentsModule {}
