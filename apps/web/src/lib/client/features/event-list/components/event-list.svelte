<script lang='ts'>
	import { Title } from '$client/components';
	import { CONFIG } from '$client/constants';
	import EventListFilters from './event-list-filters.svelte';
  import EventListItem from './event-list-item.svelte';
  import { useEventListViewModel } from './event-list.view-model';

  export let events: App.EventListItem[];
  export let searchParams: string = '';

  const businessName = CONFIG.BUSINESS.NAME;

  const { eventsStore } = useEventListViewModel({ events });
</script>
  

<div class='max-w-screen-md md:max-w-screen-lg mx-auto px-5 py-8'>
  <div class='grid gap-10'>
    <Title>
      {businessName}
      <span class='block mt-2 text-4xl font-normal'>Upcoming Events</span>
    </Title>
    <EventListFilters />
    {#if $eventsStore.length}
      <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {#each $eventsStore as event (event.id)}
          <EventListItem {event} {searchParams} />
        {/each}
      </div>
    {:else}
      <div class=''>
        No events found
      </div>
    {/if}
  </div>
</div>