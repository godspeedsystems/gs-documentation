---
title: Redis Datasource Plugin
description: A high-performance Redis integration plugin that enables fast caching, real-time data operations, and key-value storage in Godspeed applications. Features include seamless Redis operations, error handling, and support for common Redis commands.
keywords: [redis, key-value store, caching, real-time data, in-memory database, godspeed plugin, data storage, performance optimization, redis operations, data retrieval]
---

**[Link to Plugin Source Code](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/redis-as-datasource)** 

Elevate your data game with the speed and efficiency of Redis. Use it as a powerhouse for caching, real-time analytics, and lightning-fast data retrieval. Embrace the key-value magic to supercharge your application's performance.

The Godspeed Redis Plugin provides integration with Redis, allowing developers to seamlessly interact with Redis databases within the Godspeed framework. This plugin simplifies the process of working with Redis data, providing a standardized way to perform common Redis operations.

You can use redis datasource in caching also. Check [caching](../caching.md) for more information.

### How to Add plugin
Create a godspeed project from the CLI, open the created project in vscode and then add the plugin:

```
godspeed plugin add @godspeedsystems/plugins-redis-as-datasource
```

You will find the files in your project related to the Redis plugin at `src/datasources/types/redis.ts` and `src/datasources/redis.yaml`.


### 1. redis config
```yaml title=src/datasources/redis.yaml
type: redis
url: redis://alice:foobared@awesome.redis.server:6380

```
Configure your Redis data source with connection string. 

### 2. Get a Value
function to get a value from redis.

```
import { GSContext, GSStatus, GSDataSource } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: { key: string }) {
  const ds: GSDataSource = ctx.datasources.redis;

  const response = await ds.execute(ctx, {
    ...args,
    meta: {
      fnNameInWorkflow: 'datasource.redis.get'
    }
  });

  return response instanceof GSStatus ? response : new GSStatus(true, 200, 'Value retrieved', response);
}

```

### 3. Set a Value
function to set a value in redis.

```
import { GSContext, GSStatus, GSDataSource } from "@godspeedsystems/core";

export default async function (
  ctx: GSContext,
  args: { key: string; value: string }
) {
  const ds: GSDataSource = ctx.datasources.redis;

  const response = await ds.execute(ctx, {
    ...args,
    meta: {
      fnNameInWorkflow: 'datasource.redis.set'
    }
  });

  return response instanceof GSStatus ? response : new GSStatus(true, 200, 'Value set', response);
}

```

## How it helps

The Godspeed Redis Plugin offers the following benefits:

** 1. Redis Integration:** The plugin abstracts away the complexities of setting up a Redis client, making it effortless to connect to Redis databases and perform operations.

**2. Unified Data Source:** Developers can use a uniform API to define data sources that interact with Redis. This enhances consistency and ease of use across different parts of the application.

**3. Error Handling:** The plugin includes robust error handling, allowing developers to gracefully handle scenarios such as connection issues, key not found, and other Redis-related errors.

**4. Integration with Godspeed Core:** The plugin seamlessly integrates with the Godspeed Core library, aligning with the principles of the Godspeed framework and enabling streamlined event-driven functions.

## Plugin Components

:::info
You can deep dive into the plugin code [here](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/redis-as-datasource)
:::

The plugin consists of the following key components:
### 1. `DataSource` Class
- This class extends `GSDataSource` a base class provided by the Godspeed framework for creating data sources.
- It initializes a Redis client to interact with Redis databases based on the provided configuration options.

- The `execute` method is used to define how the plugin should perform Redis operations. It maps incoming parameters to Redis commands, processes the operation, and handles various response scenarios.

### 2. Constants
- `SourceType`: A constant representing the source type of the plugin, which is 'DS' (data source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'redis' in this case.

- `CONFIG_FILE_NAME`: In the context of a data source, this constant also serves as the data source name. In this plugin, it is set to 'redis'.

- `DEFAULT_CONFIG`: A default configuration object with Redis options like host, port, and other settings.


## Conclusion

The Godspeed Redis Plugin is a valuable addition to the Godspeed framework, providing a standardized way to interact with Redis databases. With this plugin, you can effortlessly perform Redis operations, handle responses, and streamline data storage within your applications.

We value your feedback and contributions. If you have any questions, suggestions, or encounter issues while using the plugin, please reach out to us. Your insights and ideas help us enhance and improve this plugin for the entire Godspeed community.

We're excited to see how you leverage the Godspeed Redis Plugin in your projects and look forward to collaborating with you to make your applications even more powerful. Happy coding!

## Reference links
**-** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/redis-as-datasource)   
**-** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**-** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-redis-as-datasource)