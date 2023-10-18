<script lang="ts">
	import shortcutList from '$data/json-index.json';
	import ShortcutList from './ShortcutList.svelte';
</script>

<div class="listContainer">
    <div class="widthWrapper">
        <h3>All Shortcuts</h3>
        <ShortcutList list={shortcutList} />
    </div>
</div>

<style>
    .listContainer {
        margin: 3rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        /* background-color: rgba(0, 0, 0, 0.15); */
    }

    .widthWrapper {
		max-width: var(--max-width);
        margin: 0 auto;
    }
</style>
