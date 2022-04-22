<script lang="ts">

	import Header from '$lib/header/Header.svelte';
	import Rain from '$lib/Rain.svelte'
	import '../app.css';

</script>



<body class="bg-white dark:bg-black text-dark dark:text-light font-test">

	<Header />

	<slot/>
	<Rain />
	
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
	
</body>

