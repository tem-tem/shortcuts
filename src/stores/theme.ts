import { browser } from '$app/environment';
import type { ThemeName } from '$types';
import { writable } from 'svelte/store';

export const theme = writable<ThemeName | null>(null);

theme.subscribe((value) => {
	if (browser && value) {
		localStorage.setItem('defaultTheme', value);
	}
});
