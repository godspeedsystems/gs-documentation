
## Authentication
Authentication refers to the process of verifying the identity of a user or service in a secure manner. Specifically, it mentions [JWT (JSON Web Token)](https://jwt.io/introduction) authentication, which is a widely used method for authentication in web applications and microservices.

### Generating a token
Lets generating a JWT token manually from the [jwt.io](https://jwt.io/#debugger-io). 

In the Debugger's Decoded section, the **HEADER** of a token typically comprises two parts: the token type (JWT) and the signing algorithm (e.g., HMAC SHA256 or RSA) in use. This JSON is then encoded using Base64Url, forming the initial segment of the JWT. Next, the **PAYLOAD** represents the token's second part, housing various claims. Claims are statements about an entity, often the user, and additional data. The **VERIFY SIGNATURE** component is employed to ensure the message remains unaltered during transmission. In the case of tokens signed with a private key, it can also verify the authenticity of the JWT sender.

![JWT](https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-09-19%2014-11-34.png?updatedAt=1695113314578)

The framework utilizes JWT authentication to ensure secure communication between microservices. To achieve this, the user agent must include the JWT token in the Authorization header using the Bearer schema, following a specific format. This authentication process helps protect the integrity and confidentiality of data exchanged between microservices within the system.
```bash
Authorization: Bearer <token>
```
In the above case, the Authorization header should look like:
```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJJU1NfS0VZIiwiYXVkIjoiQVVEX0tFWSJ9.GiLivqXa74WmDzSbgUg9fe5y8Pedw1PS-DkebOM5mIc
```
For JWT Configuration in your project read [this](/docs/authentication/configuration.md).