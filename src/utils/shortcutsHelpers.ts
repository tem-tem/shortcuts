import type { Browser, OS, ShortcutsJSON } from '$types';
import Immutable from 'immutable';
import { getBrowserShortcutsJSON, getKeyList } from './helpers';

export const getBrowserShortcut = (keys: KeyboardEvent[], os: OS, browser: Browser) => {
	const keyList = getKeyList(keys);

	const targetBrowser = getBrowserShortcutsJSON(browser, os);

	const keyMatchIndecies = findKeyListMatches(keyList, targetBrowser);

	if (keyMatchIndecies.length === 0) return [];
	return keyMatchIndecies.map((index) => {
		const match = targetBrowser[index];
		return {
			action: match.text,
			shortcut: match.shortcut[0].join(' + '),
			unmatchedKeys: match.shortcut[0].length - keyList.length,
			os,
			browser
		};
	});
};

function findKeyListMatches(keyList: string[], targetBrowser: ShortcutsJSON) {
	const keySet = Immutable.Set(keyList);
	const indecies = Array.from(targetBrowser.keys());

	const res =
		indecies?.filter((k) => {
			let shortcutList = targetBrowser[k]['shortcut'][0].map((shortcutKey) =>
				shortcutKey.toLocaleLowerCase()
			);

			for (let i = 0; i < keySet.size; i++) {
				let key = keySet.toArray()[i];
				let regex = getKeyRegex(key);
				let match = shortcutList.some((sh) => sh.match(regex));
				if (!match) return false;
			}
			return true;
		}) || [];

	return res;
}

function getKeyRegex(key: string) {
	switch (key) {
		case 'meta':
			return 'meta|⌘|command|windows|win';
		case 'shift':
			return 'shift';
		case 'control':
			return 'ctrl|control';
		case 'alt':
			return 'alt|option';
		case 'arrowleft':
			return 'left arrow|left|←|arrowkeys';
		case 'arrowright':
			return 'right arrow|right|→|arrowkeys';
		case 'arrowup':
			return 'up arrow|↑|arrowkeys';
		case 'arrowdown':
			return 'down arrow|↓|arrowkeys';
		case 'pageup':
			return 'page up|pgup|pg up|pg up|pgup|pg up|pg up';
		case 'pagedown':
			return 'page down|pgdown|pg down|pg down|pgdown|pg down|pg down';
		case ' ':
			return `space|spacebar|space bar`;
		default:
			// eslint-disable-next-line
			if (key.match(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/)) {
				key = `\\${key}`;
			}
			return `(\\s|\\W|^|"|')${key}(\\s|\\W|$|"|')`;
	}
}

export function normalizeShortcut(shortcutArray: string[][]) {
	const keyMap: Record<string, string> = {
		meta: 'Meta',
		shift: 'Shift',
		control: 'Control',
		alt: 'Alt',
		arrowleft: 'ArrowLeft',
		arrowright: 'ArrowRight',
		arrowup: 'ArrowUp',
		arrowdown: 'ArrowDown',
		pageup: 'PageUp',
		pagedown: 'PageDown',
		' ': 'Space'
	};

	return shortcutArray.map((shortcut) => {
		for (const key in keyMap) {
			const regex = new RegExp(getKeyRegex(key), 'gi');
			shortcut = shortcut.map((keyName) => keyName.replace(regex, keyMap[key]));
		}
		return shortcut;
	});
}
