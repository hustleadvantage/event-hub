<script lang='ts'>
  import { Icon, CalendarIcon } from "$client/shared";

  export let dateTimeInfo: EventListPage.Event.Date;
</script>

<div class='flex gap-2'>
  <div class='shrink-0'>
    <Icon icon={CalendarIcon} />
  </div>
  <span>
    {dateTimeInfo.value}
  </span>
</div> 