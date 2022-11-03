<script>
	import "$client/styles";
	import { Analytics } from "$client/features";
	import { Footer } from "$client/components";
</script>

<svelte:head>
	<title>Event Hub</title>
</svelte:head>

<!-- <Analytics /> -->


<div class='grid gap-10'>
	<slot />
	<Footer />
</div>
