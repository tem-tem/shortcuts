<script lang="ts">
	import { keys } from '$stores/keys';
	import { getBrowserShortcut } from '$utils/shortcutsHelpers';
	import { fade } from 'svelte/transition';
	import ShortcutCards from './ShortcutCards.svelte';
	import { os } from '$stores/ui';

	$: chromeShortcuts = $keys.length ? getBrowserShortcut($keys, $os, 'chrome') : [];
	$: firefoxShortcuts = $keys.length ? getBrowserShortcut($keys, $os, 'firefox') : [];
	$: safariShortcuts = $keys.length ? getBrowserShortcut($keys, $os, 'safari') : [];

	$: matchedShortcuts = [
		...chromeShortcuts,
		...firefoxShortcuts,
		...safariShortcuts,
	].sort((a, b) => a.unmatchedKeys - b.unmatchedKeys);
	$: numberShortcuts = matchedShortcuts.length;
</script>

<div class="messageBlock">
	{#if numberShortcuts === 0 && $keys.length > 1}
		<div class="message" in:fade={{ duration: 200 }}>
			<p>This shortcut isn't registered as a default browser shortcut.</p>
			<p>According to our database.</p>
		</div>
	{/if}
	{#if numberShortcuts > 3}
		<div class="message" in:fade={{ duration: 200 }}>
			<p>Found {numberShortcuts} shortcuts.</p>
		</div>
	{/if}
</div>
{#if numberShortcuts > 0}
	<div class="divider" in:fade={{ duration: 200 }} />
{/if}
<div class={`cardsGrid ${numberShortcuts > 0 ? 'show' : ''}`}>
	{#if matchedShortcuts.length > 0}
		{#each matchedShortcuts as shortcut}
			<ShortcutCards
				browser={shortcut.browser}
				os={shortcut.os}
				title={shortcut.action}
				shortcut={shortcut.shortcut}
			/>
		{/each}
	{/if}
</div>

<style>
	.cardsGrid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		border-left: 0.5px solid;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	.show {
		opacity: 1;
	}
	.divider {
		border-top: 0.5px solid;
		opacity: 0.5;
	}
	.messageBlock {
		padding: 20px;
		height: 40px;
		width: 100%;
	}

	.message {
		text-align: center;
	}
</style>
