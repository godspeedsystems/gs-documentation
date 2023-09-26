# Built-in functions


### The framework comes equipped with the following built-in functions.

The Godspeed framework offers a robust set of built-in functions to empower developers in orchestrating workflows seamlessly. Some of these essential functions include  ["com.gs.parallel"](#comgsparallel) enabling the execution of tasks in a sequential or parallel manner, respectively. For conditional logic, the framework provides ["com.gs.switch"](#comgsswitch), ["com.gs.if"](#comgsif) functions to make decisions based on specific criteria. Developers can iterate through tasks with ["com.gs.each_sequential"](#comgseach_sequential) and ["com.gs.each_parallel"](#comgseach_parallel) for controlled repetition. To capture and communicate data between tasks, ["com.gs.return"](#comgsreturn) comes in handy, while ["com.gs.log"](#comgslog) aids in logging crucial information for monitoring and debugging purposes. These built-in functions collectively enhance the efficiency and flexibility of workflow automation within the Godspeed framework.


## com.gs.transform

This function enables you to convert data from one format to another using CoffeeScript or JavaScript scripting.

#### Example event for transform function

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

The above event will trigger the below function 

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

# Using on_error

You have an option to include an `on_error` handler at both the task level and within the `each_sequential` loop level.

Here's an example to illustrate:
- If a task encounters a failure for any `task_value`, the program will follow the `on_error` defined at the task level. If `continue` is set to false, it will terminate the loop; otherwise, it will proceed to the next tasks.
- In the event that all tasks within the loop fail, the program will direct control to the `on_error` defined at the loop level.

:::note
The `on_error` handler at the loop level is exclusively triggered when all tasks within the loop have failed. If at least one task within the loop succeeds, this handler will not be executed.
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


## com.gs.each_parallel

The `args` parameter comprises a list of values in the `value` field, each paired with its respective tasks. These tasks run concurrently for each value in the `value` list. The resulting output, `each_parallel`, is an array containing the status of the last task executed in each iteration.


#### Exmaple event using each_parallel

```yaml
  http.get./test/each_parallel:
  fn: each_parallel
```


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

```yaml
  http.post./return-fn/:city:
  fn: return
```

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

