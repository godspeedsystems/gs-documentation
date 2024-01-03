# Events and Types
## Introduction
In the realm of microservices architecture, events serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and workflow details.

**We closely follow the OpenAPI specification; this is a fundamental aspect of all events that adhere to a [standard structure](/docs/microservices-framework/introduction/design-principles.md#schema-driven-development), which is one of the core design principles of Godspeed, regardless of their source or protocol.**

<!-- **When switching between eventsources, the event schema undergoes significant changes. In the case of HTTP events, the start line includes the eventsource name, method, and path. However, for Kafka events, the start line combines the datasource name, topic name, and group ID.** -->

The event schema, for each eventsource, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event handler workflow
- Input and output schema with the validation error handling
- [Authorization](/docs/microservices-framework/authorization/overview.md) checks 


##  Event types
Based on how processing is handled ,events can be classified into two types: synchronous (sync) and asynchronous (async) events, each suited for various protocols. 


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1703849187/Sushil_edited_bbfzl1.jpg" alt="event types" />


**Synchronous events** are typically associated with 
- `HTTP/REST protocol:` Express can also handle asynchronous operations, the basic request-response cycle is synchronous.
- `gRPC:`  gRPC is a framework for building remote procedure call (RPC) systems. If you're using the typical request-response pattern, it can be thought of as synchronous.
- `GraphQL:` Most commonly, GraphQL is used for synchronous communication, but it can handle asynchronous operations when needed.

**Asynchronous events**, on the other hand, are exemplified by
- `Cron jobs:` Cron jobs are asynchronous because they don't execute immediately when you create or schedule them.
- `Kafka:` Apache Kafka is an event streaming platform. It's designed for asynchronous, real-time data streaming.
- `RabbitMQ:` RabbitMQ is a message broker that allows asynchronous communication between distributed systems.
- `WebSocket communication:` WebSockets provide full-duplex communication channels over a single TCP connection. They are inherently asynchronous, allowing real-time bidirectional communication between clients and servers.

You can also create **custom events** like 
- `Salesforce:` Salesforce UI or synchronous API calls provide immediate feedback, many of the underlying processes that handle data processing and automation are performed `asynchronously` for scalability and efficiency.
:::note
You can refer [Salesforce plugin](https://docs.godspeed.systems/v1/microservices/events#624-salesforce-event) which we have in V1.
We have [bounty](https://forum.godspeed.systems/t/1-million-developer-bounty-program-build-earn-with-godspeed/128) on implementing [plugins for V2](https://github.com/godspeedsystems/gs-plugins#list-of-plugins).
:::
- `S3:` Amazon S3 provides real-time access to stored objects and can be used for synchronous operations like serving web content, its internal processes and features are optimized for `asynchronous`.
- `Gmail:` The `asynchronous` nature of Gmail's event notifications is designed to provide near real-time updates to external systems and applications without waiting for immediate responses. 


## Examples for different event schema: 


### An HTTP event
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

For an HTTP event, the headers, query, params and body data are captured in a standard format, and made available in the `inputs` object [for use in the workflows](/docs/microservices-framework/workflows/overview.md).

The inputs (event) object has following properties:

- **query can be accessed as**: `<%inputs.query.var_name%>`  Present in case of http events

- **params can be accessed as**: `<%inputs.params.path_param%>`  Present in case of http events

- **headers can be accessed as**: `<%inputs.headers.some_header_key%>`  Present in case of http events

- **body can be accessed as**: `<%inputs.body.key%>`  Present for all events except for http events which don't have a body. For ex. http.get

- **files can be accessed as**: `<%input.files%>`  Any files uploaded via HTTP event. Not present in other kind of events


## Swagger Specs

### Steps to add Swagger specs in project. 

Framework will give you below folder structure.

```
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── axios.ts
        |   |
        │   └── api.yaml
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions
            |
            └── helloworld.yaml
```
1. To enable swagger ui add `docs` in  **"./src/eventsources/http.yaml"**

2. `/` is the default endpoint,if you want to provide your custom swagger endpoint, you can modify the endpoint from **"./src/eventsources/http.yaml"**

### Update http.yaml( src/eventsources/http.yaml )
```yaml
type: express
port: 3000
docs:
  endpoint: /
```

### Custom server URL and custom Info:
In the `http.yaml` file, you have the option to incorporate a custom server URL for API documentation. By including this custom server URL, any autogenerated documentation or Swagger specifications will feature this URL within the `servers` section. Additionally, you can enhance the documentation by specifying a custom `title`, `version`, and `contact information` through the addition of `info`.

```yaml
type: express
port: 3000
docs:
  endpoint: /
  info: 
    version: 0.0.1
    title: 'Godspeed: Sample Microservice'
    description: Sample API calls demonstrating the functionality of Godspeed framework
    termsOfService: 'http://swagger.io/terms/'
    contact:
      name: Mindgrep Technologies Pvt Ltd
      email: talktous@mindgrep.com
      url: 'https://docs.mindgrep.com/docs/microservices/intro'
    license:
      name: Apache 2.0
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  servers:
    - url: https://api.example.com:8443/api
      description: staging
```

For example,
![Swagger specs](https://docs.godspeed.systems/assets/images/swagger_spec-5218946d179677ac711303f8d406b4ee.png)


## Kafka event
> A [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource) event is specified as `{datasourceName}.{topic_name}.{group_id}` in [the Kafka event specification](#example-spec-for-kafka-event).

Within the Kafka event structure, the content of the message is captured and made accessible as `inputs.body`, facilitating its integration into the handler workflow for processing.

#### Example spec for Kafka event

``` yaml
 # event for consume data from Topic
Kafka.publish-producer1.kafka_proj: // event key
  id: kafka_consumer
  fn: kafka_consume
  body: #same body structure for all the events
 ```

#### Example workflow consuming a Kafka event
  ```yaml
   # function for consume data
id: kafka_consumer
summary: consumer
tasks:
    - id: set_consume
      fn: com.gs.return
      args: <% inputs.body %>
  ```

#### On validation error handler
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
## Cron event
[Cron](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource#godspeed-plugin-cron-as-eventsource)  jobs are a standard method of scheduling tasks to run on your server. Cron is a service running in the background that will execute commands (jobs) at a specified time, or at a regular interval. Jobs and their schedules are defined in a configuration file called a crontab.

```yaml
# event for Scheduling a task for every minute.

cron.* * * * *.Asia/Kolkata: //event key
  fn: every_minute

```
- `cron.*`: This is the cron syntax for the field representing minutes. The asterisk (*) in this position means "every minute," so the event is scheduled to run every minute.

- `* * * * *`: These asterisks represent the other cron fields, which specify the schedule for hours, days of the month, months, and days of the week, respectively. 

- `Asia/Kolkata`: This is a timezone specification. It indicates that the event is scheduled to run in the Asia/Kolkata timezone. Kolkata is a city in India, and this timezone corresponds to the Indian Standard Time (IST).






