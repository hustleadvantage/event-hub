<script lang='ts'>
  import {
    RadioGroup,
  } from "@rgossiaux/svelte-headlessui";

  export let value: any;
</script>

<RadioGroup bind:value on:change>
  <slot />
</RadioGroup>