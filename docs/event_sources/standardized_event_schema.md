# Events
## Introduction
In the realm of microservices architecture, events serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and workflow details.

**We closely follow the OpenAPI specification; this is a fundamental aspect of all events that adhere to a [standard structure](/docs/tenets_and_design_principles.md#schema-driven-development), which is one of the core design principles of Godspeed, regardless of their source or protocol.**

<!-- **When switching between eventsources, the event schema undergoes significant changes. In the case of HTTP events, the start line includes the eventsource name, method, and path. However, for Kafka events, the start line combines the datasource name, topic name, and group ID.** -->

The event schema, for each eventsource, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event handler workflow
- Input and output schema with the validation error handling
- [Authorization](authorization/overview.md) checks 

## An HTTP event
- The framework provides request and response schema validation out of the box.
- To switch between events, you'll need to adjust the event schema based on the expected inputs. For instance, HTTP events accept inputs such as body, headers, path parameters, and query parameters. On the other hand, Kafka events only accept inputs in the form of body.


This event schema is supported by [HTTP eventsource](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http#godspeed-express-plugin)

```yaml
http.post./mongo/user/search/{id}: #This is the only thing that changes across all the events 
  summary: Update a user # as per Swagger spec
  description: Update user from database # as per Swagger spec
  fn: com.biz.mongo.user.update # function to be invoked
  on_validation_error: com.jfs.handle_validation_error
  params:       # params as per Swagger spec
    - name: id
      in: path
      required: true
      schema:
        type: string
    - name: name
      in: query
      required: false
      schema: 
        type: string
  body: #as per Swagger spec
    content:
      application/json:
        schema:
          $ref: '#/definitions/mongo/BusinessProfile' #defined for definition section.
  responses: #as per Swagger spec
    200:
      content:
        application/json:
          schema:
            type: object
    500:
      content:
        application/json: 
          schema:
            type: string
```
- The event's first line comprises three key elements: the type of eventsource (e.g., `http`), the method (e.g., `put`), and the URL (`/mongo/user/{id}`). This format is defined by the eventsource plugin, and it is the only line that changes across all events.

For an HTTP event, the headers, query, params and body data are captured in a standard format, and made available in the `inputs` object [for use in the workflows](/docs/workflows/overview.md).

The inputs (event) object has following properties:

- **query can be accessed as**: `<%inputs.query.var_name%>`  Present in case of http events

- **params can be accessed as**: `<%inputs.params.path_param%>`  Present in case of http events

- **headers can be accessed as**: `<%inputs.headers.some_header_key%>`  Present in case of http events

- **body can be accessed as**: `<%inputs.body.key%>`  Present for all events except for http events which don't have a body. For ex. http.get

- **files can be accessed as**: `<%input.files%>`  Any files uploaded via HTTP event. Not present in other kind of events

##  Event types
There are two primary types of events: synchronous (sync) and asynchronous (async) events, each suited for various protocols. 

### Examples for basic events

Synchronous events are typically associated with 
- `HTTP/REST protocol:` Express can also handle asynchronous operations, the basic request-response cycle is synchronous.
- `gRPC:`  gRPC is a framework for building remote procedure call (RPC) systems. If you're using the typical request-response pattern, it can be thought of as synchronous.
- `GraphQL:` Most commonly, GraphQL is used for synchronous communication, but it can handle asynchronous operations when needed.

Asynchronous events, on the other hand, are exemplified by
- `Cron jobs:` Cron jobs are asynchronous because they don't execute immediately when you create or schedule them.
- `Kafka:` Apache Kafka is an event streaming platform. It's designed for asynchronous, real-time data streaming.
- `RabbitMQ:` RabbitMQ is a message broker that allows asynchronous communication between distributed systems.
- `WebSocket communication:` WebSockets provide full-duplex communication channels over a single TCP connection. They are inherently asynchronous, allowing real-time bidirectional communication between clients and servers.

### Examples for custom events
You can create a custom events like 
- `Salesforce:` Salesforce UI or synchronous API calls provide immediate feedback, many of the underlying processes that handle data processing and automation are performed `asynchronously` for scalability and efficiency.
:::note
You can refer [Salesforce plugin](https://docs.godspeed.systems/docs/v1/microservices/events#624-salesforce-event) which we have in V1.
We have [bounty](https://forum.godspeed.systems/t/1-million-developer-bounty-program-build-earn-with-godspeed/128) on implementing [plugins for V2](https://github.com/godspeedsystems/gs-plugins#list-of-plugins).
:::
- `S3:` Amazon S3 provides real-time access to stored objects and can be used for synchronous operations like serving web content, its internal processes and features are optimized for `asynchronous`.
- `Gmail:` The `asynchronous` nature of Gmail's event notifications is designed to provide near real-time updates to external systems and applications without waiting for immediate responses. 

## Schema validation
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

We saw the Http event above, now we'll see the Kafka and Cron in the [examples](./examples)