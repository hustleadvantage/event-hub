import { option, string } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

// Facebook
const FACEBOOK_PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

// Google
const GOOGLE_ANALYTICS_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID;
const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

// IP Info
const IPINFO_KEY = import.meta.env.VITE_IPINFO_PUBLIC_KEY;

// Plausible
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

// Theme
const COLOR_PRIMARY = import.meta.env.VITE_COLOR_PRIMARY;
const COLOR_SECONDARY = import.meta.env.VITE_COLOR_SECONDARY;
const COLOR_ACCENT = import.meta.env.VITE_COLOR_ACCENT;

const varOrNone = (value: string | undefined) =>
	pipe(
		option.fromNullable(value),
		option.chain(option.fromPredicate((s: string) => !string.isEmpty(s)))
	);

const defaultOrValue = <T>(defaultValue: T, value: option.Option<T>) =>
	option.getOrElse(() => defaultValue)(value);

export const FACEBOOK = {
	PIXEL_ID: varOrNone(FACEBOOK_PIXEL_ID)
};

export const GOOGLE = {
	ANALYTICS_MEASUREMENT_ID: varOrNone(GOOGLE_ANALYTICS_MEASUREMENT_ID),
	MAPS_PUBLIC_KEY: varOrNone(GOOGLE_MAPS_KEY)
};

export const IPINFO = {
	PUBLIC_KEY: varOrNone(IPINFO_KEY)
};

export const PLAUSIBLE = {
	DOMAIN: varOrNone(PLAUSIBLE_DOMAIN)
};

export const THEME = {
	COLORS: {
		PRIMARY: defaultOrValue('violet', varOrNone(COLOR_PRIMARY)),
		SECONDARY: defaultOrValue('teal', varOrNone(COLOR_SECONDARY)),
		ACCENT: defaultOrValue('blue', varOrNone(COLOR_ACCENT))
	}
};
