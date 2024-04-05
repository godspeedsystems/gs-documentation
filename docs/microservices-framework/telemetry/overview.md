---
sidebar_position: 1
title: Observability
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Observability means to understand and analyze an application’s internal state at any given time based only on the knowledge of its external outputs.   

## Why you need observability?
It allows developers to have access to more accurate information about system faults in distributed environments, without additional testing and coding. The more observable a system, the more quickly and accurately you can reach out to the root cause of a problem.

An observability implementation includes a practice of collecting telemetry data such as:   
**1. Metrics**: Collecting values about known performance measurements from your applications and infrastructure you can put on dashboards or use for alerting. It helps you find out when there’s a problem.    
**2. Traces**: Collecting the trace od user requests throughout the various components of your applications and infrastructure. It helps you find out where a problem happens.   
**3. Logs**: Collecting errors, warnings, and other information about events happening within applications and infrastructure. It helps you find out the cause of a problem.    

## Using OpenTelemetry
[OpenTelemetry](https://opentelemetry.io/docs/), also known as OTel, is a CNCF incubating project and a vendor-neutral open source observability framework for instrumenting, generating, collecting, and exporting telemetry data i.e. traces, metrics, and logs.

Godspeed supports Application Performance Monitoring(APM) and Business Performance Monitoring(BPM) out of the box by leveraging the OpenTelemetry standard and its supporting tech ecosystem. 

> Not even a single request must go untracked!

:::tipCheck out the video talks on observability with Godspeed
1. [TEMPLE](https://www.youtube.com/watch?v=2BtCi72LPlM)
2. [Grafana and OTEL based observability](https://www.youtube.com/watch?v=hOKwwYdofcA)
:::

## Goals

### Auto application performance monitoring

No code APM across microservices, integrable with standard APM tools and logging backends, without any dev effort.

### Backend agnostic

Numerous open source and commercial softwares for Observability support OpenTelemetry out of the box, allowing one to switch between them if needed.

### Complete debuggability

Collect, correlate and debug signals across logs (events), traces and metrics, based on the request id and the attributes defined for the organization. For example, app version, function, DB query, K8s pod, domain, microservice etc.

## Architecture
The below architecture diagram explains the implementation of observability in Godspeed.   

![arch](/img/opentelemetry.jpg)

**a) ** Traces are sent to OTEL Collector directly by the application (push based mechanism) using OTLP/gRPC [protocol](https://opentelemetry.io/docs/specs/otlp/). [Tempo](https://grafana.com/docs/tempo/latest/) is used as tracing backend for traces.   
**b) ** Metrics are scraped by the OTEL Collector from the application's `/metrics` endpoint (pull based mechanism). [Prometheus](https://prometheus.io/docs/introduction/overview/) is used as a monitoring tool for metrics with Mimir as its backend.     
**c) ** Logs are collected by a fluent bit service. Then it sends the logs to [Loki](https://grafana.com/docs/loki/latest/).   
**d) ** [Grafana Open Source](https://grafana.com/docs/grafana/latest/fundamentals/#grafana-open-source) is used for the visualization of all the telemetry data.

## Features
Godspeed provides the following features to implement observability:

### 1. Enable/disable observability
You can [enable/disable OTel](../CLI.md/#otel) in Godspeed.

### 2. Configurations of OTel endpoints
You can [configure](./configuration.md) various OTel endpoints in Godspeed.

### 3. Add custom traces, logs and metrics in the workflows
You can add [custom traces, logs and metrics](./custom-metrics-logs-traces.md) in Godspeed workflows.
