<script lang="ts">
	import Keys from '$components/Keys.svelte';
	import Shortcuts from '$components/Shortcuts.svelte';
	import { os } from '$stores/ui';
	import { onMount } from 'svelte';
	import Reset from '$components/Reset.svelte';
	import KeyListener from '$components/KeyListener.svelte';
	import Guide from '$components/Guide.svelte';

	onMount(() => {
		const { userAgent } = navigator;
		if (userAgent.includes('Mac')) {
			os.set('mac');
		} else {
			os.set('windows');
		}
		window.focus();
	});
</script>

<Reset />
<Guide />
<Keys />
<Shortcuts />
<KeyListener />
