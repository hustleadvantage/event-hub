<script lang='ts'>
	import { Title } from '$client/components';
	import { CONFIG } from '$client/constants';
  import EventListItem from './event-list-item.svelte';
  import { useEventListViewModel } from './event-list.view-model';
  import MonthFilter from './month-filter.svelte';
  import Search from './search.svelte';

  export let events: App.EventListItem[];
  export let searchParams: string = '';

  const businessName = CONFIG.BUSINESS.NAME;

  const { 
    filteredEvents, 
    monthFilter, 
    monthFilterOptions, 
    searchTerm, 
    searchEvents 
  } = useEventListViewModel(events);
</script>
  

<div class='max-w-screen-md md:max-w-screen-lg mx-auto px-5 py-8'>
  <div class='grid gap-10'>
    <Title>
      {businessName}
      <span class='block mt-2 text-4xl font-normal'>Upcoming Events</span>
    </Title>
    <div class='flex items-start gap-8'>
      <Search bind:value={$searchTerm} on:input={searchEvents} />
      <MonthFilter options={monthFilterOptions} bind:selected={$monthFilter} />
    </div>
    {#if $filteredEvents.length}
      <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {#each $filteredEvents as event (event.id)}
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