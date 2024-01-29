# Event Schema

An event schema defines the structured format or blueprint for representing data within an event. It outlines the specific fields, data types, and structure that an event must adhere to. The schema serves as a standardized template, ensuring consistency in the project

## Http 

### Request Schema

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


### Response Schema
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

> A [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource) event is specified as `{datasourceName}.{topic_name}.{group_id}` in [the Kafka event specification](#example-spec-for-kafka-event).

Within the Kafka event structure, the content of the message is captured and made accessible as `inputs.body`, facilitating its integration into the handler workflow for processing.

### Example spec for Kafka event

``` yaml
 # event for consume data from Topic
Kafka.publish-producer1.kafka_proj: // event key
  id: kafka_consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json: 
        schema:
          type: string
 ```

## Apollo Graphql

### GraphQL Configuration 

(src/eventsources/Apollo.yaml)
```yaml
type: graphql
port: 4000
```

:::tip note
Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is Apollo. The event schema follows REST standards, resembling HTTP events.
:::

### Apollo Graphql event schema

(src/events/create_category.yaml)
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
- Cron does not need any validation.
- Kafka consumers dont need authentication or authorization 
- Two types of events- sync([http](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/express-as-http/README.md),[Apollo Graphql](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/graphql-as-eventsource/README.md)) and async([cron](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/cron-as-eventsource/README.md),[kafka](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/kafka-as-datasource-as-eventsource/README.md))
:::