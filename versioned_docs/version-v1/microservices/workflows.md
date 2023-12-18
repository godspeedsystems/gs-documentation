---
sidebar_position: 3
title: Workflows
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Workflows

Workflows is where the actual computation and flow orchestration happens. The framework supports a YAML based DSL to write workflows and tasks containing the business logic. These workflows can be attached to the events as their handlers, or called from within another workflow.

> The framework exposes [CoffeeScript](https://coffeescript.org/)/JS based expressions [for evaluation of dynamic variables or transformation](./workflows/#65-use-of-coffeejs-for-scripting) of data from `inputs` of event, or `outputs` of previous tasks.

> Default language for transformations (coffee/js) can be configured in [configuration](./setup/configuration/static-vars.md/#defaultyaml)

### 7.1 The structure of workflows

A workflow has the following attributes
- **summary** - the title
- **description** - more details
- **id** - Recommended for better logging visibility
- **on_error** - Default error handling if any tasks fails. 
- **tasks** - the tasks (workflows or sub-workflows) to be run in series (sequence, or one by one). The tasks invoke other workflows written in YAML or JS/TS. Other languages support is planned.

```yaml
summary: Hello world
description: Hello world example which invokes the com.gs.return workflow
id: hello_world # needed for better logging visibility
on_error:
  continue: false
  log_attributes:  # You can add specific log attributes when an error happens in a task.
        error_message: <% outputs.transform_error.message %>
        error_type: 'your custom error type'
  response:
    success: false
    code: 500
    data: "Default error"
tasks: # tasks to be run in sequence (default is sequence)
  - id: step1 ## id of this task. Its output will be accessible
  # to subsequent tasks at `outputs.step1_switch` location. Like in step2 below.
    fn: com.gs.return
    args: 'Hello World!' # com.gs.return takes its return value as `args`. Hence the args key.
```

### 7.2 The tasks within workflows
A workflow has one or more tasks associated with it.
A task has the following attributes
- **id** - Needed for better logging visibility. _It is compulsory for a task._ Importantly, this is also used to access the output of this task in subsequent tasks in the `outputs.{task_id}` path, as shown in [example below](#define-language-at-workflow-level).
- **summary** - the title
- **description** - more details
- **fn** - The handler to be run in this task. It can be one of the [framework functions](#66-inbuilt-functions), [control functions](#666-comgsseries) (like parallel, sequential, switch), [developer written functions](#67-developer-written-functions), or another workflow.
> You can also use scripting in dynamic evaluation of a function name as given in below example. Refer [Coffee/JS scripting](#65-use-of-coffeejs-for-scripting) for more information.
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

- **args** - Every handler `fn` has its own argument structure, which is kept in the `args` key. For example,
  ```yaml
    id: httpbin_step1
    fn: com.gs.http
    args:
      datasource: httpbin
      config:
        url : /v1/loan-application/<% inputs.params.lender_loan_application_id %>/agreement/esign/initiate
        method: post
        headers: <% inputs.headers %>
  ```
- **on_error** - What to do if this task fails?
  ```yaml
    on_error: #You can find sample usage of this in the examples below. Just search on_error in this page.
      continue: false # Whether the next task should be executed, in case this task fails. by default continue is true.
      response: <%Coffee/JS expression%> | String # If specified, the output of `response` is returned as the output of this task. If not specified, the error output is the default output of the failed task.
      log_attributes:  # You can add specific log attributes when an error happens in a task.
        error_message: <% outputs.transform_error.message %>
        error_type: 'your custom error type' 
      tasks: # If specified, the tasks are executed in series/sequence. The output of the last task in these tasks is the default output of the failed task.
        - id: transform_error
          fn: com.gs.transform
          args: <% outputs.httpbin_step1 %>

        - id: publish_error
          fn: com.gs.kafka
          args:
            datasource: kafka1
            data:
              value: <% outputs.transform_error.message %>
            config:
              topic: publish-producer1
  ```
The only exception to this is [control functions](#666-comgsseries) like series, parallel, switch, which don't take the `args`, for the sake of more readability.
- **retry** - Retry logic helps to handle transient failures, internal server errors, and network errors with support for constant, exponential and random types. Currently applied only for `com.gs.http` workflow.
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
### The output of task & external function
The output of every task and function can be expected in the following format within other task
- **success**: true/false. Default value is `true`
- **code**:  standard HTTP response codes[1xx, 2xx, 3xx, 4xx, 5xx] Default value is 200
- **message**: any string explaining the response. Optional
- **data**: the actual data returned from the task/function. Optional

Note
- If a task or external JS function returns a value which is not in this JSON structure then framework assumes the output is the data itself & wraps it in this JSON structure with default values.
- The output of any previously executed task is accesible in following manner `outputs.step1.code`


#### Example of multiple task with arguments

```yaml
summary: Workflow with switch-case and transform task
id: example_switch_functionality_id
description: |
  Run two tasks in series. Both take different arguments. First one is switch case task.
  Second is transform task which consumes the output of step1 and shapes the final output of this workflow.
tasks: # tasks to be run in sequence (default is sequence)
  - id: step1_switch ## id of this switch task. Its output will be accessible
    # to subsequent tasks at `outputs.step1_switch` location. Like in step2 below.
    fn: com.gs.switch # Switch workflow takes `value` and `cases` as arguments. The cases object specifies another task for every case.
    value: <%inputs.body.condition%> # Evaluation of dynamic values happens via <% %>
    cases:
      FIRST:
        id: 1st
        fn: com.gs.return
        args: "'case - 1'"
      SECOND:
        id: 2nd
        fn: com.gs.return
        args: "'case - 2'"
      THIRD:
        id: 3rd
        fn: com.gs.return
        args: "'case - 3'"
    defaults:
      id: default
      fn: com.gs.return
      args: <%inputs.body.default_return_val%> #coffee/js script for dyanmic evaluation. Wrapped in <% %>. Same as that used elsewhere in workflows for dynamic calculations and variable substitutions. For ex. as used in com.gs.transform and com.gs.return
  - id: step2
    fn: com.gs.transform
    args: | #coffee for dyanmic evaluation. Wrapped in <% %>
        <coffee% {
          code: 200,    
          data: outputs['1st']
        } %>
```

### 7.3 Location and fully qualified name (id) of workflows and functions
All the workflows and functions are to be kept in the `src/functions` folder. Their directory tree path, followed by the file name becomes the workflow's fully qualified name or id, by which it can be referenced in the events or within other workflows.

> The JS function shown below will be available in workflows under the F.Q.N. `com.biz.custom_function`. Similarly, `com.biz.create_hdfc_account`, `com.biz.create_parallel` etc. are accessible as handlers from within other [workflow tasks](#62-the-tasks-within-workflows) or events.

  ![function_folder](/img/function_folder.jpeg)

### 7.4 Referencing a workflow within an event or another workflow
A workflow task references and invokes other workflows written in either YAML or JS/TS, via the `fn` key. In future, other languages will also be supported.
An [event definition](./events#example-spec-for-http-event) references the handler yaml workflows by their fully qualified name, via the same `fn` key.

### 7.5 Use of Coffee/JS for scripting

The framework provides coffee/js for

- Transformations in [`com.gs.transform`](#665-comgstransform) and [`com.gs.return`](#6611-comgsreturn)
- Dynamic evaluation or workflow or task variables, event variables, datasource variables.

You will find its code in <% %> within various examples in this page below.

#### Define language at global level
Default language for transformations (coffee/js) is configured in [static configuration](./setup/configuration/static-vars.md/#defaultyaml)

#### Define language at workflow level
Global configuration for language is overridden by defining specific language inside <coffee/js% %>. For example,
```
    - id: httpbinCof_step2
      fn: com.gs.transform
      args: |
          <coffee% if outputs.httpbinCof_step1.data.json.code == 200 then {
              code: 200,
              success: true,
              data: outputs.httpbinCof_step1.data.json,
              headers: outputs.httpbinCof_step1.data.headers
          } else {
              code: 500,
              success: false,
              message: 'error in httpbinCof_step1'
          } %>
```

```
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload documents
      fn: com.gs.http
      args:
        datasource: httpbin
        params:
        data: |
          <js% {
            [inputs.body.entity_type + 'id']: inputs.body.entity_id,
            _.omit(inputs.body, ['entity_type', 'entity_id'])}
          %>
```

#### Built-in Javascript modules
You can use build-in javascript modules in inline scripting. Only synchronous methods of build-in modules are allowed in inline scripting. For example,
```yaml
summary: upload s3
tasks:
  - id: step1
    description: upload s3
    fn: com.gs.aws
    args:
      datasource: aws_s3
      params:  # fs is used directly in scripting in Body
        - Bucket: 'godspeedbucket'
          Key: 'file4.yml'
          Body: <% fs.createReadStream(inputs.files[0].tempFilePath) %>
      config:
        service: S3
        method: putObject
```

### 7.6 Inbuilt functions

The framework provides the following inbuilt functions

#### 7.6.1 com.gs.http

Send HTTP events to other APIs in Axios compatible format.

**Example 1**
```yaml
  summary: agreement esign
  id: agreement_esign
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: agreement esign
      fn: com.gs.http
      params: # query params to be sent in the request
        id: 123
      args:
        datasource: httpbin
        config:
          url : /v1/loan-application/<% inputs.params.lender_loan_application_id %>/agreement/esign/initiate
          method: post

      retry:
        max_attempts: 5
        type: constant
        interval: PT15M

      on_error:
        continue: true

    - id: step2
      fn: com.gs.transform
      args: |
          <%if outputs.step1.data.success then outputs.step1.data else {
              code: outputs.step1.code,
              success : false,
              data: {
                error_data: outputs.step1.data['error'],
                uuid: outputs.step1.data.uuid,
                status_code_error: outputs.step1.data.status_code_error,
                event: outputs.step1.data.event
              }
          }%>
```
**Example 2**
```yaml
  summary: upload documents
  id: upload_documents
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload documents
      fn: com.gs.http
      args:
        datasource: httpbin
        params:
        data: |
          <js% {
            [inputs.body.entity_type + 'id']: inputs.body.entity_id,
            _.omit(inputs.body, ['entity_type', 'entity_id'])}
          %>
        file_key: files
        files: <% inputs.files %>
        config:
          url : /v1/documents
          method: post

      retry:
        max_attempts: 5
        type: constant
        interval: PT15M

      on_error:
        continue: false
        response: <%'Some error happened in saving' + inputs.body.entity_type%>

    - id: step2
      fn: com.gs.transform
      args: <% delete outputs.step1.headers; outputs.step1 %>

```

#### 7.6.2 com.gs.kafka

Publish events on Kafka.

```yaml
  summary: Publishing incoming event data to a Kafka topic
  id: push_to_kafka
  tasks:
    - id: step1
      summary: Publish an event with input event's data, adding to_process = true
      fn: com.gs.kafka
      args: # similar to Axios format
        datasource: kafka1
        config:
          method: publish
          topic: kyc_initiate_recieved
          group_id: kyc_domain
        data: # Refer https://kafka.js.org/docs/producing#message-structure for information on data attributes.
          value: <% inputs %> # Your message content. Evaluation of dynamic values happens via <% %>. The type of scripting is coffee.
          key: # Optional - Used for partitioning.
          partition: # Optional - Which partition to send the message to.
          timestamp: # Optional - The timestamp of when the message was created.
          headers: # Optional - Metadata to associate with your message.
```
> Refer https://kafka.js.org/docs/producing#message-structure for information on data attributes.

#### 7.6.3 com.gs.datastore

The datastore function allows CRUD access to any supported [datastore](./datasources/datastore) in a format extending [Prisma API](http://prisma.io).

```yaml
summary: Create and read data
tasks:
  - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
    description: Create entity from REST input data (POST request)
    fn: com.gs.datastore
    args:
      datasource: mongo # Which ds to use.
      data: <% inputs.body + {extra_field: its_value} %>
      config:
        method: <% inputs.params.entity_type %>.create
  - id: step2 # the response of this will be accessible within the parent step key, under the step1 sub key
    description: test again
    fn: com.gs.datastore
    args:
      datasource: mongo # Adding this knows which ds/model we are talking about here.
      config: # Similar approach as Axios
        method: <% inputs.params.entity_type %>.findMany

```

#### 7.6.4 com.gs.elasticgraph

The elasticgraph function allows CRUD access to elasticsearch [datastore](./datasources/elasticgraph).

```yaml
summary: eg
tasks:
  - id: create_entity1
    description: create_entity1
    fn: com.gs.elasticgraph
    args:
      datasource: elasticgraph1
      data:
        index: <% inputs.params.entity_type + 's' %>
        type: '_doc'
        body: <% inputs.body %>
      config:
        method: index
    on_error:
      continue: false
```

#### 7.6.5 com.gs.transform

This function allows to transform data from one format to another using coffee/js scripting.

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

#### 7.6.6 com.gs.series
:::tip control flow function
Executes the tasks in series.
:::

By default every top level workflow executes its task in series. But when invoking subworkflows if you need, you can explicitly use series workflow. Its syntax is same as parallel.
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

#### 7.6.7 com.gs.parallel
:::tip control flow function
Executes the child tasks in parallel.
:::



```yaml
id: return4
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
  - id: output_task
    fn: com.gs.return
    args: <% outputs.parallel.data %>
```

**Output**

```
[
  {
    "code": 200,
    "success": true,
    "data": "parallel task1"
  },
  {
    "code": 200,
    "success": true,
    "data": "parallel task2"
  }
]
```

#### 7.6.8 com.gs.switch
:::tip control flow function
The classic switch-case flow execution
:::
The args of switch-flow are `value` and `cases`. `value` takes a coffee/js expression to be evaluated during runtime. Every case has a task associated with it. The task can invoke another function or a workflow.
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

#### 7.6.9 com.gs.each_sequential

:::tip control flow function
The classic for-each flow execution
:::
The args is list of values in `value` field along with associated tasks. For each value in `value` tasks are executed sequentially. The final output each_sequential is the array of status of the last executed task of each iteration.

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

**on_error handling**
You can add on_error at task level as well as at each_sequential loop level.

See the below example,
- If a task gets failed for any task_value then control goes to on_error defined at task level. On continue false, it breaks the loop else it continues the next tasks.
- If all the tasks are failed in loop then the control goes to on_error defined at loop level.

:::note
on_error at loop level only gets executed when all the tasks are failed. If even one task gets successful then it won't get executed.
:::

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


#### 7.6.10 com.gs.each_parallel

The args is list of values in `value` field along with associated tasks. For each value in `value` tasks are executed in parallel. The final output each_parallel is the array of status of the last executed task of each iteration.

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

**on_error handling**
You can add on_error at task level as well as at each_parallel loop level.

See the below example,
- If a task gets failed for any task_value then control goes to on_error defined at task level. On continue false, it breaks the execution for the next tasks in `tasks` for current `task_value` in `value` list. For example, in the below workflow, if `each_task1` step of task_value 1 gets failed then `each_task2` will not get executed on continue false.
- If all the tasks are failed in loop then the control goes to on_error defined at loop level.

:::note
on_error at loop level only gets executed when all the tasks are failed. If even one task gets successful then it won't get executed.
:::

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

#### 7.6.11 com.gs.return

:::tip Return Statement
In typical scenarios, the "return" statement will terminate a workflow. However, when the "return" statement is used within a parallel function, it won't immediately exit the workflow. Instead, it will wait until all the child tasks within the parallel function have completed before exiting the workflow.
:::

[Checkout return functionality in com.gs.parallel](#767-comgsparallel)

It returns from the current function to the function caller. The function stops executing when the return statement is called.



**Example** 

```yaml
summary: Returning hello world
tasks:
  - id: return_hello_word
    fn: com.gs.return
    args: 'Hello'

  - id: return_with_status
    fn: com.gs.transform 
    args: <% outputs.return_hello_word.data + inputs.query.word %>

```

**Output**

```
Hello
```

#### 7.6.12 com.gs.log

It logs the intermediate inputs/outputs during the workflow execution in pino logging format. The args are `level` and `data`. `level` takes any value from the [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options) and `data` takes a coffee/js expression to be evaluated during runtime or anything (like string, number, etc.) which you want to get logged during the workflow execution.

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


#### 7.6.13 com.gs.dynamic_fn

It executes the workflow whose name is dynamically returned as the output of its task list. The tasks of this function should return a string output which will be the name of the workflow to be executed.

** Event DSL **
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

#### 7.6.14 com.gs.aws

Interacts with AWS to use its various services and methods. `params` is the list of params to the AWS service methods. We are using AWS v3 style services.

> Please refer [AWS S3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/s3.html) for AWS S3 methods.

```yaml
summary: upload s3
tasks:
  - id: step1
    description: upload s3
    fn: com.gs.aws
    args:
      datasource: aws_s3
      params:
        - Bucket: 'godspeedbucket'
          Key: 'file4.yml'
          Body: <% fs.createReadStream(inputs.files[0].tempFilePath) %>
      config:
        service: S3
        method: putObject
```

#### 7.6.15 com.gs.redis
Developer can read / write to redis datasource using standard redis client functions.

```yaml
summary: demonstration of redis functions
id: accessing_redis
tasks:
  - id: store_value_to_key
    description: Writing user info in redis with key user
    fn: com.gs.redis
    args:
      config:
        method: set
      data:
        key: user
        value: Adam
  - id: retrieve_user_set_in_previous_task
    description: Retriving user from redis
    fn: com.gs.redis
    args:
      config:
        method: get
      data:
        key: user
```

#### 7.6.16 com.gs.if, com.gs.elif, com.gs.else
:::tip control flow function
The classic if-else flow execution
:::
The args are `condition` and `tasks`. `condition` takes a coffee/js expression to be evaluated during runtime. The `tasks` can invoke another function or a workflow.
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


### 7.7 Writing custom JS/TS workflows

Godspeed allows developers to write js/ts workflows.

#### 7.7.1 Executing a JS/TS Workflow within a YAML Workflow:

Developer can write functions in JS/TS and [kept in src/functions folder](#63-location-and-fully-qualified-name-id-of-workflows-and-functions) at a path, which becomes its fully qualified name. Once it is written, the function can be invoked from within any workflow or sub-workflow, with its fully qualified name and argument structure.

![function_folder](/img/function_folder.jpeg)

```yaml
  summary: Custom workflow invocation
  id: custom_function
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: custom_fn
      fn: com.biz.custom_function # Can be JS/TS workflow in src/com/xyz directory with filename being custom.{js|ts}
      args:
        arg1: 'hello world'
        arg2: 'hello again'
```

#### 7.7.2 Executing JS/TS workflow directly from event:

Developer can call JS/TS workflows directly from any event. Check out below event and workflow example for better understanding.

##### Event: (src/events/mongo/create.yaml)
```yaml
/mongo/category.http.post:
  summary: Create a new Category
  description: Create Category from database
  fn: com.jfs.create # calling js workflow in src/functions/com/jfs folder.
  body:
    content:
      application/json:
        schema:
          $ref: '#/definitions/mongo/Category'
  responses:
    content:
      application/json:
        schema:
          type: object
```
##### JS Workflow: (src/functions/com/jfs/create.js)
In this JavaScript/TypeScript workflow, a pivotal stage is the creation of arguments encompassing the datasource, data, and configuration. These arguments are then supplied to the executeDatasource function, accompanied by the context and function     name. The workflow manages inputs, constructs appropriate arguments, and executes the 'Category.create' datasource function through executeDatasource. Ultimately, the workflow yields a GSStatus object that signals either success or failure, providing relevant details about the response or encountered error. 

Framework exported interfaces/functions allow developer with flexibility to write js/ts workflows while empowering them with the frameworks capabilities.

#### CTX: 
:::note
 (Every function/workflow has access to the ctx object, which is passed as an argument, and furthermore, you can access its properties by destructuring it.)
:::

##### what is CTX ?

CTX includes all the context specific information like tracing information, actor, environment, headers, payload, shared state (if this ctx is shared with other instruction threads, this part can be shared with them), immutable state (personal copy, personal view, for concurrency)

##### Inputs:

Inputs Provide you all the Information you passed to event like headers, params, query params etc.

```javascript
  const {inputs} = ctx;
  inputs.body = inputs.data.body;
```
##### Outputs:

To access outputs of tasks executed before the current task, developer can destruct ctx object just like how inputs and datasources.If we have more then one task, we can access first task outputs in second task with Outputs object. we should access first task output by useing it's id.

```javascript
  const {outputs} = ctx;
  const firstTaskOutput = outputs[firstTaskId]
```


##### config:

you can access any information of config with ctx.

```javascript

    const { config } = ctx;
    const mongoConnectionString = config.MONGO_URL;

```
:::note

Every workflow response should be in GSStatus. it has the below properties.

#### GSStatus Properties :

```bash
    success: boolean;
    code?: number;
    message?: string;
    data?: any;
    headers?: {
        [key: string]: any;
    };
```
:::


```javascript
const { GSStatus, executeDatasource } = require('#core/interfaces');

module.exports = async (ctx, fn) => {
  const { inputs } = ctx;
  try {
    inputs.body = inputs.data.body;

    let args = {
      datasource: 'mongo',
      data: { data: inputs.body },
      config: { method: 'Category.create' },
    };

    const responseData = await executeDatasource(
      ctx,
      fn['com.gs.datastore'],
      args,
    );
    // return GSStatus response from a workflow
    return new GSStatus(true, 200, undefined, responseData, undefined);

  } catch (error) {
    return new GSStatus(false, 500, undefined, error, undefined);
  }
};

module.exports.id = 'main';
```
In JS/TS workflows, we can utilize `fn` to access YAML workflows. In the example below, there is a workflow named create.yaml located at the path src/functions/com/biz/mongo/category/create.yaml. When the API is called, this JavaScript workflow is triggered, obtaining the response from the create.yaml workflow and returning it.

```javascript
const { GSStatus, executeDatasource } = require('#core/interfaces');

module.exports = async (ctx, fn) => {
  const { inputs, datasources } = ctx;
  try {
    inputs.body = inputs.data.body;


    const responseData =  await fn['com.biz.mongo.category.create'](ctx)
    return new GSStatus(true, 200, undefined, responseData, undefined);


  } catch (error) {
    return new GSStatus(false, 500, undefined, error, undefined);
  }
};

module.exports.id = 'main';

```

### 7.8 Headers defined at workflow level
Headers defined at workflow level are applicable for a single workflow only. You can find the [example usage here](workflows.md#62-the-tasks-within-workflows)

### 7.9 File Upload feature
The framework provides file upload feature to upload files. Here is the sample event and workflow spec to upload any file.

**Event Spec**
```yaml
/document.http.post:
  fn: com.biz.documents.upload_file
  id: '/sendDocuments'
  summary: upload document
  description: upload document on httpbin
  data:
    schema:
      body:
        required: false
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                fileName:
                  type: string
                  format: binary
```
#### 7.9.1 Workflow spec to upload files with same file key
```yaml
  summary: upload file
  id: upload_file
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload docfileuments
      fn: com.gs.http
      args:
        datasource: httpbin
        params:
        file_key: files
        files: <% inputs.files %>
        config:
          url : /v1/documents
          method: post

      retry:
        max_attempts: 5
        type: constant
        interval: PT15M
```

:::tip Note
If file_key is same for all the files then you can use above workflow DSL. In case you have different file_keys for multiple files then you can directly use `<% inputs.file_obj %>` as given in the below section 6.9.2
:::

#### 7.9.2 Workflow spec to upload multiple files with different file keys
```yaml
summary: upload multiple documents
tasks:
    - id: upload_multiple_files_step1
      description: upload multiple documents
      fn: com.gs.http
      args:
        datasource: httpbin
        data: <% inputs.body %>
        files: <% inputs.file_obj %>
        config:
          url : /anything
          method: post
```
#### 7.9.3 Workflow spec to upload file directly from URL
```yaml
summary: upload document from url
tasks:
  - id: upload_url_step1
    description: upload document from url
    fn: com.gs.http
    args:
      datasource: httpbin
      data: <% inputs.body %>
      files:
        sample:
          url: https://s3.ap-south-1.amazonaws.com/sample.pdf
          method: get
      config:
        url : /anything
        method: post
        headers: 
          Content-Type: 'multipart/form-data'
```
