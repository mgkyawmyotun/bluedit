import { BullModule } from '@nestjs/bull';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { update_c_c } from '../posts/updatecommentcount.consumer';
import { PostsModule } from './../posts/posts.module';
import { CommentEntity } from './comments.entity';
import { CommentsResolver } from './comments.resolver';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    CacheModule.register({ store: redisStore }),
    BullModule.registerQueue({
      name: update_c_c,
    }),
    PostsModule,
  ],
  providers: [CommentsService, CommentsResolver],
})
export class CommentsModule {}
