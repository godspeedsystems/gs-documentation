# Events and Types
## Introduction
In the realm of microservices architecture, events serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and workflow details.

**We closely follow the OpenAPI specification; this is a fundamental aspect of all events that adhere to a [standard structure](/docs/microservices-framework/introduction/design-principles.md#schema-driven-development), which is one of the core design principles of Godspeed, regardless of their source or protocol.**

<!-- **When switching between eventsources, the event schema undergoes significant changes. In the case of HTTP events, the start line includes the eventsource name, method, and path. However, for Kafka events, the start line combines the datasource name, topic name, and group ID.** -->

The event schema, for each eventsource, closely follows the OpenAPI specification. It includes
- The name/topic/URL of the event
- The event handler workflow(fn)
- Input and output schema with the validation error handling
- [Authorization](/docs/microservices-framework/authorization/overview.md) checks 


##  Event types
Based on how processing is handled ,events can be classified into two types: synchronous (sync) and asynchronous (async) events, each suited for various protocols. 


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1703849187/Sushil_edited_bbfzl1.jpg" alt="event types" />


**Synchronous events** are typically associated with 
- `HTTP/REST protocol:` Express can also handle asynchronous operations, the basic request-response cycle is synchronous.
- `gRPC:`  gRPC is a framework for building remote procedure call (RPC) systems. If you're using the typical request-response pattern, it can be thought of as synchronous.
- `GraphQL:` Most commonly, GraphQL is used for synchronous communication, but it can handle asynchronous operations when needed.

**Asynchronous events**, on the other hand, are exemplified by
- `Cron jobs:` Cron jobs are asynchronous because they don't execute immediately when you create or schedule them.
- `Kafka:` Apache Kafka is an event streaming platform. It's designed for asynchronous, real-time data streaming.
- `RabbitMQ:` RabbitMQ is a message broker that allows asynchronous communication between distributed systems.
- `WebSocket communication:` WebSockets provide full-duplex communication channels over a single TCP connection. They are inherently asynchronous, allowing real-time bidirectional communication between clients and servers.

You can also create **custom events** like 
- `Salesforce:` Salesforce UI or synchronous API calls provide immediate feedback, many of the underlying processes that handle data processing and automation are performed `asynchronously` for scalability and efficiency.
:::note
You can refer [Salesforce plugin](https://docs.godspeed.systems/v1/microservices/events#624-salesforce-event) which we have in V1.
We have [bounty](https://forum.godspeed.systems/t/1-million-developer-bounty-program-build-earn-with-godspeed/128) on implementing [plugins for V2](https://github.com/godspeedsystems/gs-plugins#list-of-plugins).
:::
- `S3:` Amazon S3 provides real-time access to stored objects and can be used for synchronous operations like serving web content, its internal processes and features are optimized for `asynchronous`.
- `Google Pub/Sub:` Google Cloud Pub/Sub enables real-time messaging with synchronous operations for immediate communication. Its architecture also supports `asynchronous` messaging, ensuring scalability and efficiency. You can use Google pub/sub to access events like new email on gmail.
- `Amazon SQS:` :Amazon SQS is a fully managed message queuing service designed for both synchronous and asynchronous operations. It offers immediate message processing while optimizing for scalability through `asynchronous` handling.


Dive deeper into the fascinating world of Events by watching the video below...

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dVt6GPSgY7A" frameBorder="0" allowFullScreen></iframe>
</div>
