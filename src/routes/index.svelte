<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
    import OpenHaus from '$lib/assets/images/OpenHaus.png'
	import Telegram from '$lib/assets/images/socialmedia/telegram.svg'
	import whiteDiscord from '$lib/assets/images/socialmedia/discord_white.svg'
	import blackDiscord from '$lib/assets/images/socialmedia/discord_black.svg'
	import { theme } from '../stores'

	let themeValue;
	themeValue = theme.subscribe(value => {themeValue = value})

</script>

<svelte:head>
	<title>OpenHaus</title>
</svelte:head>


<section class="w-full h-screen font-main">
	<div class="grid md:h-screen md:grid-cols-2 xs:grid-cols-1 items-center space-x-4 m-4 xs:space-y-6 justify-center">
		<div 
		class="flex flex-col mx-auto p-4 justify-center text-6xl text-primary">
			<div class="text-primary mb-2 text-5xl font-semibold tracking-wider">
				OpenHaus <span class="text-secondary font-semibold">Singapore</span>
				
			</div>
			<div class="mb-8 text-xl font-semibold">
				Nurturing Web3 Builders & Ventures
			</div>
			<div class="flex flex-col justify-end">
				<a class="flex items-center rounded-md p-4 text-base text-dark dark:text-light font-semibold hover:text-black dark:hover:text-light hover:bg-light dark:hover:bg-dark focus:outline-none focus:ring-1 focus:ring-inset focus:ring-light" href="https://t.me/+_aIlLFNyG49kZWY9" target="_blank" rel="noopener noreferrer">
					<div class="justify-center mr-2">
						<img class="object-center" src="{Telegram}" alt="Telegram">
					</div>
					<div><p>Telegram</p></div>
				</a>
				<a class="flex items-center rounded-md p-4 text-base text-dark dark:text-light font-semibold hover:text-black dark:hover:text-light hover:bg-light dark:hover:bg-dark focus:outline-none focus:ring-1 focus:ring-inset focus:ring-light" href="https://discord.gg/vHvp6FW3" target="_blank" rel="noopener noreferrer">
					<div class="justify-center mr-2">
						{#if themeValue == "light" }
							<img src="{blackDiscord}" alt="blackDiscord">
						{:else}
							<img src="{whiteDiscord}" alt="whiteDiscord">	
						{/if}		
					</div>
					<div><p>Discord</p></div>		
				</a>
			</div>
		</div>
		<div class="flex flex-col mx-auto p-4 justify-center text-6xl text-primary">
			<img class="object-fit" src="{OpenHaus}" alt="OpenHaus">
		</div>
	</div>
</section>
