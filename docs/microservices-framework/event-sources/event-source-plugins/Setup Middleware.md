# Writing Custom Middleware in EventSource or DataSource

Godspeed's plugin architecture allows you to extend behavior by injecting **custom middleware** into your **EventSource** (e.g., Express).

This is useful for adding:  Logging, Rate limiting, Authentication, Metrics, Request/response mutation, Any side-effect logic before or after processing an api or event.


### Where Can You Add Middleware?

Middleware can be added inside:

* `src/eventsources/types/<eventsource>.ts`

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

class MyEventSource extends EventSource {
  async initClient(): Promise<PlainObject> {
    const client = await super.initClient();

    client.get('/metrics', async (req: any, res: any) => {
      try {
        let prismaMetrics: string = '';
        const prismaClient = this.datasources.schema.client;    //here schema is the name of my prisma schema file
        prismaMetrics+= await prismaClient.$metrics.prometheus();
        const expressMetrics = await promClient.register.metrics();
        res.set('Content-Type', promClient.register.contentType);
        res.end(expressMetrics + '\n' + prismaMetrics);

      } catch (err: any) {
        const error_data = err.stack || err;
        const error_code = error_data.code || 500;
        const error_message = error_data.message || error_data;
        res.status(error_code).send({ success: false, error: { code: error_code, message: error_message } });
      }
    });

    return client;
  }
}
export default MyEventSource;

```
---

### General Pattern

1. **Subclass the plugin’s `EventSource` class.**
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

### ⚠️

* If your middleware adds an endpoint like `/metrics`, ensure it **doesn't conflict with auto-registered routes** (disable via config).
* Middleware runs **on every request** unless scoped to a specific route.
* Always call `next()` in Express-style middleware unless you're sending a response directly.

