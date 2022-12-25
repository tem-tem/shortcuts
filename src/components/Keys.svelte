<script lang="ts">
	import { keys } from '$stores/keys';
	import { os } from '$stores/ui';
	import { getDisplaySymbol } from '$utils/helpers';

	let key: string;
	let code: string;

	function handleKeydown(event: KeyboardEvent) {
		keys.add(event);
		if (event.key === 'Escape') {
			keys.reset();
		}
		key = event.key;
		code = event.code;
		return false;
	}

	function handleKeyup(event: KeyboardEvent) {
		event.preventDefault();
		return false;
	}

	function handleKeypress(event: KeyboardEvent) {
		event.preventDefault();
		return false;
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} on:keypress={handleKeypress} />

<div class="keys">
	{#each $keys as key}
		<kbd>
			<div class="key">
				{getDisplaySymbol(key, $os)}
			</div>
			<!-- <div class="code">
                Code: {key.code}
            </div> -->
		</kbd>
	{/each}
</div>

<style>
	.keys {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;

		justify-content: center;

		width: calc(100% - 16px);
		padding: 0.5em;

		/* border-radius: 5px; */
		/* border: 1px solid #ccc; */
	}

	kbd {
		background-color: #eee;
		border-radius: 4px;
		font-size: 16px;
		padding: 0.2em 0.5em;
		border-top: 2px solid rgba(255, 255, 255, 0.5);
		border-left: 2px solid rgba(255, 255, 255, 0.5);
		border-right: 2px solid rgba(0, 0, 0, 0.2);
		border-bottom: 2px solid rgba(0, 0, 0, 0.2);
		color: #555;
		max-width: 100%;
	}
	kbd .key {
		/* font-weight: bold; */
	}
</style>
