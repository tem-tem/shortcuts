<script lang="ts">
	import { demoShortcuts } from '$data/demo';
	import type { DemoKey } from '$types/global';
	import { onMount } from 'svelte';
	import { crossfade, fly, slide } from 'svelte/transition';
	import Key from './Key.svelte';

    const singleKeyDelay = 500;
    const shortcutDelay = 3000;

	let demoKeys: DemoKey[] = [];

	const fillDemoKeysWithDelay = (keys: DemoKey[]) => {
        demoKeys = [];
		keys.map((key, i) => {
			setTimeout(() => {
                demoKeys = [...demoKeys, key];
			}, i * singleKeyDelay);
		});
	};

	const loopDemoShortcuts = () => {
		demoShortcuts.map((shortcut, i) => {
			setTimeout(() => {
				fillDemoKeysWithDelay(shortcut);
			}, i * shortcutDelay);
		});
        setTimeout(() => {
            loopDemoShortcuts();
        }, demoShortcuts.length * shortcutDelay);
	}

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
