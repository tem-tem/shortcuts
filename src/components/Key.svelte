<script lang="ts">
	import { os } from '$stores/ui';
	import { getDisplaySymbol } from '$utils/helpers';

	export let key: KeyboardEvent;
</script>

<kbd>
	<span class="label">
		{getDisplaySymbol(key, $os)}
	</span>
	<div class="data">
		<span class="row">
			<span class="rowkey">e.code:</span><span class="rowvalue">{key.code}</span>
		</span>
		<span class="row">
			<span class="rowkey">e.key:</span><span class="rowvalue">{key.key}</span>
		</span>
	</div>
	<div class="code" />
</kbd>

<style>
	kbd {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		max-width: 100%;
		min-width: 50px;

		padding: 0.2em 0.5em;

		border: 1px solid;
		border-radius: 4px;

		font-family: inherit;
		font-size: 16px;
		color: #555;
	}
	kbd .label {
		font-size: 48px;
		line-height: 36px;
		min-height: 60px;
		text-transform: capitalize;
	}

	.data {
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
</style>
