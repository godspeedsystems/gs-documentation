Kafka is a versatile messaging system designed to securely transfer data between various systems. Its functionality can be tailored through configuration, allowing it to serve as a reliable conduit for real-time event tracking or even function as a replicated distributed database. While it's often colloquially labeled as a queue, it's more precisely described as a hybrid system that combines characteristics and trade-offs from both queue and database systems.

A brief description of how to use Kafka plug-in in our godspeed framework as Data Source as Event Source. 

### How to Add
- Open a godspeed project and add the plugin using cli:
```
  godspeed plugin add @godspeedsystems/plugins-kafka-as-datasource-as-eventsource
```

### Example usage Datasource (Producer):

#### Update configuration file based on your requirements in `src/datasources/kafka.yaml`

kafka config ( src/datasources/kafka.yaml )
```yaml
type: kafka
clientId: "kafka_proj"
brokers: ["kafka:9092"]
```

#### Define kafka event for Producer ( src/events/kafka_pub.yaml )
In the event, we establish an HTTP endpoint that accepts parameters such as the topic name and message content. When this endpoint is invoked, it triggers the `datasource.kafka.producer` function. This function, in turn, takes the provided topic name and message as input arguments and performs the task of publishing the message to the specified Kafka topic.
```yaml
# event to Publish

http.post./kafka-pub:
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

```
<!-- #### kafka workflow for Producer ( src/functions/kafka-publish.yaml )

In workflow we need to mension `datasource.kafka.producer` as function (fn) to produce data.

```yaml
id: kafka-publish
summary: kafka publish message
tasks:
    - id: publish
      fn: datasource.kafka.producer
      args:
        topic: "publish-producer1"
        message: <% inputs.body.message %>
``` -->
#### kafka workflow for Producer ( src/functions/kafka-publish.ts )

```ts
import { GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
 /**
  * Kafka producer function - publishes message from request body to a Kafka topic
 */
export default async function (ctx: GSContext, args: PlainObject): Promise<GSStatus> {
  const { datasources, inputs, logger } = ctx;
  const { message } = inputs.data.body;

  if (!message) {
    return new GSStatus(false, 400, undefined, undefined, "Message is required");
  }

  const kafkaProducer = datasources.kafka?.producer;

  if (typeof kafkaProducer !== "function") {
    return new GSStatus(false, 500, undefined, undefined, "Kafka producer function not found");
  }

  try {
    const result = await kafkaProducer({
      topic: "publish-producer1",
      message
    });

    logger.info("Kafka message published successfully: %o", result);

    return new GSStatus(true, 200, undefined, "Message published to Kafka");
  } catch (err) {
    logger.error("Kafka publish failed: %o", err);
    return new GSStatus(false, 500, undefined, undefined, "Failed to publish to Kafka");
  }
}
```
### Example usage EventSource (Consumer):

Update configuration file based on your requirements in `Eventsources/kafka.yaml`.

#### kafka config ( kafka.yaml )
```yaml
type: kafka
groupId: "kafka_proj"
```

#### kafka event for consumer (src/events/kafka_pub.yaml)

To use Consumer we need to follow the below event key format.

```
 kafka.{Topic}.{GroupId}
```
The consumer event is triggered whenever a new message arrives on the specified topic. Upon triggering, it retrieves the incoming message and forwards it to the `kafka_consume` function. Inside this function, the incoming message is processed, and the result is then returned.

``` yaml
# event to consume data from Topic
kafka.publish-producer1.kafka_proj:   # event key
  id: kafka_consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json: 
        schema:
          type: string
```
#### kafka workflow for Consumer ( src/functions/kafka_consume.ts )
```ts
import { GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
/**
 * Kafka consumer function - returns the consumed Kafka message
 */
export default function (ctx: GSContext, args: PlainObject): GSStatus {
  const { inputs } = ctx;

  return new GSStatus(true, 200, undefined, inputs.data);
}
```
<!-- ####  yaml workflow for Consumer ( src/functions/kafka_consume.yaml )
```yaml
# function to consume data
id: kafka-consumer
summary: consumer
tasks:
    - id: set_consumer
      fn: com.gs.return
      args: <% inputs %>
``` -->

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

