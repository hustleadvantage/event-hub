<script>
  import {
    MenuItems,
  } from "@rgossiaux/svelte-headlessui";
</script>

<MenuItems class='kai-menu-items divide-y divide-gray-100'>
  <slot />
</MenuItems>

<style lang="scss" global>
  .kai-menu-items {
    position: absolute;
    right: 0;
    width: 14rem;
    z-index: 50;

    margin-top: .5rem;
    transform-origin: top right;

    @apply shadow-lg;
    outline: none;
    border-radius: .375rem;
    background-color: hsl(var(--kai-white));
  }
</style>