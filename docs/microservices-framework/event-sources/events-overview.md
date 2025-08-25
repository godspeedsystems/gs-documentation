# Introduction To Events
Events are the core of creating responsive, real-time applications in godspeed. An event serves as a trigger that initiates specific actions or functions based on defined conditions or inputs. Whether it’s an API call, a scheduled job, or a message arriving from a queue, events provide a structured way to handle incoming requests and data changes.
<!-- In the realm of microservices architecture, events serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and function details. -->

## What are Events in Godspeed?
In the meta-framework world, we call all types of sync events (apis) and async events (ex. Kafka, Socket, Cron) as **Events**. Events are entry points into your Godspeed application, determining how the system should respond to various types of inputs. Each event can be configured with a unique set of properties that define:

- **The Source of the Event:** For example, HTTP requests, Kafka messages, Cron schedules, or custom-defined sources.
- **The Triggering Conditions:** Conditions or methods (like GET, POST, PUT for HTTP events) that specify when an event should activate.
- **The Actions or functions:** Functions that are executed when an event is triggered, containing the logic for handling the request or data.

- To start using events, explore the different [Event Source Plugins](/docs/microservices-framework/event-sources/event-source-plugins/Overview) available in Godspeed and choose the ones that suit your application’s needs.

## Defining an Event: Writing an Event Schema
To define an event in Godspeed, you need to write an [Event Schema](/docs/microservices-framework/event-sources/event-schema). This schema is a structured YAML configuration that follows the OpenAPI specification, allowing you to define every detail of how the event should behave. 


## Types of Events
For more details on configuring each type of event, check out the dedicated sections on all supported Event types:

**1. Sync Events**
 - [HTTP](/docs/microservices-framework/event-sources/event-types/http-events)
 - [Apollo Graphql](/docs/microservices-framework/event-sources/event-types/graphql-events)

**2. Async Events**
- [Cron](/docs/microservices-framework/event-sources/event-types/cron-events)
- [Kafka](/docs/microservices-framework/event-sources/event-types/kafka-events)


