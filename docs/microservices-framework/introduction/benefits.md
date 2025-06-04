# Why Godspeed?

Godspeed is more than just a meta-framework—it’s a philosophy for building modular, scalable, and error-resilient systems with minimal boilerplate. It embodies key software design principles, turbocharged with plugins, schema-based automation, and observability—all with a configure-over-code approach.

## Core Benefits

### Single Source of Truth

* API schemas are directly and automatically derived from the **Prisma-based DB schema**.
* One-to-one mapping ensures that changing the database (e.g., Postgres → MySQL) doesn’t require changing the API or workflow code.

### Schema-Driven Development

* Types and validations are auto-generated from the DB schema using Prisma ORM.
* Eliminates duplication and reduces chances of mistakes in type definitions or API specifications.

### Built-in Validation and Authentication

* Request and response validations are handled automatically from the schema.
* No need to define separate validation logic or schemas.
* AuthN/AuthZ is declarative and decoupled from the core workflows.

### Modular and Decoupled Architecture

* Functions are independent of:

  * The HTTP server implementation.
  * The authentication mechanism.
  * The protocol (HTTP, gRPC, GraphQL, etc.)
* Enables:

  * Writing **unit tests without running the server**.
  * Easily swapping or upgrading protocols/servers (e.g., from Express to Fastify or to gRPC).
  * Uniform testing strategies in CI pipelines or pre-commit hooks.

### Configure Over Code

* Replace large codebases with small, declarative configuration files.
* OAuth2 (Google, GitHub, LinkedIn) works through configuration, not hand-written integrations.
* Protocol changes or API additions don’t require framework changes—just update your event/config files.

### Fine-Grained API and Workflow Definitions

* APIs are **automatically generated and strongly typed**, minimizing incorrect inputs.
* Swagger/OpenAPI spec is generated and versioned with the codebase, offering:

  * Centralized, up-to-date API documentation.
  * Seamless collaboration across frontend/backend/microservices.

### Observability and Tracing

* Uses **OpenTelemetry format** and **Pino logging**.
* Emits logs, traces, and metrics with complete context:

  * API route, function ID, user info, request ID, span ID, etc.
* Integrates with platforms like **Grafana, Datadog, Sentry**, and more.

### Performance and Developer Experience

* Pino logger ensures better performance than traditional `console.log`.
* Project scaffolding, CLI tooling, and plugin integrations reduce time-to-production drastically.
* Minimal boilerplate = faster onboarding, easier debugging, and fewer errors.

## Guardrails: The Four Pillars of Godspeed

1. **Schema-Driven Everything**

   * All components—events, workflows, validations—are driven by schemas.
   * Ensures consistency and predictability across the stack.

2. **Configure Over Code**

   * Empower devs to define behavior declaratively via YAML/JSON.
   * Reduces cognitive load and maintenance overhead.

3. **Security First**

   * Built-in support for OAuth2, JWT, and custom AuthN/AuthZ.
   * Encourages secure-by-default workflows, with minimal developer overhead.

4. **Decoupled Components**

   * Everything—from event sources to workflows—is **loosely coupled** and **interchangeable**.
   * Promotes clean separation of concerns and long-term maintainability.


