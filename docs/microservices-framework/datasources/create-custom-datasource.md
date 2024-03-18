# Create a Custom Data Source

## Data Source 

Any kind of entity which provides read and write mechanism for data is considered a datasource. For example, an API, a SQL or NoSQL datastore which includes RDBMS or mongodb,postgresql, key value stores, document stores etc. The congfiguration for each datasource lies in src/datasources directory.

### Steps to create Custom Datasource


<details>
  <summary>let's use kafka as an example of an datasource :</summary>

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

#### kafka config ( src/datasources/kafka.yaml )
```yaml
type: Kafka
clientId: "kafka_proj"
brokers: ["kafka:9092"]
```

#### initializing client and execution ( src/datasources/types/Kafka.ts ) :

```javascript
import { GSContext, GSDataSource, PlainObject } from "@godspeedsystems/core";
import { Kafka } from "kafkajs";

export default class DataSource extends GSDataSource {
  protected async initClient(): Promise<PlainObject> {
    const kafka = new Kafka({
      clientId: this.config.clientId,
      brokers: this.config.brokers,
    });

    return kafka;
  }

  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
    try {
      const {
        topic,
        message,
        meta: { fnNameInWorkflow },
      } = args;
      let method = fnNameInWorkflow.split(".")[2];
      if (this.client) {
        if (method === "producer") {
          const producer = this.client.producer();
          await producer.connect();
          let result = await producer.send({
            topic: topic,
            messages: [{ value: message }],
          });
          return result;
        } else {
          return "Invalid method";
        }
      }
    } catch (error) {
      throw error;
    }
  }
}

```



#### Example Event ( src/events/kafka_publish_event.yaml ) :
```yaml
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

#### Function Example ( src/functions/kafka-publish.yaml ) :


```yaml
id: kafka-publish
summary: kafka publish message
tasks:
    - id: publish
      fn: datasource.kafka.producer
      args:
        topic: "publish-producer1"
        message: <% inputs.body.message%>

```
</details>



1. Inside the `datasources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

2. In your TypeScript file, use an import statement to bring in `GSDataSource` from the `@godspeedsystems/core` package. Then, create a class that inherits from `GSDataSource`.

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
        | 
        |
        |
        ├── eventsources
        │   
        |
        └── functions
```

3. Afterward, you can access the methods provided by `GSDataSource`. Initialize your client by calling the `initClient()` function.

4. Once your client is initialized, you can execute its methods using the `execute` function.
