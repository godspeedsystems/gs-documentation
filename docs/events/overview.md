# Events
## Introduction
In the realm of microservices architecture, [events](design_principles#three-fundamental-abstractions) serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and workflow details.

**We closely follow the OpenAPI specification; this is a fundamental aspect of all events that adhere to a standard structure, which is one of the core design principles of Godspeed, regardless of their source or protocol.**

The event schema, for each event source, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event handler workflow
- Input and output schema with the validation error handling
- [Authorization](authorization/overview.md) checks


## Structure of an event
```yaml
http.put./mongo/user/{id}: #This comprises three key elements: the type of event source (e.g., `http`), the method (e.g., `put`), and the URL (`/mongo/user/{id}`).
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
    200:
      content:
        application/json:
          schema:
            type: object
```
- The event's first line comprises three key elements: the type of event source (e.g., `http`), the method (e.g., `put`), and the URL (`/mongo/user/{id}`).
- The `summary` and `description` fields provide insights into the event's purpose and can be viewed in Swagger specifications of that API.
- The `fn` keyword specifies which function should be executed when the event occurs, this is the event handler workflow.
- Use `params` to include `path` or `query` parameters.  The `name` keyword identifies the parameter's name, `in` specifies its type (path or query), and `schema` defines the expected input value.
- Events can receive JSON request body objects via the `body`, and you can define a specific schema to extract user information.
  - In the request body `$ref: '#/definitions/mongo/BusinessProfile'` refers to the request schema in the definitions which are auto generated on genrating CRUD ApIs based on the prisma schema used in the project.
- The `responses` section outlines the expected response objects that should be included in the response body.




##  Event types

**For Example**
- http.{method_type} For example, post or get
- cron

## Event schema & examples for supported sources

> All event declarations are stored in the src/events folder, in YAML files.

### JSON schema validation
The framework provides request and response schema validation out of the box.

#### Request schema validation
Sample spec for request schema.
```yaml
http.get./greet:
  fn: function-greet
  params:
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

- The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
- The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters.
- It is also possible to define inputs such as 'params,' 'body,' 'headers,' and 'query parameters.'
- Furthermore, you have an option to specify responses, including status codes and response body types, among other things.

#### Response schema validation:
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

Sample workflow for the above event. 


```yaml
id: helloworld
tasks:
  - id: first_task
    fn: com.gs.return
    args:
      name: 'Hello World!'
```

### HTTP event

For an HTTP event, the headers, query, params and body data are captured in a standard format, and made available in the `inputs` object [for use in the workflows](#example-workflow-consuming-an-http-event).


 The inputs (event) object has following properties:

- **query can be accessed as**: `<%inputs.query.var_name%>` # present in case of http events

- **params can be accessed as**: `<%inputs.params.path_param%>` # present in case of http events

- **headers can be accessed as**: `<%inputs.headers.some_header_key%>` # present in case of http events

- **body can be accessed as**: `<%inputs.body.key%>` # Present for all events except for http events which don't have a body. For ex. http.get

- **files can be accessed as**: `<%input.files%>` # Any files uploaded via HTTP event. Not present in other kind of events

#### Example spec for HTTP event

``` yaml
 http.put./mongo/user/{id}:
  summary: Update a User
  description: Update User from database
  fn: com.biz.mongo.user.update
  # this event has respective 'path params', 'body' and 'responses' fields.
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

Within the Kafka event structure, the content of the message is captured and made accessible as `inputs.body`, facilitating its integration into the handler workflow for processing.


[Know about Kafka](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/kafka/README.md)

#### Example spec for Kafka event

``` yaml
 # event for consume data from Topic
Kafka.publish-producer1.kafka_proj: // event key
  id: kafka__consumer
  fn: kafka_consume
  body: #same body structure for all the events
 ```

#### Example workflow consuming an kafka event
  ```yaml
   # function for consume data
id: kafka-consumer
summary: consumer
tasks:
    - id: set_consume
      fn: com.gs.return
      args: <% inputs.body %>
  ```

#### Example workflow (on_validation_error handler) handling json schema validation error
  ```yaml
  summary: Handle json scehma validation error
  id: error_handler
  tasks:
    - id: error_step1
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


