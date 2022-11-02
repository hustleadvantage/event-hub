import { Redis } from '@upstash/redis';

export const create = (config: Upstash.Config) =>
  new Redis({
    url: config.url,
    token: config.key,
  });
