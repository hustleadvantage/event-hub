import { Project } from '$server/domain';
import { either } from 'fp-ts';
import { CheckProjectSubscriptionErrors } from './check-project-subscription.errors';

export const checkProjectSubscriptionUseCase = (project: Domain.Project) => {
	return either.fromPredicate(
		(a: boolean) => a,
		() => new CheckProjectSubscriptionErrors.Unathorized(`Inactive project subscription`)
	)(Project.hasActiveSubscription(project));
};
