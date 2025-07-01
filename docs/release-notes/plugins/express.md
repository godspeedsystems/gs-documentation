# Express Plugin Changelog

All notable changes to the `@godspeedsystems/plugins-express-as-http` plugin have been documented here

---
## v1.0.32

### [1.0.32] – 2025-07-01

### Added
- **Top-Level Error Handling for Route Stability**
  - Introduced a global `try-catch` around Express route handlers to prevent uncaught exceptions from crashing the application.
  - Logs internal errors and sends consistent HTTP `500` responses for debugging.
  - Improves resilience, especially in Kubernetes environments (avoids unnecessary pod restarts).

### No Configuration required
---

## v1.0.31

### [1.0.31] – 2025-06-19

### Added
- **Prometheus `serviceNamespace` Label**
  - All metrics emitted via the Express plugin now include:
    - `serviceName` (from `OTEL_SERVICE_NAME`)
    - `serviceNamespace` (from `OTEL_SERVICE_NAMESPACE`)
  - Default fallback: `'unknown_namespace'`
  - Supports OpenTelemetry conventions and enables namespaced service metrics.

### Configuration
Set the following environment variable:
```env
OTEL_SERVICE_NAMESPACE=your-namespace
```
Make sure to use latest version of @godspeedsystems/metrics package


## v1.0.30

### [1.0.30] – 2025-06-12

### Added
- **Dynamic Metric Configuration Support**
  Introduced support for custom Prometheus metrics configuration via the plugin’s metrics object. 
 - Support for metrics.metricsPath to define custom Prometheus endpoint path.
 - Optional override of: requestDurationBuckets requestLengthBuckets responseLengthBuckets
 - Built-in validation through validateBuckets() function.

- **Configurable Options for Prometheus metrics**
metrics.
  metricsPath – Define custom endpoint path for metrics.
  requestDurationBuckets – Customize duration histogram buckets.
  requestLengthBuckets – Configure request payload size buckets.
  responseLengthBuckets – Set response size histogram buckets.

### Example Configuration

```yaml title=http.yaml
metrics:
  metricsPath: /custom-metrics
  requestDurationBuckets: [0.2, 0.6, 1.8, 5.4]
```


### Breaking Changes to Watch

#### Metrics Path and Label Changes
If you're using Prometheus + Grafana dashboards:
 - Check if metrics endpoint path (/metrics) has changed due to the new metrics.metricsPath setting.
 - Ensure OTEL_SERVICE_NAMESPACE is set in your .env or deployment environment.
