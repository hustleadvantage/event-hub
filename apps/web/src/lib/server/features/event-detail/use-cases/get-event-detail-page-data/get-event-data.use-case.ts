import { getEventUseCase } from '$server/use-cases';
import { taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { GetEventDetailPageErrors } from './get-event-detail-page.errors';

type GetEventDataQuery = {
	eventId: string;
	project: Domain.Project;
};

export const getEventDataUseCase = (props: GetEventDataQuery) => {
	const { eventId, project } = props;
	const { tier } = project;

	switch (project.tier) {
		case 'scale':
			return pipe(
				getEventUseCase({ id: eventId, tier }),
				TE.mapLeft((error) => {
					switch (error._type) {
						case 'unauthorized':
							return new GetEventDetailPageErrors.Unauthorized(
								`getEventDataUseCase: ${error.message}`
							);
						default:
							return new GetEventDetailPageErrors.Internal(
								`getSingleEventUseCase: ${error.message}`
							);
					}
				}),
				TE.map((event): EventDetailPage.Event => event)
			);
		default:
			return TE.left(
				new GetEventDetailPageErrors.Unauthorized(
					`getEventDetailPageData - project tier: ${tier} not authorized`
				)
			);
	}
};
