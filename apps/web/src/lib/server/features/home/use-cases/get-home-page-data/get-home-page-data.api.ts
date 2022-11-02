import { HttpErrors } from '$server/errors';
import { SECRETS } from '$server/secrets';
import { Logger } from '$shared/utils';
import { either } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { getHomePageDataUseCase } from './get-home-page-data.use-case';

export const getHomePageDataApi = async () => {
	const eventId = SECRETS.EVENTBRITE.EVENT_ID;
	const organizationId = SECRETS.EVENTBRITE.ORGANIZATION_ID;

	const result = await getHomePageDataUseCase({ eventId, organizationId });

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
