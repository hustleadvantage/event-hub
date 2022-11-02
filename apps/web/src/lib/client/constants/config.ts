import {
	PUBLIC_FACEBOOK_PIXEL_ID,
	PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID,
	PUBLIC_GOOGLE_MAPS_KEY,
	PUBLIC_IPINFO_PUBLIC_KEY,
	PUBLIC_PLAUSIBLE_DOMAIN
} from '$env/static/public';

import { option, string } from 'fp-ts';

const envVarOption = (value: string) =>
	option.fromPredicate((s: string) => !string.isEmpty(s))(value);

export const FACEBOOK = {
	PIXEL_ID: envVarOption(PUBLIC_FACEBOOK_PIXEL_ID)
};

export const GOOGLE = {
	ANALYTICS_MEASUREMENT_ID: envVarOption(PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID),
	MAPS_PUBLIC_KEY: envVarOption(PUBLIC_GOOGLE_MAPS_KEY)
};

export const IPINFO = {
	PUBLIC_KEY: envVarOption(PUBLIC_IPINFO_PUBLIC_KEY)
};

export const PLAUSIBLE = {
	DOMAIN: envVarOption(PUBLIC_PLAUSIBLE_DOMAIN)
};
