---
sidebar_position: 1
title: Metrics
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Application configuration
Godspeed starts exposing [Prometheus](https://prometheus.io/docs/introduction/overview/) based application metrics at `/metrics` endpoint of the service once OTEL is [enabled](./configuration.md/#otel-enable). Currently, the framework exposes HTTP and [Prisma datasource](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md) metrics.

:::infoMetrics for custom plugins
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1016) to know how prometheus based metrics can be exposed for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.
:::

<!-- ## Collector configuration
:::tipTo be coming soon
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1018) for more updates.
::: -->
