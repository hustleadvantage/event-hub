<script lang="ts">
  import {Heading} from '../heading';
  import {Stack} from '../stack';
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from '@rgossiaux/svelte-headlessui';

  export let close: () => void;
  export let description: string;
  export let isOpen: boolean = false;
  export let loading: boolean = false;
  export let title: string;
</script>

<Dialog class="kai-modal fixed inset-0 py-6 bg h-full overflow-y-auto z-50" open={isOpen} on:close={close}>
  <DialogOverlay class="absolute -z-10"/>

  <button class="kai-modal-close" on:click={close}>X</button>

  <div class="relative mx-auto max-w-lg p-5 mt-6">
    <Stack class='gap-3'>
      <DialogTitle>
        <Heading level={4}>{title}</Heading>
      </DialogTitle>
  
      <DialogDescription class="text-medium">
        {description}
      </DialogDescription>
    </Stack>

    <LoadingOverlay visible={loading} />

    <div class="mt-7">
      <slot />
    </div>
  </div>
</Dialog>

<style lang="scss">
  :global(.kai-modal) {
    background-color: hsl(var(--kai-background));
  }

  .kai-modal-close {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    padding: .5rem;
    height: 3rem;
    width: 3rem;
    z-index: 50;

    border-radius: .5rem;

    @apply text-xl;

    &:hover {
      cursor: cursor-pointer;
    }
  }
</style>
