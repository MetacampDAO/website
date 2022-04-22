<script lang="ts">

	import { spring } from 'svelte/motion';
	let coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.1,
		damping: 0.25
	});
	let size = spring(10);

</script>


<div class="absolute right-0">
    <label>
        <h3>stiffness ({coords.stiffness})</h3>
        <input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
    </label>

    <label>
        <h3>damping ({coords.damping})</h3>
        <input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
    </label>
</div>

<svg class=" w-full h-full -m-1"
on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
on:mousedown="{() => size.set(30)}"
on:mouseup="{() => size.set(10)}">

<circle class="overflow-visible fill-red-500" cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>