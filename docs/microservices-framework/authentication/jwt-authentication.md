# JWT Authentication

## Introduction
Authentication is the process of confirming the identity of an individual, system, or entity. It involves verifying that the entity attempting to access a system or resource is indeed who or what it claims to be.

While other microservices might have a unique approach to authentication , you have the flexibility to incorporate different secret mechanisms. To achieve this, include the express.ts file. Duplicate the existing code, then proceed to modify and add the necessary logic according to your specific requirements.

However, on this page, our focus will be on exploring JWT authentication.

## Example

You can configure JWT settings within the `eventsources/http.yaml`. Here's an example of such a configuration:
```yaml
jwt:
  issuer: ISS_KEY #iss
  audience: AUD_KEY #aud
  secretOrKey: SECRET_KEY
```
The provided snippet contains payload information and a secret key. Once the above snippet is added to the `eventsources/http.yaml`, authentication for all the events will be *true* by default. 

Options which can be passed for JWT config are:

![jwt_config_options](https://docs.godspeed.systems/assets/images/jwtconfig_options-7c650cde2021eae6cdc15d4029afe6ff.png) 

When configuring the JWT settings, if you do not provide either the `secretOrKeyProvider` or the `secretOrKey` property from the configuration options mentioned above, it will result in an error.

Additionally, if you specify an `issuer` or `audience` value in the configuration, and the token values differ from those specified in the configuration payload, the response will be 'Unauthorized.'

To ensure proper functionality, it is necessary to export these environment variables within your environment.

### Access JWT payload in workflow DSL
You can access the complete JWT payload in `<% inputs.user %>` in workflow DSL as given below:

```yaml
summary: Call an API and transform the 
tasks:
    - id: api_step1
      description: Hit with some dummy data. It will send back same as response
      fn: datasource.api.post./anything
      args:
        data: <% inputs.body %>
          jwt_payload: <% inputs.user %>
```
