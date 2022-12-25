import { findByKey, getBrowserShortcutsJSON, getKeyList } from './helpers';

export const getChromeShortcut = (keys: KeyboardEvent[], os: OS, browser: Browser) => {
	const keyList = getKeyList(keys);
	const targetBrowser = getBrowserShortcutsJSON(browser, os);

	if (keyList.length === 1) {
		return findByKey(targetBrowser, keyList[0]);
	}

	const matches = findKeyListMatches(keyList, targetBrowser);
	const filteredMatches = filterMatchesAgainstInactiveActionButtons(matches, keyList);

	if (filteredMatches.length === 0) return null;
	if (filteredMatches.length === 1) return targetBrowser[filteredMatches[0]];
	console.error('Multiple matches found for key list', keyList, filteredMatches);
	return null;
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
	const keyListRegex = keyList.map((k) => `(?=.*(${getKeyRegex(k)}))`).join('');
	const re = new RegExp(`${keyListRegex}.+`, 'i');
	const matches = Object.keys(targetBrowser).filter((k) => k.match(re));
	return matches;
}

// const SEPARATOR = '.?(\\+|\\-|and|\\W|\\s).?';

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
		default:
			return `(\\s|^)${key}(\\s|\\W|$)`;
	}
}

// switch (k.key) {
//     case 'Meta':
//         return '⌘';
//     case 'Shift':
//         return 'Shift';
//     case 'Control':
//         return 'Ctrl';
//     case 'Alt':
//         return 'Option';
//     case 'Escape':
//         return 'Esc';
//     case 'PageUp':
//         return 'PgUp';
//     case 'PageDown':
//         return 'PgDn';
//     case 'ArrowUp':
//         return 'Up arrow';
//     case 'ArrowDown':
//         return 'Down arrow';
//     default:
//         return k.key;
// }
