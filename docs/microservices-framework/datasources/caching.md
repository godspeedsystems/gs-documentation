# Caching
Godspeed provides caching of the tasks using redis/mem-cache or any other custom cache. You can cache the result of any task in the workflows.   
Godspeed provides two pre-defined types of cache i.e. [redis](./datasource-plugins/Redis%20Datasource.md) and in-memory. It allows using multiple caches in a single service with a default cache. Cache datasource should implement abstract class `GSCacheAsDatasource` [code is below](#how-to-write-your-own-cache-plugin). You can make multiple caches using this abstract class.

> You can read and return from cache if data is present there, before executing any task where caching instruction is set.   
> The data is stored in form of [GSStatus](../workflows/native-language-functions.md/#gsstatus) of the executed task. Both success and failure statuses can be stored and loaded.

## Configuration
### Add pre-defined cache in Godspeed
You can use Godspeed CLI to browse and install redis/mem-cache, maintained by Godspeed.
```bash
godspeed plugin add
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ prisma-as-datastore                    │ Prisma as a datasource plugin for Godspeed Framework.                          │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯  │ redis-as-datasource                    │ redis as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ graphql-as-eventsource                 │ graphql as eventsource plugin for Godspeed Framework                           │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ mem-cache-as-datasource                │ mem-cache as datasource plugin for Godspeed Fraework Framework                 │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```
Alternatively, you can specify `redis-as-datasource` or `mem-cache-as-datasource` to add cache in your project directly.

```sh
godspeed plugin add <plugin-name>
```

Once you add the desired cache, you can find its code in `src/types/redis.ts` where you can reuse our existing plugins or have code of your own plugin.    
You can find its configuration in the `src/datasources` e.g. `redis.yaml`. All the redis database related configuration need to be set in this file. The `redis.yaml` is an instance of `type: redis`. You can have multiple instances of `type: redis` called `redis1.yaml`, `redis2.yaml` etc. 

```bash
├── api.yaml
├── redis.yaml
└── types
    ├── axios.ts
    └── redis.ts
```

### Default cache
Define default cache datasource in [static configuration](/docs/microservices-framework/config-and-mappings/config.md) in `caching` key.

```yaml
log_level: debug
defaults:
  lang: coffee
server_url: https://api.example.com:8443/v1/api
caching: <redis or mem-cache>
```

### How to use caching in your tasks

#### Using caching in Typescript/Javascript tasks
:::note
Currently caching support is not provided when you call a datasource or function/workflow from typescript code. Check this [github issue](https://github.com/godspeedsystems/gs-node-service/issues/1008) for more information.
:::
For now if you want to use cache datasource within typescript code, you need to call it like any other datasource from within a typescript code. You need to manage caching and invalidations in your code. This requires some boilerplate till the above issue is implemented.

```javascript
export default async function (ctx: GSContext, args: any) {
  const redis_client = ctx.datasources['redis'].client;
  let res: GSStatus;
  const key = 'helloworld2';

  try {
    const cached_value = await redis_client.get(key);
    if (!cached_value) {
      res = await ctx.functions['com.gs.helloworld2'](ctx, {nice: "name", ...args});
      await redis_client.set(key, JSON.stringify(res));
    } else {
      return JSON.parse(cached_value);
    } 
  } catch(ex) {
    return new GSStatus(false, 500, undefined, {message: "Internal Server Error", info: ex.message});
  }

  return res;
}
```

<!-- #### Using caching in YAML tasks
##### Caching instruction
Caching instruction has the following specifications.
```yaml
caching:
  before: # execute before the task execution
    datasource: <the name of the datasource instance to use instead of default cache>
    key: <key name which is used to read the cached result from>
    invalidate: <Key name which we want to delete/remove from cache e.g. this feature can be used in CRUD types task. While delete operation, invalidate the cache of read or update task>
  after: # execute after the task execution
    datasource: <the name of the datasource instance to use instead of default cache>
    key: <key name which is used to write the cached result>
    invalidate: <Key name which we want to delete/remove from cache e.g. this feature can be used in CRUD types task. While delete operation, invalidate the cache of read or update task>
    cache_on_failure: <true|false, whether you want to cache the failure result or not. By default, it is false>
    options:
      EX: 200 <timer in seconds, until the cached result is valid> # Can pass any of RedisOptions, if supported by the specific caching Datasource 
```
:::noteRemember
* `options` are [redis options](https://redis.io/commands/set/) supported by redis cache. mem-cache does not support these options.
* `caching.before` instruction is used to read the result from cache and gets executed before the task execution.   
* `caching.after` instruction is used to write the result in cache and gets executed after the task execution.   
* In case where the result is present and returned from the cache, `caching.after` instruction doesn't get executed for that task.
* `datasource` specified in the caching instruction overrides the [default cache datasource](#default-cache).
:::

##### Sample
Here is the caching spec to write in the workflow.
```yaml title=config/default.yaml
caching: redis
```

```yaml title=src/events/helloworld.yaml
# Events
"http.get./helloworld2":
  fn: helloworld2
"http.get./helloworld3":
  fn: helloworld3
```

```yaml title=src/functions/helloworld2.yaml
# Functions (Helloworld2 workflow)
id: helloworld2_workflow
tasks:
  - id: helloworld2_workflow_first_task
    fn: com.gs.transform
    args:
      name: helloworld2
    caching:
      after:
        key: xyz
```

```yaml title=src/functions/helloworld3.yaml
# Functions (Helloworld3 workflow)
id: helloworld3_workflow
tasks:
  - id: helloworld3_workflow_first_task
    caching:
      before:
        key: abc
        invalidate: xyz #helloworld2 key
      after:
        key: abc
        datasource: mem-cache #overrides the default cache `redis`
    fn: com.gs.transform
    args:
      name: helloworld3
``` -->

### How to write your own cache plugin
You need to implement abstract class `GSCacheAsDatasource` interface to write your own cache plugin.
```javascript
export abstract class GSCachingDataSource extends GSDataSource {
  //Redis options are available [here](https://redis.io/commands/set/) Client may or may not support all actions. RedisOptions is a superset based on what Redis supports
  public abstract set(key:string, val: any, options: RedisOptions): any; 
  public abstract get(key: string): any; //Return the value stored against the key
  public abstract del(key: string): any; //Delete the key
}

export type RedisOptions = {
  EX? : number,
  PX? : number,
  EXAT?: number,
  NX?: boolean,
  XX?: boolean,
  KEEPTTL?: boolean,
  GET?: boolean
}
```

#### Sample caching datasource implementation
This code is sourced from [mem-cache plugin](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/mem-cache-as-datasource/README.md). You can use this as a reference to make or customise your own caching implementations.

<details>
  <summary>mem-cache datasource plugin</summary>


#### Project structure
```bash
.
├── src
│   ├── datasources
│   │   ├── api.yaml
│   │   ├── mem-cache.yaml
│   │   └── types
│   │       ├── axios.ts
│   │       ├── mem-cache.ts
```

#### mem-cache config ( src/datasources/mem-cache.yaml )
```yaml
type: mem-cache
```

#### initializing client and execution ( src/datasources/types/mem-cache.ts ):
```ts
import { GSContext, GSCachingDataSource, PlainObject, logger } from "@godspeedsystems/core";

export default class DataSource extends GSCachingDataSource {
  protected async initClient(): Promise<PlainObject> {
    this.client = {};
    return this.client;
  }  

  set(key: string, val: any, options: { EX?: number | undefined; PX?: number | undefined; EXAT?: number | undefined; NX?: boolean | undefined; XX?: boolean | undefined; KEEPTTL?: boolean | undefined; GET?: boolean | undefined; }) {
    logger.debug('set key %s %o', key, this.client);
    this.client[key] = val;
  }

  get(key: string) {
    return this.client[key];
  }

  del(key: string) {
    delete this.client[key];
  }

  execute(ctx: GSContext): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
```
</details>


<!--
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0px',
      color: 'black',
      fontSize:'22px',
      padding: '5px',
      cursor: 'pointer',
    }}
   >
    {children}
  </span>
);-->