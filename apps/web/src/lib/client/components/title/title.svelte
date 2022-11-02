<script lang="ts">
  import { Heading } from "../heading";

  export let className: string = '';
  export { className as class };
</script>

<Heading level={1} class={className}>
  <slot />
</Heading>
