<script context="module">
	export const prerender = true;
</script>

<script>

	async function fetchUsers() {
		const response = await fetch(`http://localhost:3000/api/users`);
		const data = await response.json()
		return data
	}

</script>

<svelte:head>
	<title>Users</title>
</svelte:head>


<section class="w-full h-screen bg-main bg-cover bg-center">
	<div class="flex space-x-4">
		{#await fetchUsers() then users}
			{#each users as user}
				<div class="m-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<div class="flex justify-end px-4 pt-4">
						<button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
						</button>
						<!-- Dropdown menu -->
						<div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
							<ul class="py-1" aria-labelledby="dropdownButton">
							<li>
								<a href="/users" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
							</li>
							<li>
								<a href="/users" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
							</li>
							<li>
								<a href="/users" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
							</li>
							</ul>
						</div>
					</div>
					<div class="flex flex-col items-center pb-10">
						<img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="{user.image}" alt="{user.displayName}"/>
						<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.displayName}</h5>
						<span class="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
						<div class="flex mt-4 space-x-3 lg:mt-6">
							<a href="/users" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
							<a href="/users" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
						</div>
					</div>
				</div>
			{/each}
		{/await}
	</div>

</section>
