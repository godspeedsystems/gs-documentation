# Event Schema

An event schema defines the structured format or blueprint for representing data within an event. It outlines the specific fields, data types, and structure that an event must adhere to. The schema serves as a standardized template, ensuring consistency in the project

## Http 

**Request Schema**

Sample spec for request schema.
```yaml
http.get./greet: #The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
  fn: function_greet #The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters.
  on_request_validation_error: on_request_validation
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


**Response Schema**
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
## Kafka

The structure of Kafka event schema

```yaml
{datasourceName}.{topic_name}.{group_id}:
  fn: kafka_consume #the workflow handler to invoke
  body: # Schema of the Kafka message's body
  on_request_validation_error:
```

Example

```yaml
# event for consume data from Topic
kafka.publish-producer1.kafka_proj: // event key
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json: 
        schema:
          type: string

```

## Apollo Graphql

Apollo Graphql event schema
```yaml
Apollo.post./mongo/category:
  summary: Create a new Category
  description: Create Category from the database
  fn: create
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
  responses:
    content:
      application/json:
        schema:
          type: object
```

:::tip note
- The first line is changed for each protocol.
- cron does not need any validation.
- kafka consumers dont need authentication or authorization 
:::