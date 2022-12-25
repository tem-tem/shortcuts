<script lang="ts">
	import { keys } from '$stores/keys';
</script>

<div class="resetBlock">
	{#if $keys.length > 0}
		<button
			on:click={() => {
				keys.reset();
			}}>Reset (Esc)</button
		>
	{/if}
</div>

<style>
	.resetBlock {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
</style>
