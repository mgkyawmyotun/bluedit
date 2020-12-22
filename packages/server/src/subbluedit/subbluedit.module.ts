import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { SubblueditResolver } from './subbluedit.resolver';
import { SubEntity } from './subluedit.entity';
import { SubblueditService } from './subbluedit.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([SubEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [SubblueditResolver, SubblueditService],
})
export class SubblueditModule {}
