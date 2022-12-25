<script lang="ts">
	import Keys from '$components/Keys.svelte';
	import Shortcuts from '$components/Shortcuts.svelte';
	import { os } from '$stores/ui';
	import { onMount } from 'svelte';
	import Reset from '$components/Reset.svelte';
	import KeyListener from '$components/KeyListener.svelte';
	import Guide from '$components/Guide.svelte';
	import Switcher from '$components/Switcher.svelte';
	import KeyDataSwitcher from '$components/KeyDataSwitcher.svelte';

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

<main>
	<div class="header">
		<Switcher />
		<Reset />
	</div>
	<Guide />
	<Keys />
	<KeyDataSwitcher />
	<Shortcuts />
	<KeyListener />
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		padding: 10px;
	}
</style>
