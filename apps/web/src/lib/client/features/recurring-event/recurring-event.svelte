<script lang='ts'>
	import { Event } from "$client/components";
	import DateDetails from "./date-details.svelte";

  export let event: App.RecurringEvent;
  // export let searchParams: string;
</script>

<div class='grid gap-8'>
  <Event.Header event={event} />
  <div class='grid gap-5'>
    <DateDetails />
    <Event.Location location={event.location} />
  </div>
  <Event.Content content={event.content} />
  <div id='recap-cta' class='flex justify-start items-stretch sm:w-1/3'>
    <Event.CheckoutButton {...event.cta} />
  </div>
  <!-- <Event.StickyCheckoutButton label='Checkout' url={event.checkoutUrl} /> -->
</div>
