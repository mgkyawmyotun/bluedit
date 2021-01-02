import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheControllerModule } from './../cacheController/cache.module';
import { PostEntity } from './../posts/posts.entity';
import { UpdateCommentConsumer } from './updatecommentcount.consumer';
import { UpdatePostConsumer } from './updatepost.consumer';
import { UpdateVoteCountConsumer } from './updatevote.consumer';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), CacheControllerModule],
  providers: [
    UpdateVoteCountConsumer,
    UpdateCommentConsumer,
    UpdatePostConsumer,
  ],
  exports: [UpdateVoteCountConsumer, UpdateCommentConsumer, UpdatePostConsumer],
})
export class ConsumerModule {}
