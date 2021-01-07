import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { JoinEntity } from './join.entity';
import { SubblueditResolver } from './subbluedit.resolver';
import { SubblueditService } from './subbluedit.service';
import { SubEntity } from './subluedit.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([SubEntity, JoinEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [SubblueditResolver, SubblueditService],
})
export class SubblueditModule {}
