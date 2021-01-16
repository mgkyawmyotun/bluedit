import { BullModule } from '@nestjs/bull';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { PostEntity } from '../posts/posts.entity';
import { CacheControllerModule } from './../cacheController/cache.module';
import { ConsumerModule } from './../consumer/consumer.module';
import { update_p } from './../consumer/consumer.name';
import { CreatePostService } from './createposts.service';
import { PostDeleteService } from './deleteposts.service';
import { PostEditService } from './editposts.service';
import { PostResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    CacheControllerModule,
    ConsumerModule,
    BullModule.registerQueue({
      name: update_p,
    }),
    TypeOrmModule.forFeature([PostEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [
    PostResolver,
    PostsService,
    CreatePostService,
    PostDeleteService,
    PostEditService,
  ],
  controllers: [PostsController],
})
export class PostsModule {}
