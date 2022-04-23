<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/SHC_logo.svg';
	import Toogle from '$lib/header/Mode.svelte';	
</script>

<header class="flex flex-container space-x-4 m-4 justify-center">



	<div class="flex relative">
		<div class="container">
			<a href="http://localhost:3000">
				<img class="h-12 items-center align-middle mx-4" src={logo} alt="SHC" />
			</a>
		</div>
		<ul class="flex space-x-8 justify-center m-auto">
				<li class:active={$page.url.pathname === '/'}>
					<a class="font-medium text-grey dark:text-light hover:text-dark dark:hover:text-grey" sveltekit:prefetch href="/">Home</a></li>
				<li class:active={$page.url.pathname === '/about'}>
					<a class="font-medium text-grey dark:text-light hover:text-dark dark:hover:text-grey" sveltekit:prefetch href="/about">About</a>
				</li>
				<li class:active={$page.url.pathname === '/todos'}>
					<a class="font-medium text-grey dark:text-light hover:text-dark dark:hover:text-grey" sveltekit:prefetch href="/todos">Todos</a>
				</li>
				<li>
					<Toogle></Toogle>
				</li>
		</ul>

		<div class="m-auto right-2">
			<a sveltekit:prefetch href="/users/login">
				<button class="mx-auto bg-primary rounded-md p-2 text-base text-light font-semibold hover:text-light hover:bg-secondary">Login
				</button>
			</a>
		</div>
	</div>

</header>

