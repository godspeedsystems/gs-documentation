# Event Schema
In the meta-framework world, we call sync events (different APIs) and async events (ex. Kafka, Socket, Cron) as events altogether.

An event schema defines 
- The structured format or blueprint for representing data within an event
- Authentication and authorization policy
- Input and output validations
- The event handler - the business logic for handling that event
- The documentation of the event (for publishing the API spec)

It outlines the specific fields, data types, and structure that an event must adhere to. The schema serves as a standardized template, ensuring consistency in the implementation across projects in a company, whereby many kinds of eventsources are used.

## The generic event schema
Godspeed follows [Schema Driven Development & Single Source of Truth](../introduction/guard-rails.md#1schema-driven-development), [Configure Over Code](../introduction/guard-rails.md#2configure-over-code) and [Modular Architecture](../introduction/guard-rails.md#4-decoupled-architecture) approach in 
- Listening to events from various sources and acting upon them.
- Generating API documentation (Swagger) and other schemas like Graphql

The meta-framework follows a generic schema for defining events - their inputs, outputs, swagger specs, with validations, authentication, authorization etc.  

```yaml
http.get./greet: #The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
  fn: function_greet #Required. The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters. 
  
  #optional configurations
  #Swagger components
  body: #same as requestBody in Swagger world
  params: #same as swagger `parameters` schema
  responses: #same as swagger `responses` schema
  id: # swagger. if not provided, when generating swagger, this is generated from the URI of the event by default
  operationId: # swagger if not provided, check if `id` is set. If that is also not set, use the summary to generate the operationId
  summary:
  tags: # swagger if you give `tags` array in schema of event, framework uses that to add tags to your generated spec. Else it uses the path and name of the file containing the event as tags. For ex. <folder_name>_<file_name> 
  
  #Other non-swagger components (optional)
  authn: #custom authentication. Currently plugins support JWT. Can be customized
  authz: #your custom authz workflow
  on_request_validation_error: #when validation fails
  on_response_validation_error: #when validation fails
  log: #Open Telemetry compliant log attributes which help debug and search through logs better
    attributes:
```
As you see, these attributes are technically not limited to any eventsource or protocol except for minor differences for ex, a message bus event or cron event (basically all async events) don't have a response. 
Lets understand the first line from the above snippet `http.get./greet`.

`http`: Protocol http eventsource (can be any)

`get` : method (depends on the eventsource used. Can be topic for Kafka, for example.)

`/helloworld`: endpoint (In case of http and graphql sources. Can be groupId in case of Kafka for ex.)

We are exposing an endpoint with a `get` method on `http` protocol. This endpoint is calling a an eventhandler called `helloworld` in the second line. Event handlers can be functions written in typescript, javascript or  yaml workflows in Godspeed's DSL format. In the above example the helloworld function exists in `src/functions` directory. 


## Http 

### Example HTTP Schema

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
The Apollo Graphql plugin is currently configured and functions exactly the same as Express and Fastify eventsources. Except that it doesn't have swagger config and doesn't support file upload as of now.

(src/eventsources/apollo.yaml)
```yaml
type: graphql
port: 4000
#eventsource level default settings (can be overriden at event level)
authn:
authz:
on_request_validation_error:
on_response_validation_error:
```

:::tip note
Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is Apollo. The event schema follows REST standards, resembling HTTP events.
:::

### Apollo Graphql event schema

(src/events/create_category.yaml)
```yaml
apollo.post./mongo/category:
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
- You can apply multiple compatible eventsource instances in a URI for ex. `graphql & http.get./greeting`
- Async consumers like Kafka dont need authentication or authorization, and don't have a response 
- Async Cron does not have any input either, unlike Kafka.

- Two types of events- sync([http](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/express-as-http/README.md),[Apollo Graphql](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/graphql-as-eventsource/README.md)) and async([cron](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/cron-as-eventsource/README.md),[kafka](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/kafka-as-datasource-as-eventsource/README.md))
:::