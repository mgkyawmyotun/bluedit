import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { PostEntity } from 'src/posts/posts.entity';
import { PostResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [PostResolver, PostsService],
})
export class PostsModule {}
