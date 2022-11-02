import { Env } from '$shared/utils';

const handler = (command: string, ...props: any) => {
	if (Env.isBrowser) {
		window.fbq(command, ...props);
	}
};

export const init = (id: string) => {
	handler('init', id);
};

export const pageView = ({ eventId }: { eventId: string }) => {
	handler('track', 'PageView', {}, { eventID: eventId });
};

export const track = (event: string, data: any) => {
	handler('track', event, data);
};

export const trackCustom = (event: string, data: any) => {
	handler('track', event);
};

export const trackSingle = (pixelId: string, event: string, data: any) => {
	handler('trackSingle', pixelId, event, data);
};

export const trackSingleCustom = (pixelId: string, customEvent: string, data: any) => {
	handler('trackSingleCustom', pixelId, customEvent, data);
};
