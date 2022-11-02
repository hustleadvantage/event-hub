<script lang='ts'>
  import { Button } from "$client/components";

  export let label: string;
  export let url: string;
</script>

<Button href={url} fluid>
  {label}
</Button>