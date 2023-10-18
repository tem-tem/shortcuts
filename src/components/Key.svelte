<script lang="ts">
	import { fullInfo, os } from '$stores/ui';
	import { tooltipMessage } from '$stores/tooltip';
	import type { DemoKey } from '$types';
	import { getDisplaySymbol } from '$utils/helpers';
	import { scale } from 'svelte/transition';

	export let key: KeyboardEvent | DemoKey;

	const copyData = (data: string) => () => {
		navigator.clipboard.writeText(data);
		tooltipMessage.set(`Copied "${data}" `);
	};
</script>

<kbd in:scale={{ duration: 200 }} class:smallKBD={!$fullInfo}>
	<span class="label" class:labelOnly={!$fullInfo}>
		{getDisplaySymbol(key, $os)}
	</span>
	{#if $fullInfo}
		<div class="data" in:scale={{ duration: 200 }}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span class="row" on:click={copyData(key.code)}>
				<span>.code:</span><span class="rowValue">{key.code}</span>
			</span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span class="row" on:click={copyData(key.key)}>
				<span>.key:</span><span class="rowValue">{key.key}</span>
			</span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span class="row" on:click={copyData(key.keyCode)}>
				<span>.keyCode:</span><span class="rowValue">{key.keyCode}</span>
			</span>
		</div>
	{/if}
</kbd>

<style>
	kbd {
		color: var(--main-button-color);
		background: linear-gradient(
			var(--main-button-color-opacity-0),
			var(--main-button-color-opacity-3)
		);

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		min-width: 3em;
		min-height: 3em;

		padding: 0.5em 0.8em;

		border: 1px solid;
		/* border: 5px solid; */
		border-radius: 24px;
		box-shadow: 0 0 0 7px, 0 15px 0 7px;
	}
	.smallKBD {
		/* border: 4px solid; */
		border-radius: 16px;
		box-shadow: 0 0 0 7px, 0 10px 0 7px;
	}
	kbd .label {
		font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 3em;
		line-height: 36px;
		font-weight: bold;
		text-transform: capitalize;
	}

	kbd .labelOnly {
		min-width: 52px;
		min-height: 52px;
	}

	.data {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
	}

	.data .row {
		display: flex;
		justify-content: space-between;
		gap: 5px;
	}

	.rowValue {
		font-weight: 700;
	}
	.row {
		cursor: pointer;
	}
	.row:hover .rowValue {
		text-decoration: underline;
	}
</style>
