<script lang="ts">
	import { onMount } from 'svelte';
	import { xlink_attr } from 'svelte/internal';
	import solanaLogoMark from '$lib/assets/images/solanaLogoMark.svg';
	import { count } from '../../stores'
	

	let characters = ['🥳', '🎉', '✨'];

  

	let confetti = new Array(15).fill()
		.map((_, i) => {

			var character = characters[i % characters.length];
			var x = Math.random() * 100;
			var y = -20 - Math.random() * 100;
			var r = 0.1 + Math.random() * 1;
			var id = 'confetti_' + i;
			var state = "inline";

			return {
				character,
				x,
				y,
				r,
				id,
				state,
			};
		})
		// .sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map(emoji => {
				emoji.y += 0.7 * emoji.r;
				if (emoji.y > 100) {
					emoji.y = -40;
					emoji.state = "inline";
				}
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});


	// Click and earn points
	export let counter = 0
	function hideElement(id) {
		var r = /\d+/;
		confetti[id.match(r)[0].character];
		confetti[id.match(r)[0]].state = "none";
		counter += 1;
		count.set(counter)
	}


</script>

{#each confetti as c}
	<!-- <span style="position: absolute; font-size: 5vw; user-select: none; left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span> -->

	<div id="{c.id}" style="position: absolute; font-size: 2vw; user-select: none; left: {c.x}%; top: {c.y}%; transform: scale({c.r}); display: {c.state}" on:click="{hideElement(c.id)}" on:dragstart="{hideElement(c.id)}"><img src={solanaLogoMark} alt="Solana" /></div>

	
	
{/each}
