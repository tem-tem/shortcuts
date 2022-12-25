<script lang="ts">
	// eslint-disable-next-line
	export let browser: Browser;
	// eslint-disable-next-line
	export let os: OS;
	export let title: string;
	export let shortcut: string;
</script>

<div class="actionCard">
	<div class="metadata">
		<div class="platform">
			<span class="browser">{browser}</span>
			<span class="os">{os}</span>
		</div>
		<div class="shortcut">
			<span>{shortcut}</span>
		</div>
	</div>
	<div class="title">
		{title}
	</div>
</div>

<style>
	.actionCard {
		border-bottom: 0.5px solid;
		border-right: 0.5px solid;
		min-height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1em;
	}
	.actionCard .metadata {
		display: flex;
		flex-direction: column;
		gap: 5px;
		text-transform: capitalize;
	}
	.actionCard .title {
		font-size: 2em;
		padding-top: 10px;
		font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.platform {
		display: flex;
		justify-content: space-between;
	}
	.browser {
		font-weight: 700;
		line-height: 10px;
	}
	.os {
		font-weight: 400;
		font-size: 1em;
		line-height: 10px;
		opacity: 0.5;
	}
	.shortcut {
		opacity: 0.75;
	}
</style>
