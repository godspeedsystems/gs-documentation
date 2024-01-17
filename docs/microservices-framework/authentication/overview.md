# About Authentication

Authentication is the process of confirming the identity of an individual, system, or entity. It involves verifying that the entity attempting to access a system or resource is indeed who or what it claims to be. In case of the API and event driven architecture realm, we need to know the user who is trying to access the system. _Who is this user?_

Following separation of concerns (or decoupling) as a first principle, the job of authentication and loading the user information is delegated to individual eventsource plugins as part of their native `middleware` capability. Here you may use JWT, Auth0, OAuth2, Keycloak etc. as per your requirement.

The currently supported Express, Fastify and Apollo Graphql [plugins](https://github.com/godspeedsystems/gs-plugins) support JWT authentication out of the box. In case you need to customize, you can copy the code from our plugins repository and modify that to suit your purpose.


## Enabling JWT Authentication
You can [setup jwt configuration](./jwt-authentication.md) in the event source's configuration file, and override it in each individual event as applicable.
We follow zero trust policy as a first principle, so if you have setup jwt spec at event source level, all endpoints will go through JWT authentication, unless you explicityly set `authn:false` in their schema.
```yaml
http.post./v1/loan-application/:lender_loan_application_id/kyc/ckyc/initiate: 
  authn: true
  fn: com.biz.kyc.ckyc.ckyc_initiate
  on_validation_error: com.jfs.handle_validation_error
  data:
    schema:
      body: 
        required: true
        content:
          application/json:
            schema:
              type: 'object'
              required: []
              properties:
                dob:  { type : 'string', format : 'date', pattern : "[0-9]{4}-[0-9]{2}-[0-9]{2}" }
                meta:
                  type: 'object'
      params: 
      - name: lender_loan_application_id
        in: params
        required: true
        allow_empty_value: false
        schema:
          type: string
  responses: #Output data defined as per the OpenAPI spec
    200:
      schema:
        data: 
          required: # default value is false
          content:
            application/json:
              schema: 
                type: object
                properties:
                  application_id: 
                    type: string
                additionalProperties: false
                required: [application_id]
```
