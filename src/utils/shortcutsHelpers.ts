import type { Browser, OS, ShortcutsJSON } from '$types';
import Immutable from 'immutable';
import { getBrowserShortcutsJSON, getKeyList } from './helpers';

export const getBrowserShortcut = (keys: KeyboardEvent[], os: OS, browser: Browser) => {
	const keyList = getKeyList(keys);

	const targetBrowser = getBrowserShortcutsJSON(browser, os);

	const keyMatches = findKeyListMatches(keyList, targetBrowser);
	
	if (keyMatches.length === 0) return [];
	return keyMatches.map((key) => {
		const match = targetBrowser[key];
		return { action: match["text"], shortcut: match["shortcut"] };
	});
};

function filterMatchesAgainstInactiveActionButtons(matches: string[], keyList: string[]) {
	return matches.filter((m) => {
		const inactiveActionButtons = ['meta', 'control', 'shift', 'alt'].filter(
			(k) => !keyList.includes(k)
		);
		let matchHasInactiveButton = false;
		inactiveActionButtons.forEach((b) => {
			const re = new RegExp(`(?=.*(${getKeyRegex(b)})).+`, 'i');
			if (m.match(re)) matchHasInactiveButton = true;
		});
		return !matchHasInactiveButton;
	});
}

function findKeyListMatches(keyList: string[], targetBrowser: ShortcutsJSON) {
	const keySet = Immutable.Set(keyList);	
	
	const res = Object.keys(targetBrowser)?.filter((k) => {
		let shortcutList = targetBrowser[k]["shortcut"][0].map((sh) => sh.toLocaleLowerCase());

		return keySet.isSubset(shortcutList);
	}) || [];
	
	return res;
}

function getKeyListRegex(keyList: string[]) {
	if (keyList.length === 1) {
		const regex = getKeyRegex(keyList[0]);
		return `(?=.*(^(${regex})$))`;
	} else {
		return keyList.map((k) => `(?=.*(${getKeyRegex(k)}))`).join('');
	}
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
			return 'left arrow|left|←';
		case 'arrowright':
			return 'right arrow|right|→';
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
