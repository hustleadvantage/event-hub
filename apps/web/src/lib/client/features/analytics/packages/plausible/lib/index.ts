import { default as PlausibleScript } from './plausible.svelte';
import { pageView, track } from './plausible';

export const PlausibleAnalytics = Object.assign(PlausibleScript, {
	pageView,
	track
});
