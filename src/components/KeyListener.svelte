<script lang="ts">
	import { keys } from '$stores/keys';

	function handleKeydown(event: KeyboardEvent) {
		event.preventDefault();
		if (event.key === 'Escape') {
			keys.reset();
			return;
		}
		if (event.key === 'Backspace') {
			keys.removeLast();
			return;
		}
		keys.add(event);
		return false;
	}

	function handleKeyup(event: KeyboardEvent) {
		event.preventDefault();
		return false;
	}

	function handleKeypress(event: KeyboardEvent) {
		event.preventDefault();
		return false;
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} on:keypress={handleKeypress} />
