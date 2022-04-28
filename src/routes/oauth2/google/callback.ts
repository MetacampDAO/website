import { variables } from '$lib/variables';
import * as jose from 'jose';
import * as oauth2 from '$lib/oauth2/types';
import * as client from '$lib/oauth2/helper';
import createUser from '$lib/mangodb/queries/createUser';


// Get Access Token after callback
/** @type {import('./callback').RequestHandler} */
export async function get( { request, url } ) {

    const settings = {
        code: client.decodeAuthCodefromURL(url),
        client_id: variables.VITE_GOOGLE_CLIENT_ID,
        client_secret: variables.VITE_GOOGLE_CLIENT_SECRET,
        redirect_uri: 'http://localhost:3000/oauth2/google/callback',
        grant_type: 'authorization_code'
    };

    const content = await client.getAccessToken("Google", settings);

    // Create new user on MangoDB
    const input = client.decodeJwt(content.id_token);
    createUser(input);

    return {
        status: 200,
        body: { 
            access_token: content.access_token,
            expires_in: content.expires_in,
            scope: content.scope,
            token_type: content.token_type,
            id_token: content.id_token
        }
    }

}

