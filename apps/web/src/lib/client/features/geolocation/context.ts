import { CONFIG } from '$client/constants';
import { Logger } from 'shared';
import { taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

export const getGeolocation = () => {
	return pipe(
		TE.tryCatch(
			() => fetch(`https://ipinfo.io?token=${CONFIG.IPINFO.PUBLIC_KEY}`),
			(error) => new Error(`${error}`)
		),
		TE.chain((response) =>
			TE.tryCatch(
				() => response.json(),
				(error) => new Error(`${error}`)
			)
		),
		TE.mapLeft((error) => {
			Logger.error(`client - getGeolocation - ${error.message}`);
			return error;
		})
	);
};

const getContext = async () => {
	return await pipe(
		TE.Do,
		TE.bind('location', () => getGeolocation())
	)();
};

export const useContext = () => {
	return {
		getContext
	};
};
