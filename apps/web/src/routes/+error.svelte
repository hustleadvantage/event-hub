<script lang='ts'>
	import { NotFound } from '$client/components';
  import { page } from '$app/stores';
	import { useErrorViewModel } from './error.view-model';

  const status = $page.status;

  const { isForbiddenError, isNotFoundError } = useErrorViewModel();
</script>

<div class='max-w-screen-md mx-auto py-8 px-5'>
  {#if isForbiddenError(status)}
    <h1>Show contact information for visitors to contact the organizer</h1>
  {:else if isNotFoundError(status)}
    <NotFound />
  {:else}
    Internal Server Error
  {/if}

</div>