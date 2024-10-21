### What is JWT?  
A JWT consists of three parts:
1. **Header**: Contains the signing algorithm and token type (e.g., `HS256`, `JWT`).
2. **Payload**: Stores claims or data such as user identity, roles, and permissions.
3. **Signature**: Ensures the integrity of the token. It’s created using the header, payload, and a secret key.

 
 ### Authentication Process using JWT: 
 1. Client login: The client sends credentials (e.g., username and password) to the server.
 2. Token creation: Upon successful login, the server generates a JWT signed with a secret and sends it to the client.
 3. Token usage: The client includes the JWT in the `Authorization` header of subsequent requests to access protected resources.
 4. Token validation: The server validates the JWT in incoming requests, checking its signature, expiration, and payload.
 5. Authorization: If the token is valid, the server grants access to the requested resource.


### A typical JWT looks like this:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
### Example JWT Payload 

```
{
  "iss": "https://your-app.com",
  "sub": "user123",
  "aud": "https://your-app.com/api",
  "exp": 1692425600,
  "nbf": 1692425000,
  "iat": 1692424400,
  "jti": "token123",
  "username": "john.doe",
  "email": "john.doe@example.com",
  "roles": ["admin", "user"]
}
```
