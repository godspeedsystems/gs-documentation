# Workflow-DSL

-A Workflow DSL (Domain-Specific Language) refers to a specialized programming language or notation designed for expressing and defining workflows or processes within a specific domain 

## Structure of a Workflow
Every Workflow has the following attributes.
- **id** - This is recommended for better logging visibility.
- **summary** - This provides a descriptive title for a workflow, enhancing code readability.
- **tasks** - This specifies that tasks, which can be workflows or sub-workflows, will be executed sequentially, one after the other. These tasks can call other workflows defined in YAML or JavaScript/TypeScript.


### Tasks and Attributes within a task
The `tasks` attribute is used to define a list of tasks or steps that need to be performed within a workflow or automation process. Each task is typically represented as a separate item in the list, and they are executed sequentially or in parallel, depending on the workflow's configuration. The `tasks` attribute helps organize and specify the specific actions or operations that need to be carried out as part of the workflow, making it a crucial component for defining the workflow's logic and behavior.

- **id** - This is essential for improved logging visibility and is a mandatory requirement for each task. Furthermore, it plays a crucial role in accessing the output of the task in subsequent tasks through the 'outputs.{task_id}' path, as demonstrated in the example-2 above.

- **description** - In this field, we can provide a detailed description of what the workflows actually accomplish.

- **fn** - This specifies the handler that will be executed for this task. It can be a [built-in functions](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md)

- **args** - Every handler function has its own argument structure, which is kept in the args key.

### Example Workflows
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

### Components of Response

Developers can easily transmit data by sending a JSON object containing the following components.

```js
response = new GSStatus(true, 200, undefined, responseData, undefined);
```
Upon the completion of each function execution, whether successful or not, the GSStatus class is invoked with certain properties and then returned.

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

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/HYzIOQ-ozSA?si=qASQ2Ofqqb5VFUlo" frameBorder="0" allowFullScreen></iframe>
</div>


 ### Error handling in Workflow level

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

 ### Error handling in task level

```yaml
summary: Testing on_error at task level
tasks:
  - id: task_level_1 
    fn: com.gs.transform # if we use this args in transform function they will set as response 
    args: 
      success: false
      code: 500
      data: "task 1 executed"
    on_error: 
      continue: false 
      response:
        code: 400
        data: "error occured"
    
  - id: task_level_2
    fn: com.gs.return
    args: "task 2 executed"
```


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


## Built-in functions

 The framework comes equipped with the following built-in functions.These functions are readily available for developers to use in their code, simplifying tasks like mathematical calculations, string manipulation, input/output operations, and more. They save time and effort by offering efficient and reliable solutions for common programming challenges.

 [Godspeed Built-in function](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md)
