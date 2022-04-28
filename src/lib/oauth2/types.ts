/**
An OAuth 2.0 flow has the following roles:

Resource Owner: Entity that can grant access to a protected resource. Typically, this is the end-user.

Resource Server: Server hosting the protected resources. This is the API you want to access.

Client: Application requesting access to a protected resource on behalf of the Resource Owner.

Authorization Server: Server that authenticates the Resource Owner and issues access tokens after getting proper authorization. In this case, Auth0.

OAuth 2.0 uses two endpoints: 
1. /authorize endpoint used to interact with the resource owner and get the authorization to access the protected resource.
2. /oauth/token endpoint used by the application in order to get an access token or a refresh token.

 */


// List of available Endpoints
export enum Endpoint {
    // For Google: https://developers.google.com/identity/protocols/oauth2/web-server
    googleAuth = "https://accounts.google.com/o/oauth2/v2/auth", // Google Oauth2 Resource Owner
    googleToken = "https://oauth2.googleapis.com/token", // Google Oauth2 Authorization Server

    // For Github: https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps 
    githubAuth = "https://github.com/login/oauth/authorize", // Github Oauth2 Resource Owner
    githubToken = "https://github.com/login/oauth/access_token", // Github Oauth Authorization Server

}

// Variables of Access Token
export interface AccessToken {
    access_token?: string, // The token that your application sends to authorize an API request.
    expires_in?: number, // The remaining lifetime of the access token in seconds.
    token_type?: string, // The type of token returned. At this time, this field's value is always set to Bearer.
    scope?: string, // The scopes of access granted by the access_token expressed as a list of space-delimited, case-sensitive strings.
    refresh_token?: string, // A token that you can use to obtain a new access token. Refresh tokens are valid until the user revokes access. Again, this field is only present in this response if you set the access_type parameter to offline in the initial request to Google's authorization server.
    id_token?: string, // ID token after a user successfully authenticates, JWT-based ID token contains user information
}

// Parameters for making GET request to Resource Owner for User Authorization in order to get Authorization Grant or Code
export interface getAuthParam {
    response_type: string, 
    // "code" for Authorization Code exchanged later for access token and "token" for Implicit grant limited by scope, "id_token token" include access and ID token.  
    response_mode?: string, 
    // (Optional) How the result of the authorization request is formatted, default to "query" for Authorization Code and to "fragment" for Implicit grant.
    client_id: string, // The ID of the application that asks for authorization.
    redirect_uri: string, 
    // Holds a URL. A successful response from this endpoint results in a redirect to this URL with information 
    scope: string, 
    // A space-delimited list of permissions that the application requires.
    state?: string, 
    // (Recommended) An opaque value, used for security purposes. If this request parameter is set in the request, then it is returned to the application as part of the redirect_uri.


    // FOR Google, check https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#oauth-2.0-endpoints
    include_granted_scopes?: string, // Enables applications to use incremental authorization to request access to additional scopes in context. If you set this parameter's value to true and the authorization request is granted, then the new access token will also cover any scopes to which the user previously granted the application access.
    login_hint?: string, // If your application knows which user is trying to authenticate, it can use this parameter to provide a hint to the Google Authentication Server. The server uses the hint to simplify the login flow either by prefilling the email field in the sign-in form or by selecting the appropriate multi-login session.
    prompt?: string, // A space-delimited, case-sensitive list of prompts to present the user. If you don't specify this parameter, the user will be prompted only the first time your project requests access. Possible values are "none", "consent" and "select_account".

    // FOR Github, check https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps 
    login?: string, //Suggests a specific account to use for signing in and authorizing the app.
    allow_signup?: string, // Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow. The default is true. Use false when a policy prohibits signups.
}

// Parameters of response to redirect_url after User Authorization via Resource Owner
export interface getAuthResponseParam {
    code?: string // Authorization Code for exchanging to Access token
    expires_in?: number // Lifetime of access token in seconds
    state?: string, // If the state parameter was specified in the access token request, its value is also included in the response
    token_type?: string, // Set to "Bearer"
    error?: string //
    access_token?: string, // Access token for requesting resources
    id_token?: string 
}

// Parameters for making POST request to Authorization Server to exchange Authorization Grant or Code for Access Token
export interface postExchangeCodeParam {
    client_id: string,
    // The client ID obtained from the API Console Credentials page.
    client_secret: string,
    // The client secret obtained from the API Console Credentials page.
    code: string,
    // The authorization code returned from the initial request.
    grant_type: string, 
    // As defined in the OAuth 2.0 specification, this field's value must be set to "authorization_code". https://tools.ietf.org/html/rfc6749#section-4.1.3
    redirect_uri: string
    // One of the redirect URIs listed for your project in the API Console Credentials page for the given client_id.
}


// Variables encoded in id_token
export interface decodedIdtoken {
    iss?: string,
    azp?: string,
    aud?: string,
    sub?: string,
    hd?: string,
    email?: string,
    email_verified?: boolean,
    at_hash?: string,
    name?: string,
    picture?: string,
    given_name?: string,
    family_name?: string,
    locale?: string,
    iat?: number,
    exp?: number
}


