<script lang='ts'>
  import { ListboxButton } from "@rgossiaux/svelte-headlessui";
</script>

<ListboxButton class='kai-listbox-button'>
  <slot />
  <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
  <svg
    class="w-5 h-5 text-gray-400"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</span>
</ListboxButton>

<style lang='scss' global>
  button.kai-listbox-button {
    position: relative;
    width: 100%;
    
    padding-block: .75rem;
    padding-left: .75rem;
    padding-right: 2.5rem;

    background-color: hsl(var(--kai-surface) / .12);
    border-radius: .5rem;

    font-size: 1rem;
    line-height: 1.25rem;
    text-align: left;

    transition: ease-in-out 150ms; 

    cursor: default;

    &:focus {
      border: none;
      outline: solid 2px hsl(var(--blue-4-hsl));
      outline-offset: 2px;
    }
  }
</style>