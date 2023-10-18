import type { DemoKey } from '$types';
import { ACTION_KEYS } from '$constants';

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
	if (ACTION_KEYS[key.key] != null) {
		return ACTION_KEYS[key.key][os];
	}
	return key.key.toLocaleLowerCase();
};

export const getKeyList = (keys: KeyboardEvent[]) => {
	return keys.map((k) => {
		if (k.code.includes('Key')) return k.code[3].toLocaleLowerCase();
		return k.key.toLocaleLowerCase();
	});
};
