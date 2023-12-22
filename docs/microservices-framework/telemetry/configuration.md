# Configuration
### Enable observability
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

#### Install @godspeedsystems/tracing npm package
Install @godspeedsystems/tracing npm package in your Godspeed application
```
npm install @godspeedsystems/tracing
```

### OTEL exporter endpoint
Specify the IP address of your OTEL collector as env variable. Refer [OTEL Exporter](https://opentelemetry.io/docs/reference/specification/protocol/exporter/#endpoint-urls-for-otlphttp) for more information.
```
export OTEL_EXPORTER_OTLP_ENDPOINT=<IP of OTEL collector>:4317
```
For example,
```
export OTEL_EXPORTER_OTLP_ENDPOINT=http://172.17.0.1:4317
```

### OTEL service name
Specify the service name by which you want to setup observability and set it as env variable. 
```
export OTEL_SERVICE_NAME=sample_proj1
```

Let's assume you have setup SigNoz as the exporter then you will see something like this: 
![Metrics](/img/Metrics.png)
![SigNozgraph](/img/SigNoz-graph.png)
![Traces](/img/Traces.png)

> In case you have any questions, please reach out to us on our [Discord channel](https://discord.com/channels/983323669809999882/983323669809999885).
