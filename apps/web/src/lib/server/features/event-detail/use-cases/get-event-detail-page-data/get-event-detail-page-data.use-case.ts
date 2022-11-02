import { Project } from '$server/domain';
import { getProjectUseCase } from '$server/use-cases';
import { either, taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { getEventDataUseCase } from './get-event-data.use-case';
import { GetEventDetailPageErrors } from './get-event-detail-page.errors';

const getProject = () => {
	return pipe(
		getProjectUseCase(),
		TE.mapLeft(
			(error) => new GetEventDetailPageErrors.Internal(`getProjectUseCase: ${error.message}`)
		)
	);
};

const checkSubscriptionStatus = (project: Domain.Project) => {
	return pipe(
		Project.hasActiveSubscription(project),
		either.fromPredicate(
			(b) => b,
			() => new GetEventDetailPageErrors.InactiveSubscription()
		)
	);
};

type GetEventDetailPageQuery = {
	eventId: string;
};

export const getEventDetailPageDataUseCase = async ({ eventId }: GetEventDetailPageQuery) => {
	return await pipe(
		TE.Do,
		TE.bind('project', () => getProject()),
		TE.bind('checkSubscription', ({ project }) => TE.fromEither(checkSubscriptionStatus(project))),
		TE.bind('eventData', ({ project }) => getEventDataUseCase({ eventId, project })),

		TE.map(({ eventData }) => ({ eventData }))
	)();
};
