import { default as Button } from './menu-button.svelte';
import { default as Item } from './menu-item.svelte';
import { default as Items } from './menu-items.svelte';
import { default as Root } from './menu.svelte';

export const Menu = Object.assign(Root, {
	Button,
	Item,
	Items
});
