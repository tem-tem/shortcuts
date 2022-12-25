import { writable } from 'svelte/store';

export const os = writable<'windows' | 'mac'>('mac');
