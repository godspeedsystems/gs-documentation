# Defining a Custom event Source.

## Event Source :

An event source is any entity or technology responsible for generating events or notifications when specific events or conditions occur. These events are consumed by event handlers or processors for real-time or near-real-time responses. Event sources can include Message Brokers, Webhooks etc.The settings for each datasource lies in src/eventsources directory.

### Steps to create Custom **Eventsource** :


1. Inside the `eventsources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

```
    .
    ├── src
        ├── datasources
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── custom_eventsource.ts
        |   |
        │   └── custom_eventsource.yaml
        |
        └── functions
            |
            └── helloworld.yaml


```

2. In your TypeScript file, use an import statement to bring in `GSEventSource` from the `@godspeedsystems/core` package. Then, create a class that inherits from `GSEventSource`.

3. Afterward, you can access the methods provided by `GSEventSource`. Initialize your client by calling the `initClient()` function.

4. Once your client is initialized, you can execute its subscription using the `subscribeToEvent` function.

<details>
  <summary>let's use cron as an example of eventsource :</summary>

#### Project structure

```bash
    .
    ├── src
        ├── datasources
        │
        ├── events
        |   |
        │   └── every_minute_task.yaml
        |   
        ├── eventsources
        |   |
        │   ├── types
        |   |    |
        │   |    └── cron.ts
        |   |
        │   └── cron.yaml
        |
        └── functions
            |
            └── every_minute.yaml
```

#### cron config ( src/eventsources/cron.yaml )
```yaml
type: cron
```

#### initializing client and execution ( src/eventsources/types/cron.ts ) :

```javascript
import {GSEventSource, GSCloudEvent,PlainObject, GSStatus, GSActor } from "@godspeedsystems/core";
import cron from "node-cron";

export default class EventSource extends GSEventSource {
protected initClient(): Promise<PlainObject> {
    return Promise.resolve(cron);
}
subscribeToEvent(
    eventKey: string,
    eventConfig: PlainObject,
    processEvent: (
    event: GSCloudEvent,
    eventConfig: PlainObject
    ) => Promise<GSStatus>
): Promise<void> {
    let [,schedule, timezone] = eventKey.split(".");
    let client = this.client;
    if (client) {
    try {
      client.schedule(
          schedule,
          async () => {
            const event = new GSCloudEvent(
              "id",
              eventKey,
              new Date(),
              "cron",
              "1.0",
              {},
              "cron",
              new GSActor("user"),
              {}
            );
            await processEvent(event, eventConfig);
            return Promise.resolve()
          },
          {
            timezone,
          }
        );
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
    return Promise.resolve(); 
  }
};
```



#### cron event  ( src/events/every_minute_task.yaml )

```yaml
# event for Shedule a task for evrey minute.

cron.* * * * *.Asia/Kolkata:
  fn: every_minute

```
For  cron expressions   `https://crontab.cronhub.io/`

#### cron workflow to schedule ( src/functions/every_minute.yaml )


```yaml
summary: this workflow will be running every minute
tasks:
  - id: print
    description: print for every minute
    fn: com.gs.return
    args:
      data: HELLO from CRON
```

</details>


## Datasource As EventSource :

Any kind of entity which provides read and write mechanism for data and acts as an entity responsible for generating events or notifications when specific events or conditions occur. These events are consumed by event handlers.



### Steps to create Custom **Datasource As Eventsource** :


1. To create Datasource follow [How to create Custom datasource](./../data_sources/create_your_data_source.md)

```
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── custom_datasource.ts
        |   |
        │   └── custom_datasource.yaml
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── custom_eventsource.ts
        |   |
        │   └── custom_eventsource.yaml
        |
        └── functions
            |
            └── helloworld.yaml
```

2. To create eventsource, Inside the `eventsources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

3. In your TypeScript file, use an import statement to bring in `GSEventSource` from the `@godspeedsystems/core` package. Then, create a class that inherits from `GSEventSource`.

4. Your client is initialized already in Datasource so you can execute its subscription using the `subscribeToEvent` function.

<details>
  <summary>let's use kafka as an example of an eventsource :</summary>

#### Project structure

```bash
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── kafka.ts
        |   |
        │   └── kafka.yaml
        │
        ├── events
        |   |
        │   ├── kafka_publish_event.yaml
        |   |
        |   └── kafka_consumer_event.yaml

        ├── eventsources
        │   ├── types
        │   |    └── kafka.ts
        |   |
        │   └── kafka.yaml
        |
        └── functions
            |
            ├── kafka-publish.yaml
            |
            └── kafka-consume.yaml
```


#### kafka config ( src/eventsources/kafka.yaml )
```yaml
type: kafka
groupId: "kafka_proj"
```

#### subscribeToEvent ( src/eventsources/types/Kafka.ts ) :

```javascript
import { GSCloudEvent, GSStatus, GSActor, GSDataSourceAsEventSource, PlainObject} from "@godspeedsystems/core";


export default class EventSource extends GSDataSourceAsEventSource {
  async subscribeToEvent(
    eventKey: string,
    eventConfig: PlainObject,
    processEvent: (
      event: GSCloudEvent,
      eventConfig: PlainObject
    ) => Promise<GSStatus>
  ): Promise<void> {
    const client = this.client;
    const ds = eventKey.split(".")[0];
    const groupId = eventKey.split(".")[2]
    const _topic = eventKey.split('.')[1];
    interface mesresp {
      topic: string;
      partition: number;
      message: any;
    }

    if (client) {
      const consumer = client.consumer({ groupId: groupId });
      await consumer.subscribe({
        topic: _topic,
        fromBeginning: true,
      });

      await consumer.run({
        eachMessage: async (messagePayload: mesresp) => {
          const { message } = messagePayload;
          let msgValue;
          let status;
          let data;
          try {
            msgValue = message?.value?.toString();
            data = {
              body: msgValue,
            };
            status = 200;
          } catch (ex) {
            status = 500;
            return new GSStatus(
              false,
              500,
              `Error in parsing kafka event data ${msgValue}`,
              ex
            );
          }
          const event = new GSCloudEvent(
            "id",
            `${ds}.${_topic}.${groupId}`,
            new Date(message.timestamp),
            "kafka",
            "1.0",
            data,
            "messagebus",
            new GSActor("user"),
            ""
          );
          const res = await processEvent(event, eventConfig);

          if (!res) {
            status = 500;
          } else {
            status = 200;
          }
          return res;
        },
      });
    }
  }
}
```

#### Example Event for consume ( src/events/kafka_consumer_event.yaml ) :

```yaml
kafka.publish-producer1.kafka_proj:
  id: kafka__consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json:
        schema:
          type: string

```

#### Example workflow for consumer ( src/functions/kafka-consume.yaml ) :


```yaml
id: kafka-conumer
summary: consumer
tasks:
    - id: set_con
      fn: com.gs.return
      args: <% inputs %>

```


</details>
