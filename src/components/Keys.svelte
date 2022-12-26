<script lang="ts">
	import { keys } from '$stores/keys';
	import Key from './Key.svelte';
</script>

<div class="keys">
	{#each $keys as key}
		<Key {key} />
	{/each}
</div>

<style>
	.keys {
		display: flex;
		flex-wrap: wrap;

		min-height: 100px;

		gap: 0.5em;
		padding: 0.5em;
		margin: 20px;

		justify-content: center;
		align-items: center;

		border-radius: 10px;
	}
</style>
