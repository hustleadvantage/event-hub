<script lang="ts">
  import {
    MenuItem,
  } from "@rgossiaux/svelte-headlessui";
  import { useMenuItem } from "./use-menu-item";

  export let activePath: string = '';
  export let external: boolean = false;
  export let href: string = '#';

  const target = external ? '_blank' : '_self';

  const { resolveClass } = useMenuItem();
</script>

<MenuItem {href} {target} class={resolveClass(activePath, href)}>
  <slot />
</MenuItem>

<style lang="scss" global>
  .kai-menu-item {
    display: flex;
    
    padding-block: .5rem;
    padding-inline: 1rem;

    border-radius: .25rem;

    font-size: .875rem;
    line-height: 1.25rem;
    color: hsl(var(--kai-black));

    &.active {
      color: hsl(var(--kai-primary));
    }

    &.focus {
      background-color: hsl(var(--kai-primary));
      color: hsl(var(--kai-text-on-color));
    }
  }
</style>