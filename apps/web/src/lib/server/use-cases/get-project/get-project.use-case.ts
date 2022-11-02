import { SECRETS } from '$server/secrets';
import { Project } from '$server/domain';
import { taskEither as TE } from 'fp-ts';
import type { GetProjectError } from './get-project.errors';

export const getProjectUseCase = (): TE.TaskEither<GetProjectError, Domain.Project> => {
	return TE.of(
		Project.create({
			id: '',
			name: SECRETS.PROJECT.NAME!,
			subscriptionStatus: SECRETS.PROJECT.SUBSCRIPTION_STATUS,
			tier: SECRETS.PROJECT.TIER
		})
	);
};
