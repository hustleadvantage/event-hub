import { writable } from 'svelte/store';

export const useModal = () => {
  let isOpen = writable(false);

  const close = () => isOpen.set(false);

  const open = () => isOpen.set(true);

  return {
    isOpen,
    close,
    open,
  };
};
