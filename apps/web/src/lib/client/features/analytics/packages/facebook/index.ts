import { default as FacebookPixelRoot } from './pixel.svelte';
import { init, pageView, track } from './facebook';

export const FacebookPixel = Object.assign(FacebookPixelRoot, {
	init,
	pageView,
	track
});
