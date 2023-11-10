# Caching
Godspeed provides caching of the tasks using redis as cache. You can cache the result of any task in the workflows. 
Caching can take various forms, including in-memory caching and the upcoming addition of Elasticsearch for caching.

:::tip **Coming soon in V2**
:::

## Specifications
### Datasource spec for redis
Define a datasource with type 'redis' in `src/datasources`. Here, redis datasource is defined in `src/datasources/redis.yaml`

```yaml
type: redis
url: redis[s]://[[username][:password]@][host][:port][/db-number]
```

### Configuration
Define default caching datasource in [static configuration](/docs/config/overview)

```yaml
log_level: debug
lang: coffee
server_url: https://api.example.com:8443/v1/api
caching: redis
```

### Workflow spec
Here is the caching spec to write in the workflow.
```yaml
caching:
    key: <key name which is used to cache result in redis>
    invalidate: <used to invalidate the cache of some other task. Key name which we want to delete/remove from cache e.g. this field can be used in CRUD types task. While delete operation, invalidate the cache of read or update task>
    cache_on_failure: <true|false, whether you want to cache the failure result or not. By default, it is false>
    expires: <timer in seconds, until the cached result is valid>
    force: <true|false, force flag to specify not to use cache, always trigger task's function. Set it to true if you don't want to use cache>
```

**Example Spec**
```yaml
summary: workflow to cache task results
id: cache_wf
tasks:
  - id: cache_step1
    caching:
      key: cache_step1
      invalidate: cache_step2
      cache_on_failure : false
      expires: 60
      force: false
    fn: datasource.api.post./anything
    args:
        data:
          name: 'hello'
  - id: cache_step2
    caching:
      key: cache_step2
      cache_on_failure : false
      expires: 60
      force: false
    fn: datasource.api.post./anything
    args:
        data:
          name: 'cache'
 
```

- When the workflow is triggered for the first time, then the result of the two tasks are cached in DB with keys `cache_step1` and `cache_step2` for 60 seconds.
- If the next call to this workflow occurs within 60 seconds then the cached results will be used, else API call will be triggered.
- In the `cache_step1`, invaldiate spec is defined, which is invalidating/deleting the cached result of the `cache_step2`. It means even if `cache_step2` is cached, if any calls occurs within 60 seconds then the `cache_step1` will delete the cached result of `cache_step2`. So, no cache will be used for `cache_step2`.

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