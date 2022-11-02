<script lang="ts">

export let className: string = '';
export { className as class };
export let fluid: boolean = false;
export let href: string | undefined = undefined;
export let onClick: any | undefined = undefined;

const isLink = !!href;
</script>

{#if isLink}
  <a href={href} class='button' style='--width: {fluid ? `100%` : `auto`}'>
    <slot />
  </a>
{:else}
  <button class={className} on:click={onClick}>
    <slot />
  </button>
{/if}

<style lang='scss'>  
  :root {
    --button-primary: var(--kai-primary);
    --button-primary-dark: var(--kai-primary-dark);
    --button-outline: var(--blue-4-hsl);
    --button-text: 0 0% 100%;

    @media (prefers-color-scheme: dark) {
      --button-text: var(--gray-9-hsl);
    }
  }

  button,
  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: var(--width);

    padding-block: 0.75rem;
    padding-inline: 1rem;

    border-radius: 0.5rem;

    background-color: hsl(var(--button-primary));

    color: hsl(var(--button-text));
    font-weight: bold;

    transition: background-color 300ms;

    &:active {
      transform: translateY(1px);
    }

    &:focus {
      outline: solid 2px hsl(var(--button-outline));
      outline-offset: 1px;
    }

    &:hover {
      background-color: hsl(var(--button-primary-dark));
    }
  }
</style>
