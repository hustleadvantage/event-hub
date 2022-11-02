import type { Handle } from '@sveltejs/kit';
import { string } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

const COLOR_PRIMARY = import.meta.env.COLOR_PRIMARY ?? 'teal';
const COLOR_SECONDARY = import.meta.env.COLOR_SECONDARY ?? 'violet';
const COLOR_ACCENT = import.meta.env.COLOR_ACCENT ?? 'blue';

const theme: App.Theme = {
	colors: {
		primary: COLOR_PRIMARY ?? 'teal',
		secondary: COLOR_SECONDARY ?? 'violet',
		accent: COLOR_ACCENT ?? 'blue'
	}
};

export const handle: Handle = async ({ event, resolve }) => {
	const colorPrimary = COLOR_PRIMARY;
	const colorSecondary = COLOR_SECONDARY;
	const colorAccent = COLOR_ACCENT;

	const styleVariables = `
		--light-primary: var(--${colorPrimary}-7-hsl);
		--light-primary-dark: var(--${colorPrimary}-8-hsl);

		--light-secondary: var(--${colorSecondary}-7-hsl);
		--light-secondary-dark: var(--${colorSecondary}-8-hsl);

		--light-accent: var(--${colorAccent}-7-hsl);
		--light-accent-dark: var(--${colorAccent}-8-hsl);

		--dark-primary: var(--${colorPrimary}-4-hsl);
		--dark-primary-dark: var(--${colorPrimary}-5-hsl);

		--dark-secondary: var(--${colorSecondary}-4-hsl);
		--dark-secondary-dark: var(--${colorSecondary}-5-hsl);

		--dark-accent: var(--${colorAccent}-4-hsl);
		--dark-accent-dark: var(--${colorAccent}-5-hsl);
	`;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => pipe(html, string.replace('%styleVariables%', styleVariables))
	});

	return response;
};
