// import { setupServer } from 'msw/node';
// import { handlers } from './handlers';

// export const server = setupServer(...handlers);
import nock from 'nock';

export const server = (baseUrl: string) => nock(baseUrl);

export const getMockUrl = (baseUrl: string) => (endpoint: string) =>
  baseUrl + endpoint;
