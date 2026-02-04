import cacheManager from "cache-manager";
import * as redisStore from 'cache-manager-ioredis';


export const cache = cacheManager.caching({
    store: redisStore,
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    ttl: 60 * 60 * 24 * 7
});