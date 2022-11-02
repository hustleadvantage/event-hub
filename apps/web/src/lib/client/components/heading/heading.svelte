<script lang="ts">
  import { useHeading } from "./heading";

  export let className: string = '';
  export { className as class };

  export let level: number = 2;

  const { tag } = useHeading({ level });
</script>

<svelte:element this={tag} class={`kai-heading ${className}`}>
  <slot />
</svelte:element>

<style lang="scss" global>
  .kai-heading {
    margin: 0;

    color: hsl(var(--color-text-on-background));
    font-weight: bold;
  }

  h1.kai-heading {
    @apply text-4xl sm:text-5xl;
  }

  h2.kai-heading {
    @apply text-3xl sm:text-4xl;
  }

  h3.kai-heading {
    @apply text-2xl sm:text-3xl;
  }

  h4.kai-heading {
    @apply text-xl sm:text-2xl;
  }

  h5.kai-heading {
    @apply text-lg sm:text-xl;
  }

  h6.kai-heading {
    @apply text-lg;
  }
</style>