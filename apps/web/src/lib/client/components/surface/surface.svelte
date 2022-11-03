<script lang="ts">
  import type { SurfaceElevation } from "./surface.types";

  export let classes: string = '';
  export { classes as class };

  export let elevation: SurfaceElevation = 1;
</script>

<div class={`kai-surface ${classes}`} data-elevation={elevation}>
  <slot />
</div>

<style lang="scss">
  :root {
    --kai-surface: var(--kai-white);

    @media (prefers-color-scheme: dark) {
      --kai-surface: var(--kai-secondary);
    }
  }

  .kai-surface:not([data-mode='dark']) {
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    
    background-color: hsl(var(--kai-background));
    overflow: hidden;
    
    &[data-elevation='0'] {
      box-shadow: none;
    }

    &[data-elevation='1'] {
      @apply shadow;
    }

    &[data-elevation='2'] {
      @apply shadow-md;
    }

    &[data-elevation='3'] {
      @apply shadow-lg;
    }

    &[data-elevation='4'] {
      @apply shadow-xl;
    }

    &[data-elevation='5'] {
      @apply shadow-2xl;
    }
  } 

  @media (prefers-color-scheme: dark) {
    .kai-surface {
      &[data-elevation='1'] {
        background-image: linear-gradient(
          hsl(var(--kai-surface) / .04), 
          hsl(var(--kai-surface) / .04)
        );
      }

      &[data-elevation='2'] {
        background-image: linear-gradient(
          hsl(var(--kai-surface) / .08), 
          hsl(var(--kai-surface) / .08)
        );
      }

      &[data-elevation='3'] {
        background-image: linear-gradient(
          hsl(var(--kai-surface) / .12), 
          hsl(var(--kai-surface) / .12)
        );
      }

      &[data-elevation='4'] {
        background-image: linear-gradient(
          hsl(var(--kai-surface) / .16), 
          hsl(var(--kai-surface) / .16)
        );
      }

      &[data-elevation='5'] {
        background-image: linear-gradient(
          hsl(var(--kai-surface) / .20), 
          hsl(var(--kai-surface) / .20)
        );
      }
    }
  }
</style>