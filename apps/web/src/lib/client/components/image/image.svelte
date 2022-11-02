<script lang='ts'>
  export let alt: string;
  export let radius: number = 0;
  export let ratio: number | undefined = undefined;
  export let src: string;
  export let width: number;
  export let fluid: boolean = false;
</script>

<img
  {alt}
  {src}
  {width}
  height='auto'
  style={`${ratio ? `--ratio: ${ratio}` : ''}; --radius: ${radius}rem;`}
  class:fluid
/>

<style lang="scss">
  img {
    border-radius: var(--radius);
    max-width: 100%;

    &.fluid {
      width: 100%;
    }
  }
</style>