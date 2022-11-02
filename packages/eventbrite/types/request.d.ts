import type { FetchParserError, FetchRequest } from 'fetch';
import type { TaskEither as TE } from 'fp-ts/lib/TaskEither';

declare global {
  namespace EventbriteInternal {
    type Request = <T>(
      endpoint: string,
      request: FetchRequest
    ) => TE<FetchParserError, T>;
  }
}
