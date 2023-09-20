# Events
A microservice can be configured to consume events from variety of event sources, like HTTP, etc. The event schema, for each event source, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event source and other information for the source (for ex. group_id in case of Kafka events)
- The event handler workflow
- Validation (input and output)
- Examples of input and output

The response of the event is flexible for the developer to change as per the requirement.

##  Event types

**Currently supported**
- http.{method_type} For example, post or get
- cron

## Event schema & examples for supported sources

> All event declarations are stored in the src/events folder, in YAML files.

### JSON schema validation
The framework provides request and response schema validation out of the box.

#### Request schema validation
Sample spec for request schema.
```
http.get./greet:
  fn: function-greet
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

- The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
- The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters.
- It is also possible to define inputs such as 'params,' 'body,' 'headers,' and 'query parameters.'
- Furthermore, you have the option to specify responses, including status codes and response body types, among other things.

If request schema validation fails, then status code 400 is returned.

#### Response schema validation
Sample spec for response schema.
```
http.post./test/log:
  summary: series
  description: series
  fn: com-gs-log
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
If response schema validation fails, then status code 500 is returned.

### HTTP event

For an HTTP event, the headers, query, params and body data are captured in a standard format, and made available in the `inputs` object [for use in the workflows](#example-workflow-consuming-an-http-event).

 The inputs (event) object has following properties:

    - query: `<%inputs.query.var_name%>` # present in case of http events
    - params: `<%inputs.params.path_param%>` # present in case of http events
    - headers: `<%inputs.headers.some_header_key%>` # present in case of http events
    - body: `<%inputs.body.key%>` # Present for all events except for http events which don't have a body. For ex. http.get
    - files: `<%input.files%>` # Any files uploaded via HTTP event. Not present in other kind of events

#### Example spec for HTTP event

``` yaml
 http.put./mongo/user/{id}:
  summary: Update a User
  description: Update User from database
  fn: com.biz.mongo.user.update
  body:
    content:
      application/json:
        schema:
          $ref: '#/definitions/mongo/User'
  params:
    - name: id
      in: path
      required: true
      schema:
        type: string
  responses:
    content:
      application/json:
        schema:
          type: object
 ```

#### Example workflow consuming an HTTP event
  ```yaml
    summary: Update User
tasks:
  - id: mongo_user_update
    fn: datasource.mongo.User.update
    args:
      where:
        id: <% inputs.params.id %>
      data: <% inputs.body %>
  ```

#### Example workflow (on_validation_error handler) handling json schema validation error
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
          fn: com.gs.if
          condition: <js% (inputs.query.number) != null %>
          tasks:
            - id: hhfhf
              fn: com.gs.transform
              args: <%task_value + parseInt(inputs.query.number)%>
        - id: else 
          fn: com.gs.else
          tasks: 
            - id: fssds
              fn: com.gs.transform
              args: |
                  <coffee%{
                    success: false,
                    code: 400,
                    data: "error at task level"
                  }%>
      on_error: # on_error at loop level
        continue: true
        response: 
          success: false
          code: 400
          data: <%"error at loop level"%>
    - id: each_parallel_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_parallel_step1 %>
  ```