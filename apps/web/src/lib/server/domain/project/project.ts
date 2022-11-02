import { option } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import type { HasActiveSubscription } from './internal.types';

export const create = (props: Domain.Project) => props;

export const hasActiveSubscription: HasActiveSubscription = (project) =>
	project.subscriptionStatus === 'active';
