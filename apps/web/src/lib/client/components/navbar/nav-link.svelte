<script lang="ts">
  export let active: boolean;
  export let external: boolean = false;
  export let label: string;
  export let href: string;

  const target = external ? '_blank' : '_self';
</script>

<a class='kai-nav-link' {href} {target} class:active>{label}</a>

<style lang="scss">
  .kai-nav-link {
    font-size: 1.25rem;
    color: hsl(var(--kai-text) / .8);

    transition: all ease-in-out 150ms;

    &:hover {
      color: hsl(var(--kai-text));
    }

    &.active {
      color: hsl(var(--kai-primary));
    }
  }
</style>