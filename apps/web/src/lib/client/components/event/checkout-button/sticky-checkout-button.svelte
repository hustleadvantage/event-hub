<script lang='ts'>
  import { Button, Surface } from "$client/components";
  // import { useStickyCheckoutButtonViewModel } from "./sticky-checkout-button.view-model";

  export let label: string;
  export let url: string;

  // const { isVisible } = useStickyCheckoutButtonViewModel(['#header-cta', '#recap-cta', '#footer']);
</script>

<div class='sticky-footer' class:visible={false}>
  <Surface class='px-4 pt-4 pb-6'>
    <div class='flex justify-center items-center mx-auto'>
      <Button href={url}>{label}</Button>
    </div>
  </Surface>
</div>

<style lang='scss'>
  .sticky-footer {
    opacity: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    &.visible {
      opacity: 1;
    }
  }
</style>