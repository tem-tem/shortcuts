import type { CSSVarName, CSSVariables, ThemeColors, ThemeName } from '$types';
import { themes } from '$data/themes';
import tinycolor from 'tinycolor2';

export const themeToCSSVariables = (themeName: ThemeName): string => {
	const themeColors = themes[themeName];

	const cssVars = getCSSVarsFromThemeColors(themeColors);
	return constructCSSVarsString(cssVars);
};

const getCSSVarsFromThemeColors = (colors: ThemeColors): CSSVariables => {
	const colorKeys = Object.keys(colors) as [keyof ThemeColors];
	const cssVars = colorKeys.reduce((prev, color) => {
		const tinyColorObj = tinycolor(colors[color]);
		prev[`--main-${color}-color`] = colors[color];
		for (let i = 0; i < 10; i++) {
			prev[`--main-${color}-color-opacity-${i}`] = tinyColorObj.setAlpha(i / 10).toRgbString();
		}
		return prev;
	}, {} as CSSVariables);
	return cssVars;
};

const constructCSSVarsString = (cssVars: CSSVariables): string => {
	const cssVarsKeys = Object.keys(cssVars) as CSSVarName[];
	return cssVarsKeys.reduce((prev, curr) => prev.concat(`${curr}:${cssVars[curr]};\n`), '');
};
