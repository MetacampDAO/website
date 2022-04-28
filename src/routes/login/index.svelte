<script context="module" lang="ts">
	export const prerender = true;

</script>

<script lang="ts">
  
    var url = "http://localhost:3000/oauth2/google/profile"
    let email;
    let name;


    async function submitForm() {

        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
            })
        })

        if (response) {
            const body = await response.json();
            return body
        }

        return {
            status: 404
        };
    }

</script>

<svelte:head>
	<title>login</title>
</svelte:head>



<section class="w-full h-screen bg-main bg-cover bg-center">
    <div class="bg-black bg-opacity-80">
        <h1>logged in with</h1>
        <div>
            
                <a href={url} target="_blank" rel="noreferrer noopener">
                    <button>Sign in via Google</button>
                </a>
     
        </div>
        <span>{email} {name}</span>
        <div>
            <form on:submit|preventDefault={submitForm}>
                <label for="">
                    Email:
                    <input type="text" name="email" bind:value={email} class="placeholder-primary text-primary">
                </label>            
                <label for="">
                    Name:
                    <input type="text" name="name" bind:value={name} class="placeholder-primary text-primary">
                </label>
                <input type="submit" class="bg-grey rounded-sm" />
            </form>

        </div>
    </div>

</section>
