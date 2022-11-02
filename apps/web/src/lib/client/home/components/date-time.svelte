<script lang='ts'>
  import { Icon, CalendarIcon, TimeIcon } from "$client/shared";

  export let dateTimeInfo: EventListPage.Event.DateTime;
  const { date, time } = dateTimeInfo;
</script>

<div class='flex gap-2'>
  <div class='shrink-0'>
    <Icon icon={CalendarIcon} />
  </div>
  <span>{date}</span>
</div> 
<div class='flex gap-2'>
  <div class='shrink-0'>
    <Icon icon={TimeIcon} />
  </div>
  <span>{time}</span>
</div> 