# Custom metrics, traces and logs (BPM)
You can add custom metrics, traces and logs in the workflow DSL at each task level. Once you add these BPM (Business performance metrics) then these will be available out of the box along with APM (Application performance metrics).

### DSL spec for custom metrics
You can specify custom metrics in a task by follwing the below DSL spec. Check [Prometheis metrics types](https://prometheus.io/docs/concepts/metric_types/#metric-types) to find the types of available metrics.
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
  timer: true|false(boolean) starts at the beginning of function and ends at the end of function/task
```

| metric type | function |
| ------------- | ------------- |
| counter | inc |
| gauge | inc, dec, set |
| histogram | observe, timer |
| summary | observe |

Refer [prom-client](https://www.npmjs.com/package/prom-client) to know more about the functions to be used for each metrics type.

#### Example
In the following example, we are using two custom metrics:    
**1. ** httpbin_calls_total: counter type metric, counter is incremented by 1.   
**2. ** httpbin_calls_duration: histogram type metric, timer is set to true to record duration.   

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
You can add custom trace in the function tasks. Then these custom traces will be traced along with the default [traces](./tracing.md). Check [OTel traces](https://opentelemetry.io/docs/concepts/signals/traces/) to understand more about trace, span, attributes, etc.,
```yaml
trace:
  name: span_name
  attributes:
    attribute1: value1
    attribute2: value2
```

#### Example
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
You can add custom log before and after a task in a function.
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

Please refer to [OTEL Logging Data model](https://opentelemetry.io/docs/reference/specification/logs/data-model/) for understanding of fields dumped in the logs.
> `message` and `params` are part of `Body` field and `attributes` are part of `Attributes` field in the log.

#### Example
In the following example, we are adding two additional logs before and after the task execution. 

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
```json
{"Body":"Hello [{\"key1\":\"v1\",\"key2\":\"v2\"},\"v1\"]","Timestamp":"2024-04-10T09:40:45.122Z000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"request":{"status":"Hello"},"task_id":"if","workflow_name":"if_else"}}
. . . . . . . . . . .
{"Body":"World {\"key1\":\"v1\",\"key2\":\"v2\"}","Timestamp":"2024-04-10T09:40:45.127Z000000","SeverityNumber":17,"SeverityText":"ERROR","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"customer_name":"Hell!","task_id":"if","workflow_name":"if_else"}}
``` 
