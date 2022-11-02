import { option as O } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { Env } from '$shared/utils';

export const get = <T>(key: string): O.Option<T> => {
	if (Env.isBrowser) {
		return pipe(
			window.sessionStorage.getItem(key),
			O.fromNullable,
			O.map((value) => value as T)
		);
	}

	return O.none;
};

export const set = (key: string, value: any) => {
	if (Env.isBrowser) {
		return window.sessionStorage.setItem(key, value);
	}
};
