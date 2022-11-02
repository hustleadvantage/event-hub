export type NativeFetch = (
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>;

export type Parser = <T>(response: Response) => Promise<T>;
