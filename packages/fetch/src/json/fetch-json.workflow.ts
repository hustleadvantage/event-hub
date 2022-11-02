import { FetchRequest } from '$lib/public-types';
import { taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { fetchJSONPartial, parseJSON } from './fetch-json.steps';

const requestOptions: RequestInit = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const fetchJSON = fetchJSONPartial(requestOptions);

export const fetchJSONWorkflow = <T>(url: string, request: FetchRequest) => {
  const fetchResult = fetchJSON(url, request);

  return pipe(
    TE.Do,
    TE.bind('response', () => fetchResult),
    TE.bind('data', ({ response }) => parseJSON<T>(response)),
    TE.map(({ data }) => data)
  );
};
