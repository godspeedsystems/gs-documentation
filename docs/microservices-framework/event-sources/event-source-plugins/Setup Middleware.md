# Writing Custom Middleware in EventSource or DataSource

Godspeed's plugin architecture allows you to extend behavior by injecting **custom middleware** into your **EventSource** (e.g., Express) or **DataSource** (e.g., Axios, Prisma) implementations.

This is useful for adding:  Logging, Rate limiting, Authentication, Metrics, Request/response mutation, Any side-effect logic before or after processing an event.


### Where Can You Add Middleware?

Middleware can be added inside:

* `src/eventsources/types/<eventsource>.ts`
* `src/datasources/types/<datasource>.ts`

You typically do this by **subclassing the base plugin** and injecting middleware in the `initClient()` method.

---

### Example: Adding Middleware in Express EventSource

Here’s how to add a middleware that:

* Overrides the `/metrics` endpoint
* Combines Express metrics with Prisma metrics

#### File: `src/eventsources/types/express.ts`

```ts
import { PlainObject } from "@godspeedsystems/core";
import { EventSource } from "@godspeedsystems/plugins-express-as-http";
import promClient from '@godspeedsystems/metrics';
import { PrismaClient } from "../../datasources/prisma-clients/schema";

class MyEventSource extends EventSource {
  async initClient(): Promise<PlainObject> {
    const client = await super.initClient();

    // Add your custom middleware here
    client.get('/metrics', async (req, res) => {
      try {
        const expressMetrics = await promClient.register.metrics();
        const prismaMetrics = await new PrismaClient().$metrics.prometheus();
        res.set('Content-Type', promClient.register.contentType);
        res.end(`${expressMetrics}\n${prismaMetrics}`);
      } catch (err: any) {
        res.status(500).send({ error: err.message });
      }
    });

    return client;
  }
  // (Optional) override setupMetrics to disable default `/metrics` middleware
  setupMetrics(app: any) {
    promClient.collectDefaultMetrics(); // only collects, doesn't auto-bind endpoint
  }
}
export default MyEventSource;
```

---

### General Pattern

1. **Subclass the plugin’s `EventSource` or `DataSource` class.**
2. **Override `initClient()` to gain access to the underlying client (e.g., `express()` app, PrismaClient, Axios instance).**
3. **Inject your middleware using standard APIs** (e.g., `app.use()`, `app.get()`, or interceptors for Axios).

---

### Example Use Cases

#### Logging Every Request

```ts
client.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});
```

#### Injecting Custom Headers

```ts
client.use((req, res, next) => {
  res.set('X-Godspeed-Version', 'v2.0.0');
  next();
});
```

#### Protecting a Route

```ts
client.get('/admin', (req, res, next) => {
  if (!req.headers['x-admin-token']) {
    return res.status(403).send("Forbidden");
  }
  next();
}, handler);
```

---

### Middleware in DataSources

For data sources like **Axios**, you can inject middleware using interceptors:

```ts
client.interceptors.request.use((config) => {
  config.headers['x-trace-id'] = generateTraceId();
  return config;
});
```

In Prisma, you can write your own `$use()` hooks inside the `PrismaClient` constructor if needed.

---

### ⚠️

* If your middleware adds an endpoint like `/metrics`, ensure it **doesn't conflict with auto-registered routes** (disable via config).
* Middleware runs **on every request** unless scoped to a specific route.
* Always call `next()` in Express-style middleware unless you're sending a response directly.

This gives you full flexibility to extend the behavior of any plugin using standard TypeScript logic.

