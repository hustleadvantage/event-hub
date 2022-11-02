import { default as Button } from './listbox-button.svelte';
import { default as Option } from './listbox-option.svelte';
import { default as ListBoxRoot } from './listbox.svelte';

export const ListBox = Object.assign(ListBoxRoot, {
  Button,
  Option,
});
