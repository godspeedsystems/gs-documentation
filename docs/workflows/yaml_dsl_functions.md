# Yaml-DSL Workflows

## Introduction

YAML DSL serves as the default language for creating general workflows. 


#### Decoupled Architechture
YAML [workflows](../design_principles.md#standardized-yaml-based-dsl-and-configurations) allow decoupled architecture. This promotes modularity, flexibility, scalability, reusability, and easier testing and debugging. It allows different parts of a system to be developed and maintained independently, enhancing overall system robustness and adaptability.

#### 1. Language-Agnostic Decoupling:

  When leveraging a Prisma API, it is possible to craft YAML configurations today and seamlessly incorporate them into a Java-based workflow at a later time. This decoupling empowers a seamless transition between various programming languages, provided they uphold compatibility with the identical YAML configuration format.

#### 2. Client-Agnostic Decoupling:

  If you develop your code in JavaScript, you are essentially using the native JavaScript client exposed by Prisma. Later, if you decide to switch from Prisma to TypeORM, you can keep the same YAML configuration. All you need to do is adapt the TypeORM client to conform to the YAML DSL of datasources. In this scenario, only the datasource implementation would change, while the rest of your code remains unchanged.

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


## Structure of a Workflow
Every Workflow has the following attributes.
- **id** - This is recommended for better logging visibility.
- **summary** - This provides a descriptive title for a workflow, enhancing code readability.
- **tasks** - This specifies that tasks, which can be workflows or sub-workflows, will be executed sequentially, one after the other. These tasks can call other workflows defined in YAML or JavaScript/TypeScript.

## Examples
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


## Retry
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

 - **continue** - The "continue" key accepts a boolean value, which can be either "true" or "false." When it's set to "true," the system will proceed to the next task even if an error occurs, effectively ignoring the error. On the other hand, if it's set to "false," the system will return a custom response and exit the workflow when an error is encountered.

- **log_attributes** - Log attributes assist in pinpointing the precise locations of breakpoints where errors occurred and provide visibility into the logged messages within the terminal.

- **response** - You can define custom responses with distinct status codes and messages to distinguish between different types of errors using customized error messages.



 ### Error handling in Task level

```yaml
summary: Hello world
description: Hello world example which invokes the com.gs.return workflow
id: hello_world 
on_error:
  continue: false
  log_attributes:  
        error_message: <% outputs.transform_error.message %> # You can check the break point of the workflow in the terminal
        error_type: 'your custom error type'
  response: # Customized response that is returned when an error occurs
    success: false
    code: 500
    data: "Default error"
tasks: 
  - id: step1 
    fn: com.gs.return
    args: 'Hello World!' 
```

 ### Error handling in Sub task level

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_sequential_step1
      description: for each
      fn: com.gs.each_sequential
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
          on_error: # on_error at task level
            continue: false
            response: <%Coffee/JS expression%> | String
      on_error: # on_error at loop level
        continue: true
        response: <%Coffee/JS expression%> | String
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1 %>
```

## Built-in functions

 The framework comes equipped with the following built-in functions.

The Godspeed framework offers a robust set of built-in functions to empower developers in orchestrating workflows seamlessly. Some of these essential functions include  ["com.gs.parallel"](#comgsparallel) enabling the execution of tasks in a sequential or parallel manner, respectively. For conditional logic, the framework provides ["com.gs.switch"](#comgsswitch), ["com.gs.if"](#comgsif) functions to make decisions based on specific criteria. Developers can iterate through tasks with ["com.gs.each_sequential"](#comgseach_sequential) and ["com.gs.each_parallel"](#comgseach_parallel) for controlled repetition. To capture and communicate data between tasks, ["com.gs.return"](#comgsreturn) comes in handy, while ["com.gs.log"](#comgslog) aids in logging crucial information for monitoring and debugging purposes. These built-in functions collectively enhance the efficiency and flexibility of workflow automation within the Godspeed framework.


## com.gs.transform

This function enables you to convert data from one format to another using CoffeeScript or JavaScript scripting.


#### Example event for transform function

<details>
<summary>Example event for transform function</summary>

```yaml
  http.get./transform:
  fn: transform
  params:
  - name: name
    in: query # same as open api spec: one of cookie, path, query, header
    required: true
    allow_empty_value: false
    schema:
      type: string 
  responses:
    200:
      content:
        application/json:
          schema:
            type: string
```
</details>



The above event will trigger the below function 

#### Example function for transform ( transform.yaml )


```yaml
summary: This function returns the greet message with name provided in query parameters
tasks:
  - id: return_hello_world
    fn: com.gs.return
    args: 'Hello'

  - id: return_with_status
    fn: com.gs.transform 
    args: <% outputs.return_hello_world.data + inputs.query.name %>
```


## com.gs.parallel
:::tip control flow function
Executes the child tasks in parallel.
:::

The parallel function is employed when we intend to include sub-tasks within the main tasks.


#### Example event for parallel inbuilt function

<details>
<summary>Example event for parallel inbuilt function</summary>

```yaml
  http.get./test/parallel:
  summary: parallel
  description: executing tasks parallelly
  fn: parallel
  body:
    content:
      application/json:
        schema:
          type: object
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
```
</details>


The above event will trigger the below function

#### Example function for parallel ( parallel.yaml )

```yaml
  summary: The Parallel function runs all its child task in parallel and we can select the specific childs output
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

## com.gs.switch
:::tip control flow function
The classic switch-case flow execution
:::

The `switch-flow` function accepts two arguments: `value` and `cases`. The `value` parameter receives a CoffeeScript/JavaScript expression that is evaluated at runtime. Each case corresponds to a task, which can trigger the execution of another function or workflow.


#### Example event for switch inbuilt function

<details>
<summary>Example event for switch inbuilt function</summary>

```yaml
  http.post./test/switch:
  summary: switch
  description: switch
  fn: switch
  body:
    content:
      application/json:
        schema:
          type: object
  responses:
    content:
      application/json:
        schema:
          type: object
```
</details>



The above event will trigger the below function. 

#### Example function for switch ( switch.yaml )


```yaml
summary: A "switch" statement activates specific cases when its conditional value matches any of those cases.
id: switch
description: 
tasks:
  - id: step1
    fn: com.gs.switch
    value: <%inputs.body.condition%>
    cases:
      FIRST:
        id: 1st
        fn: com.gs.return
        args: "sukumar"
      SECOND:
        id: 2nd
        fn: com.gs.return
        args: "yaswanth"
      THIRD:
        id: 3rd
        fn: com.gs.return
        args: "pavan"
    defaults:
      id: default
      fn: com.gs.return
      args: <%"all"%> 

```


## com.gs.each_sequential

:::tip control flow function
The classic for-each flow execution
:::

The `args` parameter consists of a list of values within the `value` field, each paired with its associated task. For every value in the `value` list, tasks are executed one after the other in sequence. The resulting output, `each_sequential`, is an array containing the status of the last task executed in each iteration.


#### Example event using each_sequential

<details>
<summary>Example event using each_sequential</summary>

```yaml
  http.get./test/each_sequential:
  summary: each_sequential
  description: each_sequential
  fn: each_sequential
  body:
    content:
      application/json:
        schema:
          type: object
  responses:
    200:
      content:
        application/json:
          schema:
            type: number

```
</details>


#### Example function using each_sequential ( each_sequential.yaml )

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_sequential_step1
      description: for each
      fn: com.gs.each_sequential
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% inputs.body.number * task_value %>
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1.data %>
```


#### Error handling in each_sequential functions

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_sequential_step1
      description: for each
      fn: com.gs.each_sequential
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
          on_error: # on_error at task level
            continue: false
            response: <%Coffee/JS expression%> | String
      on_error: # on_error at loop level
        continue: true
        response: <%Coffee/JS expression%> | String
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1 %>
```


## com.gs.each_parallel

The `args` parameter comprises a list of values in the `value` field, each paired with its respective tasks. These tasks run concurrently for each value in the `value` list. The resulting output, `each_parallel`, is an array containing the status of the last task executed in each iteration.


#### Exmaple event using each_parallel

<details>
<summary>Exmaple event using each_parallel</summary>

```yaml
  http.get./test/each_parallel:
  fn: each_parallel
```

</details>



#### Example function using each_parallel ( each_parallel.yaml )

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_parallel_step1
      description: for each
      fn: com.gs.each_parallel
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
    - id: each_parallel_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_parallel_step1 %>
```

## Using on_error

You have the flexibility to include an `on_error` handler at both the task level and within the `each_parallel` loop level.

Here's an illustrative example:
- In the event of a task failure for any `task_value`, the program will follow the `on_error` defined at the task level. If `continue` is set to false, it will halt the execution of subsequent tasks in the `tasks` list for the current `task_value` in the `value` list. For instance, in the given workflow, if the `each_task1` step for `task_value` 1 fails with `continue` set to false, the `each_task2` will not be executed.
- If all tasks within the loop fail, control is directed to the `on_error` defined at the loop level.

:::note
The `on_error` handler at the loop level is triggered exclusively when all tasks within the loop have failed. If at least one task within the loop succeeds, this handler will not be executed.
:::

#### Error handling in each_sequential functions

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_sequential_step1
      description: for each
      fn: com.gs.each_sequential
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
          on_error: # on_error at task level
            continue: false
            response: <%Coffee/JS expression%> | String
      on_error: # on_error at loop level
        continue: true
        response: <%Coffee/JS expression%> | String
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1 %>
```

## com.gs.return

:::tip return statement
The classic return statement
:::

When the return statement is invoked, it causes the current function to exit and returns control to the function caller, effectively terminating the function's execution.

#### Example event for return inbuilt function

<details>
<summary>Example event for return inbuilt function</summary>

```yaml
  http.post./return-fn/:city:
  fn: return
```
</details>


#### Example function for return ( return.yaml )

```yaml
summary: returning the data
description: Here we sum two hardcoded x and y values. Feel free to try using API input
tasks:
  - id: first
    fn: com.gs.return
    args: 
      data: |
        <js%
          {
            let data = {};
            data.body = inputs.body;
            data.name = inputs.headers.name
            data.city = inputs.params.city
            return data;
          }
        %>
```

## com.gs.log

During the workflow execution, it records intermediate inputs and outputs in the Pino logging format. The parameters include `level`, which can be set to any value from the [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options), and `data`, which accepts a CoffeeScript/JavaScript expression to be evaluated at runtime or any other data type, such as a string or number, that you wish to log.


#### Example event for log inbuilt function

<details>
<summary>Example event for log inbuilt function</summary>

```yaml
  http.post./test/log:
  summary: series
  description: series
  fn: log
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            x:
              type: integer
            y:
              type: integer
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
    400:
      content:
        application/json: # For ex. application/json application/xml
          schema:
            type: object
            properties:
              lender_response_code:
                type: string
```
</details>


#### Example function using log ( log.yaml )

```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.transform
    args: <% inputs.body.x + inputs.body.y %>

  - id: sum_step2
    fn: com.gs.log
    args: 
      level: info 
      data: <% outputs.sum_step1 %>

  - id: sum_step3
    fn: com.gs.return
    args: <js% (outputs.sum_step1) %>
```



## com.gs.if
:::tip control flow function
The classic if-else flow execution
:::

The function takes two parameters: `condition` and `tasks`. The `condition` parameter accepts a CoffeeScript/JavaScript expression that is evaluated at runtime, while the `tasks` parameter can trigger the execution of either another function or a workflow.


#### Example event for if-elif-else inbuilt function

<details>
<summary>Example event for if-elif-else inbuilt function</summary>

```yaml
http.get./greet:
  fn: if
  params:
  - name: greet
    in: query 
    required: true
    allow_empty_value: false
    schema:
      type: string
  responses: 
    200:
      content:
        application/json: 
          schema:
            type: string
            

```
</details>

#### Example function for if-elif-else ( if.yaml )

```yaml
summary: The subtasks will be triggered if the condition returns true
description: Here in each task the condition will be checked,if condition turns true then the corresponding task will be triggered and returns the output 
tasks:
  - id: if
    fn: com.gs.if
    condition: <% inputs.query.greet == 'hello' %>
    tasks:
      - id: step1
        fn: com.gs.return
        args: 'Hello!'

  - id: elif1
    fn: com.gs.elif
    condition: <% inputs.query.greet == 'pavan' %>
    tasks:
      - id: step2
        fn: com.gs.return
        args: 'Hello pavan'

  - id: elif2
    fn: com.gs.elif
    condition: <% inputs.query.greet == 'hari' %>
    tasks:
      - id: step3
        fn: com.gs.return
        args: 'Hello Hari'

  - id: else
    fn: com.gs.else
    tasks:
      - id: step4
        fn: com.gs.return
        args: 'Hi developer'

```

##### Using on_error

You have an option to include an `on_error` handler at both the task level and within the `each_sequential` loop level.

Here's an example to illustrate:
- If a task encounters a failure for any `task_value`, the program will follow the `on_error` defined at the task level. If `continue` is set to false, it will terminate the loop; otherwise, it will proceed to the next tasks.
- In the event that all tasks within the loop fail, the program will direct control to the `on_error` defined at the loop level.

:::note
The `on_error` handler at the loop level is exclusively triggered when all tasks within the loop have failed. If at least one task within the loop succeeds, this handler will not be executed.
:::