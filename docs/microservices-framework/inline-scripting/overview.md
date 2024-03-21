# Scripting

Inline scripting involves embedding and executing code directly within Godspeed YAML code (e.g. workflows, datasources, eventsource, events, etc.,) enhancing seamless integration of script-based logic or functionality.   
It is used directly by embedding the code/variables in `<% %>` tags. This code is evaluated whenever the yaml is needed to be evaluated e.g. at loadtime or runtime. 
     
**Loadtime evaluation** There are some variables/code which should be evaluated at loadtime. For example, using [configs and mappings](../config-and-mappings/config.md) in datasources, events, or eventsources as given below:
```yaml title=src/datasources/api.yaml
type: axios
base_url: <% config.api.base_url %>
```
```yaml title=src/events/helloworld.yaml
"http.post./helloworld":
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
            gender:
              type: string
              enum: <% mappings.gender %>
```

**Runtime evaluation** There are some variables/code which should be evaluated at runtime. For example, using [GSContext properties](../workflows/native-language-functions.md/#gscontext) in workflows as given below:
```yaml title=src/workflows/helloworld.yaml
id: helloworld
tasks:
  - id: first_task
    fn: com.gs.return
    args: <% "Hello, The gender of " + inputs.body.name + " is " + inputs.body.gender %>
```

## Default language at global level
The default language is `js`. You can change the default language globally in `defaults.lang` key in `config/default.yaml`. It will be applicable everywhere unless overridden explicitly.    
```yaml title=config/default.yaml
defaults:
  lang: js #coffee
```

## Override the default language
You can override the default language by specifying the language inside the starting tag like `<coffee%` or `<js%`
```yaml
type: axios
base_url: <js% config.api.base_url %>
port: <coffee% config.port %>
```

## Scripting in workflows
We use scripting in workflows/functions for dynamic evaluation of variables in `<% %>` tags.

### Accessing ctx properties using scripting

The values of all [`ctx`](/docs/microservices-framework/workflows/native-language-functions.md#gscontext) properties can be assessed using scripting tags.

**1. Evaluating the inputs using scripting**

```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.transform
    args: <% inputs.body.x + inputs.body.y %>
```

**2. Evaluating the outputs using scripting**
```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.transform
    args: <% inputs.body.x + inputs.body.y %>
  - id: sum_step2
    fn: com.gs.return
    args: <% outputs.sum_step1 %>
```

**3. Evaluating the outputs using scripting bracket notation**
```yaml
  summary: parallel function
  tasks:
    - id: parallel
      fn: com.gs.parallel
      tasks:
        - id: 1st
          fn: com.gs.return
          args: "నమస్కారం"

        - id: 2nd
          fn: com.gs.return
          args: "नमस्ते"

        - id: 3rd
          fn: com.gs.return
          args: "Hello"
    - id: step2
      fn: com.gs.return
      args: |
        <% outputs["1st"] %>
```

### Dynamic evaluation using coffee/js scripting

You can use coffee/js to write embedded code in:
- args which are the arguments to the the function.
- transformations in [`com.gs.transform`](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgstransform) and [`com.gs.return`](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgsreturn)
- [authz instruction](../authorization/authz-usecases.md/#c-authorization-at-task-level) at task level.
- [on_error](../workflows/yaml-workflows/workflow-dsl.md/#error-handling) in workflow tasks.

**1. Scripting with coffee**
```
summary: test the coffee scripting
id: coffee_workflow
description: Test the coffee script
tasks:
  - id: sum
    fn: com.gs.transform
    args: |
      <coffee% 
        if inputs.query.name
          return "Hello Shirisha"
        else 
          return "Hello Developer"
      %>
```
**2. Scripting with Javascript**
```
summary: performing js scrpit 
tasks:
  - id: first_task
    fn: com.gs.return
    args: |
      <js%
        if(inputs.query.name){
          return `Hello ${inputs.query.name}!`
        }
        return 'Hello Developer!'
      %>
```

:::info Compile-time configuration data and mappings are present, however at runtime, the context (`ctx`) becomes available. 
:::

## Scripting in datasources
Within datasources, [config or mappings](../config-and-mappings/config.md), can be accessed at loadtime.
```yaml title=src/datasources/api.yaml
type: axios
base_url: <% config.api.base_url %>
```

## Scripting in eventsources and events
Within datasources, you can use scripting as given in the below examples:   
- accessing [config and mappings](../config-and-mappings/config.md).
- [authz instruction](../authorization/authz-usecases.md/#a-authorization-at-event-source-level)
```yaml title=eventsources/http.yaml
type: express
port: <% config.http.port %>
docs:
  endpoint: /api-docs
jwt:
  issuer: <% config.jwt.iss %>
  audience: <% config.jwt.aud %>
  secretOrKey: <%  config.jwt.sec %>
authz:
  - fn: com.gs.transform 
    id: authz_task
    args: | # if this condition fails, the else gets executed
      <js% 
        if (inputs.user.role !== 'admin') { 
            return {
            success: false, 
            code: 403,
            message: "Authorization failed"
          }
        }
      %>  
```

```yaml title=src/events/helloworld.yaml
"http.post./helloworld":
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
            gender:
              type: string
              enum: <% mappings.gender %>
  authz:
    - fn: com.gs.transform 
      id: authz_task
      args: | # if this condition fails, the else gets executed
        <js% 
          if (inputs.user.role !== 'system admin') { 
              return {
              success: false, 
              code: 403,
              message: "Authorization failed"
            }
          }
        %>   
```
