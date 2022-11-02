<script lang="ts">
  import {
    MenuButton
  } from "@rgossiaux/svelte-headlessui";

  export let className: string = '';
  export { className as class };
</script>

<MenuButton class={`kai-menu-button ${className}`}>
  <slot />
</MenuButton>

<style lang="scss" global>
  .kai-menu-button {
    display: inline-flex;
    justify-content: center;
    width: 100%;

    padding-inline: 1rem;
    padding-block: .5rem;

    border-radius: .375rem;
    background-color: hsl(var(--kai-surface));
    outline: none;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;

    color: hsl(var(--kai-text) / .8);

    transition: color ease-in-out 150ms;

    &:hover {
      color: hsl(var(--kai-text))
    }

    &:focus {
      outline: 2px solid hsl(var(--blue-5-hsl))
    }
  }
</style>