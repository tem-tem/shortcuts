<script lang="ts">
	import shortcutList from '$data/json-index.json';
	import Icon from './Icon.svelte';
</script>

<div class="shortcutList">
	{#each shortcutList as shortcut}
		<div class="shortcutListItem">
			<div class="keys">
				{#each shortcut.shortcut as keyGroups}
					<span class="keyGroup">
						{#each keyGroups as key}
							<span class="key">{key}</span>
						{/each}
					</span>
				{/each}
			</div>

			<div class="appList">
				{#each shortcut.apps as app}
					<div class="appListItem">
						<div class="text">{app.text}</div>

						<div class="metadata">
							<span class="app">
								<Icon name={app.app} src={`icons/apps/${app.app}.png`} />
								<span class="name">
									{app.app}
								</span>
							</span>
							<span class="os">
								<Icon name={app.os} src={`icons/os/${app.os}.png`} />
								<span class="name">
									{app.os}
								</span>
							</span>
							<!-- <span class="category">{app.category}</span> -->
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	/* div, span {
        outline: 1px dotted red;
    } */

	.shortcutList {
		/* max-width: 45%; */
	}

	.shortcutListItem {
		margin-bottom: 6rem;

		/* outline: 1px dotted var(--main-text-color); */
		border-radius: 2rem;
		overflow: hidden;

		box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05), 0 0 10px 0 rgba(0, 0, 0, 0.05);
	}

	.keys {
		display: flex;
		background-color: rgba(0, 0, 0, 0.105);
		/* position: sticky;
        top: 10px; */
		/* margin-bottom: 2rem; */
	}

	.keyGroup {
		display: flex;

		padding: 2rem;

		margin-right: 2rem;
	}

	.key {
		font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		overflow: hidden;

		font-size: 1rem;

		min-width: 2.5rem;
		min-height: 2.5rem;

		padding: 0.3rem;
		margin-right: 1rem;

		border-radius: 0.3rem;

		color: var(--main-bg-color);
		background-color: var(--main-button-color);

		text-transform: uppercase;

		box-shadow: 0 0 0 0.2rem var(--main-text-color), 0 0.3rem 0 0.2rem var(--main-text-color);
	}

	.appListItem {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;

		/* border-top: 1px dotted var(--main-text-color); */
	}

	.appListItem:last-child {
		margin-bottom: 0;
		/* border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem; */
	}

	.app,
	.os {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		outline: 1px dotted var(--main-text-color);
		border-radius: 1rem;
		padding: 0.5rem;
	}

	.metadata {
		display: flex;
		align-items: center;
		gap: 1rem;

		text-transform: capitalize;
		font-size: 1rem;

		/* margin-left: -0.2rem; */
	}

	.text {
		font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		flex: 1;
		font-size: 1.8rem;
		/* margin-left: -0.3rem; */
	}
</style>
