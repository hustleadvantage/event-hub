<script lang="ts">
  import { Surface } from "../surface";

  const year = new Date().getFullYear();
</script>

<Surface>
  <div id='footer' class='kai-footer'>
    &copy; {year} {BUSINESS.name}, All Rights Reserved.
  </div>
</Surface>

<style lang="scss"> 
  .kai-footer {
    display: flex;
    align-items: stretch;
    justify-content: center;

    padding: 1.25rem;

    font-size: .875rem;
    color: hsl(var(--kai-text));
  }
</style>