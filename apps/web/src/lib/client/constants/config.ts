import { option, string } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

const varOption = (value: string | undefined) =>
	pipe(
		option.fromNullable(value),
		option.chain(option.fromPredicate((s: string) => !string.isEmpty(s)))
	);

const defaultOrValue = <T>(defaultValue: T, value: option.Option<T>) =>
	option.getOrElse(() => defaultValue)(value);

// Business
export const BUSINESS = {
	NAME: import.meta.env.VITE_BUSINESS_NAME as string
};

// Facebook
export const FACEBOOK = {
	PIXEL_ID: varOption(import.meta.env.VITE_FACEBOOK_PIXEL_ID)
};

// Google
export const GOOGLE = {
	ANALYTICS_MEASUREMENT_ID: varOption(import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID),
	MAPS_PUBLIC_KEY: varOption(import.meta.env.VITE_GOOGLE_MAPS_KEY)
};

// IP Info
export const IPINFO = {
	PUBLIC_KEY: varOption(import.meta.env.VITE_IPINFO_PUBLIC_KEY)
};

// Plausible
export const PLAUSIBLE = {
	DOMAIN: varOption(import.meta.env.VITE_PLAUSIBLE_DOMAIN)
};

// Theme
export const THEME = {
	COLORS: {
		PRIMARY: defaultOrValue('violet', varOption(import.meta.env.VITE_COLOR_PRIMARY)),
		SECONDARY: defaultOrValue('teal', varOption(import.meta.env.VITE_COLOR_SECONDARY)),
		ACCENT: defaultOrValue('blue', varOption(import.meta.env.VITE_COLOR_ACCENT))
	}
};
