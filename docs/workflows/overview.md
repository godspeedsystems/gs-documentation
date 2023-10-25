---
title: Workflows/Functions
---
<!-- # Workflows (aka Functions)

- Introduction
- A simple workflow example
- Structure of a workflow
- Tasks
  - intro
  - inputs
  - outputs
- Retry
- Error Handling
- Inbuilt Function
  [HEADING] {function name}
  [DESCRIPTION]
  [EXAMPLE] -->

## Introduction

Within the system, Workflows serve as the core engine responsible for actual computations and orchestrating the flow of operations. The framework facilitates this process through a YAML-based Domain Specific Language (DSL) for defining workflows and tasks that encapsulate the business logic. These defined workflows can either be linked to events as their handlers or invoked from within other workflows, allowing for a versatile and seamless automation.

### Types of workflows or functions
Godspeed supports two types for functions
* Native language workflows
* Yaml-DSL workflows


:::tip **YAML is suitable for cases where you require straightforward business logic and database queries. In contrast, for more intricate business logic, it is advisable to use native programming languages like JavaScript, TypeScript, or Java.**
:::


### Native Language Workflows
The user has the ability to write JavaScript files and can invoke them from events when implementing intricate functionalities.

##### Developer Defined Functions

Developers can establish their own JavaScript functions within the project by generating a new JavaScript file at any location. These functions must be exported, allowing them to be invoked in YAML workflows by specifying the JavaScript file path in the 'fn' keyword. [refer](/docs/workflows/native_language_functions)

### Example for native language

#### Event

<details>
<summary>Event</summary>

```yaml
http.get./greet:
    fn: greet
    params:
      - name: name
        in: query
        schema:
          type: string
        required: true
    responses:
      200:
        content:
          application/json:
            schema:
              type: string  
```

</details>


#### Yaml file
```yaml
summary: greet the user
description: this function greets the user by accepting the user name
tasks:
  - id: greet_task
    fn: greetings
    args:
      name: <%inputs.query.name%>
```

#### Javascript file
```js
module.exports = function greet(name){
    return `Hello ${name}!`;
}
```

### Yaml-DSL Workflows
YAML DSL serves as the default language for creating general workflows.[Read More](/docs/workflows/yaml_dsl_functions)

### Structure of a Yaml Workflow
Every Workflow has the following attributes.
- **id** - This is recommended for better logging visibility.
- **summary** - This provides a descriptive title for a workflow, enhancing code readability.
- **tasks** - This specifies that tasks, which can be workflows or sub-workflows, will be executed sequentially, one after the other. These tasks can call other workflows defined in YAML or JavaScript/TypeScript.

### Example for Yaml

```yaml
id: helloworld
tasks:
  - id: first_task
    fn: com.gs.return
    args:
      name: 'Hello World!'
```
