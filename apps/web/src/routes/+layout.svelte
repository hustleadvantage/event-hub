<script>
	import "$client/styles";
	import { Analytics } from "$client/features";
	import { Footer } from "$client/components";
</script>

<svelte:head>
	<title>Event Hub</title>
</svelte:head>

<!-- <Analytics /> -->


<div class='layout-wrapper'>
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang='scss'>
	:global(html, body) {
		height: 100%;
	}

	.layout-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		min-height: 100%;
	}

	main {
		flex-grow: 1
	}
</style>
