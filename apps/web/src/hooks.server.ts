import { Theme } from '$client/features';
import type { Handle } from '@sveltejs/kit';
import { string } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';

export const handle: Handle = async ({ event, resolve }) => {
	const cssTokensStyleTag = Theme.createCssTokensStyleTag();

	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			pipe(html, string.replace('%cssTokensStyleTag%', cssTokensStyleTag))
	});

	return response;
};
