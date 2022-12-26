<script lang="ts">
	import { fullInfo, os } from '$stores/ui';
	import type { DemoKey } from '$types/global';
	import { getDisplaySymbol } from '$utils/helpers';
	import { scale } from 'svelte/transition';

	export let key: KeyboardEvent | DemoKey;

	const copyData = (data: string) => () => {
		navigator.clipboard.writeText(data);
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
				<span class="rowkey">.code:</span><span class="rowvalue">{key.code}</span>
			</span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span class="row" on:click={copyData(key.code)}>
				<span class="rowkey">.key:</span><span class="rowvalue">{key.key}</span>
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

		font-family: inherit;
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

	.rowvalue {
		font-weight: 700;
	}
	.row {
		cursor: pointer;
	}
	.row:hover .rowvalue {
		text-decoration: underline;
	}
</style>
