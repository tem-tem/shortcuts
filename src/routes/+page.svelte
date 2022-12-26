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
	import Tooltip from '$components/Tooltip.svelte';

	onMount(() => {
		window.focus();
	});
</script>

<main>
	<Tooltip />
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
	<div class="about">
		Default Shortcuts allows you to search for keyboard shortcuts across popular browsers such as
		Chrome, Firefox, and Safari on both Windows and Mac operating systems. Note that this app
		requires a keyboard and cannot be used on mobile devices.
	</div>
	<div class="team">
		<div>
			2022 | Made by <a href="https://github.com/tem-tem">Tem</a> and
			<a href="https://github.com/Sergushka">Aleksander</a>
		</div>
		<p>Tech stack: SvelteKit, Typescript<br>+ Python for scraping.</p>
	</div>
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
		min-height: calc(100vh - 180px);
	}
	footer {
		padding: 40px 0;
		text-align: center;
		max-width: 800px;
		margin: 0 auto;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 2rem;
	}
	.about {
		max-width: 50%;
		text-align: left;
	}
	.team {
		text-align: right;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
	}
</style>
