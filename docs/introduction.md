# Godspeed - A framework for microservices

This document is meant for stakeholders, technology leaders, architects, and developers. Its purpose is to present the platform's overarching objectives, guiding principles, design elements, components, and functionalities to the target audience.

## Introduction

Godspeed is on a mission to empower teams with the tools to effortlessly create, maintain, and monitor microservices-based backends, delivering unparalleled velocity, scalability, quality, and performance. Our goal is to liberate development and QA teams from the burdensome, repetitive tasks associated with building modern distributed backends, encompassing domain-driven design, multi-tenancy, and distributed event driven systems covering microservices and serverless functions. We envision developers being able to swiftly craft microservices in a matter of days, not months.

To achieve this, we're committed to providing teams with everything they need to create and operate contemporary microservices, guided by declared over-code approach, plug-and-play, and inherently extensible principles, all while remaining cloud-agnostic. We firmly reject any form of vendor lock-in, whether it be with Godspeed or any chosen cloud provider. Our approach empowers developers with the freedom to select and control the tools, databases, and cloud services they prefer, all while adhering to industry standards and unified interfaces.

This framework has been meticulously developed by Godspeed team over several years,refined through various projects by abstracting reusable components. It's a dynamic and continuously improved solution, adapting to meet evolving needs.

---

## Aims

**The framework's objectives are designed to enhance business agility by empowering product and development teams to rapidly deliver exceptional solutions.**

### Developer-centric

Godspeed offers a YAML-based DSL, a ready-made feature set, and simplified project setup, streamlining the lives of developers. This enables them to concentrate on and achieve their primary tasks with minimal effort, time, and cost.

### Boosting developer efficiency.

The framework includes essential functionalities of a 'modern microservice' by default, allowing developers to concentrate solely on business logic, resulting in an 80% reduction in workload.
![productivity](/img/productivity.png)


### Compact, micro-sized teams and a shallower learning curve.

Module owners can initiate the deployment of microservices within a week of onboarding. In most cases, only a select few within the organization need in-depth expertise, while others can quickly adapt to the framework through training and collaborate effectively, either with internal support or assistance from our team.

### Security

The framework can read the environmental variables from a secure source like K8s Vault. For data in transit and data at rest, we use encryption mechanisms. Also, the framework supports JWT Authentication. Further, all hits to other APIs are secured via security schemas specified in their Open API Specification (OAS 3). Fine grained authorization at API and datasources level is in the roadmap. 
Log reduction involves strategies to manage and analyze database logs more efficiently. This includes filtering and aggregating logs, normalizing data formats, setting up alerts and anomaly detection, defining retention policies, using log analysis tools, and applying user behavior analytics. These practices help improve security monitoring, detect threats, and maintain compliance while dealing with large volumes of log data.

---

## Features
![features](/img/features.png)

## Tenets

### Minimize redundancy.

Developers are relieved from the need to intervene at levels such as schema, events, datasources, and business logic. The framework can create its Docker containers using the node service, eliminating the need for developers to duplicate any tasks across APIs or projects.

### Simplified for extension and personalization.

Pluggable event-source and data-source interfaces and recipe enable seamless integration of new components or usecases. For instance, substituting datastores, APM/BPM tools, analytics engines, cache systems, email providers, file storage solutions, API calls.

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