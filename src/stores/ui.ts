import { browser } from '$app/environment';
import { themes } from '$data/themes';
import type { ThemeColors } from '$types/global';
import { writable } from 'svelte/store';

export const os = writable<'windows' | 'mac'>('mac');
export const fullInfo = writable<boolean>(true);

const savedTheme = browser && JSON.parse(localStorage.getItem('defaultTheme') as string);
export const theme = writable<ThemeColors>(savedTheme || themes.pink);

theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('defaultTheme', JSON.stringify(value));
	}
});

export const tooltipMessage = writable<string | null>(null);
