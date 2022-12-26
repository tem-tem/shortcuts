import type { ThemeColors } from '$types/global';

export const themeToCSSVariables = (theme: ThemeColors) => {
	// replace keys with CSS vars format
	Object.keys(theme).forEach((color) => {
		// @ts-expect-error TODO: types
		delete Object.assign(theme, { [`--main-${color}-color`]: theme[color] })[color];
		return theme;
	});

	const colors = Object.keys(theme);
	return colors.reduce((prev, curr) => {
		// @ts-expect-error TODO: types
		return prev.concat(`${curr}: ${theme[curr]};\n`);
	}, '');
};
