import { writable } from 'svelte/store';

export const tooltipMessage = writable<string | null>(null);
