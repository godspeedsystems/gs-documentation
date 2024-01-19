# Configuration

### Tracing

#### Enable observability
When observability is enabled then the application starts omitting traces, logs and metrics.

#### Set OTEL_ENABLED flag
Environment variable to enable/disable observability in Godspeed. The default value is false. Either export the variable or set it in  the .env file.
```
export OTEL_ENABLED=<boolean value>
```
For example,
```
export OTEL_ENABLED=true
```

#### Install Tracing Package
Install @godspeedsystems/tracing npm package in your Godspeed application
```
npm install @godspeedsystems/tracing
```


### Logs 
#### Change the logs format
 To change the logs format to dev or prod in godspeed. Export the `NODE_ENV` variable with desired value as shown below from terminal

 ```
 export  NODE_ENV=prod/dev
 ```

:::tip We set `NODE_ENV` to prod so that we can see OTEL Format of logging.
:::

```
export NODE_ENV=prod
```

Sample logs in prod format

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

:::tip  Similary we set `NODE_ENV` to dev so that we can see pinopretty Format of logging, for more readabilty of developer
:::


 ```
export NODE_ENV=dev
```

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

By setting NODE_ENV to prod, you'll see logs in OTEL format suitable for production environments. Conversely, setting it to dev will display logs in PrettyPrint format for better readability during development. Adjust the format based on your environment needs.

#### OTEL exporter endpoint
Specify the IP address of your OTEL collector as env variable. Refer [OTEL Exporter](https://opentelemetry.io/docs/reference/specification/protocol/exporter/#endpoint-urls-for-otlphttp) for more information.
```
export OTEL_EXPORTER_OTLP_ENDPOINT=<IP of OTEL collector>:4317
```
For example,
```
export OTEL_EXPORTER_OTLP_ENDPOINT=http://172.17.0.1:4317
```

#### OTEL service name
Specify the service name by which you want to setup observability and set it as env variable. 
```
export OTEL_SERVICE_NAME=sample_proj1
```

Let's assume you have setup SigNoz as the exporter then you will see something like this: 

### Metrics
![Metrics](/img/Metrics.png)
![SigNozgraph](/img/SigNoz-graph.png)
![Traces](/img/Traces.png)

> In case you have any questions, please reach out to us on our [Discord channel](https://discord.com/channels/983323669809999882/983323669809999885).
