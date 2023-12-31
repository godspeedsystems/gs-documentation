# Tenets


### Focus on the what and not the how

Thanks to Godspeed's out of box integrations, abstractions and command line assistance, developers can focus on implementing features rather than scaffolding, wiring up integrations, writing boilerplate code, doing repetitive tasks, setting up CI/CD, [telemetry](/docs/microservices-framework/telemetry/overview.md) etc. 

### Decoupled Architecture
The framework emphasizes and facilitates the adoption of [decoupled architecture](https://youtu.be/tVWDbVPsLFQ?si=tSILBF1LSoDmCn4Q), a practice that brings notable advantages.

For example, decoupled [event sources](/docs/microservices-framework/event-sources/overview.md) and [datasources](/docs/microservices-framework/datasources/overview.md) mean that replacing HTTP server, message bus, databases, cache systems, HTTP client etc. should require minimum to no changes in the project. Even switching between languages, like from Nodejs to Java, should require change in business logic only, leaving the abstracted event definitions, database models, API calls and business logic untouched.

### Standards driven
All projects of an organization should follow standardized and systematic implementation for ensuring maintainability and easy adoption by new developers.
Godspeed is called a meta-framework, or a framework of frameworks, because it unifies the way in which microservices are developed across the organization, even with varying languages and frameworks like Nodejs, BunJS, Java Springboot (coming soon), Golang/Python (coming in 2024) etc., via its standardized abstractions & scaffolding. 

Further the standardization includes established industry standards into system design, such as [OpenTelemetry](/docs/microservices-framework/telemetry/overview.md) for observability, Swagger specifications for API and event schema, and [Prisma](https://www.prisma.io/) for database model definition.

<!-- ---



In order to serve the [Goals](/docs/introduction#aims) and [Tenets](/docs/introduction#tenets) of the framework, here are the design principles we have followed. -->