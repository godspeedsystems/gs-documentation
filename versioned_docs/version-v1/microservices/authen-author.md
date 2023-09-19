---
sidebar_position: 6
title: Authentication & Authorization
toc_min_heading_level: 2
toc_max_heading_level: 4
---

## 12.1 Authentication
The framework provides [JWT authentication](https://jwt.io/introduction) for securely transmitting information among microservices. 
The user agent should send the JWT in the Authorization header using the Bearer schema. The content of the header should look like the following:
```
Authorization: Bearer <token>
```

### 12.1.1 JWT Configuration
You can do JWT configuration in [Configuration/Environment variables](./setup/configuration/env-vars.md/#custom-environment-variablesyaml). For example, this is the sample configuration:
```
jwt:
  issuer: JWT_ISS #iss
  audience: JWT_AUD #aud
  secretOrKey: JWT_SECRET
```
Options which can be passed for jwt config are:

![jwt_config_options](/img/jwtconfig_options.png) 

When configuring jwt config, if you dont not provide `secretOrKeyProvider` or `secretOrKey` property from the above config [options](https://www.passportjs.org/packages/passport-jwt/) it will throw an error. 

If you pass an issuer or audience value in config and the token values are set differently than the config payload, the response will be `Unauthorised`.


You need to export these environment variables in your environment.

#### 12.1.1.1 Access JWT payload in Workflow DSL
You can access the complete JWT payload in `<% inputs.user %>` in workflow DSL as given below:
```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1
      description: Hit http bin with some dummy data. It will send back same as response
      fn: com.gs.http
      args:
        datasource: httpbin
        data: <% inputs.body %>
          jwt_payload: <% inputs.user %>
        config:
          url : /anything
          method: post
```

### 12.1.2 Event spec
Add `authn: true` in the event DSL to enable authentication for any event.
```
/v1/loan-application/:lender_loan_application_id/kyc/ckyc/initiate.http.post: 
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

### 12.1.3 Generate JWT
Generally, you will get JWT from your authentication service. For testing purposes, you can generate JWT at [https://jwt.io/](https://jwt.io/) by providing the `iss`, `aud` and `secretOrKey` to verify signature. Use the encoded token as JWT authentication token. For example,
![JWT](/img/JWT.png)

In the above case, the Authorization header should look like:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtcy5zYW1wbGUuY29tIiwiYXVkIjoic2FtcGxlLmNvbSJ9._1fpM6VYq1rfKdTEqi8BcPTm8KIm4cNP8VhX0kQOEts
```

### 12.1.4 Datasource authentication
You can add authentication at datasource level on [API datasource](./datasources/api.md). You can define an authn workflow at datasource level which requests to any authentication service for token/authentication then this workflow can return headers, params or statusCodes to the main workflow. 

Here is the sample spec:  
**Datasource**
```yaml
type: api
base_url: <% config.httpbin.base_url %>
authn: com.jfs.httpbin_auth
```
Here, `com.jfs.httpbin_auth` is the authentication workflow which gets called for the authentication of any request to this datasource.

**Sample workflow using the above datasource**
```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: Hit http bin with some dummy data. It will send back same as response
      fn: com.gs.http
      args:
        datasource: httpbin
        data: <% inputs.body %>
        config:
          url : /anything
          method: post

```

**Sample authentication workflow `com.jfs.httpbin_auth`**
```yaml
summary: Auth workflow
tasks:
    - id: auth_step1
      description: Hit the authn request
      fn: com.gs.http
      args:
        datasource: authapi
        data: <% inputs.query.username %>
        config: 
          url: /authenticate
          method: post
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

The authentication workflow should return response in this format:
```yaml
headers: 
  header1: val1
params:
  param1: val1
statusCodes: [401, 403, ....]
```

:::note
The authentication workflow gets called when any request returns the specified `statusCodes`. 
:::

## 12.2 Authorization
The framework provides authorization, to verify if any event/model is authorized to access specific information or is allowed to execute certain actions.

### 12.2.1 Workflow DSL
You can add authorization workflow at the task level in any workflow. The authorization workflow should return allow/deny or json output to the main worklfow.

** Allow/Deny **  
If authz workflow returns data as true/false, it means the task is allowed/denied to get executed.

** JSON output **  
If authz workflow returns JSON output then it is merged with args.data of the task for which authz is being executed.

Here is the sample spec:  
**Sample workflow calling the authz workflow**
```yaml
summary: Call an API
tasks:
    - id: httpbin_step1
      description: Hit http bin with some dummy data. It will send back same as response
      authz:
        fn: com.jfs.authz
        args: <% inputs %>
      fn: com.gs.http
      args:
        datasource: httpbin
        data: <% inputs %>
        config:
          url : /anything
          method: post
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: com.gs.http
    args: 
      datasource: authz
      data: <% inputs.body.user %>
      config:
        url : /authorize
        method: post
  - id: authz_step2
    description: transform response from authz api
    fn: com.gs.transform
    args: |
        <coffee% if outputs.authz_step1.data.code == 200 then {
            success: true
            data: true
        } else if outputs.authz_step1.data.code == 201 then {
            success: true
            data:
              where:
                role: 'USER'
        } else {
            success: false
            data: false
        } %>
```

The authorization workflow should return response in this format to allow/deny:
```yaml
success: true/false
data: true/false/JSON output
```

> When data is returned as false i.e. deny then the framework will send `403 Unauthorized` response.


### 12.2.2 Sample DB query call authorization
In DB query call, authz workflow can return JSON output with where clause, include clause etc. which will be merged with the args of the main workflow which is doing DB query.

Here is the sample spec:  
**Sample workflow calling the authz workflow**
```yaml
summary: datastore demo
tasks:
  - id: find_user
    description: find users
    authz:
      fn: com.jfs.auth
      args: <% inputs %>
    fn: com.gs.datastore
    args:
      datasource: mongo
      data:
        include: <% inputs.body.include %>
        where: <% inputs.body.where %>
      config:
        method: user.findMany
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: com.gs.http
    args: 
      datasource: authz
      data: <% inputs.body.user %>
      config:
        url : /authorize
        method: post
  - id: authz_step2
    description: transform response from authz api
    fn: com.gs.transform
    args: |
        <coffee% if outputs.authz_step1.data.code == 200 then {
            success: true
            data:
              where:
                role: 'USER'
        } else {
            success: false
            data: false
        } %>
```

When authorization workflow `com.jfs.authz` returns `success: true` then its `data` will be merged with the main workflow which is calling the authz workflow.   
For example, in the above authz workflow, `data` is returned as:
```yaml
data:
  where:
    role: 'USER'
```

This data will be merged with the args.data of the main workflow i.e.
```yaml
args:
  data:
    include: <% inputs.body.include %>
    where: <% inputs.body.where %> # where clause from authz workflow will be merged with this
```
