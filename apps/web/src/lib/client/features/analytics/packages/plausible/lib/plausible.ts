export const track = (event: string, options?: PlausibleOptions) => {
	plausible(event, options);
};

export const pageView = (url?: string) => {
	plausible('pageview', { u: url });
};
