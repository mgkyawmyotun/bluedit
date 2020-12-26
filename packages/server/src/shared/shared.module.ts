import { CacheModule, Global, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { UserAuthHelpService } from './userauth.service';
@Global()
@Module({
  imports: [CacheModule.register({ store: redisStore })],
  providers: [UserAuthHelpService],
  exports: [UserAuthHelpService],
})
export class SharedModule {}
