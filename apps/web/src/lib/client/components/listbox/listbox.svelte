<script lang='ts'>
  import {
    Listbox,
  } from "@rgossiaux/svelte-headlessui";
  import ListboxOptions from "./listbox-options.svelte";

  export let selected: any; 
</script>

<Listbox value={selected} on:change={(e) => (selected = e.detail)}>
  <div class='grid gap-3'>
    <div class='inline-block w-full rounded-md shadow-sm'>
      <slot name='button' />
    </div>
    <ListboxOptions>
      <slot />
    </ListboxOptions>
  </div>
</Listbox>

