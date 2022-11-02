<script lang='ts'>
	import { onMount } from "svelte";
	import { init } from "./google-analytics";

  export let id: string;

  onMount(() => {
    init(id);
  })
</script>
<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  </script>
</svelte:head>