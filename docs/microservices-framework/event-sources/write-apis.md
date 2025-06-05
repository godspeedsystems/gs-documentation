# Writing APIs in Godspeed

In Godspeed, **every API is defined as an event**, and handled by a corresponding function. This unified event-driven structure works for both REST and non-REST event sources (HTTP, WebSocket, Kafka, etc.).

This guide explains how to write new APIs in three clear steps:

---

## Step 1: Setup an Event Source

An **event source** is a mechanism that listens for incoming requests or events. Godspeed supports HTTP (via Express), GraphQL, Fastify, Cron and Kafka.

### 🔹 By Default: HTTP via Express

When you create a new project with:

```bash
godspeed create my-project
```

It comes pre-configured with **Express** as the default event source.

Check: `src/eventsources/http.yaml`

```yaml
type: express
port: 3000
docs:
  endpoint: api-docs
```

This allows you to start writing HTTP APIs immediately without additional setup.

---

### 🔹 Optional: Add Another Event Source

If you want to consume events from other protocols (e.g., Kafka, WebSocket, Cron) use:

```bash
godspeed plugin add
```

Select the required event source like:

* `kafka-as-datasource-as-eventsource`
* `cron-as-eventsource`
* `graphql-as-eventsource`

Then configure it in the `src/eventsources/` folder.

---

## Step 2: Define the Schema for your API

### Event Schema

To define an api endpoint, first you need to write an Event Schema. This schema is a structured YAML configuration that follows the OpenAPI specification, allowing you to define every detail of how the event should behave. All events adhere to a standard structure, which is one of the core design principles of Godspeed, regardless of their source or protocol.

**It involves specifying:**

- The name/topic/URL of the event
- The event handler Workflow (fn)
- Input and Output schema
- [Validation error handling](/docs/microservices-framework/event-sources/validations/schema-validation)
- [Authorization checks](/docs/microservices-framework/authorization/overview.md)

By writing an event schema, you provide a blueprint that defines how an incoming request or message should be handled, making your API endpoints easy to manage and highly configurable.


### The generic Event Schema
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
Lets understand the first line from the above snippet `http.get./greet`.

`http`: Protocol http eventsource (can be any)

`get` : method (depends on the eventsource used. Can be topic for Kafka)

`/helloworld`: endpoint (In case of http and graphql sources. Can be groupId in case of Kafka for ex.)

We are exposing an endpoint with a `get` method on `http` protocol. This endpoint is calling an eventhandler called `helloworld` in the second line. Event handlers can be functions written in typescript, javascript or  yaml workflows in Godspeed's DSL format. In the above example the helloworld function exists in `src/functions` directory. 

### Key Differences between a Sync and Async Event Schema

When switching between eventsources, the event schema undergoes significant changes.
- The first line is changed for each protocol:

 In the case of sync events or HTTP events, the start line includes the eventsource name, method, and path. 

 However, for async events, the start line combines the source name, topic and group ID (for Kafka), or schedule (for Cron).

- Async events like Kafka do not have responses, authentication and authorization fields in schema.

- Cron events do not have any input.

:::tip Note
You can apply multiple compatible eventsource instances in a URI for ex. `graphql & http.get./greeting`
:::

### Example HTTP Event Schema
Example: `src/events/helloworld.yaml`

```yaml
http.get./helloworld:
  fn: helloworld
  authn: false
  params:
    - name: name
      in: query
      required: true
      schema:
        type: string
  responses:
    200:
      content:
        application/json:
          schema:
            type: string
```

### Anatomy of an Event

| Field                  | Purpose                                                         |
| ---------------------- | --------------------------------------------------------------- |
| `http.get./helloworld` | Event key – REST method and route                               |
| `fn`                   | The function (event handler) to invoke                          |
| `params`               | Query/path/header parameters, as per Swagger format             |
| `responses`            | API response schema definition for documentation and validation |
| `authn`                | Set to `true` or `false` to require authentication              |

This schema controls how Swagger UI documents the API and how the framework validates inputs.

---

## Step 3: Write the Event Handler Function

The event handler function processes the request. It can be written in TypeScript or Javascript.

### 🔹 Example: TypeScript Handler Function

`src/functions/helloworld.ts`
```ts
import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
                query     // query parameters from rest api
                // params,//path parameters from endpoint url
                // body,  // request body in case of http and graphql apis, event data in case of message bus or socket
                // user,   // user payload parsed from jwt token
                // headers //request headers in case of http and graphql apis
            }
        }, 
    }= ctx;
  
    return new GSStatus(true, 200, undefined, 'Hello ' + query.name, undefined);  
}
```

:::tip
In Godspeed, your function gets input in a standard JSON format and returns output in a standard JSON format, independent of the eventsource through which this function is triggered. Eventsource could be Express, Fastify, Apollo Graphql or event message bus like Kafka, RabbitMQ or socket message. This means Godspeed has a unified way to deal with all eventsources, giving you modular architecture and re-uasability of your functions.
:::

Click the link below to explore the complete anatomy of an event handler function written in TypeScript.
It illustrates how to access inputs, use the GSContext, interact with datasources, and return responses correctly.

👉 [Full Example: Understanding Godspeed Function Structure](/docs/microservices-framework/workflows/native-language-functions.md#example-typescript-function)


### Test Your API

Run the service:

```bash
godspeed serve
```

Visit the Swagger UI at:

```
http://localhost:3000/api-docs
```

Try the `/helloworld` endpoint. Provide a `name` in the query, and observe the JSON response.

---

## Summary

| Step | Action                                 | File Path                                     |
| ---- | -------------------------------------- | -------------------------------------         |
| 1    | Confirm eventsource (Express or other) | `src/eventsources/<eventsource-name>.yaml`    |
| 2    | Define your event schema               | `src/events/<your-api>.yaml`                  |
| 3    | Write the event handler function       | `src/functions/<your-function>.ts`            |

---

### Extending Further

* Use `datasources` (Axios, AWS, Prisma) in the handler via `ctx.datasources`
* Chain multiple tasks using YAML workflows instead of writing code
* Auto-generate CRUD APIs via `godspeed gen-crud-api`
---

**To get a quick understanding of Event schema, please watch the video provided below…**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/WsNwInEaWFw?si=2uEG_Tp5x36v9vAB" frameborder="0" allowfullscreen></iframe>
</div>