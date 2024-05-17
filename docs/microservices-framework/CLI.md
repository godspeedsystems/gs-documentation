---
sidebar_position: 1
title: Godspeed CLI
toc_min_heading_level: 2
toc_max_heading_level: 4
---

CLI to create and manage Godspeed projects.

## About

Godspeed CLI is the primary way to interact with your Godspeed project from the command line. It provides a bunch of useful functionalities during the project development lifecycle.

## How to install

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


For detailed documentation visit https://godspeed.systems


```

### Creating a new project

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

### Running the service for local development

You can run your Godspeed project using `godspeed serve` command. This will build and run your project in auto-watch mode.

```bash
 godspeed serve
```

:::tip

In order to run a full stack application with Godspeed service as your backend, you can use Lerna. Check the example of full stack application in [gs-node-templates repository](https://github.com/godspeedsystems/gs-node-templates).

:::


### Building the service for hosted deployment

You can build your Godspeed project using `godspeed build` command. This will build your project and copy the contents in `/dist` folder. 

```bash
 godspeed build
```

### Running the service in hosted environment

You can run your Godspeed project using `godspeed preview` command. This will require `godspeed build` to be run prior because preview renders the project from the `dist` folder. 

```bash
 godspeed preview
```

### Using Plugins

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
  add [pluginName]     Add an eventsource/datasource plugin.
  remove [pluginName]  Remove an eventsource/datasource plugin.
  update               Update an eventsource/datasource plugin.
  help [command]       display help for command


For detailed documentation visit https://godspeed.systems


```

#### plugin add

The `godspeed plugin add` command allows the user to select a plugin from the list of available plugins and add them to the project.

```bash
$  godspeed plugin add
```
```bash

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

#### plugin remove

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




### Generating CRUD API

Currently the framework generates CRUD API using Prisma's database model files and ORM client. 

:::tip
You can use prisma commands without yourself installing prisma through Godspeed, via `godspeed prisma <prisma_command_and_args>`. The `godspeed prisma` command is a proxy to prisma commands with some add-on commands to handle prisma datasources.
:::

Steps
1. If you already have an existing database, you can [introspect it](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-typescript-postgresql) and generate the Prisma model file using `godspeed prisma db pull`. This will generate your .prisma file. 
  
  1.1 Copy the generated file to `src/datasources` folder and rename it as per the name of this datasource that you want to keep. If you don't have an existing database setup with a model, then create a prisma model file from scratch. 
  
  1.2 Make sure to note the `output` parameter in the .prisma file which should point to location in `src/datasources/prisma-clients/<name_of_your_prisma_file>` and `previewFeatures` is to be added in case you want to generate metrics for prisma queries for telemetry. 

  If your file name is lending_service_db.prisma, your file content should look like this. 
  ```prisma
    datasource db {
      provider = "postgresql" // or "mysql", "sqlite", "sqlserver" etc.
      url      = env("POSTGRES_URL")
    }

    generator client {
      provider = "prisma-client-js"
      output   = "./prisma-clients/lending_service_db"
      previewFeatures = ["metrics"]
    }

    model User {
      id               Int               @id @default(autoincrement())
      pan_number            String            @unique ///@encrypted
    }
  ```
2. Run `godspeed prisma prepare`. It will 

  2.1 Generate your prisma client for your given schema and DB. It will place the generated client in the `src/datasources/prisma-clients/` folder. This is achieved internally by `prisma generate` command. 

  2.2 It will setup the provided schema on the database which is provided in the .prisma file. This is achieved internally by the command `prisma db push`

  ```bash

  $ godspeed prisma prepare
  ```
  
3. Generate CRUD API
 
  The `godspeed gen-crud-api` command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/<prisma_db_name>.prisma

  ```bash
  $  godspeed gen-crud-api
  ```

```

       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝



> blog-app@1.0.0 gen-crud-api
> npx @godspeedsystems/api-generator

Select datasource / schema to generate CRUD APIs
(x) mongo.prisma
( ) For all
( ) Cancel

```
  4. Inspect generated events, definitions and functions.

    ![img](../../static/img/generated_crud_api.png)

    4.1 Generated events use definitions defined in `src/definitions` folder, which are in JSON schema format
    
    4.2 Generated functions are currently YAML functions

  5. Swagger spec would have been automatically generated. 

  6. Open your swagger endpoint in the browser and test your CRUD app from end to end
  
   `localhost:<http_port>/<http_docs_endpoint>` which is by default `localhost:3000/api-docs`

  7. To expose same API via Graphql, simply add Graphql plugin and change your event URIs which have `http` to `http & graphql`, keeping the rest as the same. See how to do this in detail in the [Apollo Graphql plugin documentation](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md)

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
Follow this [Github issue](https://github.com/godspeedsystems/gs-tracing/issues/2) to know how auto-instrumentation can be enabled for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.   
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1016) to know how prometheus based metrics can be exposed for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.
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
