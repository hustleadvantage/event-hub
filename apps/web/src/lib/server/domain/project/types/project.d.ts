import type { option as O } from 'fp-ts';

declare global {
	namespace Domain {
		type Project = {
			id: string;
			name: string;
			subscriptionStatus: Project.SubscriptionStatus;
			tier: Project.Tier;
		};

		namespace Project {
			type SubscriptionStatus = 'active' | 'inactive';
			type Tier = 'starter' | 'growth' | 'scale';

			declare class InvalidSubscriptionError extends Domain.Error {}
			declare class MissingTierError extends Domain.Error {}

			type Error = InvalidSubscriptionErrir | MissingTierError;
		}
	}
}
