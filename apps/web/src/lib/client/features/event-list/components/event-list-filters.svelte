<script lang='ts'>
	import { useEventListFiltersViewModel } from "./event-list-filters.view-model";
	import MonthFilter from "./month-filter.svelte";
	import Search from "./search.svelte";

  const { monthFilter, monthFilterOptions, searchTerm, searchEvents } = useEventListFiltersViewModel();
</script>

<div class='flex items-stretch flex-col sm:flex-row sm:items-start gap-8'>
  <Search bind:value={$searchTerm} on:input={searchEvents} />
  <MonthFilter options={monthFilterOptions} bind:selected={$monthFilter} />
</div>