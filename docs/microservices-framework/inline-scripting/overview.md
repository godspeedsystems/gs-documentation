# Scripting

Inline scripting involves embedding and executing code directly within a document or workflow, enhancing seamless integration of script-based logic or functionality.

## Define language at global level

The default scripting language is CoffeeScript, and if you wish to change it, you can modify it in the `/config/default.yaml` file.

<details>
<summary>Configuring the default scripting language in default.yaml</summary>

```yaml
lang: javascript
```
</details>

:::tip We write scripting in '<% %>' tags within various examples in this page below.
:::


## Scripting in workflows

We use scripting in workflows/functions for dynamic evaluation of variables in <% %> tags.


#### Accessing ctx properties using scripting

The values of all [`ctx`](/docs/microservices-framework/workflows/native-language-functions.md#ctx) properties can be assessed using scripting tags `<% %>`

- Evaluating the inputs using scripting

```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.transform
    args: <% inputs.body.x + inputs.body.y %>
```

- Evaluating the outputs using scripting

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

- Evaluating the outputs using scripting bracket notation

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

### Use of Coffee/JS for scripting

The framework provides coffee/js for

- Transformations in [`com.gs.transform`](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgstransform) and [`com.gs.return`](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgsreturn)
- Dynamic evaluation or workflow or task variables, event variables, datasource variables.



#### Define language at workflow level
Global configuration for language is overridden by defining specific language inside <coffee/js% %>. 

- Scripting with coffee

```
summary: test the coffee scripting
id: coffee_workflow
description: Test the coffee script
tasks:
  - id: sum
    fn: com.gs.transform
    args: |
        <coffee% if inputs.query.name
                    return "Hello Shirisha"
                 else 
                    return "Hello Developer"
         %>
```
- Scripting with Javascript

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

:::tip Compile-time configuration data is present in datasources and eventsources, whereas at runtime, the context (`ctx`) becomes available. 
:::

## Scripting in datasources

Within datasources, the values of `base_urls`, and so on, can be accessed in `/datasources/api.yaml`, as configured in `config/default.yaml`.

<details>
<summary>Accessing base url in api.yaml</summary>

```yaml
type: axios
base_url: <% config.data.third_party_url %>
```
</details>


## Scripting in event sources

Within evensources,we can configure jwt and so on, can be accessed in `/eventsources/http.yaml`

<details>
<summary>Jwt configuration in http.yaml</summary>

```yaml
type: express
port: 3008
docs:
  endpoint: /api-docs

jwt:
  issuer: <% config.jwt.iss %>
  audience: <% config.jwt.aud %>
  secretOrKey: <%  config.jwt.sec %>
```
</details>




