<script lang="ts">
	import Keys from '$components/Keys.svelte';
	import Shortcuts from '$components/Shortcuts.svelte';
	import { onMount } from 'svelte';
	import Reset from '$components/Reset.svelte';
	import KeyListener from '$components/KeyListener.svelte';
	import Guide from '$components/Guide.svelte';
	import Switcher from '$components/Switcher.svelte';
	import KeyDataSwitcher from '$components/KeyDataSwitcher.svelte';
	import { keys } from '$stores/keys';
	import DemoKeys from '$components/DemoKeys.svelte';
	import Theme from '$components/Theme.svelte';

	onMount(() => {
		window.focus();
	});
</script>

<main>
	<Theme />
	<div class="header super">
		<h1>Default Shortcuts</h1>
		<Switcher />
	</div>
	<Guide />
	<div class="header">
		<div />
		<Reset />
	</div>
	{#if $keys.length > 0}
		<Keys />
	{:else}
		<DemoKeys />
	{/if}
	<KeyDataSwitcher />
	<Shortcuts />
	<KeyListener />
</main>
<footer>
	<div>
		2022 | Made by <a href="https://github.com/tem-tem">Tem</a> and
		<a href="https://github.com/Sergushka">Aleksander</a>
	</div>
	<div>Tech stack: SvelteKit, Typescript + Python for scraping.</div>
</footer>

<style>
	.super {
		margin-top: 40px;
	}
	h1 {
		font-size: 3rem;
	}
	main {
		max-width: 800px;
		margin: 0 auto;
		min-height: calc(100vh - 140px);
	}
	footer {
		padding: 40px 0;
		text-align: center;
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
