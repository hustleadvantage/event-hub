<script lang="ts">
  export let as = 'p';
</script>

<svelte:element this={as} class='kai-text'>
  <slot />
</svelte:element>

<style lang="scss">
  .kai-text {
    max-width: 60ch;
  }
</style>
