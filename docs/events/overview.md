# Events
## Introduction
In the realm of microservices architecture, events serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and workflow details.

The event schema, for each event source, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event source and other information for the source (for ex. group_id in case of Kafka events)
- The event handler workflow
- Validation (input and output)
- Examples of input and output

Event handlers within microservices are responsible for processing these events, executing predefined workflows, and ensuring that both input and output data adhere to specified validation rules. These events empower developers with flexibility, allowing them to tailor responses to meet specific requirements.

## Structure of an event
```yaml
http.put./mongo/user/{id}:
  summary: Update a user
  description: Update user from database
  fn: com.biz.mongo.user.update
  params:
    - name: id
      in: path
      required: true
      schema:
        type: string
  body:
    content:
      application/json:
        schema:
          $ref: '#/definitions/mongo/BusinessProfile'
  responses:
    content:
      application/json:
        schema:
          type: object
```
- The event's first line comprises three key elements: the type of event source (e.g., `http`), the method (e.g., `put`), and the URL (`/mongo/user/{id}`).
- The `summary` and `description` fields provide insights into the event's purpose and can be viewed in Swagger specifications of that API.
- The `fn` keyword specifies which function should be executed when the event occurs.
- Use `params` to include `path` or `query` parameters.  The `name` keyword identifies the parameter's name, `in` specifies its type (path or query), and `schema` defines the expected input value.
- Events can receive JSON request body objects via the `body`, and you can define a specific schema to extract user information.
- The `responses` section outlines the expected response objects that should be included in the response body.




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

  ### Kafka event
> A kafka event is specified as `{datasourceName}.{topic_name}.{group_id}` in [the kafka event specification](#example-spec-for-kafka-event).

The `group_id` functions as a unique identifier for all consumers within a group, ensuring that only one consumer processes a message at a time. This becomes particularly valuable in microservices architecture scenarios where a single service operates across multiple Kubernetes (K8s) pods, with each pod belonging to the same consumer group. This setup guarantees that the message is reliably consumed by any one of the pods.

Within the Kafka event structure, the content of the message is captured and made accessible as `inputs.body`, facilitating its integration into the handler workflow for processing.


[To know about Kafka](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/kafka/README.md)

#### Example spec for Kafka event

``` yaml
 # event for consume data from Topic
Kafka.publish-producer1.kafka_proj: // event key
  id: kafka__consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json: 
        schema:
          type: string
 ```

#### Example workflow consuming an kafka event
  ```yaml
   # function for consume data
id: kafka-conumer
summary: consumer
tasks:
    - id: set_consume
      fn: com.gs.return
      args: <% inputs %>
  ```

#### Example workflow (on_validation_error handler) handling json schema validation error
  ```yaml
  summary: Handle json scehma validation error
  id: error_handler
  tasks:
    - id: erorr_step1
      fn: datasource.kafka.publish
      args:
        data: # publish the event and validation error to kafka on a topic
          value:
            event: <% inputs.event %>
            validation_error: <% inputs.validation_error %>
  ```


### Working with different eventsources

To switch between events, you'll need to adjust the event schema based on the expected inputs. For instance, HTTP events accept inputs such as body, headers, path parameters, and query parameters. On the other hand, Kafka events only accept inputs in the form of body.

Checkout a http event [example-http-event](#example-spec-for-http-event)

Checkout the kafka event [example-kafka-event](#example-spec-for-kafka-event)

**When switching between event sources, the event schema undergoes significant changes. In the case of HTTP events, the start line includes the event source name, method, and path. However, for Kafka events, the start line combines the data source name, topic name, and group ID.**


