<script lang="ts">
	import { page } from '$app/stores';
	import Toggle from '$lib/layout/Darkmode.svelte';
	import { count } from '../../stores';
	import OpenHaus from '$lib/assets/images/OpenHaus.svg'

	let countValue;
	count.subscribe(value => {
		countValue = value;
	});

</script>


<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="{OpenHaus}" />
</head>

<header class="m-6 p-6">

	<div class="flex space-x-12 justify-center align-middle items-center h-full font-main text-black dark:text-white">
		<div class="absolute left-6 top-6">
			<div class:active={$page.url.pathname === '/'}>
				<p class="font-bold tracking-widest text-2xl">OpenHaus</p>
			</div>
			<div class="font-bold tracking-normal text-xs">
				Points: {countValue}
			</div>
		</div>
		<div class="absolute right-6 top-6">
			<Toggle />
		</div>
		<div class="hidden">
			<a sveltekit:prefetch href="/login">
				<button class="mx-auto bg-primary rounded-md p-2 font-semibold hover:text-divght hover:bg-secondary">Login
				</button>
			</a>
		</div>

	</div>

</header>

