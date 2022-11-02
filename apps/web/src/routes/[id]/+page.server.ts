import { getEventDetailPageDataApi } from '$server/features/event-detail';
import { error, redirect, type ServerLoad } from '@sveltejs/kit';
import { either } from 'fp-ts';

export const load: ServerLoad = async ({ params }) => {
	const eventId = params.id!;

	const result = await getEventDetailPageDataApi({ eventId });

	if (either.isRight(result)) {
		return result.right;
	}

	switch (result.left.type) {
		case 'forbidden':
			throw redirect(302, '/');
		default:
			throw error(result.left.status);
	}
};
