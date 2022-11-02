<script lang='ts'>
  import { ListBox, RadioGroup } from "$client/shared";
  
  export let selected: any;
  export let options: any;
</script>

<div class='grid gap-2'>
  <span class='text-sm'>Month</span>
  <ListBox bind:selected>
    <ListBox.Button slot='button'>{selected.label}</ListBox.Button>
    {#each options as option (option.key)}
      <ListBox.Option value={option}>
        {option.label}
      </ListBox.Option>
    {/each}
  </ListBox>
  <!-- <RadioGroup bind:value={selected}>
    {#each options as option (option.key)}
      <RadioGroup.Option value={option}>
        {option.label}
      </RadioGroup.Option>
    {/each}
  </RadioGroup> -->
</div>

