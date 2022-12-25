import { isKeyInList, reorderKeys, replaceKey } from '$utils/helpers';
import { writable } from 'svelte/store';

const createKeysStore = () => {
	const { subscribe, set, update } = writable<KeyboardEvent[]>([]);

	const add = (key: KeyboardEvent) =>
		update((keys) => {
			if (isKeyInList(key, keys)) return replaceKey(key, keys);
			return reorderKeys([...keys, key]);
		});

	return {
		subscribe,
		set,
		update,
		add,
		remove: (key: KeyboardEvent) => update((keys) => keys.filter((k) => k !== key)),
		reset: () => set([]),
		removeLast: () => update((keys) => keys.slice(0, -1))
	};
};

export const keys = createKeysStore();
