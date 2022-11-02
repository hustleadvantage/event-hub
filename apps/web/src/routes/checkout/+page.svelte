<script lang='ts'>
   import { Checkout } from '$client/features';
   import type { PageData } from './$types';

   export let data: PageData;
</script>

<div class='checkout-wrapper'>
   <Checkout.Cart eventId={data.id} />
</div>

<style lang='scss'>
	.checkout-wrapper {
		max-width: theme('screens.md');
		margin-inline: auto;
	}
</style>