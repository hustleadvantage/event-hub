<script lang='ts'>
	import { Event, Surface } from "$client/components";
	import DateDetails from "./date-details.svelte";

  export let event: App.Event;
  // export let searchParams: string;
</script>

<div class='max-w-screen-md mx-auto px-5 py-8'>
  <div class='grid gap-8'>
    <Event.Header event={event} />
    <div class='grid gap-5'>
      <DateDetails dateDetails={event.dateDetails} />
      <Surface class='p-5 rounded-lg'>
        <Event.Location location={event.location}/>
      </Surface>
    </div>
    <Event.Content content={event.content} />
    <div id='recap-cta' class='flex justify-start items-stretch sm:w-1/3'>
      <Event.CheckoutButton {...event.cta} />
    </div>
    <!-- <Event.StickyCheckoutButton label='Checkout' url={event.checkoutUrl} /> -->
  </div>
</div>