import type { BROWSERS, COLOR_NAMES, THEME_TYPES } from '$constants';

export type OS = 'mac' | 'windows';

export type ShortcutsJSON = {
	shortcut: string[][];
	text: string;
}[];

export type Browser = (typeof BROWSERS)[number];

export type DemoKey = {
	code: string;
	key: string;
};

type ColorNames = (typeof COLOR_NAMES)[number];

export type ThemeColors = Record<ColorNames, string>;

export type ThemeName = (typeof THEME_TYPES)[number];

export type CSSVarName = `--main-${ColorNames}-color`;

export type CSSVariables = Record<CSSVarName, string>;
