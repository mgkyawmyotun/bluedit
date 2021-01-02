import { RedisPubSub } from 'graphql-redis-subscriptions';
import * as Redis from 'ioredis';
import { REDIS_HOST, REDIS_PORT } from './../config';

export const pubSub = new RedisPubSub({
  subscriber: new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
  }),
  publisher: new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
  }),
});
