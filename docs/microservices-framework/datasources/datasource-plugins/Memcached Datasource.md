---
title: Memcached Plugin for Godspeed Framework
description: A high-performance in-memory caching plugin that enables seamless data caching and retrieval in Godspeed applications. Features include key-value storage, cache invalidation, and configurable caching strategies for optimized application performance.
keywords: [memcached, in-memory cache, caching, key-value store, godspeed plugin, performance optimization, cache invalidation, data caching, memory cache, cache management]
---

# Memcached Plugin for Godspeed

The Godspeed mem-cache plugin provides caching interfaces, allowing developers to seamlessly use in-memory cache within the Godspeed framework.

## How to add mem-cache plugin in your project

- **Create a godspeed project from the CLI and add the mem-cache plugin **

```
godspeed plugin add @godspeedsystems/plugins-mem-cache-as-datasource
```

You will find two files in your project related to the plugin at `src/datasources/types/mem-cache.ts` and `src/datasources/mem-cache.yaml`.

```yaml title=src/datasources/mem-cache.yaml
type: mem-cache
```

### Sample Usage
Create two events and two event handler workflows for each event, by the name helloworld2 and helloworld3 respectively.

### Events
```yaml
http.get./helloworld2:
 fn: helloworld2

http.get./helloworld3:
 fn: helloworld3
```
### Functions (Helloworld2 workflow)

```
id: helloworld2_workflow
tasks:
  - id: helloworld2_workflow_first_task
    fn: com.gs.transform
    args:
      name: helloworld2
    caching:
      key: xyz
      # datasource: memcache #This field should be definitely set if config/default.caching is not set. Else is optional
      # noRead: true #if this is set get(key) method will not be called for this task
      # noWrite: true #the result of this task will not be written, even if cache_on_failure is set to true. i.e. set() method will not be called
```  
### Functions (Helloworld3 workflow)
```
id: helloworld3_workflow
tasks:
  - id: helloworld3_workflow_first_task
    caching:
      key: abc
      invalidate: xyz #helloworld2 key
      # noRead: true #if this is set get(key) method will not be called for this task
      # noWrite: true #the result of this task will not be written, even if cache_on_failure is set to true. i.e. set() method will not be called
      datasource: mem-cache #This field should be definitely set if config/default.caching is not set. Else is optional
    fn: com.gs.transform
    args:
      name: helloworld3
```

## Plugin Components

The plugin consists of the following key components:

### 1. `DataSource` Class

- This class extends `GSCachingDatasource`, a base class provided by the Godspeed framework for creating data sources.

- It initializes a client which provides an object to use as in-memory cache.

- The `set` method is used to set the key and value of the cache.

- The `get` method is used to get value from the cache.

- The `del` method is used to delete value from the cache.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'DS' (data source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'mem-cache' in this case.

- `CONFIG_FILE_NAME`: In the context of a data source, this constant also serves as the data source name. In this plugin, it is set to 'mem-cache'.

### Conclusion

The Godspeed mem-cache Plugin is a valuable addition to the Godspeed framework, providing a standardized way to use in-memory cache.

We value your feedback and contributions. If you have any questions, suggestions, or encounter issues while using the plugin, please reach out to us. Your insights and ideas help us enhance and improve this plugin for the entire Godspeed community.

We're excited to see how you leverage the Godspeed mem-cache Plugin in your projects and look forward to collaborating with you to make your applications even more powerful. Happy coding!

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mem-cache-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-mem-cache-as-datasource)
