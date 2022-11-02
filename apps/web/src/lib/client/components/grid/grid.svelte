<script lang="ts">
  export let className: string = '';
  export { className as class };
</script>

<div class={`kai-grid grid ${className}`}>
  <slot />
</div>
