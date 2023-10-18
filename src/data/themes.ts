import type { ThemeColors, ThemeName } from '$types';

export const themes: Record<ThemeName, ThemeColors> = {
	light: {
		bg: '#f4f7ff',
		text: '#28293c',
		button: '#2879a4',
		buttonT: '#2879a420'
	},
	dark: {
		bg: '#28293c',
		text: '#90a5d7;',
		button: '#f4f7ff',
		buttonT: '#f4f7ff20'
	},
	pink: {
		bg: '#F9DBBD',
		text: '#0D0628',
		button: '#9A348E',
		buttonT: '#9A348E20'
	}
};
