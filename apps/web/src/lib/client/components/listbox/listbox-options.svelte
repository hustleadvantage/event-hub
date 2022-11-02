<script>
  import { ListboxOptions } from "@rgossiaux/svelte-headlessui";
</script>

<ListboxOptions class='kai-listbox-options'>
  <slot />
</ListboxOptions>

<style lang='scss' global>
  .kai-listbox-options {
    overflow: auto;
    max-height: 15rem;

    padding-block: .25rem;

    border-radius: .375rem;
    @apply shadow-sm;

    background-color: hsl(var(--kai-secondary) / .08);

    font-size: 1rem;
    line-height: 1.5rem;
    color: hsl(var(--kai-text));
    @apply sm:text-sm sm:leading-5;

    &:focus {
      outline: none;
    }
  }
</style>