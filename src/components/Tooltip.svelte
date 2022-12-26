<script lang="ts">
	import { browser } from '$app/environment';
	import { tooltipMessage } from '$stores/ui';
	import { onMount } from 'svelte';
	import { fade, blur } from 'svelte/transition';

	let tooltip: HTMLDivElement;
	let timeout: ReturnType<typeof setTimeout>;

	onMount(() => {
		if (browser) {
			document.addEventListener('mousemove', getMouseCoordinates, false);
		}
		return () => {
			document.removeEventListener('mousemove', getMouseCoordinates, false);
		};
	});

	function getMouseCoordinates(e: MouseEvent) {
		tooltip.style.left = e.pageX + 15 + 'px';
		tooltip.style.top = e.pageY + 15 + 'px';
	}

	$: if ($tooltipMessage) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			tooltipMessage.set(null);
		}, 1000);
	}
</script>

<div class="coordinates" bind:this={tooltip}>
	{#if $tooltipMessage}
		<div class="tooltip" in:fade={{ duration: 200 }} out:blur>
			{$tooltipMessage}
		</div>
	{/if}
</div>

<style>
	.coordinates {
		z-index: 100;
		display: block;
		position: absolute;
	}
	.tooltip {
		padding: 0.5rem 1rem;
		border-radius: 1rem;

		background: rgba(0, 0, 0, 0.75);
		color: #fff;
		border: 1px solid black;

		text-align: center;
	}
</style>
