<script lang="ts">
	import shortcutList from '$data/json-index.json';
	import { keys } from '$stores/keys';
	import { osMac, osWindows } from '$stores/filter';
	import ShortcutList from './ShortcutList.svelte';
	import keyMappings from '$data/keyMappings.json';

	const reverseMappings: Record<string, string> = {};
	Object.entries(keyMappings).forEach(([standardKey, variations]) => {
		variations.forEach((variation) => {
			reverseMappings[variation.toLowerCase()] = standardKey;
		});
	});

	$: currentCombination = $keys.map((key) => {
		const { key: keyName } = key;
		return reverseMappings[keyName.toLowerCase()] || keyName.toLowerCase();
	});

	$: filteredShortcuts = shortcutList.filter((shortcut) => {
		const { shortcut: combinations, apps } = shortcut;
		if ($osMac && !$osWindows && apps && !apps.some((app) => app.os === 'mac')) return false;
		if ($osWindows && !$osMac && apps && !apps.some((app) => app.os === 'windows')) return false;

		return combinations.some((combination) =>
			currentCombination.every((key) => combination.includes(key))
		);
	});
</script>

<div class="listContainer">
	<div class="header">
		{#if filteredShortcuts.length === shortcutList.length}
			<h3>All Shortcuts</h3>
		{:else}
			<h3>Found {filteredShortcuts.length} match{filteredShortcuts.length != 1 ? 'es' : ''}</h3>
		{/if}
		<div>
			<label>
				<input type="checkbox" bind:checked={$osMac} />
				Mac
			</label>
			<label>
				<input type="checkbox" bind:checked={$osWindows} />
				Windows
			</label>
		</div>
	</div>
	<ShortcutList list={filteredShortcuts} />
</div>

<!-- {#if filteredShortcuts.length > 0}
{:else}
    {#if $keys.length > 0}
        <div class="listContainer">
            <h3>No matches</h3>
        </div>
    {/if}
{/if} -->

<style>
	.listContainer {
		margin: 3rem 0;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: var(--max-width);
		width: 100%;
		margin: 0 auto;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
