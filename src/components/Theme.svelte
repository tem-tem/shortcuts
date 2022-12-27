<script lang="ts">
	import { browser } from '$app/environment';
	import { themes } from '$data/themes';
	import { theme } from '$stores/theme';
	import type { ThemeName } from '$types';
	import { themeToCSSVariables } from '$utils/themeToCSSVariables';
	import { onMount } from 'svelte';

	let localThemeName: ThemeName;

	const injectCSSVars = (theme: ThemeName) => {
		if (browser) {
			const newColors = themeToCSSVariables(theme);

			const root = document.querySelector(':root');
			if (root) {
				root.setAttribute('style', newColors);
			}
		}
	};

	onMount(() => {
		const savedTheme =
			browser && JSON.parse(JSON.stringify(localStorage.getItem('defaultTheme')) ?? '');
		theme.set(savedTheme ?? 'pink');
	});

	const setTheme = (newTheme: ThemeName) => {
		theme.set(newTheme);
	};

	theme.subscribe((newTheme) => {
		if (newTheme) {
			localThemeName = newTheme;
			injectCSSVars(newTheme);
		}
	});

	const themeNameTypes = Object.keys(themes) as ThemeName[];
</script>

<div class="container">
	<div class="themeIcons">
		{#each themeNameTypes as themeName}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={`themeIcon ${themeName === localThemeName ? 'active' : ''}`}
				style={`background: ${themes[themeName].bg}`}
				on:click={() => setTheme(themeName)}
			/>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: start;
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
