---
sidebar_position: 3
title: 8.9 Redis as datasource
---

# Introduction
The framework supports Redis as a datasource. It helps to utilize redis in different ways.

## 8.9.1 Example spec
The datasources for Redis are defined in `src/datasources`. Here, Redis datasource is defined in `redis.yaml`.

```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── redis.yaml
    ├── events
    ├── functions
    └── mappings
```

Sample configuration in `redis.yaml`
```
type: redis
url: redis[s]://[[username][:password]@][host][:port][/db-number]
```
For full redis configuration, Refer [redis node client documentation](https://github.com/redis/node-redis/blob/master/docs/client-configuration.md).

`redis-as-datasource` also support connecting to cluster mode. Here is a sample redis datasource for cluster mode.
```
type: redis
cluster:
    rootNodes:
        - url: redis://10.0.0.1:30001
        - url: redis://10.0.0.2:30002

```
For full redis configuration, Refer [redis cluster mode documentation](https://github.com/redis/node-redis/blob/master/docs/clustering.md).