import { error } from '@sveltejs/kit';
import { option } from 'fp-ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const searchParams = url.searchParams;
	const idOption = option.fromNullable(searchParams.get('id'));
	const searchParamsString = searchParams.toString();

	if (option.isNone(idOption)) {
		throw error(400, 'Missing event id for checkout');
	}

	const id = idOption.value;

	return {
		id,
		searchParams: searchParamsString
	};
};
