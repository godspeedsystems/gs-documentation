---
sidebar_position: 1
title: Generic OTel Configuration
toc_min_heading_level: 2
toc_max_heading_level: 3
---

The generic configuration is applicable for all traces, logs and metrics. It must be applied to use observability in Godspeed. It includes setting up various [OTel environment variables](https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/#general-sdk-configuration) and the framework environment variables.

### Enable OTel
[Enable OTel](../CLI.md/#otel) in your service using [Godspeed CLI](../CLI.md) by setting `OTEL_ENABLED` to true. You can alternatively set it in the `.env` file of your service. 
```
export OTEL_ENABLED=true
```

### Specify the service name
Specify the service name by which you want to setup observability. Set it as env variable or in the `.env` file of your service. 
```
export OTEL_SERVICE_NAME=sample_proj1
```

<!-- Let's assume you have setup SigNoz as the exporter then you will see something like this: 
![Metrics](/img/Metrics.png)
![SigNozgraph](/img/SigNoz-graph.png)
![Traces](/img/Traces.png) -->
