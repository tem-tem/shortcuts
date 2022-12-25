<script lang="ts">
	import Keys from '$components/Keys.svelte';
	import Shortcuts from '$components/Shortcuts.svelte';
	import { keys } from '$stores/keys';
	import { os } from '$stores/ui';
	import { onMount } from 'svelte';

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

<div class="header">
	<pre>Hit keys one by one to test a shortcut</pre>
	{#if $keys.length > 0}
		<pre>
            <button
				on:click={() => {
					keys.reset();
				}}>Reset (ESC)</button
			>
        </pre>
	{/if}
</div>
<Keys />
<Shortcuts />

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1em;
		height: 40px;
	}
</style>
