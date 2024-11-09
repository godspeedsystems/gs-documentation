
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
        return new GSStatus(false, s3Res.code || 500, undefined, {
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

<!-- 
## Invoking Datasource Clients from Yaml Workflows

In Godspeed, datasources can be accessed and invoked within YAML workflows using the datasource.<datasourceName>.<method> syntax. 

This approach enables you to call methods on datasources directly from YAML, making it possible to perform complex API requests or database interactions without writing additional TypeScript or JavaScript code.

### Example Yaml Workflow

```yaml
summary: "Get AI-driven response from ChatGPT"
tasks:
  - id: request_chatgpt
    fn: datasource.chatgpt.chat # calling the chat method within chatgpt datasource.
    args:           # arguments to be passed to the chat method in the datasource
      prompt: <% inputs.body.prompt %>

``` -->

