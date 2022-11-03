<script lang="ts">
  import { Surface } from "../surface";
	import { useFooterViewModel } from "./footer.view-model";

  const { businessName, year } = useFooterViewModel();
</script>

<Surface>
  <div id='footer' class='kai-footer'>
    &copy; {year} {businessName}, All Rights Reserved.
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