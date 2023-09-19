---
sidebar_position: 3
title: 8.3 API datasource
---

# API datasource

The API datasource acts as a wrapper around third party APIs. It helps interact with third party APIs or own microservices. It takes OpenAPI schema as its setting, and the datasource can be used in `com.gs.http` calls out of the box. Following functionality is provided by the framework based on the schema of the datasource
- Authentication and authorization as per the spec
- Validation of the input to the http method (must be compliant to the API spec)
- Validation of the response from the API (must be compliant to the API spec)

### 8.3.1 API datasource schema defined externally
If the OpenAPI spec of the API to consume/connect with is available at a URL, then one can simply refer the url here itself.

```yaml
type: api
schema: https://raw.githubusercontent.com/Kong/swagger-ui-kong-theme/main/demo/public/specs/httpbin.yaml
```

### 8.3.2 API datasource schema defined within the yaml file
If there is no OpenAPI spec available for an API, then developer needs to provide details of the API schema in the .yaml file for that datasource.

```yaml
type: api
schema:
base_url: <% config.httpbin.base_url %>
security:
  - ApiKey: sample-app
  - ApiToken: <% config.httpbin.api_token %>

securitySchemes:
  ApiKey:
    type: apiKey
    in: header
    name: x-api-key

  ApiToken:
    type: apiKey
    in: header
    name: Authorization
#    
before_method_hook: com.jfs.before_method_hook_workflow
#
after_method_hook: com.jfs.after_method_hook_workflow 
```

### 8.3.3 Headers defined at datasource level
Headers defined at datasource level are applicable for all the workflows, which are using this datasource. For example, in below datasource, headers 'name' and 'title' are sent in each workflow which is using this datasource.

```
type: api
base_url: <% config.httpbin.base_url %>

headers:
  name: godspeed
  title: <% inputs.headers['title'] %>
```

### 8.3.4 Headers defined at task level
Headers defined at task level are applicable for a single task only. You can find the [example usage here](../workflows#62-the-tasks-within-workflows)

### 8.3.5 Datasource extensibility with before and after method hooks

`before_method_hook` and `after_method_hook` defined at datasource level are applicable for all the workflows, which are using this datasource.

You can leverage `before_method_hook` and `after_method_hook` method hooks to trigger another workflow as per your use case.

for ex. You want to make an audit log for a third party api. 

- `before_method_hook` this workflow will be triggered before executing the workflow where the datasource is defined.  

src/datasource/test_datasource.yaml
```yaml
type: api
schema:
base_url: <% config.httpbin.base_url %>    
before_method_hook: com.jfs.audit_log_workflow
```

- `after_method_hook` this workflow will be triggered after executing the workflow where the datasource is defined. 
src/datasource/test_datasource.yaml

```yaml
type: api
schema:
base_url: <% config.httpbin.base_url %>    
after_method_hook: com.jfs.audit_log_workflow
```

### 8.3.6 Example usage
You can find the [example usage here](../workflows#661-comgshttp)