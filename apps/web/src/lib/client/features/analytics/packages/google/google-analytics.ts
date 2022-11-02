import { Env } from '$shared/utils';

const handler = (command: string, ...props: any) => {
	if (Env.isBrowser) {
		window.gtag(command, ...props);
	}
};

const trackEvent = (name: string, props: any) => {
	handler('event', name, props);
};

export const init = (id: string) => {
	const config = { send_page_view: false, debug_mode: Env.isDev };
	handler('config', id, config);
};

export const pageView = (props = {}) => {
	trackEvent('page_view', props);
};
