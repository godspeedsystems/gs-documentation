# Introduction To Events
In the realm of microservices architecture, events serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and workflow details.

In the meta-framework world, we call all types of sync and async events (ex. Kafka, Socket, Cron) as events.
- Two types of events- sync ([http](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/express-as-http/README.md), [Apollo Graphql](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/graphql-as-eventsource/README.md)) and async ([cron](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/cron-as-eventsource/README.md), [kafka](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/kafka-as-datasource-as-eventsource/README.md))

**We closely follow the OpenAPI specification; this is a fundamental aspect of all events that adhere to a [standard structure](/docs/microservices-framework/introduction/design-principles.md#schema-driven-development), which is one of the core design principles of Godspeed, regardless of their source or protocol.**
