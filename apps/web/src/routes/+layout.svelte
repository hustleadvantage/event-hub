<script>
	import "$client/styles";
	import { Analytics } from "$client/features";
</script>

<svelte:head>
	<title>Event Hub</title>
</svelte:head>

<Analytics />

<div class='max-w-screen-md mx-auto px-5 py-8'>
	<slot />
</div>