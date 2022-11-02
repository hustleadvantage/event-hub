<script lang="ts">
  export let key: string;
  export let address: string;
</script>

<iframe
  title='Location'
  height="450"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${key}
    &q=${address}`}>
</iframe>

<style lang="scss">
  iframe {
    width: 100%;
    border: 0;
  }
</style>