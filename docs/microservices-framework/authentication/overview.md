# Overview
:::tip Note
Currently the job of Authentication is left to the individual plugins.
:::
The framework delegates authentication responsibilities to individual plugins. Additionally, for other microservices, you have the flexibility to integrate various secret mechanisms such as Auth0, OAuth2, Keycloak, etc. Copy the respective index.ts file and customize it to add logic based on your specific needs.

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
