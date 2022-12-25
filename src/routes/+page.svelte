<script lang="ts">
	import Keys from '$components/Keys.svelte';
	import Shortcuts from '$components/Shortcuts.svelte';
	import { os } from '$stores/ui';
	import { onMount } from 'svelte';
	import Reset from '$components/Reset.svelte';
	import KeyListener from '$components/KeyListener.svelte';
	import Guide from '$components/Guide.svelte';
	import Switcher from '$components/Switcher.svelte';

	onMount(() => {
		os.set('mac');
		const { userAgent } = navigator;
		if (userAgent.includes('Mac')) {
			os.set('mac');
		} else {
			os.set('windows');
		}
		window.focus();
	});
</script>

<div class="header">
	<Switcher />
	<Reset />
</div>
<Guide />
<Keys />
<Shortcuts />
<KeyListener />

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		padding: 10px;
	}
</style>
