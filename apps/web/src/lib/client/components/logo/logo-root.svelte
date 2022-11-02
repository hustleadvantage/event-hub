<script lang='ts'>
  import Logo from "./logo.svelte";

  export let disabled: boolean = false;
</script>

{#if disabled}
  <Logo />
{:else}
  <a href='/'>
    <Logo />
  </a>
{/if}