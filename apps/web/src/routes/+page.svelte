<script lang='ts'>
  import { EventList, EventDetail } from '$client/features';
	import { useViewModel } from './page.view-model';
  
  export let data: HomePage;

  const { eventData } = data;

  const { isEvent } = useViewModel();
</script>

{#if isEvent(eventData)}
  <EventDetail event={eventData} />
{:else}
  <EventList events={eventData.events} />
{/if}