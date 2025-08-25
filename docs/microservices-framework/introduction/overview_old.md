# Godspeed - Meta Framework

This document is meant for technology leaders, architects, and developers. Its purpose is to present the platform's overarching objectives, guiding principles, design elements, components, and functionalities to the target audience.

## Introduction

> Our mission at Godspeed is to bring greater standardization, best practices and ease of engineering to the tech teams of the world. We wish to achieve this as a collaboration by and for the community.  We wish to develop a meta-framework along with tools, integrations, learning content, licensing and marketplace, based on a value system which fosters develop-rights, equity, fairness and wellbeing for all.

We want to democratize tech for teams to effortlessly create, maintain, and monitor complex applications with reduced effort, agility, scalability, quality, performance, cost effectiveness and minimization of technical debt and talent hurdle. Our goal is to liberate teams from the burdensome, repetitive tasks, boilerplate, wiring, so that instead of focusing on the how, they retain a razor sharp focus on the what.

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

The meta-framework with developer guardrails, generative features and pre-built integrations provides a ready-made feature set, a YAML DSL for important abstractions, simplified project setup, OTEL based [telemetry](/docs/microservices-framework/telemetry/overview.md) and devops tooling, streamlining the lives of developers and reducing their work and hence the chance of mistakes. This enables them to concentrate on and achieve their primary tasks with minimal effort, time, and cost.

The framework includes the essential functionalities of a 'modern microservice' by default, allowing developers to concentrate solely on business logic, resulting in significant reduction in workload.
![productivity](/img/productivity.png)

### Lower learning curve.

Developers can deliver a simple microservice on their first day itself. The standardized guardrails enforce their adoption and learning of best practices and engineering concepts, upskilling on the way as the projects proceed. In most cases, only a few in the organization need in-depth expertise, while others can quickly adapt to the framework through training and collaborate effectively, with support from internal team or from Godspeed.

### Easy brownfield adoption

Teams can adopt Godspeed by simply including the NPM module or jar in their existing project and installing the [CLI](/docs/microservices-framework/CLI.md). Godspeed ships as a node module. Hence it can be imported in any nodejs , bunjs or springboot project easily or developers can even reuse the existing event sources and data sources without any hassle.

### Security

The framework can read the environmental variables from a secure source like K8s Vault. It supports JWT, RBAC and ABAC based fine grained [authorization](/docs/microservices-framework/authorization/overview.md). For data at rest, developers can use encryption mechanisms over datastores. Log redaction allows to hide sensitive information from logs.

### Flexibility

Developer should be able to implement anything they need, or replace existing [eventsources](/docs/microservices-framework/event-sources/overview.md) or [datasources](/docs/microservices-framework/datasources/overview.md) with ease. They should also be able to migrate a project from one language or framework to another with least effort.

### Scale, performance and monitoring

For scale, we encourage the adoption of horizontal scaling approach based on Kubernetes. Developers can deploy a service on a Kubernetes cluster on any cloud.

For performance, we believe the datasources (APIs and DBs) are the bottlenecks most of the time, and hence the framework allows an easy integration of a cache of choice, over the calls to the [datasources](/docs/microservices-framework/datasources/overview.md). An easier way to setup Graphql like subscriptions and dual writes is planned.

For monitoring, the framework microservices allows export of APM and BPM signals in OTEL format which is supported by all major observability backend solutions. We provide a pre-configured Grafana dashboard, with correlated logs and traces, and detailed APM out of the box. Using the devops plugin of Godspeed CLI, teams can install the full Grafana stack with Loki, Mimir, Tempo and Minio, on a Kubernetes cluster for scalable telemetry ingestion.

### Maintainability

The standardized guardrails with clearly defined developer's boundaries, ensure neat, simple & systematic implementations across projects and individual developers with diverse experiences. This avoids technical debt from creeping into the project over time. Further, the decoupled architecture and a neat and modular implementation allows agility in bringing rapid changes as per the ever evolving needs and scenarios.

---

## Design Principles

In order to serve the [Goals](#aims) and [Tenets](/docs/microservices-framework/introduction/tenets.md) of the framework, we have followed certain [design principles](/docs/microservices-framework/introduction/design-principles.md).

## Framework architecture

The three main pillars of Godspeed framework: [eventsources](/docs/microservices-framework/event-sources/overview.md), [datasources](/docs/microservices-framework/datasources/overview.md), and [functions](/docs/microservices-framework/functions/overview.md).

> Do read more about them in the [design principles](/docs/microservices-framework/introduction/design-principles.md) section.

![framework-architecture](/img/framework-architecture.png)

---

### Building blocks of framework:

1. [**EventSources:**](/docs/microservices-framework/event-sources/overview.md) Pluggable event sources of different kinds like, **HTTP with Express or Fastify, gRpc or Graphql server, cron, web socket, Message bus with Kafka or RabbitMQ, an event from Salesforce**.

   1.1. [**Events:**](/docs/microservices-framework/event-sources/overview.md) Events of async and sync kind are defined in standardized YAML DSL with endpoint, authorization rules and Swagger spec of input and output (as applicable).
2. [**DataSources:**](/docs/microservices-framework/datasources/overview.md) Pluggable datastores or API clients, to send or retrieve data. For ex. **MongoDB, Redis, AWS API etc**
3. [**Functions:**](/docs/microservices-framework/functions/overview.md) The events invoke pure functions which contain the business logic. They take JSON as input and return JSON based output.
4. [**Config:**](/docs/microservices-framework/config-and-mappings/config.md) The configuration variables as well as their values are defined in yaml files under `config/` directory. Some variables are specific to the framework and rest variables can be created as per the business use cases.
5. [**ENV:**](/docs/microservices-framework/config-and-mappings/config.md#environment-variables) Sensitive data, like database URLs, that require concealment are specified in .env files and made available in the rest of the project via GSContext object.


![features](/img/features.png)

[Guardrails](link-to-guardrails)

[Best Practices](link-to-best-practices)

[Features](link-to-features)

[CTA - Install Framework](link-to-install)
