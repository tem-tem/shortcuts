import { getBrowserShortcutsJSON, getKeyList } from './helpers';

export const getBrowserShortcut = (keys: KeyboardEvent[], os: OS, browser: Browser) => {
	const keyList = getKeyList(keys);
	const targetBrowser = getBrowserShortcutsJSON(browser, os);

	const matches = findKeyListMatches(keyList, targetBrowser);
	const filteredMatches = filterMatchesAgainstInactiveActionButtons(matches, keyList);

	if (filteredMatches.length === 0) return [];
	return filteredMatches.map((m) => {
		return { action: targetBrowser[m], shortcut: m };
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
	const keyListRegex = getKeyListRegex(keyList);
	const re = new RegExp(`${keyListRegex}.+`, 'i');
	const matches = Object.keys(targetBrowser).filter((k) => k.match(re));
	return matches;
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
