import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { CommentEntity } from './comments.entity';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [CommentsService, CommentsResolver],
})
export class CommentsModule {}
