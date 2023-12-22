# Custom metrics, traces and logs (BPM)
Custom metrics, traces and logs can be added in the workflow DSL at each task level then these will be available out of the box along with APM.

### DSL spec for custom metrics

#### refer https://github.com/siimon/prom-client
```yaml
metrics:
- name: metric_name
  type: counter|gauge|histogram|summary
  labels: 
    label1: val1
    label2: val2
          
  # following functions depending on the metric type and all of them could be scripts, can use inputs/outputs
  inc: 10
  dec: 10
  set: 100
  observe: 2000
  timer: true|false(boolean) starts at the beginning of workflow/task and ends at the end of workflow/task
```

#### Example spec
In the following example, we are using two custom metrics: 
- httpbin_calls_total: counter type metric, counter is incremented by 1.
- httpbin_calls_duration: histogram type metric, timer is set to true to record duration.

```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: datasource.api.post./anything       
      metrics:
        - name: httpbin_calls_total
          help: 'httpbin_calls_total counter of httpbin requests labeled with: method, status_code'
          type: counter
          labels:
            method: httpbin
            status_code: <% outputs.httpbin_step1.code %>               
          inc: 1
        - name: httpbin_calls_duration
          help: 'httpbin_calls_duration duration histogram of httpbin responses labeled with: method, status_code'
          type: histogram
          labels:
            method: httpbin
            status_code: <% outputs.httpbin_step1.code %>               
          timer: true          
      args:
        params: <% inputs.query %>
        data: <% inputs.body %>
```

### DSL spec for custom trace
```
trace:
    name: span_name
    attributes:
        attribute1: value1
        attribute2: value2
```

#### Example spec
In the following example, we are creating a new span named `httpbin_trace` with span attributes `request` and `param`. This span gets created when the task starts and ended when the task completes its execution.

```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: datasource.api.post./anything
      trace:
        name: httpbin_trace
        attributes:
            request: <%inputs.body%>
            param: <%inputs.query%>
      args:
        params: <% inputs.query %>
        data: <% inputs.body %>
```

### DSL spec for custom logs

If you want generate a log before or after a task.

```yaml
logs:
    before:
        level: fatal|error|warn|info|debug|trace # refer pino for levels
        message: 'Sample log before'
        params: 
          param1: val1
          param2: val2
        attributes:
          request:
            query: <%inputs.query%>
    after:
        level: info
        message: 'Sample log after'
        params:
        attributes: 
```

The logs are dumped in OTEL format. Please refer to [OTEL Logging Data model](#https://opentelemetry.io/docs/reference/specification/logs/data-model/) for understanding of fields dumped in the logs.
> `message` and `params` are part of `Body` field and `attributes` are part of `Attributes` field in the log.

#### Example spec
In the following example, we are two additional logs before and after the task execution. 

```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: datasource.api.post./anything
      logs:
        before:
          level: error
          message: 'Hello'
          params: 
            - key1: v1
              key2: v2
            - v1
          attributes: 
            request: <%inputs.query%>
        after:
          level: error
          message: 'World'
          params: 
            key1: v1
            key2: v2
          attributes: 
            customer_name: <% outputs.httpbin_step1.data.json.customer_name %> 
      args:
        params: <% inputs.query %>
        data: <% inputs.body %>
```

** Sample Logs **  
```
{"Body":"Hello [{\"key1\":\"v1\",\"key2\":\"v2\"},\"v1\"]","Timestamp":"1676011973016000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"request":{"status":"Hello"},"task_id":"if","workflow_name":"if_else"}}
. . . . . . . . . . .
{"Body":"World {\"key1\":\"v1\",\"key2\":\"v2\"}","Timestamp":"1676011973019000000","SeverityNumber":17,"SeverityText":"ERROR","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"customer_name":"Hell!","task_id":"if","workflow_name":"if_else"}}
``` 

## Observability Stack
The complete observability stack with K8s helm-charts will be made available soon.

<!-- ## Recommended model for telemetry signals

Please find the [draft documentation here](https://docs.google.com/document/d/12V0oaqj81G8nDuCeD46_mHovv6uwaguwd4kVpBC2J6Q/edit#heading=h.zerkjmn66eyq). This is compiled in one place from various references across the OpenTelemetry documentation. This may require works by the DevOps team as well e.g. K8s related attributes. -->

