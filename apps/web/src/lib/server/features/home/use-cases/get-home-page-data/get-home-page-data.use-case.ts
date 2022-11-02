import { Project } from '$server/domain';
import { getProjectUseCase } from '$server/use-cases';
import { either, taskEither as TE } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { getEventDataUseCase } from './get-event-data.use-case';
import { GetHomePageErrors } from './get-home-page.errors';

const getProject = () => {
	return pipe(
		getProjectUseCase(),
		TE.mapLeft((error) => new GetHomePageErrors.Internal(`getProjectUseCase: ${error.message}`))
	);
};

const checkSubscriptionStatus = (project: Domain.Project) => {
	return pipe(
		Project.hasActiveSubscription(project),
		either.fromPredicate(
			(b) => b,
			() => new GetHomePageErrors.InactiveSubscription()
		)
	);
};

type GetHomePageQuery = {
	eventId: string;
	organizationId: string;
};

export const getHomePageDataUseCase = async ({ eventId, organizationId }: GetHomePageQuery) => {
	return await pipe(
		TE.Do,
		TE.bind('project', () => getProject()),
		TE.bind('checkSubscription', ({ project }) => TE.fromEither(checkSubscriptionStatus(project))),
		TE.bind('eventData', ({ project }) =>
			getEventDataUseCase({ eventId, organizationId, project })
		),

		TE.map(({ eventData }) => ({ eventData }))
	)();
};
