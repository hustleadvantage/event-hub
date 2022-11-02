<script lang="ts">
  import { Video } from "$client/components";

  export let content: App.Event.Content;
</script>

<div class='content'>
  {#each content as block (block.id)}
    {#if block._type === 'image'}
      {@const { ratio, url, width } = block}
      <img
      alt='Event'
      src={url}
      width={width}
      style={`--aspect-ratio: ${ratio}`}
      />
    {:else if block._type === 'video'}
      {@const { url } = block }
      <Video {url} type='youtube' />
    {:else}
      {@const { value } = block}
      <div class='text'>
        {@html value}
      </div>
    {/if}
  {/each}
</div>

<style lang="scss" global>
  .content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    img {
      height: 100%;
      aspect-ratio: var(--aspect-ratio);
      border-radius: 0.5rem;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .text {
      p {
        line-height: 1.5;
      }
    }
  }
</style>
