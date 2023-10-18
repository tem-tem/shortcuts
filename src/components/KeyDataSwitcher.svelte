<script>
	import { keys } from '$stores/keys';
	import { fullInfo } from '$stores/ui';
	import { fade } from 'svelte/transition';
</script>

{#if $keys.length > 0}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="switcherContainer" on:click={() => ($fullInfo = !$fullInfo)}>
		<div>Display full key data</div>
		<div class="switcher">
			<input type="checkbox" id="switch" bind:checked={$fullInfo} />
			<label for="switch" class:active={$fullInfo}>Toggle</label>
		</div>
	</div>
{/if}

<style>
	.switcherContainer {
		display: flex;
		align-items: center;
		gap: 1em;
		cursor: pointer;
	}
	.switcher {
		position: relative;
		display: flex;
	}
	input[type='checkbox'] {
		height: 0;
		width: 0;
		visibility: hidden;
		position: absolute;
	}

	label {
		pointer-events: none;
		text-indent: -9999px;
		width: 4em;
		height: 2em;
		background: var(--main-button-color-opacity-5);
		display: block;
		border-radius: 2em;
		position: relative;
		font-size: 0.5rem;
	}
	label.active {
		background: var(--main-button-color);
	}

	label:after {
		content: '';
		position: absolute;
		top: 0.1em;
		left: 0.1em;
		width: 1.8em;
		height: 1.8em;
		background: var(--main-bg-color);
		border-radius: 2em;
		transition: 0.3s;
	}

	/* input:checked + label {
		background: var(--main-accent-color);
	} */

	input:checked + label:after {
		left: calc(100% - 0.3em);
		transform: translateX(-100%);
	}

	label:active:after {
		width: 3em;
	}
</style>
