<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/svelte-logo.png';
	import Toogle from '$lib/header/Mode.svelte';	
</script>

<header class="flex flex-container space-x-4 m-4 justify-center">

	<div class="flex flex-container">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<div class="flex relative">

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
	</div>

</header>

