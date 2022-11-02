<script lang='ts'>
  import {
    RadioGroupOption,
  } from "@rgossiaux/svelte-headlessui";

  export let value: any;
</script>

<RadioGroupOption {value} let:checked>
  <span class:checked>
    <slot/>
  </span>
</RadioGroupOption>

<style lang='scss'>
  span.checked {
    background-color: red;;
  }
</style>
