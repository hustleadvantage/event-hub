<script lang='ts'>
  export let value: string;
</script>

<div class='grid gap-2'>
  <span class='text-sm'>Search</span>
  <input type='text' bind:value on:input />
</div>

<style lang='scss'>
  input {
    padding-inline: 1rem;
    padding-block: .5rem;

    border-radius: .5rem;
    outline: 1px solid hsl(var(--gray-4-hsl));

    &:focus {
      outline-color: hsl(var(--blue-4-hsl));
      outline-width: 2px;
      outline-offset: 2px;
    }
  }
</style>