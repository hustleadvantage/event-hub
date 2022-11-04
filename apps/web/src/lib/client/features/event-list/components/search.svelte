<script lang='ts'>
	import { Icon, SearchIcon } from "$client/components";

  export let value: string;
</script>

<div class='grid gap-2'>
  <label for="search" class='grid gap-3 text-sm'>
    Search
    <div class='search-wrapper'>
      <div class='absolute p-2'><Icon icon={SearchIcon} /></div>
      <input name="search" type='text' bind:value on:input />
    </div>
  </label>
</div>

<style lang='scss'>
  .search-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;

    background-color: hsl(var(--kai-surface) / .12);

    border-radius: .5rem;

    &:focus-within {
      outline: 2px solid hsl(var(--blue-4-hsl));
    }
  }

  input {
    flex-grow: 1;

    padding-inline: .75rem;
    padding-block: .5rem;

    background-color: hsl(var(--kai-surface) / .12);
    color: hsl(var(--kai-text));

    border: none;
    outline: none;
  }
</style>