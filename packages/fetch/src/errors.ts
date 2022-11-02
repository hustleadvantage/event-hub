interface FetchErrorProps {
  data?: any;
  message: string;
  status: number;
}

type ErrorType =
  | 'FetchError'
  | 'FetchNetworkError'
  | 'FetchParserError'
  | 'FetchRequestError';

export class FetchError extends Error {
  readonly data;
  readonly status;
  type: ErrorType;

  constructor({ data, message, status = 500 }: FetchErrorProps) {
    super(message);

    this.data = data;
    this.status = status;
    this.type = 'FetchError';
  }
}

/**
 * Returned wen there is a network
 * failture detected or if anything prevented
 * the request from completing
 */
export class FetchNetworkError extends FetchError {
  constructor(props: FetchErrorProps) {
    super(props);

    this.type = 'FetchNetworkError';
  }
}

/**
 * Returned when unable to convert
 * response body to the desired format
 */
export class FetchParserError extends FetchError {
  constructor(props: FetchErrorProps) {
    super(props);

    this.type = 'FetchParserError';
  }
}

/**
 * Returned when HTTP response status
 * is not within the "ok" status range (200-299)
 */
export class FetchRequestError extends FetchError {
  constructor(props: FetchErrorProps) {
    super(props);

    this.type = 'FetchRequestError';
  }
}
