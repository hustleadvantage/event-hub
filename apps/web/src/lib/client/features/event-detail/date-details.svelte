<script lang='ts'>
  import { CalendarIcon, Heading, Icon, Surface } from '$client/components';
  import DatesAndTimes from './dates-times.svelte';
  import Date from './date.svelte';
  import DateAndTimes from './date-times.svelte';
  import DateTime from './date-time.svelte';
  import { useDateDetailsViewModel } from './date-details.view-model';
	import MultipleDates from './multiple-dates.svelte';

  export let dateDetails: App.Event.DateDetails;

  const { isDate, isDateTime, isDateAndTimes, isDatesAndTimes } = useDateDetailsViewModel();
</script>

<Surface class='p-5 rounded-lg'>
  <div class='flex items-start gap-3'>
    <div class='shrink-0'>
      <Icon icon={CalendarIcon} />
    </div>
    <div class='grid gap-2'>
      <Heading level={4}>Date and time</Heading>
      {#if isDate(dateDetails)}
        <Date {...dateDetails} />
      {:else if isDateTime(dateDetails)}
        <DateTime {...dateDetails} />
      {:else if isDateAndTimes(dateDetails)}
        <DateAndTimes {...dateDetails} />
      {:else if isDatesAndTimes(dateDetails)}
        <DatesAndTimes dateTime={dateDetails} />
      {:else}
        <MultipleDates />
      {/if}
    </div>
  </div>
</Surface>