import chromeMac from '$data/chromeMac.json';
import chromeWin from '$data/chromeWin.json';
import firefoxMac from '$data/firefoxMac.json';
import firefoxWin from '$data/firefoxWin.json';
import safari from '$data/safari.json';
import type { Browser, DemoKey, OS, ShortcutsJSON } from '$types';

export const reorderKeys = (keys: KeyboardEvent[]) => {
	let metaKey: KeyboardEvent | undefined;
	let shiftKey: KeyboardEvent | undefined;
	let ctrlKey: KeyboardEvent | undefined;
	let altKey: KeyboardEvent | undefined;
	const otherKeys: KeyboardEvent[] = [];
	keys.map((k) => {
		switch (k.key) {
			case 'Meta':
				metaKey = k;
				break;
			case 'Shift':
				shiftKey = k;
				break;
			case 'Control':
				ctrlKey = k;
				break;
			case 'Alt':
				altKey = k;
				break;
			default:
				otherKeys.push(k);
				break;
		}
	});
	const orderedKeys = otherKeys;
	if (altKey) orderedKeys.unshift(altKey);
	if (shiftKey) orderedKeys.unshift(shiftKey);
	if (ctrlKey) orderedKeys.unshift(ctrlKey);
	if (metaKey) orderedKeys.unshift(metaKey);
	return orderedKeys;
};

export const isKeyInList = (key: KeyboardEvent, keys: KeyboardEvent[]) => {
	return keys.some((k) => k.key.toLocaleLowerCase() === key.key.toLocaleLowerCase());
};

export const replaceKey = (key: KeyboardEvent, keys: KeyboardEvent[]) => {
	return keys.map((k) => (k.key === key.key ? key : k));
};

export const getDisplaySymbol = (key: KeyboardEvent | DemoKey, os: 'windows' | 'mac') => {
	switch (os) {
		case 'windows':
			return getDisplaySymbolWindows(key);
		case 'mac':
			return getDisplaySymbolMac(key);
	}
};

const getDisplaySymbolMac = (key: KeyboardEvent | DemoKey) => {
	switch (key.key) {
		case 'Meta':
			return '⌘';
		case 'Shift':
			return '⇧';
		case 'Control':
			return '⌃';
		case 'Alt':
			return '⌥';
		case ' ':
			return 'Space';
		default:
			return key.key.toLocaleLowerCase();
	}
};

const getDisplaySymbolWindows = (key: KeyboardEvent | DemoKey) => {
	switch (key.key) {
		case 'Meta':
			return 'Win';
		case 'Shift':
			return '⇧';
		case 'Control':
			return 'Ctrl';
		case 'Alt':
			return 'Alt';
		case ' ':
			return 'Space';
		default:
			return key.key.toLocaleLowerCase();
	}
};

export const getKeyList = (keys: KeyboardEvent[]) => {
	return keys.map((k) => {
		if (k.code.includes('Key')) return k.code[3].toLocaleLowerCase();
		return k.key.toLocaleLowerCase();
	});
};

export function findByKey(object: ShortcutsJSON, key: string) {
	const foundKey = Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
	return foundKey ? object[foundKey] : null;
}

export const getBrowserShortcutsJSON = (browser: Browser, os: OS): ShortcutsJSON => {
	switch (browser) {
		case 'chrome':
			if (os === 'mac') return chromeMac;
			return chromeWin;
		case 'firefox':
			if (os === 'mac') return firefoxMac;
			return firefoxWin;
		case 'safari':
			return safari;
	}
};

export const isActionButton = (key: string) => {
	return ['meta', 'shift', 'control', 'alt', ' '].includes(key);
};
