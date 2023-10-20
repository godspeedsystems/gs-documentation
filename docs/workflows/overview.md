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

## Structure of a Workflow
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
The `tasks` attribute is used to define a list of tasks or steps that need to be performed within a workflow or automation process. Each task is typically represented as a separate item in the list, and they are executed sequentially or in parallel, depending on the workflow's configuration. The `tasks` attribute helps organize and specify the specific actions or operations that need to be carried out as part of the workflow, making it a crucial component for defining the workflow's logic and behavior.

- **id** - This is essential for improved logging visibility and is a mandatory requirement for each task. Furthermore, it plays a crucial role in accessing the output of the task in subsequent tasks through the 'outputs.{task_id}' path, as demonstrated in the example-2 above.

- **description** - In this field, we can provide a detailed description of what the workflows actually accomplish.

- **fn** - This specifies the handler that will be executed for this task. It can be a [built-in functions](/docs/workflows/inbuilt_workflows) or [developer defined function](/docs/workflows/custom_workflows).

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

* Decoupled Architechture
Yaml workflows allow decoupled architecture. This promotes modularity, flexibility, scalability, reusability, and easier testing and debugging. It allows different parts of a system to be developed and maintained independently, enhancing overall system robustness and adaptability.

* Zero Boiler Plate
Yaml follows zero-bolier-plate approch reducing or eliminating repetitive and unnecessary code or setup, allowing developers to focus on essential tasks, resulting in cleaner and more efficient code.

```yaml
id: helloworld
tasks:
  - id: fist_task
    fn: com.gs.return
    args:
      name: 'Hello World!'
```

#### Developer Defined Functions
Developers have the flexibility to create custom JavaScript functions that can be utilized across various YAML workflows by exporting these functions. [refer](/docs/workflows/custom_workflows)

#### Inputs
 These are typically used to represent the input data or parameters required for a task. In the below workflow, we see references to `inputs.body.name`, which suggests that the task expects a value named "name" as input. This input data can come from external sources.

#### Outputs
These represent the results or data produced by a task. In the below workflow, we have references like `outputs.transform_fn_step1.data`, indicating that the "data" produced by the task named "transform_fn_step1" is accessible as an output. This data can be used as input for subsequent tasks or for other purposes within the workflow.

```yaml
summary: Invoke an API and convert the custom function provided in the arguments into the YAML functions format.
tasks:
    - id: transform_fn_step1
      description: find fn name
      fn: com.gs.transform
      args: |
        <js%
          if (inputs.body.fn == 'sum') {
            return 'com.jfs.sum_workflow'
          } else {
            return 'com.jfs.helloworld'
          }
        %>
    - id: call_fn_step2
      description: call fn returned in transform_fn_step1
      fn: <% outputs.transform_fn_step1.data %>
      args:
        name: <% inputs.body.name %>
```
The output of every task and function can be expected in the following format within other task

- **success**: true/false. Default value is true
- **code**: standard HTTP response codes[1xx, 2xx, 3xx, 4xx, 5xx] Default value is 200
- **message**: any string explaining the response. Optional
- **data**: the actual data returned from the task/function. Optional


### Retry
When an operation fails, instead of giving up immediately, the retry mechanism allows the system to make multiple subsequent attempts to execute the same operation, with the hope that the issue causing the failure is temporary and will be resolved in subsequent tries.

Retry strategies can vary and may include parameters such as the maximum number of retry attempts, the type of retry algorithm (e.g., constant, exponential, or random intervals between retries), and the conditions under which retries should be triggered.

```yaml
summary: upload file
  id: upload_file
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload documents
      fn: datasource.mongo.document.post
      args:
        params:
        file_key: files
        files: <% inputs.files %>

      retry:
        max_attempts: 5
        type: constant/exponential/random
        interval: PT15m/PT15s
        #can select either 'internal' or use min and max interval.
        min_interval: PT5s
        max_interval: PT10s
```

## Error handling
 The `on_error` section defines how errors are managed within a workflow. It allows you to control whether the workflow should continue or stop in case of an error, what response or data to return in the event of an error, and how to log specific attributes related to the error. Additionally, it lets you specify a sequence of tasks to execute when an error occurs, enabling customized error handling and recovery procedures within the workflow.

```yaml
summary: Hello world
description: Hello world example which invokes the com.gs.return workflow
id: hello_world 
on_error:
  continue: false
  log_attributes:  
        error_message: <% outputs.transform_error.message %>
        error_type: 'your custom error type'
  response:
    success: false
    code: 500
    data: "Default error"
tasks: 
  - id: step1 
    fn: com.gs.return
    args: 'Hello World!' 
```