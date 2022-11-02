<script lang='ts'>
  import { EventDetail } from '$client/features';
import type { PageData } from './$types';

  export let data: PageData;
  
  const {eventData: event } = data;
</script>

<EventDetail {event} />