<script lang='ts'>
	import { CONFIG } from "$client/constants";
	import { option } from "fp-ts";
	import { onMount } from "svelte";
	import { FacebookPixel, GoogleAnalytics, PlausibleAnalytics } from "./packages";
	import { trackPageViewUseCase } from "./use-cases";

  const facebookPixelIdOption = CONFIG.FACEBOOK.PIXEL_ID;
  const googleAnalyticsIdOption = CONFIG.GOOGLE.ANALYTICS_MEASUREMENT_ID;
  const plausibleAnalyticsDomainOption = CONFIG.PLAUSIBLE.DOMAIN;

  onMount(() => { 
    trackPageViewUseCase();
  })
</script>

{#if option.isSome(facebookPixelIdOption)}
  <FacebookPixel id={facebookPixelIdOption.value} />
{/if}

{#if option.isSome(googleAnalyticsIdOption)}
  <GoogleAnalytics id={googleAnalyticsIdOption.value} />
{/if}

{#if option.isSome(plausibleAnalyticsDomainOption)}
  <PlausibleAnalytics domain={plausibleAnalyticsDomainOption.value} />
{/if}