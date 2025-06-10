---
sidebar_position: 1
title: Observability Architecture
toc_min_heading_level: 2
toc_max_heading_level: 4
---


The below architecture diagram explains the implementation of observability in Godspeed.   

![arch](/img/opentelemetry.jpg)

**(a)** Traces are sent to OTEL Collector directly by the application (push based mechanism) using OTLP/gRPC [protocol](https://opentelemetry.io/docs/specs/otlp/). [Tempo](https://grafana.com/docs/tempo/latest/) is used as tracing backend for traces.   
**(b)** Metrics are scraped by the OTEL Collector from the application's `/metrics` endpoint (pull based mechanism). [Prometheus](https://prometheus.io/docs/introduction/overview/) is used as a monitoring tool for metrics with Mimir as its backend.     
**(c)** Logs are collected by a fluent bit service. Then it sends the logs to [Loki](https://grafana.com/docs/loki/latest/).   
**(d)** [Grafana Open Source](https://grafana.com/docs/grafana/latest/fundamentals/#grafana-open-source) is used for the visualization of all the telemetry data.

