# Create a Custom Eventsource

## About Eventsources

An eventsource is any entity or technology responsible for capturing events or notifications when specific events or conditions occur. These events are consumed by event handlers or processors for real-time or near-real-time responses. Eventsources can include Sync and Async event sources like Message brokers, Webhooks etc.The settings for each datasource lies in src/eventsources directory.

### Any Eventsource
#### Steps to create custom eventsource :

:::tip **To customize any event source, go through the respective plugin's ts file and customize. Use this [repo](https://github.com/godspeedsystems/gs-plugins.git) for better understanding**
:::

<details>
  <summary>let's use Express as an example of eventsource :</summary>

#### Project structure

```bash
    ├── src
        ├── datasources
        │
        ├── events
        |   |
        │   └── sample.yaml
        |   
        ├── eventsources
        |   |
        │   ├── types
        |   |    |
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions
            |
            └── sample.yaml
```

#### Express config (src/eventsources/http.yaml)
```
type: express
port: 3000
```

#### initializing client and execution ( src/eventsources/types/express.ts ) :

```javascript
import { PlainObject, GSActor, GSCloudEvent, GSStatus, GSEventSource } from "@godspeedsystems/core";
import express from "express";
import bodyParser from 'body-parser';
import _ from "lodash";
import promClient from '@godspeedsystems/metrics';
//@ts-ignore
import promMid from '@mindgrep/express-prometheus-middleware';
import passport from "passport";
import fileUpload from "express-fileupload"
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

export default class EventSource extends GSEventSource {
  async initClient(): Promise<PlainObject> {
    const app = express();
    const {
      port = 3000,
      request_body_limit = 50 * 1024 * 1024,
      file_size_limit = 50 * 1024 * 1024,
      jwt: jwtConfig
    } = this.config;

    app.use(bodyParser.urlencoded({ extended: true, limit: request_body_limit }));
    app.use(bodyParser.json({ limit: file_size_limit }));
    app.use(
      fileUpload({
        useTempFiles: true,
        //@ts-ignore
        limits: { fileSize: file_size_limit },
      })
    );
  
    if (jwtConfig) {
      app.use(passport.initialize());
      passport.use(
        new JwtStrategy(
          {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfig.secretOrKey,
            ignoreExpiration: true,
            jsonWebTokenOptions: {
              audience: jwtConfig.audience,
              issuer: jwtConfig.issuer,
            },
          },
          function (jwtPayload, done) {
            return done(null, jwtPayload);
          },
        ),
      );
    };

    app.listen(port);

    if (process.env.OTEL_ENABLED == 'true') {
      app.use(
        promMid({
          metricsPath: false,
          collectDefaultMetrics: true,
          requestDurationBuckets: promClient.exponentialBuckets(0.2, 3, 6),
          requestLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
          responseLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
        })
      );
    }

    return app;
  }

  private authnHOF(authn: boolean) {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (authn) {
        return passport.authenticate('jwt', { session: false })(req, res, next)
      } else {
        next();
      }
    };
  };

  subscribeToEvent(eventRoute: string, eventConfig: PlainObject, processEvent: (event: GSCloudEvent, eventConfig: PlainObject) => Promise<GSStatus>, event?: PlainObject): Promise<void> {
    const routeSplit = eventRoute.split('.');
    const httpMethod: string = routeSplit[1];
    const endpoint = routeSplit[2].replace(/{(.*?)}/g, ':$1');
    const app: express.Express = this.client as express.Express;
    //@ts-ignore
    app[httpMethod](endpoint, this.authnHOF(event.authn), async (req: express.Request, res: express.Response) => {
      const gsEvent: GSCloudEvent = EventSource.createGSEvent(req, endpoint)
      const status: GSStatus = await processEvent(gsEvent, { key: eventRoute, ...eventConfig });
      res
        .status(status.code || 200)
        // if data is a integer, it takes it as statusCode, so explicitly converting it to string
        .send(Number.isInteger(status.data) ? String(status.data) : status.data);
    });
    return Promise.resolve();
  }

  static createGSEvent(req: express.Request, endpoint: string) {
    const reqProp = _.omit(req, [
      '_readableState',
      'socket',
      'client',
      '_parsedUrl',
      'res',
      'app'
    ]);
    const reqHeaders = _.pick(req, ['headers']);
    let data = { ...reqProp, ...reqHeaders };

    const event: GSCloudEvent = new GSCloudEvent(
      'id',
      endpoint,
      new Date(),
      'http',
      '1.0',
      data,
      'REST',
      new GSActor('user'),
      {}
    );

    return event;
  }
}

const SourceType = 'ES';
const Type = 'express'; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
const CONFIG_FILE_NAME = 'http'; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
const DEFAULT_CONFIG = { port: 3000, docs: { endpoint: '/api-docs' } };

export  {
  EventSource,
  SourceType,
  Type,
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG
};
```



#### Express event (src/events/sample.yaml)

```
http.get./sample_api:
    fn: sample      #redirects to src/functions/sample.yaml
    body: 
      content:
        application/json:
          schema:
            type: object
            properties:
              name: 
                type: string
              message: 
                type: string                         
    params:     
      - in: query
        name: user
        required: true  
        schema: 
          type: string   
    responses:      
      200:
        content:
          application/json:
            schema:
              type: string
```

#### Function to be called (src/functions/sample.yaml)


```yaml
summary: example
description: this function is called to return
tasks:
    - id: example
      fn: com.gs.return #its an inbuilt function
      args: |
        <%"Hello "+inputs.query.user+". This is a message from body "+inputs.body.message%>
```

</details>


<details>
  <summary>let's use cron as an example of eventsource :</summary>

#### Project structure

```bash
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


1. Inside the `eventsources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

```
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

### Datasource as eventsource 

There are special cases when datasource can also act as an eventsource.
For eg: Kafka can be used both datasource as well as eventsource. When we are publishing message to kafka, it can work as a datasouce .But when we are listening to events on kafka, then it is event source also, then the same client can serve as both.


#### Steps to create custom datasource as eventsource :

:::tip **To customize any event source, go through the respective plugin's ts file and customize. Use this [repo](https://github.com/godspeedsystems/gs-plugins.git) for better understanding**
:::

<details>
  <summary>let's use kafka as an example of an eventsource :</summary>

#### Project structure

```bash
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


#### Kafka config ( src/eventsources/kafka.yaml )
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

#### Example event for consume ( src/events/kafka_consumer_event.yaml ) :

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


1. To create datasource follow [How to create custom datasource](/docs/microservices-framework/datasources/create-custom-datasource.md)

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

4. Your client is initialized already in datasource so you can execute its subscription using the `subscribeToEvent` function.


