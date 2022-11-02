import { type FetchRequest, fetchJSON } from 'fetch';
import { events } from './events';

export type GetDefaultRequestOptions = (apiKey: string) => RequestInit;

const getDefaultRequestOptions: GetDefaultRequestOptions = (apiKey) => ({
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

const requestPartial =
  (defaultOptions: RequestInit) =>
  <T>(endpoint: string, request: FetchRequest) => {
    const newRequest: FetchRequest = {
      ...request,
      options: Object.assign(defaultOptions, request.options),
    };

    return fetchJSON<T>(
      `https://www.eventbriteapi.com/v3${endpoint}`,
      newRequest
    );
  };

export const create = (config: Eventbrite.Config) => {
  const defaultRequestOptions = getDefaultRequestOptions(config.key);
  const request = requestPartial(defaultRequestOptions);

  return {
    events: events(request),
  };
};
