<script lang="ts">
	import { demoShortcuts, demoShortcutsWindows } from '$data/demo';
	import { os } from '$stores/ui';
	import type { DemoKey } from '$types';
	import { onMount } from 'svelte';
	import Key from './Key.svelte';

	const singleKeyDelay = 500;
	const shortcutDelay = 3000;

	let demoKeys: DemoKey[] = [];

	$: shortcutList = $os === 'mac' ? demoShortcuts : demoShortcutsWindows;

	const fillDemoKeysWithDelay = (keys: DemoKey[]) => {
		demoKeys = [];
		keys.map((key, i) => {
			setTimeout(() => {
				demoKeys = [...demoKeys, key];
			}, i * singleKeyDelay);
		});
	};

	const loopDemoShortcuts = () => {
		shortcutList.map((shortcut, i) => {
			setTimeout(() => {
				fillDemoKeysWithDelay(shortcut);
			}, i * shortcutDelay);
		});
		setTimeout(() => {
			loopDemoShortcuts();
		}, shortcutList.length * shortcutDelay);
	};

	onMount(() => {
		setTimeout(() => {
			loopDemoShortcuts();
		}, 1500);
	});
</script>

<div class="keys">
	{#each demoKeys as key}
		<Key {key} />
	{/each}
</div>

<style>
	.keys {
		opacity: 0.2;
		pointer-events: none;

		display: flex;
		flex-wrap: wrap;

		min-height: 100px;

		gap: 0.5em;
		padding: 0.5em;
		margin: 20px;

		justify-content: center;
		align-items: center;

		border-radius: 10px;
	}
</style>
