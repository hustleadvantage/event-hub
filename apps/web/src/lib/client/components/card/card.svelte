<script>
  import { Surface } from "../surface";

</script>

<Surface>
  <div class='kai-card'>
    <div class='kai-card-media'>
      <slot name='media' />
    </div>

    <div class='kai-card-body'>
      <slot />
    </div>
  </div>
</Surface>


<style lang="scss">
  .kai-card {
    overflow: hidden;
    border-radius: .5rem;
  }

  .kai-card-body {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    
    padding: 1.5rem;
  }

  :global(.kai-surface) {
    border-radius: .5rem;
  }
</style>