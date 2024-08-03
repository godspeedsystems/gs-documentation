# Data Sources
## Overview

Data sources play a central role in the Godspeed Framework, serving as the origins or locations from which data can be collected and stored. This documentation provides an overview of data sources within the framework, their usage, and how to invoke them from within workflow tasks.

In the Godspeed Framework, data sources are fundamental components that enable users to access and manipulate data from various origins. Examples of data sources include databases,message bus, cache, file systems, and third-party APIs.

Data sources can be seamlessly integrated into your workflow tasks using a standardized syntax. The key element for invoking data sources is the fn attribute, which is namespaced under datasource. Here's an example of how data sources are used within a workflow task:

### Demonstration

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/NsH9hLCL92Y" frameBorder="0" allowFullScreen></iframe>
</div>

## Data source types

Data sources can be divided into two types, Datastore as datasource and API as a datasource


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704478971/Screenshot_from_2024-01-05_23-52-33_e8ihnh.png" alt="event types" />


Example 1: Datastore as Datasource [prisma-as-datastore](/docs/microservices-framework/datasources/list-of-plugins#1-prisma-as-datasource)

```yaml
id: workflow_1
description: This workflow will fetch the user with userId from the mongo database
tasks:
  - id: task_1
    fn: datasource.mongo.User.findOne
    args:
      where:
        userId: <% inputs.params.userId %>
```


In this example:

`datasource.mongo.User.findOne` is the datasource function, which can be described as below:

  - `datasource`: fixed namespace for all data sources
  - `mongo`: name of data source,this can be any data base that you select can checkout [database list](/docs/getting-started/advance-guide#prisma-supports-wide-range-of-databases)
  - `User`: entity name
  - `findOne`: method to be invoked in entity name

the workflow is consuming the datasource `mongo` and finding one document from User entity.

:::tip **Godspeed has a prisma as a datasource plugin as well, which means a uniformed access atleast for all prisma based datasources**
:::

To enable this seamless interaction with datasources, the Godspeed Framework allows you to configure data sources within your project. For instance, the example mentions the use of the "prisma-as-datastore" plugin to define the "mongo" data source. This configuration step ensures that the framework can establish connections and communicate effectively with the specified data source.

In the above example there is a `mongo` datasource defined in the project, you are free to name your datasource as you like. a default config of your datasource is present in `src/datasources` folder. To use datasources advance features you configure your datasource.yaml file, to get more details about your specific datasource checkout their respective docs.


Example 2: API Datasource  [axios-as-datasource](/docs/microservices-framework/datasources/list-of-plugins#2-axios-as-datasource)

```yaml
id: post_api_send_anthing
tasks:
  - id: send_anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api_datasource.post./anything
    args:
      data:
        message: <%inputs.body.message%>
```

In the above example:

`datasource.api_datasource.post./anything` is the datasource function, which can be described as below:

  - `datasource`: fixed namespace for all data sources
  - `api_datasource`: name of data source,
  - `post`: API method
  - `./anything`: API endpoint

## Create a Custom Data Source

## Data Source 

Any kind of entity which provides read and write mechanism for data is considered a datasource. For example, an API, a SQL or NoSQL datastore which includes RDBMS or mongodb,postgresql, key value stores, document stores etc. The congfiguration for each datasource lies in src/datasources directory.

### Steps to create Custom Datasource


<details>
  <summary>let's use kafka as an example of a datasource :</summary>

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
