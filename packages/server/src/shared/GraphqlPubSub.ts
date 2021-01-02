import { RedisPubSub } from 'graphql-redis-subscriptions';
import * as Redis from 'ioredis';
import { REDIS_HOST, REDIS_PORT } from './../config';
const redisClient = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
});
export const pubSub = new RedisPubSub({
  subscriber: redisClient,
  publisher: redisClient,
});
