<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import About from "./about.svelte";

	export async function test() {
		let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
		let status = await response.json()
		return status.id
	}

	const output =  test()


</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


<section class="w-full h-screen bg-main bg-cover bg-center">
	<div class="flex flex-col h-screen items-center space-x-4 m-4 justify-center">
		<div 
		class="flex flex-col space-y-4 mx-auto p-8 justify-center bg-dark bg-opacity-70 rounded-md text-6xl text-primary">
			<div class="text-primary text-5xl text-center font-semibold">
				Solana Hacker Community
			</div>
			<div class="text-secondary text-3xl text-center font-semibold">
				Singapore
			</div>
			<div class="text-light text-xl text-center font-semibold">
				Let’s meet, share, and learn!
			</div>
			<a class="mx-auto bg-tertiary rounded-md p-2 text-base text-center text-light font-semibold hover:text-light hover:bg-primary focus:outline-none focus:ring-1 focus:ring-inset focus:ring-light" href="https://t.me/+_aIlLFNyG49kZWY9" target="_blank" rel="noopener noreferrer">
				<span>Join Telegram</span>
			</a>
		</div>
	</div>
</section>
