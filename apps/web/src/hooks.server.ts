import { CONFIG } from '$client/constants';
import { Theme } from '$client/features';
import type { Handle } from '@sveltejs/kit';
import { string } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

const { COLORS } = CONFIG.THEME;

export const handle: Handle = async ({ event, resolve }) => {
	const colors = { primary: COLORS.PRIMARY, secondary: COLORS.SECONDARY, accent: COLORS.ACCENT };
	const cssTokens = Theme.createCssTokens({ colors });

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => pipe(html, string.replace('%cssTokens%', cssTokens))
	});

	return response;
};
