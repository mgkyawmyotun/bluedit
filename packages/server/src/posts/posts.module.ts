import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { PostEntity } from '../posts/posts.entity';
import { CacheControllerModule } from './../cacheController/cache.module';
import { VoteModule } from './../vote/vote.module';
import { CreatePostService } from './createposts.service';
import { PostDeleteService } from './deleteposts.service';
import { PostEditService } from './editposts.service';
import { PostResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { UpdateCommentConsumer } from './updatecommentcount.consumer';
import { UpdateVoteCountConsumer } from './updatevote.consumer';

@Module({
  imports: [
    VoteModule,
    CacheControllerModule,
    TypeOrmModule.forFeature([PostEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [
    PostResolver,
    PostsService,
    CreatePostService,
    PostDeleteService,
    PostEditService,
    UpdateCommentConsumer,
    UpdateVoteCountConsumer,
  ],
  exports: [UpdateCommentConsumer, UpdateVoteCountConsumer],
})
export class PostsModule {}
