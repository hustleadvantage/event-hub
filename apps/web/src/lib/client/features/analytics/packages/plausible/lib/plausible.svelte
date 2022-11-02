<script lang='ts'>
  import { PLAUSIBLE_SCRIPT_URL } from "./constants";

  export let domain: string;

  const src = PLAUSIBLE_SCRIPT_URL;
</script>

<svelte:head>
  <script defer data-domain={domain} {src}></script>
</svelte:head>