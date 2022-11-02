import { getHomePageDataApi } from '$server/features/home';
import { error } from '@sveltejs/kit';
import { either } from 'fp-ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const result = await getHomePageDataApi();

	if (either.isRight(result)) {
		return result.right;
	}

	throw error(result.left.status);
};
