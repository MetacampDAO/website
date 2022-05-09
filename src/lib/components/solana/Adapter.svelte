<script lang="ts">
    // Wallet Store
    import { walletStore } from '@svelte-on-solana/wallet-adapter-core';

	import { onMount } from 'svelte';
	import { clusterApiUrl } from '@solana/web3.js';
	import {
		workSpace,
		WalletProvider,
		WalletMultiButton,
		ConnectionProvider
	} from './';

	const localStorageKey = 'walletAdapter';
	const network = clusterApiUrl('devnet'); // localhost or mainnet

	let wallets;

	onMount(async () => {
		const { PhantomWalletAdapter, SolflareWalletAdapter } = await import(
			'@solana/wallet-adapter-wallets'
		);

		wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];
	});
</script>

<section>

	<WalletProvider {localStorageKey} {wallets} autoConnect />
	<ConnectionProvider {network} />

	<WalletMultiButton />
	{#if $walletStore?.connected}
	<div>My wallet is connected</div>
	{/if}

</section>
