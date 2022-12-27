import { writable } from 'svelte/store';

export const os = writable<'windows' | 'mac'>('mac');
export const fullInfo = writable<boolean>(true);
