---
title: OTEL CLI – Enabling Observability
---

# OTEL CLI – Enabling Observability

CLI provides `otel` command to enable/disable observability in Godspeed.
```bash
$ godspeed help otel
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Usage: Godspeed CLI otel [options] [command]

enable/disable Observability in Godspeed.

Options:
  -h, --help      display help for command

Commands:
  enable          enable Observability in project.
  disable         disable Observability in project.
  help [command]  display help for command

For detailed documentation visit https://godspeed.systems
```

## `otel enable`
The `godspeed otel enable` command allows the user to enable [observability](../telemetry/overview.md) in Godspeed to collect traces, metrics and logs.    

```bash
$ godspeed otel enable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel installed successfully!
Observability has been enabled
```

The above command performs these two functions:

### A. Installs `@godspeedsystems/tracing` package
This package includes auto-instrumentation of the following plugins to collect traces:   

**1.** [http](https://nodejs.org/api/http.html) and [https](https://nodejs.org/api/https.html) requests.   
**2.** [Prisma datasource plugin](../datasources/datasource-plugins/Prisma%20Datasource.md).

### B. Sets OTEL_ENABLED env variable to true
By setting `OTEL_ENABLED` to true, the following actions are performed:  

**1. Traces**: starts the auto-instrumentation of traces present in the `@godspeedsystems/tracing` package.   
**2. Metrics**: starts exposing application metrics at `/metrics` endpoint of the service. Currently, the framework exposes HTTP and [Prisma datasource](../datasources/datasource-plugins/Prisma%20Datasource.md) metrics.    
**3. Logs**: starts dumping the service logs in [OTEL log format](../telemetry/logging.md/#log-format) in console provided NODE_ENV is not equal to 'dev'

:::info
Telemetry data for custom plugins

Follow this [Github issue](https://github.com/godspeedsystems/gs-tracing/issues/2) to know how auto-instrumentation can be enabled for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.   
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1016) to know how prometheus based metrics can be exposed for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.
:::

## `otel disable`
The `godspeed otel disable` command allows the user to disable [observability](../telemetry/overview.md) in Godspeed.    
```bash
$ godspeed otel disable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel uninstalled successfully!
Observability has been disabled in the project
```

The above command performs these two functions:
### A. Uninstalls `@godspeedsystems/tracing` package from your service.
### B. Sets OTEL_ENABLED env variable to false
Setting `OTEL_ENABLED` to false stops all the actions performed in [otel enable](#b-sets-otel_enabled-env-variable-to-true) command   