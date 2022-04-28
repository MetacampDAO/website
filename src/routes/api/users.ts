import getUsers from "$lib/mangodb/queries/getUsers";

export async function get() {

    return {
        body: await getUsers()
    }

}

