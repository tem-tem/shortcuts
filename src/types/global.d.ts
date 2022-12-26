export type OS = 'mac' | 'windows';

type ShortcutsJSON = { [shortcut: string]: string };

declare module '*.json' {
	const value: ShortcutsJSON;
	export default value;
}

export type Browser = 'chrome' | 'firefox' | 'safari';

type DemoKey = {
	code: string;
	key: string;
};

type ThemeColors = {
	bg: string;
	text: string;
	button: string;
};
