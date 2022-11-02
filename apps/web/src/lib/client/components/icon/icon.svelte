<script lang="ts">
  export let icon: any;
  export let size:number = 24;

  const width = size;
  const height = size;
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox={`0 0 24 24`} fill='currentColor'>
  <svelte:component this={icon} />
</svg>