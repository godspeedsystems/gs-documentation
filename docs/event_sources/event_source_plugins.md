# Event Source Plugins

Godspeed framework has a pluggable aproach to define event sources. The framework provides an interface to write different event sources. Here are few event source plugins which are managed by the core framework team.

## List of plugins

### 1. [express-as-http](https://www.npmjs.com/package/@godspeedsystems/plugins-express-as-http)

express-as-http is a plugin that simplifies building APIs by providing essential features for handling HTTP routes, requests, and responses. It's known for its simplicity and speed, making it a popular choice for building server-side applications in Node.js.

How to use **express-as-http** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin express-as-http
```


### 2. [cron-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-cron-as-eventsource)

Cron-as-eventsource is a background plugin that executes events at specified times or at regular intervals.

How to use **cron-as-eventsource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin cron-as-eventsource
```

### 3. [kafka-as-datasource-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

Kafka is an open-source event streaming platform that excels at real-time data ingestion, distribution, and processing. It's widely used for building data pipelines and streaming applications due to its scalability, durability, and real-time capabilities.

How to use **kafka-as-datasource-as-eventsource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin kafka-as-datasource-as-eventsource
```
