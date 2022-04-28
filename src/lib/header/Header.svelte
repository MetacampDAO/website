<script lang="ts">
	import { page } from '$app/stores';
	import logoWhite from '$lib/assets/SHC_logo_white.svg';
	import logoBlack from '$lib/assets/SHC_logo_black.svg';
	import Toggle from '$lib/header/Mode.svelte';
	import { count } from '../../stores';

	let countValue;
	count.subscribe(value => {
		countValue = value;
	});

</script>

<header class="m-4">

	<div class="flex space-x-12 justify-center align-middle items-center h-full">
		<div class:active={$page.url.pathname === '/'}>
			<a href="http://localhost:3000">
				<img src={logoWhite} alt="SHC" />
			</a>
		</div>
		<div class:active={$page.url.pathname === '/'}>
			<a class="font-medium text-grey dark:text-light hover:text-dark dark:hover:text-grey" sveltekit:prefetch href="/">Home</a></div>
		<div class:active={$page.url.pathname === '/about'}>
			<a class="font-medium text-grey dark:text-light hover:text-dark dark:hover:text-grey" sveltekit:prefetch href="/about">About</a>
		</div>
		<div class="hidden" class:active={$page.url.pathname === '/todos'}>
			<a class="font-medium text-grey dark:text-light hover:text-dark dark:hover:text-grey" sveltekit:prefetch href="/todos">Todos</a>
		</div>
		<div>
			<Toggle />
		</div>
		<div>
			<a sveltekit:prefetch href="/login">
				<button class="mx-auto bg-primary rounded-md p-2 text-base text-light font-semibold hover:text-divght hover:bg-secondary">Login
				</button>
			</a>
		</div>
		<div>
			Points: {countValue}
		</div>
	</div>

</header>

