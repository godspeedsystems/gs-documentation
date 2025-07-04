---
sidebar_position: 1
title: Guides and FAQs
description: A collection of guides and frequently asked questions about using the Godspeed Meta-Framework, covering topics such as setting up APIs, writing workflows and functions, and accessing datasources.
keywords: [Godspeed, guides, FAQs, API setup, workflows, functions, datasources, REST API, CRUD API, Swagger UI, Postman, authentication, JWT, OAuth2, callbacks, webhooks, TypeScript, inline scripting, databases, datastores, plugins, environment variables, secrets]
---

This section provides answers to common questions and step-by-step guides for using the Godspeed Meta-Framework. It covers essential topics including setting up and securing APIs (REST, CRUD, Swagger, Postman, JWT, OAuth2), writing business logic using workflows and functions (TypeScript and Javascript), and accessing various datasources like databases, APIs, and caches.

### What is Godspeed?

Godspeed is a **4th generation declarative microservice framework** for Node.js that simplifies backend development. It emphasizes **configuration-over-code**, allowing developers to build event-driven and API-based applications quickly using YAML schemas and minimal boilerplate. It supports both synchronous and asynchronous event sources like HTTP, Kafka, and Cron, and integrates with external systems via plugins.

### [How to install godspeed ?](/docs/get-started#install-godspeed)

### How to create a microservice ?

Godspeed provides a CLI-based workflow to scaffold a new backend service in minutes. Follow these steps to spin up a project using the Godspeed CLI.

Step 1: Verify Godspeed installation using `godspeed -V` command. If not found, then first install godspeed using [installation guide]((/docs/get-started#install-godspeed)).

Step 2: Create a New Project using `godspeed create <project-name>`

This generates a standard Godspeed folder structure with all required configs.

Step 3: Navigate to the project folder and open it in your preferred code editor.

```
cd <project-name>
```
**If You Want to Connect to a Database (DataSource)**

Godspeed supports various database plugins like Prisma, Mongoose, mailer, sendgrid etc.

**Add a datasource plugin**

To use postgres, sqlite, mysql, mongodb and all other [prisma-supported databases](/docs/microservices-framework/databases/Overview#list-of-currently-supported-databases)

  Install prisma plugin
  ```
  godspeed plugin add @godspeedsystems/plugins-prisma-as-datastore
  ```
  Write Prisma Schema under src/datasources/ folder.

  Check [How to Use](/docs/microservices-framework/datasources/datasource-plugins/Prisma%20Datasource#how-to-use) guide of prisma.
  

  For other datasources,
  Check the auto generated datasource configuration file to configure the datasource as per your requirements.

Then start writing apis.

**If You Want to Listen to some other EventSource like kafka, fastify, websocket, mcp etc.**

Add the eventsource plugin
```
godspeed plugin add @godspeedsystems/plugins-websocket-as-eventsource
```
Check the auto generated eventsource configuration file  `src/eventsources/<plugin-name>.yaml` to configure it as per your requirements.

Then start writing events and workflows.


### How does the Godspeed CLI help developers?

The `godspeed` CLI is your main interface for working with Godspeed projects. It can scaffold new projects, add or update plugins, start development servers, clean builds, and even generate full CRUD APIs or GraphQL schemas from defined models. It ensures all code follows Godspeed's conventions. godspeed commands run only within a godspeed framework project.


### What is the typical folder structure of a Godspeed project?

A standard Godspeed project has the following structure:

  ```
  src/
    datasources/      # YAML configs for datasources (type = plugin)
      types/          # TypeScript type definitions for datasources (import plugin classes)
    events/           # YAML configs for events (routes, triggers)
    eventsources/     # YAML configs for event sources (type = plugin)
      types/          # TypeScript type definitions for eventsources (import plugin classes)
    functions/        # TS or YAML business logic
      validations/    # Request/response validation handlers (TS/YAML)
    mappings/         # Static mappings
    index.ts          # Entry point (bootstraps Godspeed)
  config/             # Environment and default config
  docs/               # API docs (Swagger)
  ```
Each folder has a specific purpose—from defining external API integrations to business logic and routing events.

### How do I check if a plugin is installed in my Godspeed project?

You can verify installed plugins using the Godspeed CLI or by checking your project structure.

✅ Method 1: Use the CLI
Run:

```
godspeed plugin update
```
This lists all installed datasource and eventsource plugins in your project.

✅ Method 2: Check Your src/ Folder
Look under:
src/datasources/types/ — for datasource plugins (e.g., axios.ts, prisma.ts)
src/eventsources/types/ — for eventsource plugins (e.g., express.ts, kafka.ts)

Corresponding YAML config should exist under src/datasources/ or src/eventsources/

✅ Method 3: Check package.json
Look for installed plugin packages:

```
"@godspeedsystems/plugins-prisma-as-datastore": "^x.y.z",
"@godspeedsystems/plugins-kafka-as-datasource-as-eventsource": "^x.y.z"
```
If the plugin exists only here in package.json, means, it has been installed via npm and not by godspeed plugin add command.

###  What are the core concepts behind Godspeed?

The Godspeed architecture is built around **declarative entities** such as:

* **Datasources** (external API or DB definitions)
* **Events** (triggers like HTTP routes or Kafka messages)
* **Eventsources** (sources like HTTP servers or cron jobs)
* **Functions** (TS or YAML-based business logic)
* **Mappings** and **Validations** (supportive logic and error handling)


###  How do plugins work in Godspeed?

Plugins in Godspeed extend its capabilities as:

* **EventSources** (e.g., Express, Kafka, Cron)
* **DataSources** (e.g., Axios, Prisma)
* **Combined** (Kafka as both EventSource and DataSource)

They are loaded dynamically via YAML configurations where you specify the `type` (e.g., `type: axios`). The framework uses abstract classes like `GSDataSource` to enforce a standard plugin interface.


###  What does the `godspeed gen-crud-api` command do?

It asks to you select your prisma schema file and eventsource you are using, then it scans your **Prisma schema** and automatically generates:
* API event definitions
* Workflows for Create, Read, Update, Delete operations (currently in yaml)
* That can be tested via Swagger UI immediately

This command eliminates boilerplate and accelerates backend setup.


###  What are the key internal modules of the Godspeed engine?

Key internal modules include:

* `configLoader.ts`: Merges app configs.
* `datasourceLoader.ts` & `eventsourceLoader.ts`: Load and initialize plugins.
* `functionLoader.ts`: Loads all TS or YAML business logic.
* `validation/`: Validates incoming/outgoing data against schemas.
* `interfaces.ts`: Defines `GSContext`, `GSStatus`, and other core types.

### Framework Internals

- **Entity Loaders**: Each entity type (datasource, eventsource, function, mapping) has a dedicated loader that reads YAML/TS files, resolves plugin types, and instantiates the correct classes.
- **Plugin Integration**: Uses dynamic imports to load plugin classes based on the `type` field in YAML.
- **Abstract Interfaces**: All plugins must extend the appropriate abstract class (`GSDataSource`, `GSEventSource`, or `GSDataSourceAsEventSource`), which define required methods like `initClient`, `execute`, and `subscribeToEvent`.
- **Schema Validation**: Built-in validation for events and tasks using JSON schema and AJV.
- **Logging & Observability**: Integrated logging and OpenTelemetry support.


###  Where are Swagger docs generated?

Swagger JSON specs are auto-generated and stored under `src/docs/http-swagger.json`. You can view the api documentation via built-in Swagger UI, which helps in testing all APIs.

### How to create your own npm plugin for godspeed ?

- [Eventsource](/docs/microservices-framework/event-sources/create-eventsource-plugin)

- [Datasource](/docs/microservices-framework/datasources/create-datasource-plugin)

### What are the key classes and extensibility points in the Godspeed framework?

Godspeed is built around a set of core classes and interfaces that provide consistency, extensibility, and observability across workflows, plugins, and event handling. Key components include:

**GSContext**
The execution context available in every function, workflow, and plugin.
Contains inputs, outputs, config, datasources, functions, logger, and more.
Enables full traceability, logging, and resource access during event execution.

**GSCloudEvent**
Represents the incoming request or event in a standard format (CloudEvents spec).
Contains data, actor, headers, and other metadata.

**GSStatus**
Standard response object used to represent the outcome of any function or workflow.
Contains success, code, message, data, etc.

**Plugin Base Classes**
GSDataSource: Extend this for custom outbound plugins (e.g., HTTP, DBs).
GSEventSource: Extend this for plugins that handle inbound events (e.g., HTTP, Cron).
GSDataSourceAsEventSource: For dual-role plugins like Kafka.
GSCachingDataSource: For caching-specific plugins (like Redis), with get, set, del.

**Workflow Classes**
GSFunction: Base class for all tasks.
GSSeriesFunction, GSParallelFunction, GSEachParallelFunction, GSIFFunction, etc.: Manage execution flow in YAML workflows.

**Other Core Types**
GSActor: Represents the user or system initiating the event.
GSLogEvent: Structured log record used by GSContext.log_events.

These classes provide all the extensibility hooks for building plugins, writing business logic, and handling events consistently in a scalable Godspeed application.

### What is the lifecycle of a Godspeed application at startup?

When a Godspeed application starts, it goes through a defined lifecycle to prepare all runtime components. Here's how it works:

Application starts — This is triggered from the src/index.ts file in your project.

Configuration is loaded — It reads and merges all environment-specific and default configs from the config/ directory.

Datasources are initialized — Godspeed loads all YAML datasource definitions and instantiates the corresponding plugin clients from src/datasources/.

Eventsources are initialized — Plugins like Express or Kafka are set up from src/eventsources/ to start listening for incoming events.

Event definitions are loaded — Event handlers (HTTP routes, Kafka topics, etc.) are mapped to their respective functions via src/events/.

Functions and workflows are loaded — All TypeScript and YAML-based logic from src/functions/ becomes available for invocation.

Mappings and validations are loaded — Static key-value maps and request/response validation logic are pulled from src/mappings/ and src/functions/validations/.

App is ready — The service is now ready to process events, serve API requests, and run workflows based on triggers.


### How is authentication handled in Godspeed?

Godspeed supports robust and flexible authentication mechanisms using JWT, OAuth2, and custom auth workflows. Here's how you can secure your services:

**Authentication Methods**
**JWT/OAuth2:** Configure these directly in your eventsource (e.g., Express) or datasource YAML files.

Example Configuration
```
authn:
  jwt:
    secretOrKey: mysecret
    audience: mycompany
    issuer: mycompany
  oauth2:
    linkedin:
      client_id:
      client_secret:
    github:
      client_id:
      client_secret:
```
**GSActor Support**
Godspeed provides a GSActor object in every GSCloudEvent, which captures the identity and attributes of the user or system triggering the event. This makes it easy to propagate user context across workflows.

**Best Practices**
Always validate JWT tokens and propagate the actor through the GSContext.
Use role-based checks in your workflow logic or via authz tasks.
Keep your secrets and auth config in the environment-safe config/ directory.

### How do events trigger workflows in Godspeed?
In Godspeed, events are declarative triggers that activate functions or workflows. These events are typically configured in YAML files under src/events/, and are mapped to logic defined in src/functions/.

**Event-to-Function/Workflow Flow**
An event occurs — For example, an HTTP request, Kafka message, or Cron schedule.
Event is mapped to a function/workflow — The fn: field in the event YAML points to a corresponding handler.
Function/Workflow executes — The handler processes the request using the provided GSContext.

### Setting up the APIs of your service

- **[How to create Rest APIs in Godspeed framework?](/docs/microservices-framework/how-to/create-api)**

- **[How to generate CRUD APIs?](/docs/microservices-framework/CRUD_API)**

- **[How to open Swagger UI for your APIs?](/docs/microservices-framework/guide/get-started#step-3-access-swagger-ui)**

- **[How to generate postman collection for your APIs?](/docs/microservices-framework/guide/get-started#postman-collection)**  

- **[How to add JWT authentication in your Rest APIs?](/docs/microservices-framework/authentication/jwt-authentication)**

- **[How to use OAuth2 for user login and protection of your endpoints?](/docs/microservices-framework/authentication/oauth2-authentication)**

- **[How to disable authentication for a particular endpoint? ](/docs/microservices-framework/authentication/jwt-authentication#disabling-jwt-authentication-at-event-level)**

- **[How to call REST APIs using Axios?](/docs/microservices-framework/how-to/axios-apis)**

- **[How to call APIs using client SDK?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to handle API callbacks and webhooks?](/docs/microservices-framework/how-to/callbacks)**



### Writing your Workflows or Functions
In Godspeed, the words Workflows and Functions mean one and the same thing, i.e. your business logic.

- **[How to write typescript workflows in godspeed?](/docs/microservices-framework/workflows/native-language-functions)**

- **[How to use inline scripting in Godspeed YAML configurations and workflows?](/docs/microservices-framework/inline-scripting/overview)**



<!-- - **[When to prefer writing typescript workflows over yaml? And vice versa?]() -->

### Accessing other APIs, databases and datastores from workflows
In Godspeed, datasource can mean any place where you send or retrieve data from. It could mean:
- External APIs
- Datastores
  - Databases (Types - SQL, NoSQL, graph, key value, columnar, OLAP, OLTP, document)
  - Caches
  - Search engine
  - Vector stores (specially useful for AI and recommendation engines)
  - File system or files
  - Memory
  
- **[How to Send Emails with Nodemailer in Godspeed?](/docs/microservices-framework/datasources/datasource-plugins/Nodemailer%20Datasource.md)**

- **[How to access databases using Prisma?](/docs/microservices-framework/databases/Overview)**

- **[How to access databases using Mongoose?](/docs/microservices-framework/databases/MongoDB#mongoose-as-datasource-plugin)**

- **[How to access any datastore by creating a custom datasource?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to invoke datasource clients from typescript workflows?](/docs/microservices-framework/how-to/call-datasource)**

- **[How to access the environment variables from the typescript workflows?](/docs/microservices-framework/how-to/short-faqs)**

- **[How to update and run the project after renaming any file?](/docs/microservices-framework/how-to/short-faqs#how-to-update-and-run-the-project-after-renaming-any-file)**

- **[How to handle secrets, api keys, connection_urls etc.?](/docs/microservices-framework/config-and-mappings/config#step-1-define-environment-variables-in-yaml-configuration)**

- **[How to export a variable in environment ?](/docs/microservices-framework/config-and-mappings/config#step-2-set-environment-variable-values)**

