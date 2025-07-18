
# Invoking Datasource Clients from TypeScript Workflows

In Godspeed, all configured datasources can be accessed through `ctx.datasources`. 

There are two main ways to invoke datasource methods depending on your needs.

---

## Option 1: Direct Access via `client` Key

Each datasource has a `client` key to directly access its client instance. This might be:
   - A **single client instance** (e.g., Axios)
   - **Multiple service instances** (e.g., AWS services like S3, DynamoDB)
   - **Database models** (e.g., MongoDB models via Mongoose)

### Example
To access AWS S3 services directly:

```typescript
const res = await ctx.datasources.aws.client.s3.listBuckets(args);
```
---

## Option 2: Using the `execute` Method

The `execute` method is available for all datasources and is often more flexible because it leverages the plugin’s full capabilities, including:
   - **Error handling checks** and **response codes**
   - **Retries** and **caching** mechanisms (if supported by the plugin)

### **Usage**
Pass arguments directly to the `execute` method, along with a `meta` object that specifies the `entityType` and `method`:
```typescript
const res = await ctx.datasources.aws.execute(ctx, {
   ...args,
   meta: { entityType: 's3', method: 'listBuckets' }
});
```
---

### Example TypeScript Function Using Datasources

Below is a TypeScript function that demonstrates invoking both datasource clients and project functions:

```typescript
import { GSContext, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    // Example of calling another function (YAML, JS, TS) within a project:
    const helloRes = await ctx.functions['com.gs.helloworld2'](ctx, args);

    // **Option 1**: Access AWS S3 directly via the `client` key
    const s3Buckets = await ctx.datasources.aws.client.s3.listBuckets(args);

    // **Option 2**: Access AWS S3 via the `execute` method, which uses plugin capabilities
    const s3Res = await ctx.datasources.aws.execute(ctx, {
        ...args,
        meta: { entityType: 's3', method: 'listBuckets' }
    });

    // Handling response and status checks
    if (!s3Res.success) {
        return new GSStatus(false, s3Res.code || 500, 'FAiled', {
            message: "Internal Server Error",
            info: s3Res.message
        });
    }
    // Returning data in Godspeed:
    // If only data is returned (without `success` or `code` keys), the framework defaults `success` to `true` and response code to `200`.
    return s3Res;
}
```
---


