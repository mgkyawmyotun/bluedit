import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { PostsCacheService } from './post.cache.service';
@Module({
  imports: [CacheModule.register({ store: redisStore })],
  providers: [PostsCacheService],
  exports: [PostsCacheService],
})
export class CacheControllerModule {}
