import { HttpErrors } from '$server/errors';
import { Logger } from '$shared/utils';
import { either } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { getEventDetailPageDataUseCase } from './get-event-detail-page-data.use-case';

type Request = {
	eventId: string;
};

export const getEventDetailPageDataApi = async ({ eventId }: Request) => {
	const result = await getEventDetailPageDataUseCase({ eventId });

	return pipe(
		result,
		either.mapLeft((error) => {
			Logger.error(error);

			switch (error._type) {
				case 'inactive_subscription':
				case 'unauthorized':
					return HttpErrors.forbidden.create({
						message: error.message
					});
				default:
					return HttpErrors.unexpected.create({ message: 'Unexpected error' });
			}
		})
	);
};
