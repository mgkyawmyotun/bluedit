import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { PostEntity } from '../posts/posts.entity';
import { VoteModule } from './../vote/vote.module';
import { CreatePostService } from './createposts.service';
import { PostDeleteService } from './deleteposts.service';
import { PostResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [
    VoteModule,
    TypeOrmModule.forFeature([PostEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [PostResolver, PostsService, CreatePostService, PostDeleteService],
})
export class PostsModule {}
