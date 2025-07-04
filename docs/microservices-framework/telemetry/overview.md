---
sidebar_position: 1
title: Observability
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Observability means to understand and analyze an application's internal state at any given time based only on the knowledge of its external outputs.

## Why you need observability?

It allows developers to have access to more accurate information about system faults in distributed environments, without additional testing and coding. The more observable a system, the more quickly and accurately you can reach out to the root cause of a problem.

An observability implementation includes a practice of collecting telemetry data such as:  
**1. Metrics**: Collecting values about known performance measurements from your applications and infrastructure you can put on dashboards or use for alerting. It helps you find out when there's a problem.  
**2. Traces**: Collecting the trace of user requests throughout the various components of your applications and infrastructure. It helps you find out where a problem happens.  
**3. Logs**: Collecting errors, warnings, and other information about events happening within applications and infrastructure. It helps you find out the cause of a problem.

## Using OpenTelemetry

[OpenTelemetry](https://opentelemetry.io/docs/), also known as OTel, is a CNCF incubating project and a vendor-neutral open source observability framework for instrumenting, generating, collecting, and exporting telemetry data i.e. traces, metrics, and logs.

Godspeed supports Application Performance Monitoring(APM) and Business Performance Monitoring(BPM) out of the box by leveraging the OpenTelemetry standard and its supporting tech ecosystem.

> Not even a single request must go untracked!

:::tip

Check out the video talks on observability with Godspeed

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

### Enable/disable observability

You can [enable/disable OTEL](../CLI.md/#otel-enabling-and-disabling-open-telemetry) in Godspeed.

<!-- ### Custom traces, logs and metrics in the workflows
You can add [custom traces, logs and metrics](./custom-metrics-logs-traces.md) in Godspeed workflows. -->

---

# Error Handling, Logging, and Observability

## Advanced Error Handler Patterns

### TypeScript Error Handler Example

```typescript
export default function (ctx: GSContext) {
  const { validation_error, event, message } = ctx.inputs.data;
  return {
    success: false,
    data: { validation_error, event, message },
    code: 400,
  };
}
```

### YAML Error Handler Example

```yaml
on_error:
  continue: false
  response:
    success: false
    code: 500
    data: "Custom error message"
```

## Using and Extending GSLogEvent

- Use `ctx.logger` and `ctx.childLogger` for structured logging.
- Add custom attributes to logs for traceability.
- Collect log events in `ctx.log_events` for advanced observability.

## OpenTelemetry Setup & Troubleshooting

- Ensure `otel` is enabled in config and endpoint is reachable.
- Use distributed tracing to correlate logs, metrics, and traces.
- Monitor for failed exports and adjust log/trace levels as needed.

## Best Practices for Observability

- Use structured logs for all business events
- Record custom metrics for key actions
- Monitor traces for performance bottlenecks
- Avoid logging sensitive data

## Cross-links

- [Context Reference](../../context.md)
- [Core Concepts](../workflows/overview.md)
