import { default as GoogleAnalyticsScript } from './google-analytics.svelte';
import { init, pageView } from './google-analytics';

export const GoogleAnalytics = Object.assign(GoogleAnalyticsScript, {
	init,
	pageView
});
