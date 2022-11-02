<script lang='ts'>
export let className: string = '';
 
export { className as class };
</script>

<div class={`kai-box block ${className}`}>
  <slot />
</div>
