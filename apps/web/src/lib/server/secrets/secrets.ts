import {
	EVENTBRITE_API_KEY,
	EVENTBRITE_EVENT_ID,
	EVENTBRITE_ORGANIZATION_ID,
	PROJECT_NAME,
	PROJECT_SUBSCRIPTION_STATUS,
	PROJECT_TIER
} from '$env/static/private';

import { option, string } from 'fp-ts';

const varOption = <T extends string>(value: T) =>
	option.fromPredicate((s: T) => !string.isEmpty(s))(value);

export const PROJECT = {
	NAME: PROJECT_NAME,
	SUBSCRIPTION_STATUS: PROJECT_SUBSCRIPTION_STATUS as Domain.Project.SubscriptionStatus,
	TIER: PROJECT_TIER as Domain.Project.Tier
};

export const EVENTBRITE = {
	API_KEY: EVENTBRITE_API_KEY,
	EVENT_ID: EVENTBRITE_EVENT_ID,
	ORGANIZATION_ID: EVENTBRITE_ORGANIZATION_ID
};
