import { onDestroy, onMount } from 'svelte';
import { writable } from 'svelte/store';

export const useStickyCheckoutButtonViewModel = (selectors: string[]) => {
	const isVisible = writable(false);

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				isVisible.set(false);
			} else {
				isVisible.set(true);
			}
		},
		{ root: null, rootMargin: '0px' }
	);

	const createObserver = (selector: string) => {
		const targetElement = document.querySelector(selector)!;

		observer.observe(targetElement);

		return observer;
	};

	onMount(() => {
		const bodyScrollHeight = document.body.scrollHeight;
		const isScrollableHeight = bodyScrollHeight > 1440;

		if (isScrollableHeight) {
			selectors.map(createObserver);
		}
	});

	onDestroy(() => {
		observer.disconnect();
	});

	return {
		isVisible
	};
};
