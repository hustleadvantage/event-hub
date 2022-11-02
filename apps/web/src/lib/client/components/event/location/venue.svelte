<script lang="ts">
	import { Accordion, ChevronIcon } from "$client/components";
	import { CONFIG } from "$client/constants";
  import { DisclosureButton, DisclosurePanel } from "@rgossiaux/svelte-headlessui";
	import { option } from "fp-ts";
  import Map from "./map.svelte";
  import { useVenueViewModel } from "./venue.view-model";

  export let location: App.Event.Venue;

  const { cta, isMapVisible, checkMapKeyboardToggle, toggleIsMapVisible } = useVenueViewModel();

  const googleMapsKeyOption = CONFIG.GOOGLE.MAPS_PUBLIC_KEY;
</script>

<div class='grid gap-5'>
  <div class='grid gap-2'>
    <span>{location.name}</span>
    <span>{location.address}</span>
  </div>
  {#if option.isSome(googleMapsKeyOption)}
    <Accordion on:click={toggleIsMapVisible}>
      <svelte:fragment slot='control'>
        <DisclosureButton class='kai-accordion-control' on:keydown={checkMapKeyboardToggle}>
          {$cta}
          <ChevronIcon />
        </DisclosureButton>
      </svelte:fragment>
      <div class:hidden={!$isMapVisible}>
        <DisclosurePanel class='kai-accordion-panel' static>
          <Map key={googleMapsKeyOption.value} address={`${location.name},${location.address}`} />
        </DisclosurePanel>
      </div>
    </Accordion>
  {/if}
</div>

<style lang='scss' global>
  .kai-accordion-control {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .25rem;
    
    width: auto;

    margin-left: -1rem;
    padding-inline: 1rem;
    padding-block: .5rem;

    border-radius: .5rem;    

    color: hsl(var(--kai-text));

    svg {
      transform: rotate(90deg);
    }

    &[aria-expanded='true'] {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .kai-accordion-panel {
    margin-top: 1.25rem;
    color: hsl(var(--kai-text-medium))
  }
</style>