<script>
    import events from '$lib/tempdatabase/events.json'
</script>

<div class="p-10 w-full">
    <h3 class="text-primary text-4xl font-main font-bold mb-4">Events</h3>

    <div class="grid grid-cols-3">

        {#each events as event, i}
        <div class="bg-light rounded-lg shadow-lg m-4">
        <img src="{event.Picture}" alt="event" class="object-cover h-80 w-full rounded-t-lg">
            <div class="p-6">
                <h2 class="font-bold text-2xl text-primary">{event.Title}
                </h2>
                <h1 class="font-bold mb-2 text-secondary">{event.Time}
                </h1>
                <p class="text-dark mb-2">{event.Description}</p>
                <a href="https://www.google.com/maps/search/{event.Location}" class="text-tertiary hover:text-purple-500 underline text-sm">{event.Location}</a>
            </div>
        </div>
        {/each}

    
    </div>

 



</div>
