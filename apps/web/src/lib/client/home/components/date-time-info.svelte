<script lang='ts'>
  import { Icon, CalendarIcon } from '$client/shared';
  import { useDateTimeInfoViewModel } from './date-time-info.view-model';
  import DateTime from './date-time.svelte';
  import Date from './date.svelte';

  export let event: HomePage.Event;

  const { isDate, isSeries } = useDateTimeInfoViewModel();
</script>

{#if isSeries(event)}
  <div class='flex gap-2'>
    <div class='shrink-0'>
      <Icon icon={CalendarIcon} />
    </div>
    Multiple Dates
  </div>
{:else}
  {@const { dateTimeInfo } = event}
  {#if isDate(dateTimeInfo)}
      <Date {dateTimeInfo} />
    {:else}
      <DateTime {dateTimeInfo} />
  {/if}
{/if}

