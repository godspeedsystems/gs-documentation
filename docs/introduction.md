# Godspeed - Our Philosophy

This document is meant for technology leaders, architects, and developers. Its purpose is to present the platform's overarching objectives, guiding principles, design elements, components, and functionalities to the target audience.

## Introduction
> Our mission at Godspeed is to bring greater standardization, best practices and ease of engineering to the tech teams of the world. We wish to achieve this as a collaboration by and for the community.  We wish to develop a meta-framework along with tools, integrations, learning content, licensing and marketplace, based on a value system which fosters develop-rights, equity, fairness and wellbeing for all. 

We want to democratize tech for teams to effortlessly create, maintain, and monitor complex applications with reduced effort, agility, scalability, quality, performance, cost effectiveness and minimizatin of technical debt and talent hurdle. Our goal is to liberate teams from the burdensome, repetitive tasks, boilerplate, wiring, so that instead of focussing on the how, they retain a razor sharp focus on the what.

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

The meta-framework with developer guardrails and pre-built integrations provides a ready-made feature set, powerful SDKs, a YAML DSL for important abstractions, auto-generation features, simplified project setup, OTEL based telemetry and devops tooling, streamlining the lives of developers and reducing their work and hence the chance of mistakes. This enables them to concentrate on and achieve their primary tasks with minimal effort, time, and cost.

The framework includes essential functionalities of a 'modern microservice' by default, allowing developers to concentrate solely on business logic, resulting in significant reduction in workload.
![productivity](/img/productivity.png)


### Shallower learning curve.

Developers can deliver simple microservice on their first day itself. The standardized guardrails enforce their adoption and learning of best practices and engineering concepts, uskilling on the way as the projects proceed. In most cases, only a select few within the organization need in-depth expertise, while others can quickly adapt to the framework through training and collaborate effectively, with support from internal team or from Godspeed.

### Easy brownfield adoption
Teams can adopt Godspeed by simply including the NPM module or jar in their existing project and installing the CLI. 

### Security

The framework can read the environmental variables from a secure source like K8s Vault. It supports JWT, RBAC and ABAC based fine grained authorization. For data at rest, developers can use encryption mechanisms over datastores. Log redaction allows to hide sensitive information from logs.

### Flexibility
Developer should be able to implement anything they need, or replace existing eventsources or datasources with ease. They should also be able to migrate a project from one language or framework to another with least effort.

### Scale, performance and monitoring
For scale, we encourage the adoption of horizontal scaling approach based on Kubernetes. Developers can deploy a service on a Kubernetes cluster on any cloud with ease, via service templates and the Godspeed command line.

For performance, we believe the datasources (APIs and DBs) are the bottlenecks most of the time, and hence the framework allows an easy integration of a cache of choice, over the calls to the datasources. An easier way to setup Graphql like subscriptions and dual writes is planned.

For monitoring, the framework microservices allows export of APM and BPM signals in OTEL format which is supported by all major observability backend solutions. We provide a pre-configured Grafana dashboard, with correlated logs and traces, and detailed APM out of the box. Using the devops plugin of Godspeed CLI, teams can install the full Grafana stack with Loki, Mimir, Tempo and Minio, on a Kubernetes cluster for scalable telemetry ingestion.

### Maintainability
The standardized guardrails with clearly defined developer's boundaries, ensure neat, simple & systematic implementations across projects and individual developers with diverse experiences. This avoids technical debt from creeping into the project over time. Further, the decoupled architecture and a neat and modular implementation allows agility in bringing rapid changes as per the ever evolving needs and scenarios.


---

## Features
![features](/img/features.png)

## Tenets

### Focus on the what and not how

Developers should not need to get sidetracked in wiring up their project. They do not need to work at levels lower than defining schemas, events, datasources, event sources and business logic. For ex. they should not be creating scaffolding, struggling with local setup, figuring out Kubernetes or Open Telemetry integration, setting up and figuring out CI/CD and monitoring tools etc.

### Simplified for usage and extension

Pluggable event-source and data-source interfaces and recipe enable seamless integration of new components or usecases. For instance, substituting datastores, APM/BPM tools, cache systems, email providers, file storage solutions, API intgrations etc.

### Standards driven

Incorporate established standards into system design, such as utilizing CloudEvents for event handling, adopting OpenTelemetry for observability, implementing Swagger specifications, configuring the database model using Prisma, and setting up the API also using Prisma.

---

### Unified Observability For APM and BPM

We follow [OpenTelemetry](https://opentelemetry.io/) (OTEL) SDKs to collect and observe telemetry data, including application performance monitoring. This will be integrable with a plethora of open source or commercial tools of choice that integrate with the standard OTEL protocol.

---

## Framework architecture

The three main pillars of Godspeed framework: eventsources, datasources, and workflows.

![framework-architecture](/img/framework-architecture.png)

---

### Building blocks of framework:

1. [**EventSources:**](/docs/event_sources/overview.md) Pluggable event sources of different kinds like, **express, Kafka, salesforce**.

    1.1. [**Events:**](/docs/events/overview.md) Events of async and sync kind, Define endpoint, input, and response.

2. [**DataSources:**](/docs/data_sources/overview.md) Pluggable data source to store and retrieve data like **Mongo, Redis, API**

3. [**Workflows:**](/docs/workflows/overview.md) Handler of events. Your business logic goes here.

4. [**Config:**](#building-blocks-of-framework) The configuration variables as well as their values are defined in yaml files under `config/` directory. These variables can be replaced as per the business use cases.

5. [**ENV:**](#building-blocks-of-framework) Sensitive data, like database URLs, that require concealment are specified in .env files.


### DSL (Domain Specific Language)
 As the default, events and workflows are composed using YAML-based DSL, which serves as the primary language for defining them. However, when necessary, workflows can also be scripted in JavaScript files.

YAML-based **DSL** is a concise and human-readable way to define and configure data and processes. It simplifies complex structures using indentation and key-value pairs, making it an efficient choice for expressing data, workflows, and configurations.

To provide flexibility for developers, it's important to allow them to write workflows in languages other than just JavaScript and TypeScript, ensuring that their choices aren't limited.

## Situations and application scenarios

The use cases span a diverse spectrum of microservices, encompassing various types such as CRUD microservices, wrapper services, search and suggestion services, backend for frontend services, orchestration services, domain gateway services, and others. This broad array of applications highlights the versatility and applicability of the framework across a wide range of scenarios and service types.