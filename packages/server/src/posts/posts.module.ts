import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { PostEntity } from '../posts/posts.entity';
import { CreatePostService } from './createposts.service';
import { PostResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [PostResolver, PostsService, CreatePostService],
})
export class PostsModule {}
