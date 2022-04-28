
export async function post( {params, request} ) {

    const response = await request.json()

    if (response) {
        return {
            status: 200,
            body: response
        };
    }
     
    return {
        status: 404
    };
}


