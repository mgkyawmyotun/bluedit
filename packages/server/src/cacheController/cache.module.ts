import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { PostsCacheService } from './post.cache.service';
import { SubCacheService } from './sub.cache.service';
@Module({
  imports: [CacheModule.register({ store: redisStore })],
  providers: [PostsCacheService, SubCacheService],
  exports: [PostsCacheService, SubCacheService],
})
export class CacheControllerModule {}
