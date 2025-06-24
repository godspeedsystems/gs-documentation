---
sidebar_position: 1
title: Metrics
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Godspeed supports **Prometheus-based metrics** out of the box. These metrics help you monitor the performance and behavior of your services, including request rates, latencies, and Prisma database query statistics.

### When Are Metrics Available?

Metrics are exposed automatically at the `/metrics` endpoint **once OpenTelemetry (OTEL) is enabled**.

To enable metrics:

```env
OTEL_ENABLED=true
```
---

### Default Behavior

When OTEL is enabled:

* The `/metrics` endpoint is registered by default.
* It exposes:
  * **HTTP request metrics** (via the Express plugin)
  * **Prisma datasource metrics** (if configured)

---

### How to Customize Metrics Behavior

You can customize metric collection in your HTTP event source (`http.yaml`) like so:

```yaml
type: express
port: 3000
metrics:

  metricsPath: '/metrics'          
  requestDurationBuckets: [0.2, 0.5, 1, 1.5, 2, 2.5] # Opttional: Custom latency buckets (in seconds)
  requestLengthBuckets: [128, 256, 512, 1024]   # Optional: Track incoming request sizes
  responseLengthBuckets: [256, 512, 1024, 2048] # Optional: Track outgoing response sizes
```

### Overriding `/metrics` Endpoint (Optional)

If you want full control (e.g., to combine multiple metrics like HTTP + multiple Prisma clients), you can disable the default metrics route and define your own:

#### 1. In `http.yaml`:

```yaml
metrics:
  metricsPath: '/custom-metrics'

```

#### 2. In your `express.ts` event source:

```ts
client.get('/metrics', async (req, res) => {
        let prismaMetrics: string = '';
        const prismaClient = this.datasources.schema.client;    //here schema is the name of my prisma schema file
        prismaMetrics+= await prismaClient.$metrics.prometheus();
        const expressMetrics = await promClient.register.metrics();
        res.set('Content-Type', promClient.register.contentType);
        res.end(expressMetrics + '\n' + prismaMetrics);
});
```

### What Metrics Are Available?

#### HTTP Metrics (via Express)

Automatically exposed when OTEL is enabled:

* `http_requests_total`
* `http_request_duration_seconds`
* `http_request_size_bytes`
* `http_response_size_bytes`

These metrics include labels like `method`, `route`, and `status_code`.

#### Prisma Metrics (via `$metrics.prometheus()`)

If you have registered prisma metrics manually by setting upa middleware, then, you get:

* `prisma_client_queries_total`
* `prisma_client_queries_active`
* `prisma_client_queries_wait`
* ...and more depending on your query workload


### Testing Metrics

Once your app is running with OTEL enabled:

```bash
curl http://localhost:3000/metrics
```

You should see all registered Prometheus metrics.

> Use tools like **Prometheus**, **Grafana**, or **Datadog** to scrape and visualize this data.

---

### Example Output Snippet

```
# HELP http_request_duration_seconds Duration of HTTP requests
# TYPE http_request_duration_seconds histogram
http_request_duration_seconds_bucket{method="GET",route="/helloworld",status_code="200",le="1"} 10

# HELP prisma_client_queries_total Total number of Prisma client queries executed
# TYPE prisma_client_queries_total counter
prisma_client_queries_total{datasource="main"} 1023
```

---

## Summary

With a few lines of configuration, Godspeed enables robust Prometheus-based observability:

* **Plug-and-play setup with OTEL**
* **Customizable bucket metrics for request profiling**
* **Flexible override of the default `/metrics` endpoint**

> Start observing, debugging, and scaling your services with real-time insights today!

---

:::info

Metrics for custom plugins

Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1016) to know how prometheus based metrics can be exposed for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.
:::

<!-- ## Collector configuration
:::tipTo be coming soon
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1018) for more updates.
::: -->
