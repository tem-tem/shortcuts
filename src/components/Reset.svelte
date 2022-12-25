<script lang="ts">
	import { keys } from '$stores/keys';
	import { fade } from 'svelte/transition';
</script>

{#if $keys.length > 0}
	<button
		in:fade={{ duration: 200 }}
		on:click={() => {
			keys.reset();
		}}>Reset <span>Esc</span></button
	>
{/if}

<style>
	button {
		display: flex;
		gap: 10px;

		padding: 10px 20px;
		border: none;
		border-radius: 20px;
		background-color: var(--main-button-color);
		color: var(--main-bg-color);
		font-weight: 500;
		cursor: pointer;
	}
	button span {
		opacity: 0.5;
	}
</style>
