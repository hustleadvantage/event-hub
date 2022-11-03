import { Theme } from '$client/features';
import {
	PUBLIC_COLOR_ACCENT,
	PUBLIC_COLOR_PRIMARY,
	PUBLIC_COLOR_SECONDARY
} from '$env/static/public';
import type { Handle } from '@sveltejs/kit';
import { string } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

const COLOR_PRIMARY = PUBLIC_COLOR_PRIMARY ?? 'teal';
const COLOR_SECONDARY = PUBLIC_COLOR_SECONDARY ?? 'violet';
const COLOR_ACCENT = PUBLIC_COLOR_ACCENT ?? 'blue';

export const handle: Handle = async ({ event, resolve }) => {
	const colors = { primary: COLOR_PRIMARY, secondary: COLOR_SECONDARY, accent: COLOR_ACCENT };

	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			pipe(html, string.replace('%cssVars%', Theme.createCssTokens({ colors })))
	});

	return response;
};
