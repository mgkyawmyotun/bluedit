import { BullModule } from '@nestjs/bull';
import { CacheModule, forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { VoteEntity } from '../vote/vote.entity';
import { PostsModule } from './../posts/posts.module';
import { update_v_c } from './../posts/updatevote.consumer';
import { VoteService } from './vote.service';
import { VoteResolver } from './vote.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([VoteEntity]),
    forwardRef(() => PostsModule),
    CacheModule.register({ store: redisStore }),
    BullModule.registerQueue({
      name: update_v_c,
    }),
  ],
  providers: [VoteService, VoteResolver],
  exports: [VoteService],
})
export class VoteModule {}
