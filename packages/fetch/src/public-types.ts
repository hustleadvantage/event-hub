import type * as E from 'fp-ts/lib/Either';
import type * as TE from 'fp-ts/lib/TaskEither';
import type { FetchError } from './errors';

export type Fetch = <T>(
  url: RequestInfo
) => (options?: RequestInit) => FetchTaskEither<FetchError, T>;

export type FetchTaskEither<E, A> = TE.TaskEither<E, A>;

export type FetchResult<E, A> = E.Either<E, A>;

export type DeleteRequest = {
  method: 'DELETE';
  options?: Omit<RequestInit, 'body'>;
};

export type GetRequest = {
  method: 'GET';
  options?: Omit<RequestInit, 'body'>;
};

export type PostRequest = {
  data: Record<string, any>;
  method: 'POST';
  options?: RequestInit;
};

export type PutRequest = {
  data: Record<string, any>;
  method: 'PUT';
  options: RequestInit;
};

export type FetchRequest = GetRequest | PostRequest | PutRequest;
