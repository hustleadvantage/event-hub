import { default as Description } from './radio-group-description.svelte';
import { default as Label } from './radio-group-label.svelte';
import { default as Option } from './radio-group-option.svelte';
import { default as Root } from './radio-group.svelte';

export const RadioGroup = Object.assign(Root, {
  Description,
  Label,
  Option,
});
