import {
  server as serverPartial,
  getMockUrl as getMockUrlPartial,
} from './server';

const mockBaseUrl = 'http://backend';

export const server = serverPartial(mockBaseUrl);
export const getMockUrl = getMockUrlPartial(mockBaseUrl);
