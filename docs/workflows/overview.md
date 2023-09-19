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
Within the system, Workflows serve as the core engine responsible for actual computations and orchestrating the flow of operations. The framework facilitates this process through a YAML-based Domain Specific Language (DSL) for defining workflows and tasks that encapsulate the business logic. These defined workflows can either be linked to events as their handlers or invoked from within other workflows, allowing for versatile and seamless automation.

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
## Structure of a Workflow
Every Workflow has the following attributes.
- **id** - This is recommended for better logging visibility.
- **summary** - This provides a descriptive title for a workflow, enhancing code readability.
- **tasks** - This specifies that tasks, which can be workflows or sub-workflows, will be executed sequentially, one after the other. These tasks can call other workflows defined in YAML or JavaScript/TypeScript.
### Tasks and Attributes within a task
The `tasks` attribute is used to define a list of tasks or steps that need to be performed within a workflow or automation process. Each task is typically represented as a separate item in the list, and they are executed sequentially or in parallel, depending on the workflow's configuration. The `tasks` attribute helps organize and specify the specific actions or operations that need to be carried out as part of the workflow, making it a crucial component for defining the workflow's logic and behavior.
- **id** - This is essential for improved logging visibility and is a mandatory requirement for each task. Furthermore, it plays a crucial role in accessing the output of the task in subsequent tasks through the 'outputs.{task_id}' path, as demonstrated in the example-2 above.
- **description** - In this field, we can provide a detailed description of what the workflows actually accomplish.
- **fn** - This specifies the handler that will be executed for this task. It can be one of the framework functions, control functions (such as parallel, sequential, switch), custom developer-written functions, or another workflow.
- **args** - Every handler function has its own argument structure, which is kept in the args key.
#### Inputs
 These are typically used to represent the input data or parameters required for a task. In the below workflow, we see references to `inputs.body.name`, which suggests that the task expects a value named "name" as input. This input data can come from external sources.
#### Outputs
These represent the results or data produced by a task. In the below workflow, we have references like `outputs.transform_fn_step1.data`, indicating that the "data" produced by the task named "transform_fn_step1" is accessible as an output. This data can be used as input for subsequent tasks or for other purposes within the workflow.


```yaml
summary: Call an API and transform the
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
retry:
  max_attempts: 5
  type: constant
  interval: PT15m
```
```yaml
retry:
  max_attempts: 5
  type: exponential
  interval: PT15s
```
```yaml
retry:
  max_attempts: 5
  type: random
  min_interval: PT5s
  max_interval: PT10s
```

## Error handling
 the `on_error` section defines how errors are managed within a workflow. It allows you to control whether the workflow should continue or stop in case of an error, what response or data to return in the event of an error, and how to log specific attributes related to the error. Additionally, it lets you specify a sequence of tasks to execute when an error occurs, enabling customized error handling and recovery procedures within the workflow.

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
## Built-in Function
The Godspeed framework offers a robust set of built-in functions to empower developers in orchestrating workflows seamlessly. Some of these essential functions include "com.gs.series" and "com.gs.parallel," enabling the execution of tasks in a sequential or parallel manner, respectively. For conditional logic, the framework provides "com.gs.switch," "com.gs.if," "com.gs.elif," and "com.gs.else" functions to make decisions based on specific criteria. Developers can iterate through tasks with "com.gs.each_sequential" and "com.gs.each_parallel" for controlled repetition. To capture and communicate data between tasks, "com.gs.return" comes in handy, while "com.gs.log" aids in logging crucial information for monitoring and debugging purposes. These built-in functions collectively enhance the efficiency and flexibility of workflow automation within the Godspeed framework. Refer [inbuilt functions](/docs/workflows/inbuilt_workflows)