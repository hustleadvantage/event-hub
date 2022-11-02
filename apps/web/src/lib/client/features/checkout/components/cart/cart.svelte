<script lang="ts">
  // import { Plausible, TRACKING_EVENTS } from "$lib";
  import { loadCart } from "./load-cart";

  export let eventId: string;  

  const onOrderCompleted = ({ orderId }: any) => {
    // Plausible.track(TRACKING_EVENTS.REGISTRATION_COMPLETED, {
    //   props: {
    //     transaction_id: orderId
    //   }
    // })
  }
</script>

<div id="checkout" use:loadCart={{ eventId, onOrderCompleted }}></div>