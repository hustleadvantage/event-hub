<script lang='ts'>
export let className: string = '';
export { className as class };

export let gap: string = 'gap-5'
</script>

<div class={`kai-stack ${className} ${gap}`}>
  <slot />
</div>

<style lang='scss'>
  .kai-stack {
    display: flex;
    flex-direction: column;
  }
</style>
