import type { ThemeColors, ThemeName } from '$types';

export const themes: Record<ThemeName, ThemeColors> = {
	light: {
		bg: '#f4f7ff',
		text: '#28293c',
		button: '#2879a4;'
	},
	dark: {
		bg: '#28293c',
		text: '#90a5d7;',
		button: '#f4f7ff'
	},
	pink: {
		bg: '#F9DBBD',
		text: '#0D0628',
		button: '#9A348E'
	}
};
