---
sidebar_position: 1
title: Traces
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Traces are sent to OTEL Collector directly by the application (push based mechanism) using OTLP/gRPC [protocol](https://opentelemetry.io/docs/specs/otlp/) as explained in the [architecture](./overview.md/#architecture).

## Application configuration

### OTEL_EXPORTER_OTLP_ENDPOINT
Specify the IP address of your OTEL collector as `OTEL_EXPORTER_OTLP_ENDPOINT` env variable. Refer [OTEL Exporter](https://opentelemetry.io/docs/reference/specification/protocol/exporter/#endpoint-urls-for-otlphttp) for more information.
```
export OTEL_EXPORTER_OTLP_ENDPOINT=<IP of OTEL collector>:4317
```
For example,
```
export OTEL_EXPORTER_OTLP_ENDPOINT=http://172.17.0.1:4317
```

<!-- ## Collector configuration
:::tipTo be coming soon
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1018) for more updates.
:::  -->
