<script>
	import { onMount } from 'svelte';
	import { xlink_attr } from 'svelte/internal';
	import solanaLogoMark from '$lib/assets/solanaLogoMark.svg';
	

	let characters = ['🥳', '🎉', '✨'];

  

	let confetti = new Array(15).fill()
		.map((_, i) => {

			let character = characters[i % characters.length];
			let x = Math.random() * 100;
			let y = -20 - Math.random() * 100;
			let r = 0.1 + Math.random() * 1;
			let t = "";

			return {
				character,
				x,
				y,
				r,
				t,
			};
		})
		.sort((a, b) => a.r - b.r);

	onMount(() => {
		let frame;

		function loop() {
			frame = requestAnimationFrame(loop);

			confetti = confetti.map(emoji => {
				emoji.y += 0.7 * emoji.r;
				if (emoji.y > 120) emoji.y = -20;
				return emoji;
			});
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});


</script>

{#each confetti as c}
	<!-- <span style="position: absolute; font-size: 5vw; user-select: none; left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span> -->

	<span style="position: absolute; font-size: 2vw; user-select: none; left: {c.x}%; top: {c.y}%; transform: scale({c.r})"><img src={solanaLogoMark} alt="Solana" /></span>
	

{/each}
