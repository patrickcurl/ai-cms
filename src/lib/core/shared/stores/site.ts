import { writable } from 'svelte/store';

export const origin = writable('');
export const language = writable('');
export const siteUrl = writable('');

// Setting | site
export const site = writable({});
export const themeConfig = writable({});
export const custom = writable({});

export const member = writable(false);