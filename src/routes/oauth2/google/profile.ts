import { variables } from '$lib/variables';
import type * as oauth2 from '$lib/oauth2/types';
import * as client from '$lib/oauth2/helper';

// Making redirect GET Request to Resource Owner for User Authorization through this API
export async function get( { request, url } ) {

        // Get authUrl for Authorization Grant for user profile and email information
        const parameter : oauth2.getAuthParam = {
                client_id: variables.VITE_GOOGLE_CLIENT_ID,
                redirect_uri: "http://localhost:3000/oauth2/google/callback",
                response_type: "code",
                scope: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
                state: "user",
        };
        const authUrl : string = client.deriveAuthUrl("Google", parameter);


        // Redirect
        return {
                status: 303,
                headers: {
                        location: authUrl
                }
        }
}