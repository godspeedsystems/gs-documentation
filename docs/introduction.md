# Godspeed - A framework for microservices

**This document is meant for stakeholders, technology leaders, architects, and developers. Its purpose is to present the platform's overarching objectives, guiding principles, design elements, components, and functionalities to the target audience.**

## Introduction

"Godspeed is on a mission to empower teams with the tools to effortlessly create, maintain, and monitor microservices-based backends, delivering unparalleled velocity, scalability, quality, and performance. Our goal is to liberate development and QA teams from the burdensome, repetitive tasks associated with building modern distributed backends, encompassing domain-driven design, multi-tenancy, microservices, and serverless functions. We envision developers being able to swiftly craft microservices in a matter of days, not months.

To achieve this, we're committed to providing teams with everything they need to create and operate contemporary microservices, guided by configuration-driven, plug-and-play, and inherently extensible principles, all while remaining cloud-agnostic. We firmly reject any form of vendor lock-in, whether it be with Godspeed or any chosen cloud provider. Our approach empowers developers with the freedom to select and control the tools, databases, and cloud services they prefer, all while adhering to industry standards and unified interfaces.

This framework has been meticulously developed by Mindgrep over several years, meticulously refined through various projects by abstracting reusable components. It's a dynamic and continuously improved solution, adapting to meet evolving needs."

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

---

## Features
![features](/img/features.png)

## Tenets

### Minimize redundancy.

Developers are relieved from the need to intervene at levels below the schema, such as events and datasources, as well as business logic. The framework takes care of everything, including project setup with the necessary Docker containers. This eliminates the need for developers to duplicate any tasks across APIs or projects.

### Simplified for extension and personalization.

Pluggable interfaces enable seamless integration of new components without the need to modify the code. For instance, substituting datastores, APM/BPM tools, analytics engines, cache systems, email providers, file storage solutions, CRMs, and more should ideally necessitate no alterations to the application code.

### Standards driven

Incorporate established standards into system design, such as utilizing CloudEvents for event handling and adopting OpenTelemetry for observability.

---

## Guiding principles of design

### Four fundamental abstractions
The four fundamental abstractions in the Godspeed are events (sync/async), workflows (business logic) , datasources (datastores) and eventsources (APIs).

### Unified Observability For APM and BPM

We will follow [OpenTelemetry](https://opentelemetry.io/) (OTEL) SDKs to collect and observe telemetry data, including application performance monitoring. This will be integrable with a plethora of open source or commercial tools of choice that integrate with the standard OTEL protocol.

---

## Framework architecture

The four main dimensions of Godspeed framework: events, workflows, datasources and eventsources.

![framework-architecture](/img/framework-architecture.png)

---

## Situations and application scenarios

The use cases span a diverse spectrum of microservices, encompassing various types such as CRUD microservices, wrapper services, search and suggestion services, backend for frontend services, orchestration services, domain gateway services, and others. This broad array of applications highlights the versatility and applicability of the framework across a wide range of scenarios and service types.