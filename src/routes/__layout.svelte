<script lang="ts">

	import Header from '$lib/layout/Header.svelte';
	import Footer from '$lib/layout/Footer.svelte'
	import SolanaRain from '$lib/layout/SolanaRain.svelte'
	import '../app.css';

</script>



<body class="bg-white dark:bg-black text-dark dark:text-light no-scrollbar">

	<Header />
	<slot/>
	<SolanaRain />
	
	<Footer />

</body>

