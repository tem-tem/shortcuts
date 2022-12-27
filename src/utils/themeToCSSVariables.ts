import type { CSSVarName, CSSVariables, ThemeColors, ThemeName } from '$types';
import { themes } from '$data/themes';

export const themeToCSSVariables = (themeName: ThemeName): string => {
	const themeColors = themes[themeName];

	// keys to css vars
	const colorKeys = Object.keys(themeColors) as [keyof ThemeColors];
	const cssVars = colorKeys.reduce((prev, color) => {
		prev[`--main-${color}-color`] = themeColors[color];
		return prev;
	}, {} as CSSVariables);

	// construct CSS-injectable string
	const cssVarsKeys = Object.keys(cssVars) as CSSVarName[];
	return cssVarsKeys.reduce((prev, curr) => prev.concat(`${curr}:${cssVars[curr]};\n`), '');
};
