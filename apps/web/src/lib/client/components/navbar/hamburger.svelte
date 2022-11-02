<script lang='ts'>
  import { Icon } from "$client/components";
	import { MenuIcon } from "../icons";

  export let isOpen = false;
  export let openSidebar: () => void;
</script>

{#if !isOpen}
  <button class='block p-3 md:hidden' aria-controls="navbar-primary" on:click={openSidebar}>
    <span class='visually-hidden'>Menu Open</span>
    <Icon icon={MenuIcon} size={32} />
  </button>
{/if}

<style lang="scss">
  button, span {
    // prevent double tap zoom
    touch-action: manipulation;
  }
</style>