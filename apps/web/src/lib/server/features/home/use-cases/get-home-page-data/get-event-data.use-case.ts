import { getEventUseCase, getEventListUseCase } from '$server/use-cases';
import { taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { GetHomePageErrors } from './get-home-page.errors';

type GetEventDataQuery = {
	eventId: string;
	organizationId: string;
	project: Domain.Project;
};

export const getEventDataUseCase = (props: GetEventDataQuery) => {
	const { eventId, organizationId, project } = props;
	const { tier } = project;

	switch (project.tier) {
		case 'starter':
		case 'growth':
			return pipe(
				getEventUseCase({ id: eventId, tier }),
				TE.mapLeft((error) => {
					switch (error._type) {
						case 'unauthorized':
							return new GetHomePageErrors.Unauthorized(`getEventDataUseCase: ${error.message}`);
						default:
							return new GetHomePageErrors.Internal(`getSingleEventUseCase: ${error.message}`);
					}
				}),
				TE.map((event): HomePage.EventData => {
					const eventData: HomePage.Event = {
						_type: 'event',
						...event
					};

					return eventData;
				})
			);
		case 'scale':
			return pipe(
				getEventListUseCase({ organizationId }),
				TE.mapLeft(
					(error) => new GetHomePageErrors.Internal(`getEventListUseCase: ${error.message}`)
				),
				TE.map((eventList): HomePage.EventData => {
					const eventData: HomePage.EventList = {
						_type: 'list',
						events: eventList
					};

					return eventData;
				})
			);
	}
};
