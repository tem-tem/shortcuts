import { themes } from '$data/themes';
import { themeToCSSVariables } from '$utils/themeToCSSVariables';

// The `load` function runs server-side before your component is rendered
export async function load({ fetch, session, context }) {
	const defaultTheme = 'orange'; // Adjust as necessary
	const cssVars = themeToCSSVariables(defaultTheme);

	return { cssVars };
}
