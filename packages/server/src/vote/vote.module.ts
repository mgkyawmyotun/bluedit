import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { VoteEntity } from '../vote/vote.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VoteEntity]),
    CacheModule.register({ store: redisStore }),
  ],
})
export class VoteModule {}
