/**
 * OAuth 2.0 Steps
 * 
 * 1. Client Registration - The client needs to register with the authorization server, which involves providing 
 *      details such as client ID and secret, which are used for identification
 * 
 * 2. User Authentication - When a user tries to access the protected resources on the web application, it will redirect
 *      the user to the server's login page, and the user will authenticate using their credentials.
 * 
 * 3. Authorization Grant - When the user is authenticated, they will be prompted to grant permissions for the web 
 *      application to access the protected resources. The user will also grant their permission level, such as read-only
 *      or editor for the resource access.
 * 
 * 4. Access Token Request - Once the user grants authorization, the web application will send a request to the 
 *      authorization server to obtain an access token. This request includes client ID, sercret, the authorization grant
 *      (permission), and any other parameters.
 * 
 * 5. Access Token Issuance - When the authorization server validates the user with credentials and authorization grant, 
 *      the server issues an access token. It is a unique identifier that the client can use to access the protected 
 *      resources on behalf of the user.
 * 
 * 
 * In Typescript, this protocol can be implemented via npm packages, like "oauth2-server" or "passport"
 */