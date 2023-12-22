
# Logging

### Log level
The minimum level set to log above this level. Please refer [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options) for more information. Set `log_level` in [Static variables](/docs/microservices-framework/config-and-mappings/config.md#static-variables)

### Log fields masking
If you want to hide sensitive information in logs then define the fields which need to be hidden in `redact` feature in [Static variables](/docs/microservices-framework/config-and-mappings/config.md#static-variables). Redaction path syntax is standard JSON object lookup.   
For example, 
```yaml title="config/default.yaml"
redact: ['a.b.c', 'a.b.*', 'req.headers']
```
By specifying the above redaction paths, the objects which have these properties will be masked in the logs.

:::note
Please refer [Pino redaction paths](https://github.com/pinojs/pino/blob/master/docs/redaction.md#paths) for more information.
:::

** Generic convention **   
If you want to mask any field in the objects in all deep nesting levels then you can use `**.<field_name>` convention instead of specifying each path explicitly.
For example, 
```yaml title="config/default.yaml"
redact: ['**.mobileNumber'] 
```
By specifying the above redaction path, `mobileNumber` field will be redacted in logs in all nesting levels.   
   
Sample masked logs:
```json
{"Body":"args after evaluation: step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"1684221387896000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Executing handler step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"1684221387896000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Result of _executeFn step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"1684221387897000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Result of _executeFn add_mobileNumber_transformation_step2 {\"request_data\":{\"payload\":{\"data\":{\"body\":{\"mobileNumber\":\"*****\"}}}}}","Timestamp":"1684221387897000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"add_mobileNumber_transformation_step2"}}
{"Body":"this.id: hello_world, output: {\"request_data\":{\"payload\":{\"data\":{\"body\":{\"mobileNumber\":\"*****\"}}}}}","Timestamp":"1684221387898000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"unknown_service:node","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"hello_world"}}
```

### Log format
When observability is [enabled](/docs/microservices-framework/telemetry/configuration.md#enable-observability) i.e. OTEL_ENABLED env variable is set to true and NODE_ENV is not set to 'dev' then logs are dunped in [OTEL Logging format](https://opentelemetry.io/docs/reference/specification/logs/data-model/).

```json
{"Body":"adding body schema for /upload_doc.http.post","Timestamp":"1676531763727000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{}}
{"Body":"adding body schema for /upload_multiple_docs.http.post","Timestamp":"1676531763727000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{}}
{"Body":"adding body schema for /upload_s3.http.post","Timestamp":"1676531763727000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{}}
{"Body":"registering http handler /another_workflow post","Timestamp":"1676531763727000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{}}
{"Body":"registering http handler /create/:entity_type post","Timestamp":"1676531763728000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{}}
. . . . . . . . . . . 
{"Body":"args.retry {\"max_attempts\":3,\"type\":\"constant\",\"interval\":5000}","Timestamp":"1676531764656000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"a58ef2d7ff7725c39f1e058bf22fe724","SpanId":"751bc314bb6286b4","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","task_id":"test_step1"}}
{"Body":"Result of _executeFn test_step1 {\"success\":true,\"code\":200,\"data\":{\"args\":{},\"data\":\"{\\\"data\\\":{\\\"lan\\\":\\\"12345\\\"}}\",\"files\":{},\"form\":{},\"headers\":{\"Accept\":\"application/json, text/plain, */*\",\"Content-Length\":\"24\",\"Content-Type\":\"application/json\",\"Host\":\"httpbin.org\",\"Traceparent\":\"00-a58ef2d7ff7725c39f1e058bf22fe724-2f13e28430d61bdb-01\",\"User-Agent\":\"axios/0.25.0\",\"X-Amzn-Trace-Id\":\"Root=1-63edd835-22cff8e60555fa522c8544cf\"},\"json\":{\"data\":{\"lan\":\"12345\"}},\"method\":\"POST\",\"origin\":\"180.188.224.177\",\"url\":\"https://httpbin.org/anything\"},\"message\":\"OK\",\"headers\":{\"date\":\"Thu, 16 Feb 2023 07:16:05 GMT\",\"content-type\":\"application/json\",\"content-length\":\"598\",\"connection\":\"close\",\"server\":\"gunicorn/19.9.0\",\"access-control-allow-origin\":\"*\",\"access-control-allow-credentials\":\"true\"}}","Timestamp":"1676531765810000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"a58ef2d7ff7725c39f1e058bf22fe724","SpanId":"751bc314bb6286b4","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","task_id":"test_step1"}}
{"Body":"Validate Response JSON Schema Success","Timestamp":"1676531765811000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"a58ef2d7ff7725c39f1e058bf22fe724","SpanId":"751bc314bb6286b4","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9537a882ae58","process.pid":61741},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","task_id":""}}
```   
   
** pino pretty format **
When observability is [disabled](/docs/microservices-framework/telemetry/configuration.md#enable-observability) i.e. OTEL_ENABLED env variable is set to false or NODE_ENV is set to 'dev' then the logs are dumpde in [pino pretty format](https://www.npmjs.com/package/pino-pretty).
  
Sample Logs:
```
[11:35:05.264] INFO (17113): [START] Load definitions from /home/gurjot/data/cli-test/card91/card91/src/definitions
[11:35:05.281] DEBUG (17113): Definitions loaded and registered to ajvInstance
. . . . . . . . . . . . .
[11:35:05.282] INFO (17113): [END] Load definitions
[11:35:05.282] INFO (17113): [START] Load mappings from /home/gurjot/data/cli-test/card91/card91/src/mappings
[11:35:05.282] DEBUG (17113): Mappings {}
[11:35:05.282] INFO (17113): [END] Load mappings
[11:35:05.282] INFO (17113): [START] Load data sources from /home/gurjot/data/cli-test/card91/card91/src/datasources
[11:35:05.293] DEBUG (17113): evaluating datasource api
[11:35:05.293] DEBUG (17113): evaluated datasource api {"type":"axios","base_url":"https://httpbin.org"}
```

### Custom log attributes
#### 1. For all events
You can add any custom attribute in the logs whenever any event is triggered on your service. The value for the custom identifier can be picked up from event body, params, query, or headers.   

** To enable this feature for common logging attributes across all events ,you need to specify two things: **

- `log_attributes` variable as [environment variable](/docs/microservices-framework/config-and-mappings/config.md#environment-variables) or [static variable](/docs/microservices-framework/config-and-mappings/config.md#static-variables) which contains custom identifiers.

For example, this is the sample static configuration:
```yaml
log_attributes: 
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

#### Sample Logs 
- OTEL format
```json
{"Body":"Processing event /test/:id.http.post","Timestamp":"1676960742403000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
{"Body":"event inputs {\"baseUrl\":\"\",\"body\":{\"data\":{\"lan\":\"12345\"}},\"fresh\":false,\"hostname\":\"localhost\",\"ip\":\"::ffff:172.22.0.1\",\"ips\":[],\"method\":\"POST\",\"originalUrl\":\"/test/12?mobileNumber=9878987898\",\"params\":{\"id\":\"12\"},\"path\":\"/test/12\",\"protocol\":\"http\",\"query\":{\"mobileNumber\":\"9878987898\"},\"route\":{\"path\":\"/test/:id\",\"stack\":[{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"fast_star\":false,\"fast_slash\":false},\"method\":\"post\"},{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"fast_star\":false,\"fast_slash\":false},\"method\":\"post\"}],\"methods\":{\"post\":true}},\"secure\":false,\"stale\":true,\"subdomains\":[],\"xhr\":false,\"headers\":{\"content-type\":\"application/json\",\"user-agent\":\"PostmanRuntime/7.29.2\",\"accept\":\"*/*\",\"postman-token\":\"9e57df7d-0a75-48b6-bc52-921bd5c045b7\",\"host\":\"localhost:4000\",\"accept-encoding\":\"gzip, deflate, br\",\"connection\":\"keep-alive\",\"content-length\":\"46\"},\"files\":[]}","Timestamp":"1676960742403000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
{"Body":"event body and eventSpec exist","Timestamp":"1676960742404000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
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
#### Sample Logs
```json
{ Body: "return value [] 200 %o"
    Timestamp: "1688565778237000000"
    SeverityNumber: 9
    SeverityText: "INFO"
    TraceId: "3fba9b9bd5d10d00b1b730b74c8eba51"
    SpanId: "985e8a8d6a18568b"
    TraceFlags: "01"
    Resource: {
      "service.name": "unknown_service:node",
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

#### Sample logs

```json
    {Timestamp: "1688563866502000000"
    SeverityNumber: 17
    SeverityText: "ERROR"
    TraceId: "7563f0bd1e6c6508e58a4d1de1464635"
    SpanId: "c4c65132ef79982f"
    TraceFlags: "01"
    Resource: {
      "service.name": "unknown_service:node",
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
###  Usage of Logger Instance in Custom js/ts Functions
This feature enables developers to utilize a Logger Instance in custom js or ts functions. The Logger Instance assists in logging information, warnings, and errors during the execution of the function. The feature ensures robust logging capabilities and facilitates debugging and monitoring of the application.

** Sample code **
```
module.exports = function(args, {childLogger, promClient, tracer}) {
    for (let i = 0; i < 1000; i++) {
        childLogger.error("print log i: %s", i);
    }
    return "OK"
}
```
** Function Parameters: **

- ** args: ** Represents the arguments passed to the custom JS/TS function. Developers can use this parameter to accept input data and perform necessary computations within the function.
- ** {childLogger, promClient, tracer}: ** This object contains three properties, which are as follows:
  - ** childLogger: ** A Logger Instance that developers can use to log messages, errors, and other relevant information during the function's execution.
  - ** promClient: ** A library that provides a Prometheus client for collecting metrics and exposing them to Prometheus monitoring system.
  - **tracer: ** A library used for distributed tracing, which can be beneficial in identifying and resolving issues across microservices.