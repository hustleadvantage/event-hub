<script lang='ts'>
  import EventItem from './event-item.svelte';
  import { useEventListViewModel } from './event-list.view-model';
  import MonthFilter from './month-filter.svelte';
  import Search from './search.svelte';

  export let events: EventListPage.Event[];
  export let searchParams: string = '';

  const { 
    filteredEvents, 
    monthFilter, 
    monthFilterOptions, 
    searchTerm, 
    searchEvents 
  } = useEventListViewModel(events);
</script>
  
<div class='grid gap-10'>
  <div class='flex items-start gap-8'>
    <Search bind:value={$searchTerm} on:input={searchEvents} />
    <MonthFilter options={monthFilterOptions} bind:selected={$monthFilter} />
  </div>
  {#if $filteredEvents.length}
    <div class='grid grid-cols-1 sm:grid-cols-2 gap-8'>
      {#each $filteredEvents as event (event.id)}
        <EventItem {event} {searchParams} />
      {/each}
    </div>
  {:else}
    <div class=''>
      No events found
    </div>
  {/if}
</div>