---
sidebar_position: 3
title: 8.10 RabbitMQ as datasource
---

# Introduction

The framework supports RabbitMQ as a messaging broker, acting as an intermediary for messaging. It provides a common platform for applications to send and receive messages and ensures that messages are securely stored until they are received, similar to Kafka.

## 8.10.1 Example spec
The datasources for RabbitMQ are defined in `src/datasources`.  Here, RabbitMQ datasource is defined in `rabbitmq.yaml`.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── rabbitmq.yaml
    │   
    ├── events
    ├── functions
    └── mappings
```

Sample configuration in `rabbitmq.yaml`
```
type: rabbitmq
config:
   connectionString: amqp://guest:guest@host.docker.internal:5672 
   exchange: TestOne
   routingKey: TestQueueOne_key
retryCount: 3
loadFn: com.gs.rabbitmq.loader
executeFn: com.gs.rabbitmq.publish
```