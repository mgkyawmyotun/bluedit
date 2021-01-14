import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheControllerModule } from './../cacheController/cache.module';
import { PostEntity } from './../posts/posts.entity';
import { BlurImageConsumer } from './blurimage.consumer';
import { UpdateCommentConsumer } from './updatecommentcount.consumer';
import { UpdatePostConsumer } from './updatepost.consumer';
import { UpdateVoteCountConsumer } from './updatevote.consumer';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), CacheControllerModule],
  providers: [
    UpdateVoteCountConsumer,
    UpdateCommentConsumer,
    UpdatePostConsumer,
    BlurImageConsumer,
  ],
  exports: [
    UpdateVoteCountConsumer,
    UpdateCommentConsumer,
    UpdatePostConsumer,
    BlurImageConsumer,
  ],
})
export class ConsumerModule {}
