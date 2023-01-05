<script>
	import { keys } from '$stores/keys';
	import { fullInfo } from '$stores/ui';
	import { fade } from 'svelte/transition';
</script>

{#if $keys.length > 0}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="container" on:click={() => ($fullInfo = !$fullInfo)} in:fade={{ duration: 200 }}>
		<div class="label">Displaying {$fullInfo ? 'key data' : 'keys only'}</div>
		<div class="info"><span>i</span></div>
	</div>
{/if}

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: end;
		gap: 5px;
		cursor: pointer;
		padding: 10px;
		margin-top: 10px;
		margin-left: auto;
		width: 220px;
	}

	.info {
		font-weight: 700;
		border: 2px solid;
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
		position: relative;
		opacity: 0.5;
	}

	.info span {
		position: absolute;
		top: 50%;
		left: 56%;
		transform: translate(-50%, -50%);
	}

	.label {
		opacity: 0.5;
	}
	.label:hover {
		opacity: 1;
	}
</style>
