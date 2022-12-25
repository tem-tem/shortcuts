<script lang="ts">
	import { keys } from '$stores/keys';
</script>

<div class="resetBlock">
	{#if $keys.length > 0}
		<button
			on:click={() => {
				keys.reset();
			}}>Reset <span>Esc</span></button
		>
	{/if}
</div>

<style>
	.resetBlock {
		display: flex;
		justify-content: end;
		align-items: center;
		height: 30px;
		padding: 10px;
	}

	button {
		display: flex;
		gap: 10px;

		padding: 10px 20px;
		border: none;
		border-radius: 20px;
		background-color: var(--main-button-color);
		color: var(--main-bg-color);
		font-weight: 500;
		cursor: pointer;
	}
	button span {
		opacity: 0.5;
	}
</style>
