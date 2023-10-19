<script lang="ts">
	import Keys from '$components/Keys.svelte';
	import { onMount } from 'svelte';
	import Reset from '$components/Reset.svelte';
	import KeyListener from '$components/KeyListener.svelte';
	import Guide from '$components/Guide.svelte';
	import KeyDataSwitcher from '$components/KeyDataSwitcher.svelte';
	import { keys } from '$stores/keys';
	import DemoKeys from '$components/DemoKeys.svelte';
	import Tooltip from '$components/Tooltip.svelte';

	import { version } from '$app/environment';
	import FilteredShortcutList from '$components/ShortcutList/FilteredShortcutList.svelte';

	onMount(() => {
		window.focus();
	});
</script>

<div class="container">
	<main>
		<Tooltip />
		<div class="header">
			<div class="about">
				<div class="logo">
					<div class="block" />
					<div class="block" />
				</div>
				<b>Default Shortcuts</b><br />
			</div>
		</div>
		<div class="guide">
			<Guide />
			<Reset />
		</div>
	</main>
	<div class="mainKeysContainer">
		{#if $keys.length > 0}
			<Keys />
		{:else}
			<DemoKeys />
		{/if}
	</div>
	<FilteredShortcutList />
	<KeyListener />
</div>
<footer>
	<div>
		<KeyDataSwitcher />
	</div>
	<div class="meta">
		<div class="version">
			v. {version}
		</div>
	</div>
</footer>

<style>
	.container {
		display: flex;
		flex-flow: column nowrap;
		/* min-height: 100vh; */
		margin-bottom: 5rem;
	}
	main {
		max-width: var(--max-width);
		width: 100%;
		margin: 0 auto;
		flex: 1;
	}
	.mainKeysContainer {
		min-height: 240px;
	}
	footer {
		position: fixed;
		bottom: 0;
		text-align: center;
		width: 100vw;
		background-color: var(--main-bg-color);

		display: flex;
		justify-content: space-between;

		border-top: 1px solid var(--main-text-color-opacity-3);

		padding: 0.5rem 1rem;
	}
	.meta {
		display: flex;
		gap: 2rem;
	}

	.block {
		--size: 24px;
		width: var(--size);
		height: var(--size);
		border-radius: 8px;
		background-color: var(--main-button-color);
	}
	.logo {
		display: flex;
		gap: 0.2rem;
	}
	.about {
		max-width: 50%;
		text-align: left;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding-top: 1rem;
	}
	.about b {
		font-weight: bold;
	}
	.header {
		display: flex;
		justify-content: space-between;
	}
	.guide {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 6rem;
	}
</style>
