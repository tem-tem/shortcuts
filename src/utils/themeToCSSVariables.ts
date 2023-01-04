import type { CSSVarName, CSSVariables, ThemeColors, ThemeName } from '$types';
import { themes } from '$data/themes';

export const themeToCSSVariables = (themeName: ThemeName): string => {
	const themeColors = themes[themeName];

	const cssVars = getCSSVarsFromThemeColors(themeColors)
	return constructCSSVarsString(cssVars);
};

const getCSSVarsFromThemeColors = (colors: ThemeColors): CSSVariables => {
	const colorKeys = Object.keys(colors) as [keyof ThemeColors];
	const cssVars = colorKeys.reduce((prev, color) => {
		prev[`--main-${color}-color`] = colors[color];
		return prev;
	}, {} as CSSVariables);
	return cssVars;
};

const constructCSSVarsString = (cssVars: CSSVariables): string => {
	const cssVarsKeys = Object.keys(cssVars) as CSSVarName[];
	return cssVarsKeys.reduce((prev, curr) => prev.concat(`${curr}:${cssVars[curr]};\n`), '');
};
