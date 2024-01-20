# Validation Error

- A validation error occurs when data fails to meet the defined criteria or constraints during the validation process.
- Validation is the process of ensuring that data conforms to a set of rules or conditions before it is accepted or processed by a system. 

## Request Validation
- Verifying that incoming API requests have the required parameters and that those parameters meet specific criteria like data types.  If the specified criteria are not met, it results in a request validation error. 
- For more info about Request Validation and its applications, refer [this](/docs/microservices-framework/event-sources/schema-validation.md#request-schema-validation)

:::tip Note
The `on_request_validation_error` and `on_response_validation_error` handlers are used to override the default errors thrown by the framework (specifically, schema validation errors) and allow developers to customize errors based on their requirements.
:::

### on_request_validation_error

- To customize the error response in cases where request schema validation fails, you can utilize the `on_request_validation_error` handler. Demonstrating its use in the below example

### Example

```yaml
"http.get./helloworld":
  fn: helloworld
  on_request_validation_error: request_error #can be fn path, or a series of tasks
  params:
  - name: num_1
    in: query
    required: false
    schema:
      type: number
  - name: num_2
    in: query
    required: true
    schema:
      type: number

  responses:
    200:
      content:
        application/json:
          schema:
            type: object
```
functions/request_error.yaml
```yaml 
summary: Customizing request_validation_error
tasks:
  - id: request_validation_error
    fn: com.gs.transform
    args: {success: false, code: 400, message: "request error", data: {req: request schema validation failed}}
```

functions/helloworld.yaml
```yaml
summary: This is test function
tasks:
  - id: helloworld
    fn: com.gs.return
    args: 
      data: <% "This is number two " + inputs.query.num_2 %>
```

Postman Response
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705779010/Screenshot_from_2024-01-21_00-59-51_mn2ok5.png" alt="event types" />

- Customized on_request_validation_error was triggered due to a mismatch between the expected data type in the request schema and the actual input received. The request schema defines num_2 as a number, but the provided input was in string format.

## Response Validation
- Checking that the data returned by an API or a service complies with the expected format and constraints. This ensures that the response is structured correctly and contains valid information. If the specified criteria are not met, it results in a response validation error. 
- For more info about Response Validation and its applications, refer [this](/docs/microservices-framework/event-sources/schema-validation.md#response-schema-validation)

### on_response_validation_error
- To customize the error response in cases where response schema validation fails, you can utilize the `on_response_validation_error` handler. Demonstrating its use in the below example

### Example

```yaml
"http.get./helloworld":
  fn: helloworld
  on_response_validation_error: response_error #can be fn path, or a series of tasks
  params:
  - name: num_1
    in: query
    required: false
    schema:
      type: number
  - name: num_2
    in: query
    required: true
    schema:
      type: number

  responses:
    200:
      content:
        application/json:
          schema:
            type: string
```
functions/response_error.yaml
```yaml 
summary: Customizing response_validation_error
tasks:
  - id: response_validation_error
    fn: com.gs.transform
    args: {success: false, code: 400, message: "response error", data: {res: response schema validation failed}}
```

functions/helloworld.yaml
```yaml
summary: This is test function
tasks:
  - id: helloworld
    fn: com.gs.return
    args: 
      data: <% "This is number two " + inputs.query.num_2 %>
```

Postman Response
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705779055/Screenshot_from_2024-01-21_00-59-36_d5dzdn.png" alt="response validation error" />

- The on_response_validation_error customization was triggered due to a discrepancy between the expected response schema, which specifies a string result, and the actual response generated, which turned out to be an object.