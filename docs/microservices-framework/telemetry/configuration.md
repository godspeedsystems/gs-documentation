---
sidebar_position: 1
title: Configuration
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Generic configuration
The generic configuration is applicable for all traces, logs and metrics. It is mandatory to do the generic configuration.

### OTEL enable
[Enable OTEL](../CLI.md/#otel) in your service using [Godspeed CLI](../CLI.md) by setting `OTEL_ENABLED` to true. You can alternatively set it in the `.env` file of your service. 
```
export OTEL_ENABLED=true
```

### OTEL service name
Specify the service name by which you want to setup observability. Set it as env variable or in the `.env` file of your service. 
```
export OTEL_SERVICE_NAME=sample_proj1
```

<!-- Let's assume you have setup SigNoz as the exporter then you will see something like this: 
![Metrics](/img/Metrics.png)
![SigNozgraph](/img/SigNoz-graph.png)
![Traces](/img/Traces.png) -->
