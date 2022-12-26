<script>
	import { os } from '$stores/ui';
	import { onMount } from 'svelte';

	let toggler = $os === 'mac';
	const toggle = () => {
		toggler = !toggler;
		if (toggler) {
			os.set('mac');
		} else {
			os.set('windows');
		}
	};

	onMount(() => {
		const { userAgent } = navigator;
		if (userAgent.includes('Mac')) {
			os.set('mac');
			toggler = true;
		} else {
			os.set('windows');
			toggler = false;
		}
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="switcherContainer" on:click={toggle}>
	<div class={`os ${$os === 'windows' ? 'active' : ''}`}>Windows</div>
	<div class="switcher">
		<input type="checkbox" id="switch" bind:checked={toggler} />
		<label for="switch">Toggle</label>
	</div>
	<div class={`os ${$os === 'mac' ? 'active' : ''}`}>Mac</div>
</div>

<style>
	.switcherContainer {
		display: flex;
		align-items: center;
		gap: 1em;
		cursor: pointer;
	}
	.os {
		opacity: 0.5;
	}
	.os.active {
		opacity: 1;
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
		background: var(--main-button-color);
		display: block;
		border-radius: 2em;
		position: relative;
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
		left: calc(100% - 0.1em);
		transform: translateX(-100%);
	}

	label:active:after {
		width: 3em;
	}
</style>
