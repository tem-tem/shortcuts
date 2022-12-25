type OS = 'mac' | 'windows';

type ShortcutsJSON = { [shortcut: string]: string };

declare module '*.json' {
	const value: ShortcutsJSON;
	export default value;
}

type Browser = 'chrome' | 'firefox' | 'safari';
