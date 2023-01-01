import { browser } from '$app/environment';
import { LS_KEYS } from '$constants';
import type { ThemeName } from '$types';
import { writable } from 'svelte/store';

export const themeName = writable<ThemeName | null>(null);

themeName.subscribe((value) => {
	if (browser && value) {
		localStorage.setItem(LS_KEYS.themeName, value);
	}
});
