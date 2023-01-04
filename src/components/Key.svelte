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

<kbd in:scale={{ duration: 200 }}>
	<span class="label">
		{getDisplaySymbol(key, $os)}
	</span>
	{#if $fullInfo}
		<div class="data">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span class="row" on:click={copyData(key.code)}>
				<span>.code:</span><span class="rowValue">{key.code}</span>
			</span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span class="row" on:click={copyData(key.key)}>
				<span>.key:</span><span class="rowValue">{key.key}</span>
			</span>
		</div>
	{/if}
</kbd>

<style>
	kbd {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		min-width: 3em;
		min-height: 3em;

		padding: 0.2em 0.5em;

		border: 2px solid;
		border-radius: 5px;
	}
	kbd .label {
		font-size: 3em;
		line-height: 36px;
		text-transform: capitalize;
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
