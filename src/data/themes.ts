import type { ThemeColors, ThemeName } from '$types';

export const themes: Record<ThemeName, ThemeColors> = {
	light: {
		bg: '#f4f7ff',
		text: '#28293c',
		button: '#2879a4'
	},
	dark: {
		bg: '#000000',
		text: '#90a5d7;',
		button: '#37b8ea'
	},
	orange: {
		bg: '#ececec',
		text: '#0D0628',
		button: '#de3a1e'
	}
};
