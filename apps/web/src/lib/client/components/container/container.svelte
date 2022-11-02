<script lang="ts">
  export let className: string = '';
  export { className as class };

  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let fluid: boolean = false;
</script>

<div class={`kai-container ${className}`} class:fluid style={`--size: var(--breakpoint-${size})`}>
  <slot />
</div>

<style lang='scss'>
  .kai-container {
    padding-inline: 1.25rem;

    @apply md:mx-auto;

    &.fluid {
      width: 100%;
    }

    &:not([data-fluid]) {
      max-width: var(--size);
    }
  }
</style>
