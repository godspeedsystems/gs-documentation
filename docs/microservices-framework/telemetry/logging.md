---
sidebar_position: 1
title: Logs
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Logs are the application/service logs that are displayed on console. Sample logs:    
```
[14:46:00.881] DEBUG: Datasources found in src/datasources ["api","mem-cache"]
    section: "loading_functions"
[14:46:00.882] DEBUG: Starting to parse and load GSFunction id: first_task name: helloworld
    parent: {
      "workflow_name": "helloworld",
      "task_id": "helloworld"
    }
    workflow_name: "helloworld"
    task_id: "first_task"     
```
Godspeed adds some attributes (extra key/value pairs) to the logs to enhance logging and provide more information about the location. For example, in the above logs,    
**`section`**: which represents section the service is in while getting loading.   
**`parent`**: an object with information about the parent workflow and task.   
**`workflow_name`**: which represents the current workflow.   
**`task_id`**: which represents the current task.   

## Application configuration
### Log format
There are two types of log formats in Godspeed.   

#### pino pretty format
[pino pretty format](https://www.npmjs.com/package/pino-pretty) is more readable and user friendly. It is mostly used in development environments on user's local machine. Logs are dumped in this format when any of the below conditions is satisfied:   
**a) ** observability is [disabled](/docs/microservices-framework/CLI.md/#otel) i.e. OTEL_ENABLED env variable is not set to true.   
**b) ** NODE_ENV is set to 'dev'.
  
Sample Logs:
```
[14:46:00.813] INFO: [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG: Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO: [END] Load definitions
[14:46:00.818] INFO: [START] Load mappings from /home/gurjot/data/cli-test/v2_test2/dist/mappings
[14:46:00.819] INFO: [END] Load mappings
[14:46:00.819] INFO: [START] Load data sources from /home/gurjot/data/cli-test/v2_test2/dist/datasources
. . . . . . . . .
[14:46:00.881] DEBUG: JS/TS functions found in src/functions my_bank_api.auth_workflow,validations.request.standardResponse
    section: "loading_functions"
. . . . . . . .
[14:46:00.882] DEBUG: Starting to parse and load GSFunction id: helloworld name: helloworld
    workflow_name: "helloworld"
    task_id: "helloworld"
```

#### OTEL format
[OTEL Logging format](https://opentelemetry.io/docs/reference/specification/logs/data-model/) is used in Production/UAT and other environments where the user needs to enable observability.    
:::tip 
  OTEL Logging format provides co-relation between logs and traces by specifying tracing information (like TraceId, SpanId or TraceFlags) in the logs. With this co-relation information, one can navigate from logs to trace to get more information about any scenario. 
:::
Logs are dumped in this format when all of the below conditions are satisfied:   
**a) ** observability is [enabled](/docs/microservices-framework/CLI.md/#otel) i.e. OTEL_ENABLED env variable is set to true.   
**b) ** NODE_ENV is not set to 'dev'.

```json
{"Body":"[START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions","Timestamp":"2024-04-10T09:40:45.122Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"Definitions loaded and registered to ajvInstance","Timestamp":"2024-04-10T09:40:45.124Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[END] Load definitions","Timestamp":"2024-04-10T09:40:45.125Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[START] Load mappings from /home/gurjot/data/cli-test/v2_test2/dist/mappings","Timestamp":"2024-04-10T09:40:45.125Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[END] Load mappings","Timestamp":"2024-04-10T09:40:45.126Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[START] Load data sources from /home/gurjot/data/cli-test/v2_test2/dist/datasources","Timestamp":"2024-04-10T09:40:45.126Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
. . . . . . . . .
{"Body":"JS/TS functions found in src/functions my_bank_api.auth_workflow,validations.request.standardResponse","Timestamp":"2024-04-10T09:40:45.210Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{"section":"loading_functions"}}
. . . . . . . . .
{"Body":"Starting to parse and load GSFunction id: helloworld name: helloworld","Timestamp":"2024-04-10T09:40:45.210Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{"workflow_name":"helloworld","task_id":"helloworld"}}
```   

### Log level
The minimum level set to log above this level. Please refer [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options) for more information. Set `log.level` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
```yaml title=config/default.yaml
log:
  redact: # ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: false
    hostname: true  
```

Sample Logs:
```
[14:46:00.813] INFO: [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG: Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO: [END] Load definitions
```

### Log fields masking
If you want to hide sensitive information in logs then define the fields which need to be hidden in `redact` feature in [Static variables](/docs/microservices-framework/config-and-mappings/config.md#static-variables). Redaction path syntax is standard JSON object lookup.   
For example, 
```yaml title="config/default.yaml"
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: false
    hostname: true  
```
By specifying the above redaction paths, the objects which have these properties will be masked in the logs.

:::note
Please refer [Pino redaction paths](https://github.com/pinojs/pino/blob/master/docs/redaction.md#paths) for more information.
:::

** Generic convention **   
If you want to mask any field in the objects in all deep nesting levels then you can use `**.<field_name>` convention instead of specifying each path explicitly.
For example, 
```yaml title="config/default.yaml"
log:
  redact: ['**.mobileNumber'] 
```
By specifying the above redaction path, `mobileNumber` field will be redacted in logs in all nesting levels.   
   
Sample masked logs:
```json
{"Body":"args after evaluation: step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"2024-04-10T09:40:45.124Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Executing handler step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"2024-04-10T09:40:45.124Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Result of _executeFn step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"2024-04-10T09:40:45.130Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Result of _executeFn add_mobileNumber_transformation_step2 {\"request_data\":{\"payload\":{\"data\":{\"body\":{\"mobileNumber\":\"*****\"}}}}}","Timestamp":"2024-04-10T09:40:45.190Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"add_mobileNumber_transformation_step2"}}
{"Body":"this.id: hello_world, output: {\"request_data\":{\"payload\":{\"data\":{\"body\":{\"mobileNumber\":\"*****\"}}}}}","Timestamp":"2024-04-10T09:40:45.191Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"hello_world"}}
```

### Log timestamp
Different timestamp formats. Please refer [pino.stdTimeFunctions](https://github.com/pinojs/pino/blob/master/docs/api.md#pinostdtimefunctions-object) for more information. Set `log.timestamp` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
```yaml title=config/default.yaml
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: false
    hostname: false 
```
Sample Logs:
```
[14:46:00.813] INFO: [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG: Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO: [END] Load definitions
```

### Log bindings
Binds two extra properties to each log entry by default: the program's process ID (pid), and the current machine's hostname. Set `log.bindings` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
```yaml title=config/default.yaml
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: true
    hostname: true 
```
Sample Logs:
```
[14:46:00.813] INFO (16542 on HP-EliteBook-840-G3): [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG (16542 on HP-EliteBook-840-G3): Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO (16542 on HP-EliteBook-840-G3): [END] Load definitions
```

### Asynchronous/Synchronous logs
Specifies whether to do synchronous or asynchronous logging. Please refer [asynchronous logging](https://github.com/pinojs/pino/blob/master/docs/asynchronous.md) for more information. Set `log.sync` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
:::tip
It is recommented to set it to true for debugging purposes. For performance keep it false.
:::

```yaml title=config/default.yaml
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: false #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: true
    hostname: true 
```
Sample Logs:
```
[14:46:00.813] INFO (16542 on HP-EliteBook-840-G3): [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG (16542 on HP-EliteBook-840-G3): Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO (16542 on HP-EliteBook-840-G3): [END] Load definitions
```

### Custom log attributes
#### 1. For all events
You can add any custom attribute in the logs whenever any event is triggered on your service. The value for the custom identifier can be picked up from event body, params, query, or headers.   

** To enable this feature for common logging attributes across all events ,you need to specify two things: **

- `attributes`variable as at `log` level  [environment variable](/docs/microservices-framework/config-and-mappings/config.md#environment-variables) or [static variable](/docs/microservices-framework/config-and-mappings/config.md#static-variables) which contains custom identifiers.

For example, this is the sample static configuration:
```yaml
log:
  attributes: 
    mobileNumber: "query?.mobileNumber"
    id: "params?.id"
    lan: "body?.data?.lan"
    name: "headers?.name"
    gender: <% mappings.Gender %>
```

- location of the identifier in the request payload. As specified in the above example, 
  - if mobileNumber is present in query params then specify `query?.mobileNumber`.
  - if id is present in path params then specify `params?.id`.
  - if lan is present in data field inside body then specify `body?.data?.lan`.
  - if name is present in headers then specify `headers?.name`.
  - if gender is present in data field inside mappings then specify `<% mappings.Gender %>`.


:::note
Please make sure to add ? in case any field is optional like `body?.data?.lan` so that it works well with undefined values. This will add lan in the logs if it is present else it will not get added.
:::

##### Sample Logs 
- OTEL format
```json
{"Body":"Processing event /test/:id.http.post","Timestamp":"1676960742403000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"sample_app","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
{"Body":"event inputs {\"baseUrl\":\"\",\"body\":{\"data\":{\"lan\":\"12345\"}},\"fresh\":false,\"hostname\":\"localhost\",\"ip\":\"::ffff:172.22.0.1\",\"ips\":[],\"method\":\"POST\",\"originalUrl\":\"/test/12?mobileNumber=9878987898\",\"params\":{\"id\":\"12\"},\"path\":\"/test/12\",\"protocol\":\"http\",\"query\":{\"mobileNumber\":\"9878987898\"},\"route\":{\"path\":\"/test/:id\",\"stack\":[{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"fast_star\":false,\"fast_slash\":false},\"method\":\"post\"},{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"fast_star\":false,\"fast_slash\":false},\"method\":\"post\"}],\"methods\":{\"post\":true}},\"secure\":false,\"stale\":true,\"subdomains\":[],\"xhr\":false,\"headers\":{\"content-type\":\"application/json\",\"user-agent\":\"PostmanRuntime/7.29.2\",\"accept\":\"*/*\",\"postman-token\":\"9e57df7d-0a75-48b6-bc52-921bd5c045b7\",\"host\":\"localhost:4000\",\"accept-encoding\":\"gzip, deflate, br\",\"connection\":\"keep-alive\",\"content-length\":\"46\"},\"files\":[]}","Timestamp":"1676960742403000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"sample_app","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
{"Body":"event body and eventSpec exist","Timestamp":"1676960742404000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"sample_app","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
```

#### 2. At event level

You can override log attributes at event level also. You can specify customized log attributes for specific event.

:::note
This will override default custom attributes as defined in the [previous section](../telemetry/overview.md#custom-log-attributes-for-all-events).
:::

To enable this feature ,you need to specify:

- `log_attributes` on event level which contains custom identifiers

For example, this is the sample static configuration:
```yaml
log_attributes: 
  msgparameter:
    fruit: apple
  identifier: 1
```
##### Sample Logs
```json
{ Body: "return value [] 200 %o"
    Timestamp: "1688565778237000000"
    SeverityNumber: 9
    SeverityText: "INFO"
    TraceId: "3fba9b9bd5d10d00b1b730b74c8eba51"
    SpanId: "985e8a8d6a18568b"
    TraceFlags: "01"
    Resource: {
      "service.name": "sample_app",
      "host.hostname": "6295f63d9181",
      "process.pid": 13956
    }
    Attributes: {
      "event": "/postgres/user/search.http.post",
      "workflow_name": "com.biz.postgres.user.search",
      "file_name": "com.biz.postgres.user.search",
      "msgparameter": {
        "fruit": "apple"
      },
      "identifier": 1,
      "task_id": ""
    }}
```
#### 3. Custom on_error logging in workflow/tasks

In case you want to log specific attributes when an error happens in a task, set those values in `on_error.log_attributes` of that task.

For ex.

```yaml
summary: add custom error logs on workflow
id: validation_error
tasks:
  - id: error_transform
    fn: com.biz.error_log
on_error:
  log_attributes:
    error_type: "enter your custom error type here"
    error_message: "xyz value is required"
```

##### Sample logs

```json
    {Timestamp: "1688563866502000000"
    SeverityNumber: 17
    SeverityText: "ERROR"
    TraceId: "7563f0bd1e6c6508e58a4d1de1464635"
    SpanId: "c4c65132ef79982f"
    TraceFlags: "01"
    Resource: {
      "service.name": "sample_app",
      "host.hostname": "6295f63d9181",
      "process.pid": 8455
    }
    Attributes: {
      "event": "/postgres/user/search.http.post",
      "workflow_name": "com.biz.postgres.user.search",
      "file_name": "com.biz.postgres.user.search",
      "msgparameter": {
        "fruit": "apple"
      },
      "task_id": "",
      "error": {
        "error_type": "enter your custom error type here",
        "error_message": "xyz value is required"
      }
    }}
```

## Collector configuration
:::tipTo be coming soon
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1018) for more updates.
:::
