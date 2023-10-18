export const BROWSERS = ['chrome', 'firefox', 'safari'] as const;
export const COLOR_NAMES = ['bg', 'text', 'button'] as const;
export const THEME_TYPES = ['light', 'dark', 'orange'] as const;
export const LS_KEYS = { themeName: 'preferredTheme', isLight: 'isLight' } as const;
export const ACTION_KEYS: Record<string, Record<string, string>> = {
	Meta: { windows: 'Win', mac: '⌘' },
	Shift: { windows: '⇧', mac: '⇧' },
	Control: { windows: 'Ctrl', mac: '⌃' },
	Alt: { windows: 'Alt', mac: '⌥' },
	' ': { windows: 'Space', mac: 'Space' }
} as const;
