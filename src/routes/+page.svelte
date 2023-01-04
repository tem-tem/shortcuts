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

<div class="container">
	<main>
		<Tooltip />
		<Theme />
		<div class="header">
			<div class="about">
				<b>Default Shortcuts</b> is a tool for searching keyboard shortcuts across browsers.<br />
			</div>
			<Switcher />
		</div>
		<div class="guide">
			<Guide />
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
			Browsers: Chrome, Firefox, and Safari.<br />
			OS: Windows and Mac.<br />
			v.0.2.1<br />
			<br />
			<a href="https://twitter.com/intent/tweet?text=Check%20out%20DefaultShortcuts.com%20-%20"
				>Share on twitter</a
			>
		</div>
		<div class="team">
			2022 | Made by <a href="https://github.com/tem-tem">Tem</a> and
			<a href="https://github.com/Sergushka">Aleksander</a>
		</div>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-flow: column nowrap;
		min-height: 100vh;
	}
	main {
		max-width: 800px;
		margin: 0 auto;
		flex: 1;
	}
	footer {
		padding: 80px 0 30px;
		max-width: 800px;
		margin: 0 auto;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 2rem;
	}
	.about {
		max-width: 50%;
		text-align: left;
	}
	.team {
		text-align: left;
	}
	.header {
		display: flex;
		justify-content: space-between;
		/* height: 30px; */
	}
	.guide {
		/* margin: 40px 0; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
