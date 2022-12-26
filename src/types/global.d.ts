import type { COLOR_NAMES, BROWSERS } from 'src/constants';

export type OS = 'mac' | 'windows';

type ShortcutsJSON = { [shortcut: string]: string };

declare module '*.json' {
	const value: ShortcutsJSON;
	export default value;
}
export type Browser = typeof BROWSERS[number];

type DemoKey = {
	code: string;
	key: string;
};

type ThemeColors = Record<typeof COLOR_NAMES[number], string>;
