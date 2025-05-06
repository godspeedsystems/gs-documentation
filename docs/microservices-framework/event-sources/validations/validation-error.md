# Validation Error

- A validation error occurs when data fails to meet the defined criteria or constraints during the validation process.

## Request and Response Validation
- Verifying that incoming API requests have the required parameters and that those parameters meet specific criteria like data types.  If the specified criteria are not met, it results in a request validation error. 
- For more info about Request Validation and its applications, refer [this](/docs/microservices-framework/event-sources/validations/schema-validation.md#request-schema-validation).
- Similarly, When an API response does not meet the expected criteria, it results in a response validation error.
:::tip Note
- We utilize the AJV library for validating both request and response data, and the response format adheres to the standard AJV error format.
- The `on_request_validation_error` and `on_response_validation_error` handlers are used to override the default errors thrown by the framework (specifically, schema validation errors) and allow developers to customize errors based on their requirements.
:::

### on_request_validation_error

- To customize the error response in cases where request schema validation fails, you can utilize the `on_request_validation_error` handler. Demonstrating its use in the below example

### Example

```yaml
http.get./validation:
  fn: test_validation
  on_request_validation_error: on_request_validation #can be fn path, or a series of tasks
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


```yaml title=functions/on_request_validation.yaml
summary: customizing req_response_error
tasks:
  - id: customized_request_error
    fn: com.gs.transform 
    args: 
      success: false 
      code: 400
      data:    
        message: <% inputs.validation_error.data.message %>
     #  inputs.validation_error returns the default framework error
     #  or you can give 
     #  message: <% inputs.validation_error.data.errors[0] %>
     
```

```yaml title=functions/test_validation.yaml
summary: This is test function
tasks:
  - id: test_function
    fn: com.gs.return
    args: 
      data: <% "This is number two " + inputs.query.num_2 %>
```
Response
- A: Default Error Format
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705958247/Screenshot_from_2024-01-23_02-44-24_xcb02y.png" alt="response_error" />

- B: Customized Error
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705958229/Screenshot_from_2024-01-23_02-44-45_pgeokv.png" alt="event types" />


### on_response_validation_error

:::tip Note
- The framework deals with **both request and response errors the same way**, except for the error codes and keys.
- For request validation errors, the associated error code is 400, and the key used is `on_request_validation_error`.
- In the case of response validation errors, the corresponding error code is 500, and the key employed is `on_response_validation_error`.
:::