<script lang="ts">
  export let url: string;
  export let type: 'youtube';
</script>

{#if type === 'youtube'}
  <iframe
    class='video'
    src={url}
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
  />
{/if}

<style>
  .video {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;

    border-radius: 0.5rem;
  }
</style>