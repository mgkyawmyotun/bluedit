import { BullModule } from '@nestjs/bull';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { update_v_c } from '../consumer/consumer.name';
import { VoteEntity } from '../vote/vote.entity';
import { ConsumerModule } from './../consumer/consumer.module';
import { VoteResolver } from './vote.resolver';
import { VoteService } from './vote.service';

@Module({
  imports: [
    ConsumerModule,
    BullModule.registerQueue({
      name: update_v_c,
    }),
    TypeOrmModule.forFeature([VoteEntity]),
    CacheModule.register({ store: redisStore }),
  ],
  providers: [VoteService, VoteResolver],
  exports: [VoteService],
})
export class VoteModule {}
