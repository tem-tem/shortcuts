<script lang="ts">
	export let name: string | null = null;
	export let src: string | null = null;
</script>

<div>
	{#if src}
		<img {src} alt={name} title={name} />
	{:else if name}
		<span class="icon">{name[0]}</span>
	{/if}
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 1.5rem;
		height: 1.5rem;

		border-radius: 8px;
		padding: 2px;
		/* background-color: white; */
		/* box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2); */
		/* outline: 1px solid var(--main-text-color); */
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.icon {
		font-size: 1rem;
	}
</style>
