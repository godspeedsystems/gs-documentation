# Godspeed - Our Philosophy

This document is meant for technology leaders, architects, and developers. Its purpose is to present the platform's overarching objectives, guiding principles, design elements, components, and functionalities to the target audience.

## Introduction
> Our mission at Godspeed is to bring greater standardization, best practices and ease of engineering to the tech teams of the world. We wish to achieve this as a collaboration by and for the community.  We wish to develop a meta-framework along with tools, integrations, learning content, licensing and marketplace, based on a value system which fosters develop-rights, equity, fairness and wellbeing for all. 

We want to democratize tech for teams to effortlessly create, maintain, and monitor complex applications with reduced effort, agility, scalability, quality, performance, cost effectiveness and minimization of technical debt and talent hurdle. Our goal is to liberate teams from the burdensome, repetitive tasks, boilerplate, wiring, so that instead of focussing on the how, they retain a razor sharp focus on the what.

To achieve this, we're committed to providing teams with the meta-framework, tools, integrations and learning that they need to develop and maintain products, guided by first principles and best practices like
* Standardized implementation across languages, frameworks & tools
* Decoupled architecture with plug and play integrations
* Zero boilerplate with pre-built abstractions
* Schema and standards driven development
* Shift left
* Cloud agnostic setup
* No vendor lock-in

---

## Aims

### Boosting tech team's efficiency

The meta-framework with developer guardrails, generative features and pre-built integrations provides a ready-made feature set, a YAML DSL for important abstractions, simplified project setup, OTEL based [telemetry](telemetry/overview.md) and devops tooling, streamlining the lives of developers and reducing their work and hence the chance of mistakes. This enables them to concentrate on and achieve their primary tasks with minimal effort, time, and cost.

The framework includes essential functionalities of a 'modern microservice' by default, allowing developers to concentrate solely on business logic, resulting in significant reduction in workload.
![productivity](/img/productivity.png)


### Lower learning curve.

Developers can deliver simple microservice on their first day itself. The standardized guardrails enforce their adoption and learning of best practices and engineering concepts, upskilling on the way as the projects proceed. In most cases, only a few in the organization need in-depth expertise, while others can quickly adapt to the framework through training and collaborate effectively, with support from internal team or from Godspeed.

### Easy brownfield adoption
Teams can adopt Godspeed by simply including the NPM module or jar in their existing project and installing the [CLI](CLI.md). 

### Security

The framework can read the environmental variables from a secure source like K8s Vault. It supports JWT, RBAC and ABAC based fine grained [authorization](authorization/overview.md). For data at rest, developers can use encryption mechanisms over datastores. Log redaction allows to hide sensitive information from logs.

### Flexibility
Developer should be able to implement anything they need, or replace existing [eventsources](event_sources/overview.md) or [datasources](data_sources/overview.md) with ease. They should also be able to migrate a project from one language or framework to another with least effort.

### Scale, performance and monitoring
For scale, we encourage the adoption of horizontal scaling approach based on Kubernetes. Developers can deploy a service on a Kubernetes cluster on any cloud with ease, via service templates and the Godspeed command line.

For performance, we believe the datasources (APIs and DBs) are the bottlenecks most of the time, and hence the framework allows an easy integration of a cache of choice, over the calls to the [datasources](data_sources/overview.md). An easier way to setup Graphql like subscriptions and dual writes is planned.

For monitoring, the framework microservices allows export of APM and BPM signals in OTEL format which is supported by all major observability backend solutions. We provide a pre-configured Grafana dashboard, with correlated logs and traces, and detailed APM out of the box. Using the devops plugin of Godspeed CLI, teams can install the full Grafana stack with Loki, Mimir, Tempo and Minio, on a Kubernetes cluster for scalable telemetry ingestion.

### Maintainability
The standardized guardrails with clearly defined developer's boundaries, ensure neat, simple & systematic implementations across projects and individual developers with diverse experiences. This avoids technical debt from creeping into the project over time. Further, the decoupled architecture and a neat and modular implementation allows agility in bringing rapid changes as per the ever evolving needs and scenarios.


---

## Tenets

### Focus on the what and not how

Thanks to Godspeed's out of box integrations, abstractions and command line assistance, developers can focus on implementing features rather than scaffolding, wiring up integrations, writing boilerplate code, doing repetitive tasks, setting up CI/CD, [telemetry](telemetry/overview.md) etc. 

### Follow first principles and best practices
The framework helps teams learn and practice decoupled architecture, schema driven development, security etc. Easy CI/CD setup with command line assistance, helps adopting a shift left approach.

Best practices come with their own benefits. For example, decoupled [event sources](event_sources/overview.md) and [datasources](data_sources/overview.md) mean that replacing HTTP server, message bus, databases, cache systems, HTTP client etc. should require minimum to no changes in the project. Even switching between languages, like from Nodejs to Java, should require change in business logic only, leaving the abstracted event definitions, database models, API calls and business logic untouched.

### Standards driven
All projects of an organization should follow standardized and systematic implementation for ensuring maintainability and easy adoption by new developers.
Godspeed is called a meta-framework, or a framework of frameworks, because it unifies the way in which microservices are developed across the organization, even with varying languages and frameworks like Nodejs, BunJS, Java Springboot (coming soon), Golang/Python (coming in 2024) etc., via its standardized abstractions & scaffolding. 

Further the standardization includes established industry standards into system design, such as [OpenTelemetry](telemetry/overview.md) for observability, Swagger specifications for API and event schema, and [Prisma](data_sources/datasource_plugins#1-prisma-as-datasource) for database model definition.

---

## Design Principles

In order to serve the [Goals](#aims) and [Tenets](#tenets) of the framework, we have followed certain [design principles](design_principles.md).

## Framework architecture

The three main pillars of Godspeed framework: [eventsources](event_sources/overview.md), [datasources](data_sources/overview.md), and [functions or workflows](workflows/overview.md). 

> Do read more about them in the [design principles](design_principles#design-principles-1) section.

![framework-architecture](/img/framework-architecture.png)

---

### Building blocks of framework:

1. [**EventSources:**](/docs/event_sources/overview.md) Pluggable event sources of different kinds like, **HTTP with Express or Fastify, gRpc or Graphql server, cron, web socket, Message bus with Kafka or RabbitMQ, an event from Salesforce**.

    1.1. [**Events:**](/docs/events/overview.md) Events of async and sync kind are defined in standardized YAML DSL with endpoint, authorization rules and Swagger spec of input and output (as applicable). 

2. [**DataSources:**](/docs/data_sources/overview.md) Pluggable datastores or API clients, to send or retrieve data. For ex. **MongoDB, Redis, AWS API etc**

3. [**Workflows or Functions:**](/docs/workflows/overview.md) The events invoke functions or workflows which contain the business logic.

4. [**Config:**](config/overview.md) The configuration variables as well as their values are defined in yaml files under `config/` directory. Some variables are specific to the framework and rest variables can be created as per the business use cases.

5. [**ENV:**](#building-blocks-of-framework) Sensitive data, like database URLs, that require concealment are specified in .env files and made available in the rest of the project via GSContext object.

## Features
![features](/img/features.png)