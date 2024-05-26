---
title: Overview
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

Within the system, Workflows serve as the core engine responsible for actual computations and orchestrating the flow of operations. The framework framework streamlines this process using a YAML-based Domain Specific Language (DSL) designed for precisely defining workflows and tasks that encapsulate critical business logic. These defined workflows can seamlessly integrate with events as their handlers or be invoked internally from other workflows, allowing for a versatile and seamless automation.

### Types of workflows
Godspeed supports two types for functions
* Native language workflows
* Yaml-DSL workflows


:::tip **YAML is suitable for cases where you require straightforward business logic and datasource queries. In contrast, for more intricate business logic, it is advisable to use native programming languages like JavaScript, TypeScript, or Java.**
:::

**These two functions can invoke each other based on the flow of execution.**

### Native Language Workflows
The user has the ability to write JavaScript or Typescript files and can invoke them from events when implementing intricate functionalities.

### Developer Defined Functions

Developers can establish their own JavaScript functions within the project by generating a new JavaScript file at any location within `Functions` folder of `src` defined in root. These functions must be exported, allowing them to be invoked in YAML workflows by specifying the JavaScript file path in the 'fn' keyword. [refer](/docs/microservices-framework/workflows/native-language-functions.md)

### Demonstration

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/66TxoXEPKUc" frameBorder="0" allowFullScreen></iframe>
</div>

### Example for native language

#### Event

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
YAML DSL serves as the default language for creating general workflows.[Read More](/docs/microservices-framework/workflows/yaml-workflows/overview.md)

### Structure of a Yaml Workflow
Every Workflow has the following attributes.
- **id** - This is recommended for better logging visibility.
- **summary** - This provides a descriptive title for a workflow, enhancing code readability.
- **tasks** - This specifies that tasks, which can be workflows or sub-workflows, will be executed sequentially, one after the other. These tasks can call other workflows defined in YAML or JavaScript/TypeScript.

## A Sample Workflow Example 
#### Example 1:
```yaml
id: hello_world_function
summary: Call an API and return the task message
tasks:
    - id: return_fn_step1
      description: add a message property
      fn: com.gs.return #It's a inbuilt function that returns args.
      args: "Hello World!"
```
#### Example 2:
```yaml
  summary: Summing x + y
  description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
  tasks:
    - id: sum_step1
      description: add two numbers
      fn: com.jfs.sum #This is a developer defined function that takes two arguments, performs addition and returns the total.
      args:
        x: 1
        y: 2
    
    - id: sum_step2
      description: return the response
      fn: com.gs.transform #Inbuilt function that converts the code written in <%%>.
      args: <% outputs.sum_step1 %> #we access the first task output and return it.
```

### Tasks and Attributes within a task
The `tasks` attribute is used to define a list of tasks or steps that need to be performed within a workflow or automation process. Each task is typically represented as a separate item in the list, and they are executed sequentially or in parallel, depending on the workflow's configuration. The `tasks` attribute plays a vital role in structuring and specifying the precise actions or operations required within the workflow. This attribute is essential for defining the workflow's logic and behavior.
- **id** - This is essential for improved logging visibility and is a mandatory requirement for each task. Furthermore, it plays a crucial role in accessing the output of the task in subsequent tasks through the 'outputs.{task_id}' path, as demonstrated in the example-2 above.

- **description** - In this field, we can provide a detailed description of what the workflows actually accomplish.

- **fn** - This specifies the handler that will be executed for this task. It can be a [built-in functions](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md) or developer defined functions [YAML](/docs/microservices-framework/workflows/yaml-workflows/workflow-dsl.md), [JavaScript](/docs/microservices-framework/workflows/native-language-functions.md).

- **args** - Every handler function has its own argument structure, which is kept in the args key.

### Types of workflows or functions
* Native language workflows
* Yaml-DSL workflows

### Native Language Workflows
The user has the ability to write JavaScript files and can invoke them from events when implementing intricate functionalities.

```js
export class GSContext { //span executions
  inputs: GSCloudEvent; //The very original event for which this workflow context was created

  outputs:{[key: string]: GSStatus; }; //DAG result. This context has a trace history and responses of all instructions in the DAG are stored in this object

  log_events: GSLogEvent[] = [];

  config: PlainObject; //app config

  datasources: PlainObject; //app config

  mappings: any;

  plugins: PlainObject;

  exitWithStatus?: GSStatus;

  constructor(config: PlainObject, datasources: PlainObject, event: GSCloudEvent, mappings: any, plugins: PlainObject) {//_function?: GSFunction
    this.inputs = event;
    this.config = config;
    this.outputs = {};
    this.datasources = datasources;
    this.mappings = mappings;
    this.plugins = plugins;

    childLogger.debug('inputs for context %o', event.data);
  }

  public cloneWithNewData(data: PlainObject): GSContext {
    return new GSContext(
        this.config,
        this.datasources,
        this.inputs?.cloneWithNewData(data),
        this.mappings,
        this.plugins
    );
  }

  public addLogEvent(event: GSLogEvent): void {
    this.log_events?.push(event);
    //also push to the logging backend
  }
}

```

### Yaml-DSL Workflows
YAML DSL serves as the default language for creating general workflows. 

#### Zero Boiler Plate
Yaml follows zero-bolier-plate approach reducing or eliminating repetitive and unnecessary code or setup, allowing developers to focus on essential tasks, resulting in cleaner and more efficient code.

```yaml
id: helloworld
tasks:
  - id: first_task
    fn: com.gs.return
    args:
      name: 'Hello World!'
```

#### Decoupled Architecture
Yaml workflows allow decoupled architecture. This promotes modularity, flexibility, scalability, reusability, easier testing and debugging. It allows different parts of a system to be developed and maintained independently, enhancing overall system robustness and adaptability.

- #### Language-Agnostic Decoupling:

  When leveraging a Prisma API, it is possible to craft YAML configurations today and seamlessly incorporate them into a Java-based workflow at a later time. This decoupling empowers a seamless transition between various programming languages, provided they uphold compatibility with the identical YAML configuration format.

- #### Client-Agnostic Decoupling:

  If you develop your code in JavaScript, you are essentially using the native JavaScript client exposed by Prisma. Later, if you decide to switch from Prisma to TypeORM, you can keep the same YAML configuration. All you need to do is adapt the TypeORM client to conform to the YAML DSL of datasources. In this scenario, only the datasource implementation would change, while the rest of your code remains unchanged.

