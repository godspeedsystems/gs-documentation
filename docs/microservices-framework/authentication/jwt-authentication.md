# JWT Authentication

**JWT (JSON Web Token)** is a standard method for securely transmitting information between two parties as a JSON object. It’s commonly used for authentication and authorization in web applications.
In Godspeed, you can easily implement JWT authentication to protect routes, control access to resources and ensure secure API communication.
Currently supported event sources which can leverage this mechanism are:
1. Express
2. Apollo GraphQL
3. Fastify

To Learn more about JWT and Payload [Click Here](http://localhost:3000/docs/microservices-framework/authentication/jwt)


### How JWT Authentication Works in Godspeed
When a client makes a request to a protected route, they need to include a valid JWT in the request header. 
The server validates the token, extracts the payload, and grants access to the resource if the token is valid.
In the case of an expired or invalid token, the client will receive a `401 Unauthorized` response.

:::tip Note
In our Express eventsource plugin, JWT Authentication is implemented using passport-jwt which is a strategy for authenticating with a JSON Web Token. To know more about, you can check [passport documentation](https://www.passportjs.org/)
:::

### Disabling JWT Authentication at Event Level

  The plugins follow zero trust policy as a first principle, so if you have setup jwt spec at event source level, authentication for all the events will be true by default, unless you explicitly set authn:false in their event schema.
  If you don't want users to be authenticated, you can disable any end-point by writing authn: false in your event schema like this:

  ```
  http.get./helloworld:
    fn: helloworld
    authn: false
    params:
      - name: name
        in: query
        required: true
  ```

### Setup and implementation of JWT authentication in Godspeed.

### Step 1: Setting up Environment

**1.** In Godspeed, any configuration which includes secrets or passwords is recommended to be defined using environment variables only. For this, open custom-environment-variables.yaml file which is placed under `config/` in your root project directory and add your jwt configs there like:

  ```
  jwtSecret: JWT_SECRET
  audience:  JWT_AUDIENCE     
  issuer: JWT_ISSUER

  ```

**2.** Now, you need to export these variables in environment. This can be done in two ways:

  **(a)** Set environment variables in .env file which is under your project's root folder /.env as shown below:
  ```
    JWT_SECRET= mysecret            #the secret
    JWT_AUDIENCE= godspeedsystemms  #aud in jwt token
    JWT_ISSUER= godspeed            #iss in jwt token

  ```

  **(b)** Export these variables to your environment, follow the below syntax to export, based on the shell, you are using:
  <details>
  <summary> For git bash  </summary>
   ```
      $ export JWT_SECRET=mysecret
      $ export JWT_ISS= mycompany
   ```
  </details>

  <details> <summary> For windows powershell  </summary>
  
   ```
    $env:JWT_SECRET= "mysecret"
    $env:JWT_ISS= "mycompany"   
   ```
   </details>

  After exporting the environment variable, you can access these variable anywhere in your project by using inline
  scripting `<%config.issuer%>` in yaml or as `ctx.config.issuer` in js/ts workflows.

:::tip Note 
If you do not set these environment variables mentioned above, it will result in an error while running your project. And if the token values set in header differ from those specified in the configuration, the response will be 'Unauthorized.'
:::

### Step 2: Enable JWT Auth in your project's eventsource configuration file.
JWT configuration is written under authn: in the event source's configuration file. For Express, config file name will be http.yaml. Open this file and Set up jwt authn as shown below.

'src/eventsources/http.yaml'
```
  type: express
  port: 4000
  #auth settings to run by default on every event
  authn:
    jwt:			
      secretOrKey: <% config.jwtSecret %> # to access jwtSecret from config
      audience: <% config.audience %>   
      issuer: <% config.issuer %>     
```
Once you have enabled it here, authentication will be true for all endpoints, unless you explicitly set authn:false in their event schema.

<details>
<summary> User Login Example using JWT Authentciation  </summary>

**Event**
```yaml
# Login with username and password
http.post./login:   # defines the POST request that will be triggered when a client hits /login endpoint.
  fn: verifyLogin   # the workflow to handle the request
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            username:
              type: string
            password:
              type: string
          required:
            - username
            - password
  responses:
    '200':
      description: 'Login successful'
      content:
        application/json:
          schema:
            type: object
    '401':
      description: 'Invalid credentials'
      content:
        application/json:
          schema:
            type: string
            example: 'Invalid username or password'
```
**Workflow (verifyLogin.ts)**
```
  import { GSCloudEvent, GSContext, PlainObject, GSStatus, logger } from "@godspeedsystems/core";
  import jwt from 'jsonwebtoken';
  export default function (ctx: GSContext, args: PlainObject) {
      const {
          inputs: {
              data: {
                body
              }
          }, 
      
      }= ctx;
    logger.info("user info received %o", body);
    // Dummy user validation (replace with your authentication logic)
    if (body.username === 'user' && body.password === 'password') {
      // Create a JWT token
      const token = jwt.sign(
        { sub: '1234567890', name: 'John Doe', role: 'user' },  // Payload
        ctx.config.jwtSecret,  // access Secret key from config
        { expiresIn: '1h', issuer: ctx.config.issuer, audience: ctx.config.audience }  // jwt Options
      );
      logger.info("Token generated %s", token);
      return new GSStatus(true, 200, 'Login Successful',{JWT: token}, undefined);  
    } else {
      return new GSStatus(true, 401, undefined, 'Invalid Credentials',  undefined); 
    }
  }
```
</details>

### How to access JWT payload
You can access the complete JWT payload in <% inputs.user %> in YAML workflows, and as ctx.inputs.data.user when writing JS/TS workflows.

Example access from inline scripting with YAML
```
summary: protected route workflow 
tasks:
  - id: check_payload_user
    description: return user object
    fn: com.gs.return
    args:
      data: 
        jwt_payload: <% inputs.user %>
```

Example access from JS/TS workflow
```
import { GSCloudEvent, GSContext, PlainObject, GSStatus, logger } from "@godspeedsystems/core";
export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
               user		
            }
        }, 
    }= ctx;

return new GSStatus(true, 200, undefined, {'Payload user': user}, undefined);  
}

```

### Standardized JWT Configuration (For Plugin Creators)

For consistency across plugins, it's recommended to use a standardized configuration format for JWT settings (issuer, audience, secret key) in eventsources/<plugin_name>.yaml.

