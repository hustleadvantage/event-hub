import { tryCatch } from 'fp-ts/lib/TaskEither';
import { FetchNetworkError, FetchRequestError } from './errors';
import { pipe } from 'fp-ts/lib/function';
import { taskEither as TE } from 'fp-ts';

const request = (url: RequestInfo, options: RequestInit) => {
  return tryCatch(
    () => fetch(url, options),
    (error) => {
      return new FetchNetworkError({
        message: (error as Error).message,
        status: 500,
      });
    }
  );
};

export const fetchRequest = (url: RequestInfo, options: RequestInit) => {
  return pipe(
    request(url, options),
    TE.chain((response) => {
      if (!response.ok) {
        return TE.left(
          new FetchRequestError({
            message: response.statusText,
            status: response.status,
          })
        );
      }

      return TE.right(response);
    })
  );
};
