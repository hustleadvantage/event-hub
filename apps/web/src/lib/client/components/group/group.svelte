<script lang="ts">
  export let className: string = '';
  export { className as class };
</script>

<div class={`kai-group ${className}`}>
  <slot />
</div>

<style>
  .kai-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
