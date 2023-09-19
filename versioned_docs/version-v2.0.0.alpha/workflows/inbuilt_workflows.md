# Built-in functions

### The framework comes equipped with the following built-in functions.


## com.gs.transform

This function enables you to convert data from one format to another using CoffeeScript or JavaScript scripting.

#### Example function using transform

```yaml
  summary: Parallel Multiplexing create loan for hdfc api calls
  tasks:
    - id: parallel
      fn: com.gs.parallel
      tasks:
        - id: 1st
          fn: com.gs.return
          args: |
            'parallel task1'

        - id: 2nd
          fn: com.gs.return
          args: |
            'parallel task2'
    - id: step2
      fn: com.gs.transform
      args:
        code: 200
        data: <% outputs.step1_switch.data %>
```

## com.gs.series
:::tip control flow function
Executes the tasks in series.
:::

By default, each top-level workflow carries out its tasks sequentially. However, when calling subworkflows, if necessary, you can explicitly use a series workflow, which uses the same syntax as parallel execution.


#### Example function using series

```yaml
  summary: Parallel Multiplexing create loan for hdfc api calls
  tasks:
    - id: parallel
      fn: com.gs.series
      tasks:
        - id: 1st
          fn: com.gs.return
          args: |
            'parallel task1'

        - id: 2nd
          fn: com.gs.return
          args: |
            'parallel task2'
    - id: step2
      fn: com.gs.transform
      args: |
        <coffee% {
          code: 200,
          data: outputs['1st']
        } %>
```

## com.gs.parallel
:::tip control flow function
Executes the child tasks in parallel.
:::

The parallel function is employed when we intend to include sub-tasks within the main tasks.

Syntax is same as [com.gs.series](#comgsseries)

#### Example function using parallel

```yaml
  summary: Parallel Multiplexing create loan for hdfc api calls
  tasks:
    - id: parallel # parent task
      fn: com.gs.parallel 
      tasks:
        - id: 1st  # child task one
          fn: com.gs.return
          args: |
            'parallel task1'

        - id: 2nd  # child task two
          fn: com.gs.return
          args: |
            'parallel task2'

        - id: 3rd # child task three
          fn: com.gs.return
          args: |
            'parallel task3'

    - id: step2
      fn: com.gs.transform
      args: |
        <coffee% {
        code: 200,
        data: outputs['1st']
        } %>
```

## com.gs.switch
:::tip control flow function
The classic switch-case flow execution
:::

The `switch-flow` function accepts two arguments: `value` and `cases`. The `value` parameter receives a CoffeeScript/JavaScript expression that is evaluated at runtime. Each case corresponds to a task, which can trigger the execution of another function or workflow.


#### Example function using switch

```yaml
  summary: create loan application for lender
  tasks:
      - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
        description: create account in the bank
        fn: com.gs.switch
        value: <%inputs.headers['lender']%>
        cases:
          httpbin:
            - id: 1st
              fn: com.biz.loan_application.httpbin_create_loan_application
              args: <%inputs%>

```

## com.gs.each_sequential

:::tip control flow function
The classic for-each flow execution
:::

The `args` parameter consists of a list of values within the `value` field, each paired with its associated task. For every value in the `value` list, tasks are executed one after the other in sequence. The resulting output, `each_sequential`, is an array containing the status of the last task executed in each iteration.

#### Example function using each_sequential

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
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1 %>
```

# Using on_error

You have the option to include an `on_error` handler at both the task level and within the `each_sequential` loop level.

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


#### Example function using each_parallel

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

# Using on_error

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
    - id: each_parallel_step1
      description: for each
      fn: com.gs.each_parallel
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
          on_error: # on_error at task level
            continue: false
            response: <%Coffee/JS expression%> | String
        - id: each_task2
          fn: com.gs.transform
          args: <% 'each_task2 ' + task_value %>
      on_error: # on_error at loop level
        continue: true
        response: <%Coffee/JS expression%> | String
    - id: each_parallel_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_parallel_step1 %>
```

## com.gs.return

:::tip return statement
The classic return statement
:::

When the return statement is invoked, it causes the current function to exit and returns control to the function caller, effectively terminating the function's execution.

#### Example function using return

```yaml
  summary: Multiplexing create loan for hdfc api calls
  id: helloworld
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: create account in the bank
      fn: com.gs.return
      args: |
        <coffee% 'Hello ' + inputs.query.name %>
```

## com.gs.log

During the workflow execution, it records intermediate inputs and outputs in the Pino logging format. The parameters include `level`, which can be set to any value from the [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options), and `data`, which accepts a CoffeeScript/JavaScript expression to be evaluated at runtime or any other data type, such as a string or number, that you wish to log.


#### Example function using log

```yaml
  summary: Summing x + y
  description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
  tasks:
    - id: sum_step1
      description: add two numbers
      fn: com.jfs.sum
      args:
        x: 1
        y: 2
    - id: sum_step2
      description: log the output in logs
      fn: com.gs.log
      args:
        level: info # log levels: info, debug, error, warn, fatal, silent, trace
        data: <% outputs.sum_step1 %>
    - id: sum_step3
      description: return the response
      fn: com.gs.transform
      args: <% outputs.sum_step1 %>
```


## com.gs.dynamic_fn

This function performs the execution of a workflow, and the name of the workflow to be executed is determined dynamically. To achieve this, the tasks within this function are expected to produce a string output, and that output serves as the name of the workflow to be executed.

** Event DSL **

#### Example function using dynamic_fn

```yaml
'/sum.http.get':
  fn: com.jfs.sum_dynamic
  summary: A workflow to sum x and y
  description: This workflow sums two integers
  params:
    - name: x
      in: query
      required: true
      allow_empty_value: false
      schema:
        type: string

    - name: y
      in: query
      required: true
      allow_empty_value: false
      schema:
        type: string
```

** com.jfs.sum_dynamic.yaml **
```yaml
summary: Dynamic function to call com.jfs.sum_workflow.yaml
description: This function dynamically is taking workflow name and executing it at the runtime.
tasks:
  - id: sum_dynamic_step1
    description: add two numbers
    fn: com.gs.dynamic_fn
    tasks: # the tasks should return a string value which will the name of the workflow to be executed.
    # For example, in below task list, final workflow name will be `com.jfs.sum_workflow`
      - id: get_wf_name_step1
        fn: com.gs.transform
        args: com.jfs.sum_workflow
      - id: get_wf_name_step2 # this task is returning a workflow name dynamically
        fn: com.gs.transform
        args: <% outputs.get_wf_name_step1.data %>
```

** com.jfs.sum_workflow.yaml **
```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.return
    args: |
     <%
       +inputs.query.x + +inputs.query.y
     %>
```



## com.gs.if, com.gs.elif, com.gs.else
:::tip control flow function
The classic if-else flow execution
:::

The function takes two parameters: `condition` and `tasks`. The `condition` parameter accepts a CoffeeScript/JavaScript expression that is evaluated at runtime, while the `tasks` parameter can trigger the execution of either another function or a workflow.

#### Example function using if-elif-else

```yaml
summary: Returning hello world
tasks:
  - id: if
    fn: com.gs.if
    condition: <% inputs.query.status == 'Hello' %>
    tasks:
      - id: step1
        description: Return hello world
        fn: com.gs.return
        args: 'Hello!'

  - id: elif1
    description: Return hello world
    fn: com.gs.elif
    condition: <% inputs.query.status == 'Hell' %>
    tasks:
      - id: step2
        description: Return hello world
        fn: com.gs.return
        args: 'Hell!'

  - id: elif2
    description: Return hello world
    fn: com.gs.elif
    condition: <% inputs.query.status == 'Hel' %>
    tasks:
      - id: step3
        description: Return hello world
        fn: com.gs.return
        args: 'Hel!'

  - id: else
    description: Return hello world
    fn: com.gs.else
    tasks:
      - id: step4
        description: Return hello world
        fn: com.gs.return
        args: 'Hi!'
```

