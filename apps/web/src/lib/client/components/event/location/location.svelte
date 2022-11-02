<script lang="ts">
	import { Heading, Icon, LocationIcon, Surface } from "$client/components";
  import LocationToBeAnnounced from "./location-to-be-announced.svelte";
  import { useLocationViewModel } from "./location.view-model";
  import OnlineLocation from "./online-location.svelte";
  import Venue from "./venue.svelte";

  export let location: App.Event.Location | string;

  const { isLocationToBeAnnounced, isOnlineLocation, isRawLocation, isVenue } = useLocationViewModel();
</script>

<Surface class='p-5 rounded-lg'>
  <div class='flex items-start gap-3'>
    <div class='shrink-0'>
      <Icon icon={LocationIcon} />
    </div>
    <div class='grid gap-2 flex-grow'>
      <Heading level={4}>Location</Heading>
      {#if isRawLocation(location)}
          {location}
      {:else if isOnlineLocation(location)}
          <OnlineLocation {location} />
        {:else if isVenue(location)}
          <Venue {location} />
        {:else if isLocationToBeAnnounced(location)} 
          <LocationToBeAnnounced {location} />          
        {/if}
    </div>
  </div>  
</Surface>
