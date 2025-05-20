---
sidebar_position: 1
title: Godspeed CLI
description: A comprehensive reference for the Godspeed Command Line Interface (CLI), covering installation, core commands for project creation, development, building, and deployment, managing plugins, interacting with Prisma, enabling observability, and troubleshooting common issues.
keywords: [Godspeed, CLI, command line interface, installation, create, serve, build, clean, preview, gen-crud-api, plugin, prisma, otel, observability, troubleshooting, guide, documentation]
toc_min_heading_level: 2
toc_max_heading_level: 4
---

### About

This document provides a detailed guide to the Godspeed Command Line Interface (CLI), the primary tool for interacting with Godspeed projects. It covers how to install the CLI and explains the usage and functionality of its various commands, including those for project creation, running the development server, building and previewing projects, generating CRUD APIs, managing plugins, working with Prisma, and enabling Open Telemetry. Troubleshooting steps for common CLI errors are also included.

### How to install Godspeed

```bash
npm install -g @godspeedsystems/godspeed
```
or
```bash
yarn global add @godspeedsystems/godspeed
```
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

### Godspeed Commands

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
### Help plugin: To get help in Plugin commands
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
You’ll see a list of officially supported plugins like `prisma-as-datastore`, `axios-as-datasource`, `aws-as-datasource`, etc., and you can choose the ones you want using the arrow keys and spacebar.

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
### Direct Plugin Installation by Name
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
$ godspeed plugin add @godspeedsystems/plugins-cron-as-eventsource
```
---
#### plugin remove
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
#### plugin update

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

### Enabling and disabling Open Telemetry
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
**1. ** [http](https://nodejs.org/api/http.html) and [https](https://nodejs.org/api/https.html) requests.   
**2. ** [Prisma datasource plugin](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md).

##### B. Sets OTEL_ENABLED env variable to true
By setting `OTEL_ENABLED` to true, the following actions are performed:   
**1. Traces**: starts the auto-instrumentation of traces present in the `@godspeedsystems/tracing` package.   
**2. Metrics**: starts exposing application metrics at `/metrics` endpoint of the service. Currently, the framework exposes HTTP and [Prisma datasource](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md) metrics.    
**3. Logs**: starts dumping the service logs in [OTEL log format](./telemetry/logging.md/#log-format) in console provided NODE_ENV is not equal to 'dev'

:::infoTelemetry data for custom plugins
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
