# JWT Configuration
You can configure JWT settings within the `Configuration/Environment` variables. Here's an example of such a configuration:
```yaml
jwt:
  issuer: ISS_KEY #iss
  audience: AUD_KEY #aud
  secretOrKey: SECRET_KEY
```
The provided snippet contains payload information and a secret key. Once the above snippet is added to the `Config/Environment`, authentication for all the events will be *true* by default. 

Options which can be passed for JWT config are:

![jwt_config_options](https://docs.godspeed.systems/assets/images/jwtconfig_options-7c650cde2021eae6cdc15d4029afe6ff.png) 
When configuring the JWT settings, if you do not provide either the s`ecretOrKeyProvider` or the `secretOrKey` property from the configuration options mentioned above, it will result in an [error](https://www.passportjs.org/packages/passport-jwt/).

Additionally, if you specify an `issuer` or `audience` value in the configuration, and the token values differ from those specified in the configuration payload, the response will be 'Unauthorized.'

To ensure proper functionality, it is necessary to export these environment variables within your environment.

### Access JWT payload in Workflow DSL
You can access the complete JWT payload in `<% inputs.user %>` in workflow DSL as given below:

```yaml
summary: Call an API and transform the 
tasks:
    - id: api_step1
      description: Hit with some dummy data. It will send back same as response
      fn: datasource.api.anything.post
      args:
        data: <% inputs.body %>
          jwt_payload: <% inputs.user %>
```
## Event spec
Add authn: true or authn: false in the event DSL to enable or disable authentication for any event.
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
## Datasources Authentication
At the API datasource level, you can implement Authentication measures. You can establish an Authentication workflow specific to the datasource, allowing it to make requests to an Authentication service in order to obtain tokens or perform Authentication checks. Subsequently, this workflow can furnish headers, parameters, or status codes to the primary workflow as needed.

Here is the sample spec:
**Datasource**
```yaml
type: api
base_url: <% config.api.base_url %>
authn: com.jfs.api_auth
```
Here, `com.jfs.api_auth` is the Authentication workflow which gets called for the Authentication of any request to this datasource.

#### Sample workflow using the above datasource
```yaml
summary: Call an API and transform the 
tasks:
    - id: api_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: Hit with some dummy data. It will send back same as response
      fn: datasource.api.anything.post
      args:
        data: <% inputs.body %>
```
#### Sample Authentication workflow com.jfs.api_auth
```yaml
summary: Auth workflow
tasks:
    - id: auth_step1
      description: Hit the authn request
      fn: datasource.authapi.authenticate.post
      args:
        data: <% inputs.query.username %>

    - id: auth_step2
      description: Transform the response received from authn api
      fn: com.gs.transform
      args:
        headers:
          Authorization: <% 'Bearer ' + outputs.auth_step1.auth.token %>
        params:
          queryid: <% outputs.auth_step1.params.queryid %>
        statusCodes: <% outputs.auth_step1.status_code %>          
```
The Authentication workflow should return response in this format:
```yaml
headers: 
  header1: val1
params:
  param1: val1
statusCodes: [401, 403, ....]
```
:::note
The Authentication workflow gets called when any request returns the specified `statusCodes`. 
:::
