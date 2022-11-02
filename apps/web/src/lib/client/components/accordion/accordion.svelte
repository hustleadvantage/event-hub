<script lang="ts">
  import {
    Disclosure,
  } from "@rgossiaux/svelte-headlessui";

  export let className: string = '';
  export { className as class };
</script>

<Disclosure class={`kai-accordion ${className}`} on:click>
  <slot name='control' />
  <slot />
</Disclosure>