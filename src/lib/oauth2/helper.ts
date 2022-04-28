// import type { getAuthParam, getAuthResponseParam, postExchangeCodeParam } from "$lib/oauth2/types";
import * as oauth2 from '$lib/oauth2/types';
import * as jose from 'jose';


// Derive Authorization URL for User Authorization based on Provider and Parameters
export function deriveAuthUrl (endpoint : string, parameter : oauth2.getAuthParam) : string {

    if (endpoint == "Google") endpoint = oauth2.Endpoint.googleAuth;
    if (endpoint == "Github") endpoint = oauth2.Endpoint.githubAuth;
    
    var query_string = "?";
    let property: keyof typeof parameter;
    for (property in parameter) {
        var query_string = parameter[property] ? query_string.concat(`${property}=${encodeURIComponent(parameter[property])}&`) : query_string;
    };
    var autUrl = endpoint + query_string;
    return autUrl

};

// Decode JWT ID_TOKEN 
export function decodeJwt(jwtEncoded : string) : oauth2.decodedIdtoken {
    const jwtDecoded : any = jose.decodeJwt(jwtEncoded);
    return {
        iss: jwtDecoded.iss,
        azp: jwtDecoded.azp,
        aud: jwtDecoded.aud,
        sub: jwtDecoded.sub,
        hd: jwtDecoded.hd,
        email: jwtDecoded.email,
        email_verified: jwtDecoded.email_verified,
        at_hash: jwtDecoded.at_hash,
        name: jwtDecoded.name,
        picture: jwtDecoded.picture,
        given_name: jwtDecoded.given_name,
        family_name: jwtDecoded.family_name,
        locale: jwtDecoded.local,
        iat: jwtDecoded.iat,
        exp: jwtDecoded.exp,
    }
};

// Decode Authorization Code from response URL of Resource Owner
export function decodeAuthCodefromURL (url: URL) : string {
    const parsedURL = new URL(url);
    const urlParams = new URLSearchParams(parsedURL.searchParams);
    return urlParams.get('code')
};


// GET ACCESS_TOKEN in exchange of Authorization Code based on Provider and Parameters
export async function getAccessToken(endpoint: string, parameter: oauth2.postExchangeCodeParam) : Promise<oauth2.AccessToken> {

    // Specify provider's token endpoint, optionally use shortcut
    if (endpoint == "Google") endpoint = oauth2.Endpoint.googleToken;
    if (endpoint == "Github") endpoint = oauth2.Endpoint.githubToken;

    // Specify HTTP/HTTPS request
    const request = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameter)

    };

    const response = await fetch(endpoint, request);
    const content = await response.json();

    return {
        access_token: content.access_token,
        expires_in: content.expires_in,
        scope: content.scope,
        token_type: content.token_type,
        refresh_token: content.refresh_token,
        id_token: content.id_token,
    }
};


// GET RESOURCE
export async function getResource (){

};