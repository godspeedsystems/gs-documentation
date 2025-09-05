---
id: overview
title: Param Framework Introduction
description:  "An introduction to Param framework and benefits, why should you use Param framework." keywords: [Godspeed, Meta-Framework, 4th-gen framework, overview, benefits, why Param]
---

# Introduction

Param (Prev. Godspeed) is industry’s first opinionated 4th generation framework for building modern APIs and event-driven systems with less effort, high quality and easy maintenance. It’s designed to reduce lines of code, prevent chaos in development, build with confidence and reliability. It follows godspeed philosophy to focus on the what, and not the how.

👉 Currently, it fully supports Node.js, Deno and Bun.js ecosystems. On the polyglot roadmap, Godspeed aims to support multiple languages (Java, Go, Python, etc.).

### Install

Head to the [installation guide](/docs/get-started#install-godspeed) and get started with **Param (Prev. Godspeed)**.

## 10 Reasons Why Use Param(Prev. Godspeed) Framework?

By adopting Param framework, teams experience:

### ✅ Confident & Faster Delivery

The Param framework with developer guardrails, generative features and pre-built integrations provides a ready-made feature set, a YAML DSL for important abstractions, simplified project setup, OTEL based telemetry and devops tooling, streamlining the lives of developers and reducing their work and hence the chance of mistakes. This enables them to concentrate on and achieve their primary tasks with minimal effort, time, and cost.

### ✅ Fewer Bugs, Less Chaos

Less lines of code, less integration boilerplate (datasources, eventsources and observability), less chance of errors, less time to solve. 

### ✅ Auto-Generated Validations

Request and response validations are automatically derived from event schemas (http, mcp, graphQL, message bus, cron, socket etc.). This enforces correctness at runtime effortlessly.

### ✅ Suitable for All Experience Levels

Whether you are a vibe coder, entry-level developer, or an experienced engineer, you can build confidently with Godspeed. And the best part—it’s very easy to use, especially with Saarthi. Developers can deliver a simple microservice on their first day itself.

### ✅ LLM Friendly

The framework includes the essential functionalities of a 'modern microservice' by default, allowing developers to concentrate solely on business logic, resulting in significant reduction in workload. This makes the codebase highly LLM friendly, enabling AI to generate higher-quality code with fewer tokens.

### ✅ Security

The framework can read environmental variables from a secure source like K8s Vault. It supports JWT, RBAC and ABAC based fine grained [authorization]. For data at rest, developers can use encryption mechanisms over datastores. Log redaction allows to hide sensitive information from logs.

### ✅ Efficient Team Collaboration

Backend, Frontend and external integrations all use single source of truth based auto generation features to  stay aligned on latest developments. For example, using the generated swagger collection, to generate clients or test cases using saarthi.  

### ✅ Low on Maintenance

[Decoupled architecture](guard-rails#4-decoupled-architecture) with clear boundaries avoids technical debt. Projects remain modular, easy to update, and systematically maintainable over time.

### ✅ Full freedom and Flexibility

Godspeed gives developers the full power of the Node.js ecosystem, while adding guardrails on top. You can plug in any [event source](/docs/microservices-framework/event-sources/event-source-plugins/Overview), [data source](/docs/microservices-framework/datasources/datasource-plugins/Overview), middleware, or custom business logic without restrictions. The framework’s decoupled architecture ensures that your core workflows remain portable, so teams can evolve their stacks, swap technologies, or scale services without vendor lock-in.

### ✅ Cost Savings

Reduced bugs, faster delivery cycles, and lower maintenance translate directly into significant cost savings in both development and operations.

<!-- ![features ->](/img/features.png) -->

### Know More about the Framework

### [Guardrails](guard-rails.md)
At Godspeed, our development philosophy revolves around four core [guardrails](guard-rails.md) - Schema driven development, Configure over code, Security, Decoupled Architecture.

### [Design Principles](design-principles.md)

In order to serve above goals, the framework follows certain [design principles](design-principles.md).

### [Install Param (Godspeed) Framework ->](/docs/get-started)