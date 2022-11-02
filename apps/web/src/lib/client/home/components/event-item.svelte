<script lang='ts'>
  import DateTimeInfo from './date-time-info.svelte';
  import { Event, Button, Stack, Surface } from '$client/shared';

  export let event: EventListPage.Event;
  export let searchParams: string;
</script>

<Surface class='rounded-lg'>
  <div class='flex flex-col'>
    <img alt={event.name} src={event.image.url} width={event.image.width} height='100%' />
    <Stack class='p-5'>
      <Stack gap='gap-3'>
        <span class='text-lg font-semibold'>{event.name}</span>
        <Stack class='gap-2'>
          <DateTimeInfo event={event} />
          <Event.Location location={event.location} />
        </Stack>
      </Stack>
      <Button href={`${event.detailPath}?${searchParams}`}>View Details</Button>
    </Stack>
  </div>
</Surface>

<style lang='scss'>
  img {
    aspect-ratio: 2;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
</style>
