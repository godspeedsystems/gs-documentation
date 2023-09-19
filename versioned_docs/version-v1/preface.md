---
sidebar_position: 2
title: About Godspeed
---

# GodSpeed – A Microservice framework

**This document is intended for stakeholders, tech leaders, architects & developers. It will provide high level goals, tenets, design principles, components & features of the platform for the intended audience.
**

## 1.1 Introduction

**Godspeed is aimed at empowering teams to develop, maintain and observe microservices based backends, with high velocity, scalability, quality and performance.
** We want development (and hence also QA) teams to bypass all the repeatable and reusable work involved in building modern distributed backends with domain driven design, multi-tenancy, microservices and serverless functions. We want the developers to be able to speedily develop microservices in days, instead of months.

For the same, we are trying to provide everything that a team needs to create and operate modern microservices. It will be configuration/templating driven, plug & play, extensible by nature and cloud independent. There will be no vendor lock-in, either with Godspeed or any vendor used. It will give developers choice and control over the kind of tools, DBs and cloud providers they wish to use, while following standards and unified interfaces.

This framework is being systematically developed by Mindgrep over the last years, across various projects by extracting abstractions and reusable components. It is actively being customized/expanded/improved with new adaptations.

![snowburg](/img/snowburg.png)

---

## 1.2 Goals

**THE GOALS OF THE FRAMEWORK ARE AIMED TO MAKE BUSINESS AGILE BY EMPOWERING THE PRODUCT & DEVELOPMENT TEAMS TO DELIVER EXCELLENT SOLUTIONS VERY FAST.**

### Developer friendly

Godspeed provides low code implementation, YAML based DSL, prebuilt feature set and easy project setup, making like of developers easy. Thus empowering them to focus and accomplish their core work with the least amount of effort, time & cost.

### Enhancing developer productivity

The framework provides fundamental functionalities of “a modern microservice” out of the box so that developer only needs to focus on business logic (80% reduction in work).
![productivity](/img/productivity.png)

### Smaller, micro teams and lesser learning curve

Module owners can start shipping microservices within a week's ramp-up time. If at all, only a couple of members in the ogranization need to know the nitty gritty. Rest can just train to use the framework, and deliver with their help,or ours.

### Security

The framework can read the environmental variables from a secure source like K8s Vault. For data in transit and data at rest, we use encryption mechanisms. Also, the framework supports JWT Authentication. Further, all hits to other APIs are secured via security schemas specified in their Open API Specification (OAS 3). Fine grained authorization at API and datasources level is in the roadmap. [Read more](./security/intro.md)

### Easy and fast migrations
Migrate existing data models to Godspeed via database introspection. Autogenerate CRUD APIs based on the data models. Migrate existing API based on its introspection, to create Godspeed compliant events - planned. Now, all that remains for developers, is simply to migrate the business logic.

---

## 1.3 Features
![features](/img/features.png)

## 1.4 Tenets

### Don't repeat yourself

Developer does not need to do anything at the levels lower than the schema (events, datasources) and business logic. All that, including project setup with required docker containers, is handled by the framework. The developers need not to repeat any work from api to api or project to project.

### Easy to extend & customize

Pluggable interfaces allow new integrations without changing code. For example, replacing datastores, APM/BPM tools, analytics engines, cache, email provider, file storage, CRM etc. should ideally require no change in the application code.

### Standards driven

Use standards in designing the system. For example, events using CouldEvents. Observability using OpenTelemetry.

---

## 1.5 Design principals

### Three fundamental abstractions
The three fundamental abstractions in the Godspeed are events (sync/async), workflows (business logic) and datasources (APIs/datastores). [Read more](./microservices/intro.md)

### Unified Observability For APM and BPM

We will follow [OpenTelemetry](https://opentelemetry.io/) (OTEL) SDKs to collect and observe telemetry data, including application performance monitoring. This will be integrable with a plethora of open source or commercial tools of choice that integrate with the standard OTEL protocol. [Read more](./telemetry/intro.md)

---

## 1.6 Framework architecture

The three main dimensions of Godspeed framework: events, workflows and datasources.

![framework-architecture](/img/framework-architecture.png)

---

## 1.7 Scenarios and use cases

Use cases include any kind of microservice, CRUD microservice, wrapper service, search and suggest service, backend for frontend service, orchestration service, domain gateway service, etc.
