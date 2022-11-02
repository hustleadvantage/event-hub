import { SessionStorage, Uuid } from '$client/shared';
import { option } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import { FacebookPixel } from '../../packages/facebook';
import { GoogleAnalytics, PlausibleAnalytics } from '../../packages';
import { CONFIG } from '$client/constants';

const EVENT_ID = 'page_viewed_event_id';

const getEventId = (storageKey: string) => {
	return pipe(
		SessionStorage.get<string>(storageKey),
		option.fold(
			() => {
				const id = Uuid.create();
				SessionStorage.set(storageKey, id);

				return id;
			},
			(id) => id
		)
	);
};

export const trackPageViewUseCase = () => {
	const eventId = getEventId(EVENT_ID);

	if (option.isSome(CONFIG.FACEBOOK.PIXEL_ID)) {
		FacebookPixel.pageView({ eventId });
	}

	if (option.isSome(CONFIG.GOOGLE.ANALYTICS_MEASUREMENT_ID)) {
		GoogleAnalytics.pageView();
	}

	if (option.isSome(CONFIG.PLAUSIBLE.DOMAIN)) {
		PlausibleAnalytics.pageView();
	}
};
