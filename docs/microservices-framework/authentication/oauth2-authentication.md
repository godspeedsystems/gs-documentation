# OAuth2 Authentication

## Introduction
  OAuth2 is a widely adopted authorization framework that provides a secure and efficient way for users to grant third-party applications access to their data without revealing their credentials. By leveraging OAuth2, Godspeed simplifies the authentication process for both developers and users. OAuth2 offer the ability to connect with authentication providers such as Google, Github and Linkedin.

### How It Works:
1. **User Signup/Signin:** When a user want to signup with google/github/linkedin, express-eventsource will trigger OAuth2 authentication flow.
2. **Redirect to Provider:** The user is redirected to the chosen authentication provider (Google, LinkedIn, or GitHub) to authorize the application.
3. **Authorization Grant:** The provider grants the application an authorization code.
4. **Token Exchange:** The application exchanges the authorization code for an access token.
5. **User Information Retrieval:** The application uses the access token to retrieve the user's information from the provider's API.
6. **Authentication Success:** Once the user's identity is verified, they are logged in to the platform.

## Getting Started: 
  To start using OAuth2 authentication in your Godspeed project, follow these steps:

### 1. Configure Provider:
  Set up your OAuth2 application with the chosen authentication provider (Google, LinkedIn, or GitHub) to obtain the necessary client ID and client secret.

### 2. Set up Environment Variables:
  Open .env file in your project's root directory.
  Add the following lines, replacing the placeholders with your actual GitHub credentials:
  ```
    GITHUB_CLIENT_ID= "your_client_id"
    GITHUB_CLIENT_SECRET= "your_client_secret"
    GITHUB_CALLBACK_URL= "your_callback_url" e.g http://localhost:4000/auth/github/callback
    GITHUB_AUTH_ROUTE  =  "/auth/github"
    GITHUB_CALLBACK_ROUTE = "/auth/github/callback"
    GITHUB_SUCCESS_REDIRECT_URL = "/verify/user"
    GITHUB_FAILURE_REDIRECT_URL = "/error"
    # Session Secret
    SESSION_SECRET = "your_secret"
  ```
### 3. Configure your eventsource

  Here's an example of OAuth2 configuration inside  (src/eventsources/http.yaml):
  ```
  authn:
    oauth2:
      github:
        client_id: <% process.env.GITHUB_CLIENT_ID %>  
        client_secret: <% process.env.GITHUB_CLIENT_SECRET %>    
        callback_url: <% process.env.GITHUB_CALLBACK_URL %>
        callback_route: <% process.env.GITHUB_CALLBACK_ROUTE %>
        auth_route: <% process.env.GITHUB_AUTH_ROUTE %>
        success_redirect: <% process.env.GITHUB_SUCCESS_REDIRECT_URL %>
        failure_redirect: <% process.env.GITHUB_FAILURE_REDIRECT_URL %>
  ```

  Let's See an example event and workflow of above provided success_redirect_url 
  
  Event src/events/helloUser.yaml
  ```yaml
  http.get./verify/user:
    fn: helloUser
    authn: false
    responses:
    200:
      content:
        application/json:
          schema:
            type: string
  ```
 
  Workflow  (src/functions/helloUser.ts)
  ```ts
  import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
  export default function (ctx: GSContext) {
      const {
          inputs: {
              data: {
                user
              }
          }, 
      
      }= ctx;
      const name = user.username|| user.displayName ;
      return new GSStatus(true, 200, undefined, 'Hello ' + name, undefined);  
  }
  ```
  If your auth_route = '/auth/github', hit localhost:4000/auth/github, it will take you to your chosen provider's authorization page i.e. Github in this case. 
  After authenticating the user successfully, it will redirect to the success_redirect_url i.e '/verify/user' in this case.


### To learn more about OAuth2 Authentication in Godspeed, please watch the video provided below…

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/ZOQ-wFkXtto?si=0PBfotFFDqAMPSAX" frameborder="0" allowfullscreen></iframe>
</div>



