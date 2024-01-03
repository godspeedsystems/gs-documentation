# Schema validation
The framework offers validation for response and request schemas.

### Request schema validation
Sample spec for request schema.
```yaml
http.get./greet: #The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
  fn: function_greet #The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters.
  params: #It is also possible to define inputs such as 'params,' 'body,' 'headers,' and 'query parameters.'
    - name: greet_message
      in: query
      required: true
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name: 
              type: string
```
- Furthermore, you have an option to specify responses, including status codes and response body types, among other things.

#### Request schema validation error
- When the input body type deviates from the specified request schema, the framework will trigger a 400 Bad Request, providing details about the specific error.
<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-20%2019-42-10.png?updatedAt=1697811194591" alt="request schema error" />

#### On validation error handler
If you wish to customize the behavior of request schema validation, you have the option to create a workflow to manage validation errors. The framework provides flexibility for custom handling, including the ability to modify the status code.
```yaml
http.get./greet: #The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
  fn: function_greet #The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters.
  on_validation_error: com.biz.validation_error #The validation error handler if event's json schema validation gets failed and kept in src/functions/com/biz/validation_error.yaml folder
  params: #It is also possible to define inputs such as 'params,' 'body,' 'headers,' and 'query parameters.'
    - name: greet_message
      in: query
      required: true
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name: 
              type: string
```

### Response schema validation
Sample spec for response schema.
```yaml
"http.get./helloworld":
  fn: helloworld
  body:
    type: object
    properties:
      name:
        type: string
  responses:
    500:
      content:
        application/json: 
          schema:
            type: string
    200:
      content:
        application/json:
          schema:
            type: object
```
#### Response schema validation error
- When the API response deviates from the specified response schema, the framework will trigger a 500 Internal Server Error, providing details about the specific error.

<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-20%2015-51-58.png?updatedAt=1697797912694" alt="response schema error" />
