<script lang="ts">
	export let browser: Browser;
	export let os: OS;
	export let title: string;
</script>

<div class="actionCard">
	<div class="metadata">
		<div class="browser">
			<!-- <img src={`${browser}.svg`} alt={browser}/> -->
			<span>{browser}</span>
		</div>
		<div class="os">
			<!-- <img src={`${os}.svg`} alt={os}/> -->
			<span>{os}</span>
		</div>
	</div>
	<div class="title">
		{title}
	</div>
</div>

<style>
	.actionCard {
		border: 1px solid;
		border-radius: 5px;
		min-height: 150px;
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	.actionCard .metadata {
		display: flex;
		flex-direction: column;
		gap: 5px;
		text-transform: capitalize;
	}
	.actionCard .title {
		font-size: 32px;
		padding-top: 10px;
	}
	.browser {
		font-size: 18px;
		font-weight: 700;
		line-height: 10px;
	}
	.os {
		font-size: 16px;
		font-weight: 400;
		line-height: 10px;
		color: #222;
	}
</style>
