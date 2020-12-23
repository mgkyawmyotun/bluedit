import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { VoteEntity } from '../vote/vote.entity';
import { VoteService } from './vote.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VoteEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [VoteService],
  exports: [VoteService],
})
export class VoteModule {}
