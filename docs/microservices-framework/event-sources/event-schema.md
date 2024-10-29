# Event Schema
The event schema, for each eventsource, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event handler workflow(fn)
- Input and output schema with the validation error handling
- [Authorization](/docs/microservices-framework/authorization/overview.md) checks 

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

`get` : method (depends on the eventsource used. Can be topic for Kafka)

`/helloworld`: endpoint (In case of http and graphql sources. Can be groupId in case of Kafka for ex.)

We are exposing an endpoint with a `get` method on `http` protocol. This endpoint is calling an eventhandler called `helloworld` in the second line. Event handlers can be functions written in typescript, javascript or  yaml workflows in Godspeed's DSL format. In the above example the helloworld function exists in `src/functions` directory. 

:::tip Note
When switching between eventsources, the event schema undergoes significant changes. In the case of HTTP events, the start line includes the eventsource name, method, and path. However, for Kafka events, the start line combines the datasource name, topic name, and group ID.
:::

Points to be undertaken :
- The first line is changed for each protocol. 
- You can apply multiple compatible eventsource instances in a URI for ex. `graphql & http.get./greeting`
- Async consumers like Kafka dont need authentication or authorization, and don't have a response 
- Async events like Cron do not have any input.

<details>
<summary> Example HTTP Schema  </summary>

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
            type: object
    200:
      content:
        application/json:
          schema:
            type: object
```
</details>

**To get a quick understanding of Event scehma, please watch the video provided below…**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/WsNwInEaWFw?si=2uEG_Tp5x36v9vAB" frameborder="0" allowfullscreen></iframe>
</div>

<!-- <div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/cp1qgIz1PNw?si=4Qngtu-WXoC-LQeY" frameBorder="0" allowFullScreen></iframe>
</div> -->

