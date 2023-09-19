---
sidebar_position: 3
title: 8.2 Before and after hooks to datasource calls
---

### 8.2.1 Adding before and after hooks

You can execute custom workflows `before_method_hook` and `after_method_hook` any datasource call. this applies to all kinds of datasources you integrate in a godspeed project, whether of type api,redis, kafka etc


- `before_method_hook` this hook will trigger a workflow before executing the any method of the datasource in a task.

`src/datasource/test_datasource.yaml`
```yaml
type: api
schema:
base_url: <% config.httpbin.base_url %>    
before_method_hook: com.jfs.audit_log_workflow
```

- `after_method_hook` this hook will trigger a workflow after executing the method of the datasource in a task.

`src/datasource/test_datasource.yaml`
```yaml
type: api
schema:
base_url: <% config.httpbin.base_url %>    
after_method_hook: com.jfs.audit_log_workflow
```

- To access datasource context in the workflows of the `before_method_hook` and `after_method_hook` use `<% config.context %>` script.
 
for eg.

 ```yaml
summary: 'hook workflow for testing'
id: logging_input_output
tasks: 
  - id: audit_log
    fn: com.gs.transform
    args:
      request: <% config.context %>
      response: <% outputs %>
 ```

context of datasource type: api

```json
{
  "type": "api",
  "base_url": "https://dummyjson.com",
  "gsName": "testdatasource",
  "url": "/products/1",
  "method": "post",
  "body": {
    "test": "key"
  }
}```
