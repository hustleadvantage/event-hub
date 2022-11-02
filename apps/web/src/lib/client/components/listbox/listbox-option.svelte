<script lang='ts'>
  import { classNames } from "$client/shared";
  import { ListboxOption } from "@rgossiaux/svelte-headlessui";

  export let disabled: boolean = false;
  export let value: any;
</script>


<ListboxOption 
  {value}
  {disabled}
  class={({ active }) => classNames('kai-listbox-option', active ? 'active' : '')}
>
  <slot />
</ListboxOption>

<style lang='scss' global>
  .kai-listbox-option {
    position: relative;

    padding-block: .5rem;
    padding-left: .75rem;
    padding-right: 2.25rem;

    cursor: default;

    &:focus {
      outline: none;
    }

    &[aria-selected='true'] {
      color: hsl(var(--kai-primary));
    }

    &:not([aria-disabled='true']) {
      &.active {
        background-color: hsl(var(--kai-primary) / .16);
      }
    } 

    &[aria-disabled='true'] {
      color: hsl(var(--kai-muted));
    }
  }
</style>