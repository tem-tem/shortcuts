import { writable } from 'svelte/store';

export const osMac = writable<boolean>(true);
export const osWindows = writable<boolean>(true);
