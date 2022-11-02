import { SECRETS } from '$server/secrets';
import { Eventbrite } from 'eventbrite';
import { taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

const eventbriteApi = Eventbrite.create({
	key: SECRETS.EVENTBRITE.API_KEY
});

export const getStructuredContentUseCase = (eventId: string) => {
	return pipe(
		eventbriteApi.events.getStructuredContent(eventId),
		TE.mapLeft(
			(error) => new Error(`eventbrite | getStructuredContent | ${error.status} | ${error.message}`)
		)
	);
};
