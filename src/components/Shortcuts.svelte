<script lang="ts">
	import { keys } from '$stores/keys';
	import { getChromeShortcut } from '$utils/shortcutsHelpers';
	import ShortcutCards from './ShortcutCards.svelte';

	let chromeMacShortcut: string | null = '';
	let firefoxMacShortcut: string | null = '';
	let safariMacShortcut: string | null = '';
	let chromeWindowsShortcut: string | null = '';
	let firefoxWindowsShortcut: string | null = '';

	$: if ($keys?.length > 0) {
		chromeMacShortcut = getChromeShortcut($keys, 'mac', 'chrome');
		firefoxMacShortcut = getChromeShortcut($keys, 'mac', 'firefox');
		safariMacShortcut = getChromeShortcut($keys, 'mac', 'safari');
		chromeWindowsShortcut = getChromeShortcut($keys, 'windows', 'chrome');
		firefoxWindowsShortcut = getChromeShortcut($keys, 'windows', 'firefox');
	}
</script>

<div class="cardsGrid">
	{#if chromeMacShortcut && $keys.length > 0}
		<ShortcutCards browser="chrome" os="mac" title={chromeMacShortcut} />
	{/if}
	{#if firefoxMacShortcut && $keys.length > 0}
		<ShortcutCards browser="firefox" os="mac" title={firefoxMacShortcut} />
	{/if}
	{#if safariMacShortcut && $keys.length > 0}
		<ShortcutCards browser="safari" os="mac" title={safariMacShortcut} />
	{/if}
	{#if chromeWindowsShortcut && $keys.length > 0}
		<ShortcutCards browser="chrome" os="windows" title={chromeWindowsShortcut} />
	{/if}
	{#if firefoxWindowsShortcut && $keys.length > 0}
		<ShortcutCards browser="firefox" os="windows" title={firefoxWindowsShortcut} />
	{/if}
</div>

<!-- <div class="browser">
	Chrome
	<div>
		Mac: {chromeMacShortcut}
	</div>
	<div>
		Windows: {chromeWindowsShortcut}
	</div>
</div>

<div class="browser">
	Firefox
	<div>
		Mac: {firefoxMacShortcut}
	</div>
	<div>
		Windows: {firefoxWindowsShortcut}
	</div>
</div>

<div class="browser">
	Safari
	<div>
		Mac: {safariMacShortcut}
	</div>
</div> -->
<style>
	.cardsGrid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1em;
		padding: 10px;
	}
</style>
