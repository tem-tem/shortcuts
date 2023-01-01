<script lang="ts">
	import { browser } from '$app/environment';
	import { LS_KEYS } from '$constants';
	import { themes } from '$data/themes';
	import { themeName } from '$stores/theme';
	import type { ThemeName } from '$types';
	import { themeToCSSVariables } from '$utils/themeToCSSVariables';
	import { onMount } from 'svelte';

	let scopedThemeName: ThemeName;

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
		const savedThemeName = browser && (localStorage.getItem(LS_KEYS.themeName) as ThemeName);
		themeName.set(savedThemeName || 'pink');
	});

	const setThemeName = (newTheme: ThemeName) => {
		themeName.set(newTheme);
	};

	themeName.subscribe((newTheme) => {
		if (newTheme) {
			scopedThemeName = newTheme;
			injectCSSVars(newTheme);
		}
	});

	const themeNames = Object.keys(themes) as ThemeName[];
</script>

<div class="container">
	<div class="themeIcons">
		{#each themeNames as themeName}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={`themeIcon ${themeName === scopedThemeName ? 'active' : ''}`}
				style={`background: ${themes[themeName].bg}`}
				on:click={() => setThemeName(themeName)}
			/>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		width: fit-content;
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
