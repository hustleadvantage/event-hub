<script>
	import { CalendarIcon, Icon, Surface } from "$client/components";

</script>


<Surface class='p-5 rounded-lg'>
  <div class='flex gap-3'>
    <div class="flex-none">
      <Icon icon={CalendarIcon} />
    </div>
    <div class='grid gap-2'>
      <span class='text-2xl font-bold'>Date and Time</span>
      <span>Multiple dates</span>
    </div>
  </div>
</Surface>