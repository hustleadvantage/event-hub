import { pipe } from 'fp-ts/lib/function';
import {
  FetchNetworkError,
  FetchParserError,
  FetchRequestError,
} from '../errors';
import * as TE from 'fp-ts/TaskEither';
import { fetchRequest } from '$lib/fetch';
import { FetchRequest } from '$lib/public-types';

// fetchJSON Step
export const fetchJSONPartial =
  (defaultOptions: RequestInit) => (url: string, request: FetchRequest) => {
    const newOptions = {
      ...defaultOptions,
      ...request.options,
      method: request.method,
    };

    switch (request.method) {
      case 'POST':
      case 'PUT':
        return fetchRequest(url, {
          ...newOptions,
          body: JSON.stringify(request.data),
        });
      default:
        return fetchRequest(url, {
          ...newOptions,
        });
    }
  };

// Parse Step
export const parseJSON = <T>(response: Response) => {
  return pipe(
    TE.tryCatch(
      () => response.json(),
      () => {
        return new FetchParserError({
          message: response.statusText,
          status: response.status,
        });
      }
    ),
    TE.map((response) => response as T)
  );
};
