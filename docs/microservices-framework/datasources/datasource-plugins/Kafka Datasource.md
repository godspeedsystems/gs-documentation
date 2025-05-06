---
title: Kafka Plugin for Godspeed Framework - Datasource and Eventsource
description: A powerful messaging system plugin that enables real-time event streaming, secure data transfer, and distributed messaging in Godspeed applications. Features include producer/consumer functionality, configurable topics, and seamless event handling.
keywords: [kafka, event streaming, messaging system, producer consumer, godspeed plugin, real-time events, distributed messaging, event sourcing, message queue, data streaming]
---

# Kafka Plugin for Godspeed

Kafka is a versatile messaging system designed to securely transfer data between various systems. Its functionality can be tailored through configuration, allowing it to serve as a reliable conduit for real-time event tracking or even function as a replicated distributed database. While it's often colloquially labeled as a queue, it's more precisely described as a hybrid system that combines characteristics and trade-offs from both queue and database systems.

## Steps to use kafka plugin in godspeed

### Install Kafka Plugin
```
godspeed plugin add @godspeedsystems/plugins-kafka-as-datasource-as-eventsource
```
### Related files

After installation, you will find auto-generated files in your project related to the plugin at `src/datasources/types/kafka.ts` and `src/datasources/kafka.yaml`and `src/eventsources/types/kafka.ts` and `src/datasources/kafka.yaml`.

### Use as Datasource (Producer)

**1.** Update configuration file based on your requirements in `src/datasources/kafka.yaml` file.

```yaml title=src/datasources/kafka.yaml
type: kafka 
clientId: "kafka_proj"
brokers: ["kafka:9092"]
```

**2.** In the event, we establish an HTTP endpoint that accepts parameters such as the topic name and message content. When this endpoint is invoked, it triggers the `datasource.kafka.producer` function. This function, in turn, takes the provided topic name and message as input arguments and performs the task of publishing the message to the specified Kafka topic.
```yaml title=src/events/kafka_pub.yaml
# event for Publish
'http.post./kafka-pub':
  fn: kafka-publish
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            message:
              type: string
          required: ['message']
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
            properties:
              name:
                type: string
```

**3. ** In workflow we need to mension `datasource.kafka.producer` as function `fn` to produce data.
```yaml title=src/functions/kafka-publish.yaml
id: kafka-publish
summary: kafka publish message
tasks:
    - id: publish
      fn: datasource.kafka.producer
      args:
        topic: "publish-producer1"
        message: <% inputs.body.message%>
```

### Use as EventSource (Consumer)
**1. ** Update configuration file based on your requirements in `src/eventsources/kafka.yaml`.
```yaml title=src/eventsources/kafka.yaml
type: kafka
groupId: "kafka_proj"

```

**2. ** To use Consumer we need to follow the below event key format.
```yaml title=src/events/kafka_pub.yaml
kafka.{Topic}.{GroupId}: 
```
The consumer event is triggered whenever a new message arrives on the specified topic. Upon triggering, it retrieves the incoming message and forwards it to the `kafka_consume` function. Inside this function, the incoming message is processed, and the result is then returned.

``` yaml title=src/events/kafka_pub.yaml
# event for consume data from Topic
kafka.publish-producer1.kafka_proj: // event key
  id: kafka__consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json: 
        schema:
          type: string
```
**3. ** kafka workflow for consumer
``` title=src/functions/kafka_consume.yaml
# function for consume data
id: kafka-consumer
summary: consumer
tasks:
    - id: set_consumer
      fn: com.gs.return
      args: <% inputs %>
```

## Project Structure:

After implementing Kafka plugin, your project structure will look like this:

```
.
├── src
│   ├── datasources
│   │   ├── types
│   │   │    └── kafka.ts                    # Custom datasource logic
│   │   └── kafka.yaml                       # Datasource configuration
│   ├── events
│   │   ├── kafka_publish_event.yaml         # Event to trigger the Kafka publish
│   │   └── kafka_consumer_event.yaml        # Event to trigger the Kafka consume
│   ├── eventsources
│   │   └── kafka.yaml                       # Eventsource configuration
│   └── functions
│       ├── kafka-publish.yaml               # Workflow to publish message
│       └── kafka-consume.yaml               # Workflow to consume message
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)
