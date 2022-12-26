<script lang="ts">
	import { browser } from '$app/environment';
	import { themes } from '$data/themes';
	import { theme } from '$stores/ui';
	import type { ThemeColors } from '$types/global';
	import { onMount } from 'svelte';

	onMount(() => {
		theme.set(JSON.parse(localStorage.getItem('defaultTheme') as string));
	});

	const setTheme = (newTheme: ThemeColors) => {
		theme.set(newTheme);
	};

	theme.subscribe((newTheme) => {
		if (browser) {
			const newColors = `
                --main-bg-color: ${newTheme.bg};
                --main-text-color: ${newTheme.text};
                --main-button-color: ${newTheme.button};`;
			const { body } = document;
			body.setAttribute('style', newColors);
		}
	});
</script>

<div class="container">
	<div class="themeIcons">
		{#each Object.keys(themes) as themeName}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={`themeIcon ${themes[themeName].button === $theme.button ? 'active' : ''}`}
				style={`background: ${themes[themeName].bg}`}
				on:click={() => setTheme(themes[themeName])}
			/>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: start;
		justify-content: start;
		gap: 1rem;
		height: 2rem;
	}

	.themeIcons {
		display: flex;
	}

	.themeIcon {
		width: 2rem;
		height: 1rem;
		transition: height 0.2s ease-in-out;
		cursor: pointer;
	}
	.container:hover .themeIcon {
		height: 2rem;
	}

	.themeIcon.active {
		height: 1rem;
	}
</style>
