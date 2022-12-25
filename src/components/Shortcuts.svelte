<script lang="ts">
	import { keys } from '$stores/keys';
	import { getBrowserShortcut } from '$utils/shortcutsHelpers';
	import ShortcutCards from './ShortcutCards.svelte';

	$: chromeMacShortcuts = $keys.length ? getBrowserShortcut($keys, 'mac', 'chrome') : [];
	$: firefoxMacShortcuts = $keys.length ? getBrowserShortcut($keys, 'mac', 'firefox') : [];
	$: safariMacShortcuts = $keys.length ? getBrowserShortcut($keys, 'mac', 'safari') : [];
	$: chromeWindowsShortcuts = $keys.length ? getBrowserShortcut($keys, 'windows', 'chrome') : [];
	$: firefoxWindowsShortcuts = $keys.length ? getBrowserShortcut($keys, 'windows', 'firefox') : [];
	$: numberShortcuts =
		chromeMacShortcuts.length +
		firefoxMacShortcuts.length +
		safariMacShortcuts.length +
		chromeWindowsShortcuts.length +
		firefoxWindowsShortcuts.length;
</script>

<div class="messageBlock">
	{#if numberShortcuts === 0 && $keys.length > 1}
		<div class="message">
			<p>This shortcut isn't registered as a default browser shortcut.</p>
			<p>According to our database.</p>
		</div>
	{/if}
	{#if numberShortcuts > 3}
		<div class="message">
			<p>Found {numberShortcuts} shortcuts.</p>
		</div>
	{/if}
</div>
{#if numberShortcuts > 0}
	<div class="divider" />
{/if}
<div class={`cardsGrid ${numberShortcuts > 0 ? 'show' : ''}`}>
	{#if chromeMacShortcuts.length > 0}
		{#each chromeMacShortcuts as shortcut}
			<ShortcutCards
				browser="chrome"
				os="mac"
				title={shortcut.action}
				shortcut={shortcut.shortcut}
			/>
		{/each}
	{/if}
	{#if firefoxMacShortcuts.length > 0}
		{#each firefoxMacShortcuts as shortcut}
			<ShortcutCards
				browser="firefox"
				os="mac"
				title={shortcut.action}
				shortcut={shortcut.shortcut}
			/>
		{/each}
	{/if}
	{#if safariMacShortcuts.length > 0}
		{#each safariMacShortcuts as shortcut}
			<ShortcutCards
				browser="safari"
				os="mac"
				title={shortcut.action}
				shortcut={shortcut.shortcut}
			/>
		{/each}
	{/if}
	{#if chromeWindowsShortcuts.length > 0}
		{#each chromeWindowsShortcuts as shortcut}
			<ShortcutCards
				browser="chrome"
				os="windows"
				title={shortcut.action}
				shortcut={shortcut.shortcut}
			/>
		{/each}
	{/if}
	{#if firefoxWindowsShortcuts.length > 0}
		{#each firefoxWindowsShortcuts as shortcut}
			<ShortcutCards
				browser="firefox"
				os="windows"
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
