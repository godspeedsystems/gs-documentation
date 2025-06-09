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


```ts title=functions/on_request_validation.ts
import { GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
  const {
    inputs: {
      validation_error
    }
  } = ctx;

  // Extracting message from validation_error input
  const message = validation_error?.data?.message || "Unknown validation error";

  return new GSStatus(false, 400, 'Failed', { message });
}
 
```

<!-- yaml
summary: This is test function
tasks:
  - id: test_function
    fn: com.gs.return
    args: 
      data: <% "This is number two " + inputs.query.num_2 %> -->

```ts title=functions/test_validation.ts
import { GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
  const {
    inputs: {
      data: {
        query
      }
    }
  } = ctx;

  const responseMessage = `This is number two ${query?.num_2 ?? ''}`;
  return new GSStatus(true, 200, 'OK', responseMessage);
}
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