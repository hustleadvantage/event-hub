<script lang='ts'>
  import { Stack, Text, Title } from '$client/components';
  import { CheckoutButton } from '../checkout-button';

  export let event: App.SingleEvent | App.RecurringEvent;  
</script>

<Stack class='gap-8'>
  <img
    class='rounded'
    src={event.image.url}
    width={event.image.width}
    height='100%'
    alt={event.name}
  />
  <div class='flex flex-col gap-5'>
    <Title>{event.name}</Title>
    <Text>{event.summary}</Text>
  </div>
  <div id='header-cta' class='flex justify-start items-stretch sm:w-1/3'>
    <CheckoutButton {...event.cta} url={event.cta.url} />
  </div>
</Stack>
