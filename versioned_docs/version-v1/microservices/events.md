---
sidebar_position: 3
title: Events
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Events
A microservice can be configured to consume events from variety of [event sources](#61-event-types), like HTTP, GraphQl, S3 etc. The event schema, for each event source, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event source and other information for the source (for ex. group_id in case of Kafka events)
- The event handler workflow
- Validation (input and output)
- Examples of input and output

The response of the event is flexible for the developer to change as per the requirement.

## 6.1 Event types

**Currently supported**
- http.{method_type} For example, post or get
- Kafka
- Salesforce
- cron
- Webhook
- S3
- RabbitMQ

## 6.2 Event schema & examples for supported sources

> All event declarations are stored in the src/events folder, in YAML files.

### 6.2.1 JSON schema validation
The framework provides request and response schema validation out of the box.

#### Request schema validation
Sample spec for request schema.
```
body:
  content:
    application/json:
      schema:
        type: 'object'
        required: []
        properties:
          dob:
            type: 'string'
            format : 'date'
            pattern : "[0-9]{4}-[0-9]{2}-[0-9]{2}"
```
If request schema validation fails, then status code 400 is returned.

#### Response schema validation
Sample spec for response schema.
```
responses: #Output data defined as per the OpenAPI spec
  200:
    description:
    content:
      application/json: # For ex. application/json application/xml
        schema:
          type: object
          properties:
            application_id:
              type: string
          additionalProperties: false
          required: [application_id]
        examples: # <string, ExampleObject>
          example1:
            summary:
            description:
            value:
              application_id: PRM20478956N
            external_value:
```
If response schema validation fails, then status code 500 is returned.

### 6.2.2 HTTP event

For an HTTP event, the headers, query, params and body data are captured in a standard format, and made available in the `inputs` object [for use in the workflows](#example-workflow-consuming-an-http-event).

 The inputs (event) object has following properties:

    - query: `<%inputs.query.var_name%>` # present in case of http events
    - params: `<%inputs.params.path_param%>` # present in case of http events
    - headers: `<%inputs.headers.some_header_key%>` # present in case of http events
    - body: `<%inputs.body.key%>` # Present for all events except for http events which don't have a body. For ex. http.get
    - files: `<%input.files%>` # Any files uploaded via HTTP event. Not present in other kind of events

#### Example spec for HTTP event

``` yaml
 /v1/loan-application/:lender_loan_application_id/kyc/ckyc/initiate.http.post: #Adding .http.post after
  #the endpoint exposes the endpoint as REST via the POST method (in this example)
  fn: com.biz.kyc.ckyc.ckyc_initiate #The event handler written in ckyc_initiate.yml, and
  # kept in src/workflows/com/biz/kyc/ckyc folder (in this example)
  on_validation_error: com.jfs.handle_validation_error # The validation error handler if event's json schema validation gets failed and
  # kept in src/workflows/com/jfs/ folder (in this example)
  body:
    required: true
    content:
      application/json:
        schema:
          type: 'object'
          required: []
          properties:
            dob:  { type : 'string', format : 'date', pattern : "[0-9]{4}-[0-9]{2}-[0-9]{2}" }
            meta:
              type: 'object'

  params:
  - name: lender_loan_application_id
    in: params # same as open api spec: one of cookie, path, query, header
    required: true
    allow_empty_value: false
    schema:
      type: string
  responses: #Output data defined as per the OpenAPI spec
    200:
      description:
      required: # default value is false
      content:
        application/json: # For ex. application/json application/xml
          schema:
            type: object
            properties:
              application_id:
                type: string
            additionalProperties: false
            required: [application_id]
          examples: # <string, ExampleObject>
            example1:
              summary:
              description:
              value:
                application_id: PRM20478956N
              external_value:
          encoding:
    400:
      description:
      required: # default value is false
      content:
        application/json: # For ex. application/json application/xml
          schema:
            type: object
            properties:
              lender_response_code:
                type: string
          examples: # <string, ExampleObject>
            example1:
              summary:
              description:
              value:
                lender_response_code: E001
              external_value:
          encoding:
 ```

#### Example workflow consuming an HTTP event
  ```yaml
    summary: Simply returning query & body data of an http.post event
    id: some_unique_id
    tasks:
      - id: step1
        fn: com.gs.return
        args: <%inputs.body%> # Evaluation of dynamic values happens via <% %>. The type of scripting can be coffee/js.
        # Here we are returning the body of the HTTP post event.
  ```

#### Example workflow (on_validation_error handler) handling json schema validation error
  ```yaml
    summary: Handle json scehma validation error
    id: error_handler
    tasks:
      - id: erorr_step1
        fn: com.gs.kafka
        args:
          datasource: kafka1
          data: # publish the event and validation error to kafka on a topic
            value:
              event: <% inputs.event %>
              validation_error: <% inputs.validation_error %>
          config:
            topic: kafka_error_handle
            method: publish
  ```

### 6.2.3 Kafka event

> A kafka event is specified as `{topic_name}.{datasourceName}.{group_id}` in [the kafka event specification](#example-spec-for-kafka-event).

The `group_id` represents identifier for all the consumers of the group. Only one consumer of the group will consume a message. This is useful for microservices, when a single services runs in multiple K8s pods. Each pod is part of the same group. This ensures the message is eventually consumed by any one of the pods.

The message body of a kafka event is captured and represented as `inputs.body` for [consumption in the handler workflow](#example-workflow-consuming-a-kafka-event).

#### Datasource for kafka
The datasources for kafka are defined in `src/datasources`. [Refer Kafka as datasource](./datasources/kafka.md/#741-example-spec) for more information.

#### Example spec for kafka event

``` yaml
kafka-consumer1.kafka1.kafka_proj: # This event will be triggered whenever
  # a new message arrives on the topic_name
  id: /kafkaWebhook
  fn: com.jfs.publish_kafka #The event handler written in publish_kafka.yml, and
  # kept in src/workflows/com/jfs folder (in this example)
  on_validation_error: com.jfs.handle_validation_error # The validation error handler if event's json schema validation gets failed and
  # kept in src/workflows/com/jfs folder (in this example)
  body:
    description: The body of the query
    content:
      application/json: # For ex. application/json application/xml
        schema:
          type: object
          properties:
            name:
              type: string
          required: [name]
```

#### Example workflow consuming a kafka event
```yaml
  summary: Handle kafka event
  id: some_unique_id
  tasks:
    - id: step1
      summary: Publish an event with this data
      fn: com.gs.kafka
      args: # similar to Axios format
        datasource: kafka1
        config:
          method: publish
          topic: publish-producer1
        data:
          value: <% inputs %>
      # Here we are publishing an event data to another topic
```

Refer [com.gs.kafka](./workflows.md/#662-comgskafka) native function to publish an event on kafka.

<!--
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0px',
      color: 'black',
      fontSize:'22px',
      padding: '5px',
      cursor: 'pointer',
    }}
   >
    {children}
  </span>
);-->

### 6.2.4 Salesforce event
> A salesforce event is specified as `{topic_name}.salesforce.{datasource_name}`

`topic_name`is salaesforce event topic
`datasource_name` is name of the `salesforce`datasource filename

Prerequisite:
1. For using `salesforce`, You need to enable `redis` datasource. You can enable `redis`while creating a new `godspeed` project or run `godspeed update` on an existing project.
2. in `config/default.yaml`add a property as `caching: redis`. Where `redis` is datasource name. If your `redis` type datasource name is `redis1.yaml`, then `caching: redis1` will be the correct configuration.

Example of `salesforce`datasource, eg: `src/datasources/salaeforce.yaml`

```yaml
type: salesforce
connection:
    # Please Check  https:#jsforce.github.io/document/

    #1. Username and Password Login
    # you can change loginUrl to connect to sandbox or prerelease env.
    # loginUrl : 'https:#test.salesforce.com'

    #2. Username and Password Login (OAuth2 Resource Owner Password Credential)
    oauth2:
        # you can change loginUrl to connect to sandbox or prerelease env.
        # loginUrl : 'https:#test.salesforce.com',
        clientId : '<your Salesforce OAuth2 client ID is here>'
        clientSecret : '<your Salesforce OAuth2 client secret is here>'
        redirectUri : '<callback URI is here>'

    #3. Session ID
    serverUrl : '<your Salesforce server URL (e.g. https:#na1.salesforce.com) is here>'
    sessionId : '<your Salesforce session ID is here>'

    #4. Access Token
    instanceUrl : '<your Salesforce server URL (e.g. https:#na1.salesforce.com) is here>'
    accessToken : '<your Salesforrce OAuth2 access token is here>'

    #5. Access Token with Refresh Token
    oauth2:
        clientId : '<your Salesforce OAuth2 client ID is here>'
        clientSecret : '<your Salesforce OAuth2 client secret is here>'
        redirectUri : '<your Salesforce OAuth2 redirect URI is here>'
    instanceUrl : '<your Salesforce server URL (e.g. https:#na1.salesforce.com) is here>'
    accessToken : '<your Salesforrce OAuth2 access token is here>'
    refreshToken : '<your Salesforce OAuth2 refresh token is here>'

username: <% config.salesforce_username %>
password: <% config.salesforce_password %>
```


Example of `salesforce` event:
```yaml
{topic_name}.salesforce.{datasourceName}
id: /salesforcetopic
fn: com.jfs.handle_title_events
on_validation_error: com.jfs.handle_validation_error
body:
  description: The body of the query
  content:
    application/json:
      schema:
        type: object
        properties:
          name:
            type: string
        required: [name]
```

### 6.2.5 CRON event
> A CRON event will allow you to run events at scheduled time / interval. A CRON event is specified as `{schedule_expression.cron.timezone}`

 - `schedule_expression` You can refer [crontab](https://crontab.guru/) to generate schedule.
 - `timezone` Refer [this wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) to get the timezone format.

 Here is an example of a CRON event which run every minute.

 ```yaml title="every_minute_cron.yaml"
 "* * * * *.cron.Asia/Kolkata":
  fn: com.every_minute
 ```

 and corresponding function is

 ```yaml title="com/every_minute.yaml"
  summary: this workflow will be running every minute
  tasks:
    - id: print
      description: print every
      fn: com.gs.log
      args:
        level: info
        data: HELLO from CRON
 ```

 ### 6.2.3 RabbitMQ event

> A RabbitMQ event is specified as `{queue_name}.{datasourceName}` in [the RabbitMQ event specification](#example-spec-for-RabbitMQ-event).

The message body of a RabbitMQ event is captured and represented as `inputs.body` for [consumption in the handler workflow](#example-workflow-consuming-a-kafka-event).

#### Datasource for RabbitMQ
The datasources for RabbitMQ are defined in `src/datasources`. [Refer RabbitMQ as datasource](./datasources/rabbitmq.md/#741-example-spec) for more information.

#### Example spec for RabbitMQ event

``` yaml
queue_name.rabbitmq: # This event will be triggered whenever
  # a new message arrives on the queue_name
  id: /rabbitmqEvent
  fn: com.jfs.publish_rabbitmq #The event handler written in publish_rabbitmq.yml, and
  # kept in src/workflows/com/jfs folder (in this example)
  on_validation_error: com.jfs.handle_validation_error # The validation error handler if event's json schema validation gets failed and
  # kept in src/workflows/com/jfs folder (in this example)
  body:
    description: The body of the query
    content:
      application/json: # For ex. application/json application/xml
        schema:
          type: object
          properties:
            name:
              type: string
          required: [name]
```

#### Example workflow consuming and publishing a RabbitMQ event
```yaml
summary: rabbitMQ message publishing
id: rabbitMQ_message
tasks: 
  - id: publish_rabbitmq
    fn: com.gs.rabbitmq.publish
    args:
      datasource: rabbitMq
      exchange: TestOne
      config:
        method: publish
      data: <% inputs %>
      # Here we are publishing an event data to another queue
```