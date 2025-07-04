---
sidebar_position: 1
title: Godspeed CLI
description: A comprehensive reference for the Godspeed Command Line Interface (CLI), covering installation, core commands for project creation, development, building, and deployment, managing plugins, interacting with Prisma, enabling observability, and troubleshooting common issues.
keywords:
  [
    Godspeed,
    CLI,
    command line interface,
    installation,
    create,
    serve,
    build,
    clean,
    preview,
    gen-crud-api,
    plugin,
    prisma,
    otel,
    observability,
    troubleshooting,
    guide,
    documentation,
  ]
toc_min_heading_level: 2
toc_max_heading_level: 4
---

### Overview

This document provides a detailed guide to the Godspeed Command Line Interface (CLI), the primary tool for interacting with Godspeed projects. It covers how to install the CLI and explains the usage and functionality of its various commands, including those for project creation, running the development server, building and previewing projects, generating CRUD APIs, managing plugins, working with Prisma, and enabling Open Telemetry. Troubleshooting steps for common CLI errors are also included.

### Godspeed Commands

Once Godspeed CLI is installed, the `godspeed` command can be called from command line. When called without arguments, it displays its help and command usage.

```
$  godspeed
```

```bash

       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Usage: Godspeed CLI [options] [command]
CLI tool for godspeed framework.
Options:
  -V, --version                   output the version number
  -h, --help                      display help for command
Commands:
  create [options] <projectName>  create a new godspeed project.
  serve                           run the development server in watch mode.
  build                           build the godspeed project.
  clean                           clean the previous build.
  preview                         run the build in a hosted environment like            production                      or development.
  gen-crud-api                    scans your prisma datasources and generate
                                  CRUD APIs events and workflows
  plugin                          manage(add, remove, update) eventsource and
                                  datasource plugins for godspeed.
  prisma                          proxy to prisma commands with some add-on
                                  commands to handle prisma datasources.
  help [command]                  display help for command
```

### Create: To create a new project

---

The `create` command creates project structure for your microservice. When called without arguments, it creates project structure with default examples.

```bash
$  godspeed create my-service
```

```bash
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

…  waiting   Cloning project template.
✔  success   Cloning template successful.
…  waiting   Generating project with default examples.
…  waiting   Generating project files.
✔  success   Successfully generated godspeed project files.

dependencies installed successfully!

Successfully created the project my-service.
Use `godspeed help` command for available commands.

Happy building microservices with Godspeed! 🚀🎉
```

---

### Serve: To Run the service for local development

---

You can run your Godspeed project using `godspeed serve` command. This will build and run your project in auto-watch mode.

```bash
 godspeed serve
```

:::tip
In order to run a full stack application with Godspeed service as your backend, you can use Lerna. Check the example of full stack application in [gs-node-templates repository](https://github.com/godspeedsystems/gs-node-templates).
:::

---

### Build: Building the service for hosted deployment

---

You can build your Godspeed project using `godspeed build` command. This will build your project and copy the contents in `/dist` folder.

```bash
 godspeed build
```

---

### Preview: Running the service in hosted environment

You can run your Godspeed project using `godspeed preview` command. This will require `godspeed build` to be run prior because preview renders the project from the `dist` folder.

```bash
 godspeed preview
```

### Clean: to remove the dist/ directory

```
godspeed clean
```

Removes the dist/ directory and resets prior build artifacts.

### Plugin: Install & Manage Plugins

---

Godspeed plugins are the way to extend the core Meta Framework. Currently we support adding eventsource and datasource as plugin.

```bash
$  godspeed help plugin
```

```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

Usage: Godspeed CLI plugin [options] [command]

manage(add, remove, update) eventsource and datasource plugins for godspeed.

Options:
  -h, --help           display help for command

Commands:
  add                  Gives a list of all plugins and ask you to select
  remove               Gives a list of all plugins and ask you to select
  add [pluginName]     Add an eventsource/datasource plugin.
  remove [pluginName]  Remove an eventsource/datasource plugin.
  update               Update an eventsource/datasource plugin.
  help [command]       display help for command

For detailed documentation visit https://godspeed.systems

```

---

### Plugin Add: To install godspeed plugin

---

The `godspeed plugin add` command allows you to install plugins into your Godspeed project. You can use it in two ways:

#### Interactive Mode (Default)

This opens a CLI prompt to select from available plugins:

```bash
$ godspeed plugin add
```

You'll see a list of officially supported plugins like `prisma-as-datastore`, `axios-as-datasource`, `aws-as-datasource`, etc., and you can choose the ones you want using the arrow keys and spacebar.

```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```

---

### Direct Plugin Installation by package name

---

You can also directly install a plugin by specifying its NPM package name:

```bash
$ godspeed plugin add @godspeedsystems/plugins-<plugin-name>
```

This is useful when scripting setups or when you already know the exact plugin you need.

#### Example:

```bash
$ godspeed plugin add @godspeedsystems/plugins-express-as-http
```

```bash
$ godspeed plugin add @godspeedsystems/plugins-kafka-as-datasource-as-eventsource
```

---

### Plugin Remove

---

The `godspeed plugin remove` command allows the user to select a plugin from the list of available plugins and remove them from the project.

```bash
$  godspeed plugin remove
```

```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

? Please select godspeed plugin to uninstall: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ express-as-http                        │ Godspeed event source plugin for express as http server                        │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                    │ Prisma as a datasource plugin for Godspeed Framework.                          │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ axios-as-datasource                    │ Axios as datasource plugin for Godspeed Framework                              │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```

### Plugin Update

The `godspeed plugin update` command allows the user to select a plugin from the list of available plugins and update them.

```bash
$  godspeed plugin update
```

```bash
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to update: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ express-as-http                        │ Godspeed event source plugin for express as http server                        │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                    │ Prisma as a datasource plugin for Godspeed Framework.                          │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ axios-as-datasource                    │ Axios as datasource plugin for Godspeed Framework                              │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```

### prisma prepare: for Prisma DB Setup

Godspeed wraps Prisma CLI with additional support.

```bash
godspeed prisma prepare
```

This command:

- Compiles the Prisma schema from src/datasources/`<your_schema>`.prisma
- Generates Prisma client
- Syncs database schema
- Creates client in `src/datasources/prisma-clients/`

Use this after editing your \*.prisma schema or modifying your .env DB credentials.

### Otel: Enabling and disabling Open Telemetry

CLI provides `otel` command to enable/disable observability in Godspeed.

```bash
$ godspeed help otel
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Usage: Godspeed CLI otel [options] [command]

enable/disable Observability in Godspeed.

Options:
  -h, --help      display help for command

Commands:
  enable          enable Observability in project.
  disable         disable Observability in project.
  help [command]  display help for command

For detailed documentation visit https://godspeed.systems
```

#### otel enable

The `godspeed otel enable` command allows the user to enable [observability](./telemetry/overview.md) in Godspeed to collect traces, metrics and logs.

```bash
$ godspeed otel enable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel installed successfully!
Observability has been enabled
```

The above command performs these two functions:

##### A. Installs `@godspeedsystems/tracing` package

This package includes auto-instrumentation of the following plugins to collect traces:

**1.** [http](https://nodejs.org/api/http.html) and [https](https://nodejs.org/api/https.html) requests.  
**2.** [Prisma datasource plugin](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md).

##### B. Sets OTEL_ENABLED env variable to true

By setting `OTEL_ENABLED` to true, the following actions are performed:

**1. Traces**: starts the auto-instrumentation of traces present in the `@godspeedsystems/tracing` package.  
**2. Metrics**: starts exposing application metrics at `/metrics` endpoint of the service. Currently, the framework exposes HTTP and [Prisma datasource](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md) metrics.  
**3. Logs**: starts dumping the service logs in [OTEL log format](./telemetry/logging.md/#log-format) in console provided NODE_ENV is not equal to 'dev'

:::info
Telemetry data for custom plugins

Follow this [Github issue](https://github.com/godspeedsystems/gs-tracing/issues/2) to know how auto-instrumentation can be enabled for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../microservices-framework/datasources/datasource-plugins/Overview.md) plugins.  
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1016) to know how prometheus based metrics can be exposed for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../microservices-framework/datasources/datasource-plugins/Overview.md) plugins.
:::

#### otel disable

The `godspeed otel disable` command allows the user to disable [observability](./telemetry/overview.md) in Godspeed.

```bash
$ godspeed otel disable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel uninstalled successfully!
Observability has been disabled in the project
```

The above command performs these two functions:

##### A. Uninstalls `@godspeedsystems/tracing` package from your service.

##### B. Sets OTEL_ENABLED env variable to false

Setting `OTEL_ENABLED` to false stops all the actions performed in [otel enable](#b-sets-otel_enabled-env-variable-to-true) command

### Auto Generate GraphQL schema

```
godspeed gen-graphql-schema
```

Generates a GraphQL schema automatically from your existing Godspeed events and workflows.

---

## Actionable CLI Usage Examples

### Create a New Project

```bash
godspeed create my-service
```

### Add a Plugin (Interactive)

```bash
godspeed plugin add
```

### Add a Plugin (Direct by Name)

```bash
godspeed plugin add @godspeedsystems/plugins-express-as-http
```

### Generate CRUD APIs

```bash
godspeed gen-crud-api
```

### Prepare Prisma Client

```bash
godspeed prisma prepare
```

### Serve Project in Watch Mode

```bash
godspeed serve
```

### Build Project

```bash
godspeed build
```

### Clean Build Artifacts

```bash
godspeed clean
```

---

## Troubleshooting & FAQ

- **Q: CLI command not found?**
  - Ensure Godspeed CLI is installed globally (`npm install -g @godspeedsystems/godspeed`).
- **Q: Permission denied on Windows?**
  - Run PowerShell as Administrator and set execution policy: `Set-ExecutionPolicy RemoteSigned`.
- **Q: Port already in use?**
  - Stop other services on the port or change the port in `src/eventsources/http.yaml`.
- **Q: Plugin not installing?**
  - Check your internet connection and NPM registry settings.
- **Q: Prisma errors?**
  - Ensure your database is running and `.env` is configured.

---

## LLM Guidance & Prompt Templates

- **Prompt:** "Generate a bash script to scaffold a Godspeed project, add the Prisma plugin, and generate CRUD APIs."
- **Prompt:** "Show me the CLI command to remove a plugin named 'kafka-as-datasource-as-eventsource'."
- **Prompt:** "How do I run the Godspeed project in production mode?"
- **Prompt:** "What is the command to preview the build?"

---

## Best Practices & Anti-Patterns

**Best Practices:**

- Use `godspeed --help` to discover all available commands
- Script repetitive CLI tasks for automation
- Always run `godspeed prisma prepare` after changing your Prisma schema
- Use environment variables for secrets/config
- Keep CLI and plugins up to date

**Anti-Patterns:**

- Running CLI as root unnecessarily
- Hardcoding secrets in scripts
- Ignoring CLI errors or warnings
- Skipping `prisma prepare` after schema changes

---

## Cross-links

- [API & Event](./API%20&%20Event.md)
- [Workflows](./workflows/overview.md)
- [Plugins](./plugins/sample-configs.md)
- [Datasources](./datasources/overview.md)
- [Authentication](./authentication/overview.md)

---

## CLI Workflow Diagram

```mermaid
graph TD
  A[User runs CLI command] --> B[Parse command & args]
  B --> C{Is it a project command?}
  C -- Yes --> D[Run project scaffolding/build/serve]
  C -- No --> E{Is it a plugin command?}
  E -- Yes --> F[Install/Remove/Update plugin]
  E -- No --> G{Is it a Prisma command?}
  G -- Yes --> H[Run Prisma prepare/gen-crud-api]
  G -- No --> I[Show help or error]
```

---

## Glossary

- **Scaffold:** Automatically generate project structure
- **Plugin:** Extension for new datasources/eventsources
- **CRUD:** Create, Read, Update, Delete API endpoints
- **Prisma:** ORM for database access
- **Serve:** Run project in development mode
- **Preview:** Run built project in production-like mode
- **Build:** Compile project for deployment
- **Clean:** Remove build artifacts
