import * as cm from "cache-manager";
import * as redisStore from 'cache-manager-ioredis';

// Debug/Fallback logic to find caching function
const cmAny = cm as any;
// Try various common export locations for the caching/createCache function
const cachingFunc = cmAny.caching || cmAny.default?.caching || cmAny.createCache || cmAny.default?.createCache;

if (!cachingFunc) {
    console.error('DEBUG: cache-manager exports:', cm);
    throw new Error('Could not find caching function in cache-manager');
}

export const cache = cachingFunc({
    store: redisStore as any,
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    ttl: 60 * 60 * 24 * 7 * 1000
});