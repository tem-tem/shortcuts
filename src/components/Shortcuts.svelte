<script lang="ts">
	import { keys } from '$stores/keys';
	import { getChromeShortcut } from '$utils/shortcutsHelpers';

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

<div class="browser">
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
</div>

<style>
	.browser {
		margin-bottom: 1em;
	}
</style>
