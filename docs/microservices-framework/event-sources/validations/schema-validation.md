# JSON Schema validation

The Framework provides request and response schema validation 

### Request schema validation

We have the ability to define inputs and their types in our request schema, such as path parameters, query parameters, and request body. This allows the framework to validate whether the API has received the specified inputs in the expected types.

Whenever an API is triggered, AJV (Another JSON Schema Validator) verifies the request schema against the provided inputs. If the defined schema matches the inputs, it allows the workflow to execute. Otherwise, it throws an error with a status code of 400 and a descriptive message indicating where the schema validation failed.

### Sample Request Schema

#### Request Schema with body

```yaml
http.post./helloworld:
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object # type of the request body
          required: [name] # Here make the properties mandatory ,can add multiple variable names
          properties: # we can add properties that we get in body
            name: # property name
              type: string # property type
```

In the provided example, the `type: object` indicates the type of body received. Following that, the required variables are listed, specifying the properties of the body object that must be present. Similarly, it is also possible to define the types of the property variables present in the body.

#### Failed request schema validation

![req_validation](https://res.cloudinary.com/dzdcjchdc/image/upload/v1704546298/Screenshot_from_2024-01-06_18-31-32_tref8f.png)

#### Request Schema with params

```yaml
http.post./helloworld/:path_params:
  fn: helloworld
  params: # Params begin from here
    - name: path_params # name of the parameter
      in: path # type of parameter path/query
      required: true # mandatory check for path parameter
      schema:
        type: string # type of path parameter
    - name: query_params 
      in: query # query parameter
      required: true
      schema:
        type: string
```


#### Sample with pattern

```yaml

http.post./helloworld:
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object
          required: [name]
          properties:
            name:
              type: string
              format: date
              pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}" # setting patern in schema

```



### Response schema validation

Just like request schema validation, there's also response schema validation in place. In this process, the framework checks the response type, validates the properties of the response, and ensures they align with the specified types.

The process of response schema validation involves storing the response schema, enabling the workflow to execute, and checking the response body along with its properties for validation.

Response schema validation includes two cases

- Failure in Workflow Execution
- Successful Workflow Execution but Fails in Response Schema Validation


### Sample Response Schema

```yaml
  responses:
    200:
      content:
        application/json:
          schema:
            type: object #Types of response
            required: [name] # setting mandatory variables
            properties:
              name:
                type: string #Type of property

```
If the response schema validation fails api return with `500` `internal server error`


#### Failed sample of response schema validation

![case1](https://res.cloudinary.com/dzdcjchdc/image/upload/v1704548714/Screenshot_from_2024-01-06_19-14-52_uwwbek.png)


:::tip In the case of failed request schema validation, the APIs respond with a status of `400` and a message indicating a "bad request." Conversely, if the response schema validation encounters an issue, the APIs return a status of `500` along with an "Internal Server Error" message.
:::

### Event with response and request schema validation

```yaml
http.post./helloworld:
  fn: helloworld
  params:
    - name: path_params
      in: path
      required: true
      schema:
        type: string
    - name: query_params
      in: query
      required: true
      schema:
        type: string

  body:
    content:
      application/json:
        schema:
          type: object
          required: [name]
          properties:
            name:
              type: string


  responses:
    200:
      content:
        application/json:
          schema:
            type: object
            required: [name]
            properties:
              name:
                type: string

```