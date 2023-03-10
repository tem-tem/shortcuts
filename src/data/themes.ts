import type { ThemeColors, ThemeName } from '$types';

export const themes: Record<ThemeName, ThemeColors> = {
	light: {
		bg: '#f4f7ff',
		text: '#28293c',
		button: '#0f0f0f'
	},
	dark: {
		bg: '#28293c',
		text: '#f4f7ff',
		button: '#f4f7ff'
	},
	pink: {
		bg: '#F9DBBD',
		text: '#0D0628',
		button: '#9A348E'
	}
};
