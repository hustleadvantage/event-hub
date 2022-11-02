import { onDestroy } from 'svelte';
import { writable } from 'svelte/store';

export const useVenueViewModel = () => {
  const isMapVisible = writable(false);
  const ctaOffLabel = 'Show Map';
  const ctaOnLabel = 'Hide Map';

  const cta = writable(ctaOffLabel);

  const unsubscribe = isMapVisible.subscribe((mapVisible) =>
    cta.set(!!mapVisible ? ctaOnLabel : ctaOffLabel)
  );

  const toggleIsMapVisible = () => isMapVisible.update((previous) => !previous);

  const checkMapKeyboardToggle = (e: any) => {
    const event = e as KeyboardEvent;
    const { code } = event;

    const isEnterKeyPressed = code === 'Enter';
    const isSpacebarPressed = code === 'Space';

    if (isEnterKeyPressed || isSpacebarPressed) {
      toggleIsMapVisible();
    }
  };

  onDestroy(() => {
    unsubscribe();
  });

  return {
    cta,
    isMapVisible,
    checkMapKeyboardToggle,
    toggleIsMapVisible,
  };
};
