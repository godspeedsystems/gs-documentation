# Godspeed CLI
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
  dev                             run godspeed development server.
  clean                           clean the previous build.
  gen-crud-api                    scans your prisma datasources and generate
                                  CRUD APIs events and workflows
  serve                           build and preview the production build in watch mode.
  build                           build the godspeed project.
  preview                         preview the production build.
  devops-plugin                   manage(add, remove, update) godspeed plugins
                                  for devops.
  plugin                          manage(add, remove, update) eventsource and
                                  datasource plugins for godspeed.
  prisma                          proxy to prisma commands with some add-on
                                  commands to handle prisma datasources.
  help [command]                  display help for command
For detailed documentation visit https://godspeed.systems
```

## Supported commands & arguments
| Command                            | Options                         | Description                                                                     |
| ---------------------------------- | ------------------------------- | ------------------------------------------------------------------------------- |
| create <projectName></projectName> | --from-template, --from-example | create a new godspeed project.                                                  |
| dev                                |                                 | Start the dev server.                                                           |
| clean                              |                                 | clean the previous build.                                                       |
| build                              |                                 | build the godspeed project.                                                     |
| devops-plugins                     | add, remove, update             | manage devops plugins for godspeed.                                             |
| plugins                            | add, remove, update             | manage eventsource and datasource plugins for godspeed.                         |
| gen-crud-api                       |                                 | generate CRUD APIs based on prisma schema.                                      |
| prisma                             | prepare                         | generates your prisma client for database and sync the database with the schema |

### create
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

#### Options for `create` command
```bash
$  godspeed help create
```
```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Usage: Godspeed CLI create [options] <projectName>

create a new godspeed project.

Arguments:
  projectName                            name of the project.

Options:
  --from-template <projectTemplateName>  create a project from a template.
  --from-example <exampleName>           create a project from examples.
  -h, --help                             display help for command
```

:::note
1. While using `--from-template` you have to mention the path of the project folder which you want to clone as template
2. While using `--from-example` you have to mention any name from the available examples. [available names are hello-world, mongo-as-prisma]
:::

### Running the service
You can run your Godspeed project using `godspeed serve` command. This will run your project in auto-watch mode.
```bash
 godspeed serve
```

### prisma
The `prisma` command is a proxy to prisma commands with some add-on commands to handle prisma datasources.
```bash
$  godspeed prisma [options]
```

#### prisma prepare
The `godspeed prisma prepare` generates your prisma client for database and sync the database with the schema.
```bash
$ godspeed prisma prepare
```

```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Environment variables loaded from .env
Prisma schema loaded from src/datasources/mongo.prisma
Environment variables loaded from .env
Prisma schema loaded from src/datasources/mongo.prisma
Datasource "db": MongoDB database "test" at "cluster0.syzyst8.mongodb.net"

✔ Generated Prisma Client (v5.4.2) to ./node_modules/@prisma/client in 114ms

Start using Prisma Client in Node.js (See: https://pris.ly/d/client)

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

or start using Prisma Client at the edge (See: https://pris.ly/d/accelerate)

import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()


See other ways of importing Prisma Client: http://pris.ly/d/importing-client


The database is already in sync with the Prisma schema.

✔ Generated Prisma Client (v5.4.2) to ./node_modules/@prisma/client in 115ms
```

### gen-crud-api
The `godspeed gen-crud-api` command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mongo.prisma[name of your prisma schema].
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

### plugin
Godspeed plugins are the way to extend the core Godspeed framework. Currently we support adding eventsource and datasource as plugin.
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

### devops-plugin
Godspeed devops-plugins are the way to extend the core Godspeed framework. Currently we support adding eventsource and datasource as devops-plugin.
```bash
$  godspeed help devops-plugin
```

```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Usage: Godspeed CLI devops-plugin [options] [command]

manages godspeed devops-plugins.

Options:
  -h, --help      display help for command

Commands:
  install         install a godspeed devops plugin
  list [options]  list of available godspeed devops plugins
  remove          remove a godspeed devops plugin
  update          update a godspeed devops plugin
  k8s             installed godspeed devops plugin
  help [command]  display help for command

For detailed documentation visit https://godspeed.systems

  To see help for any installed devops plugin, you can run:
  <plugin-name> help
```

#### devops-plugin install
The `godspeed devops-plugin install` command allows the user to select a devops plugin from the list of available plugins and add them to the operating system.
```bash
$ godspeed devops-plugin install
```

```

       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select devops plugin to install. (Use arrow keys)
❯ @godspeedsystems/k8s  
(Move up and down to reveal more choices)
```

#### devops-plugin remove
The `godspeed devops-plugin remove` command allows the user to select a devops plugin from the list of installed plugins and remove them from the operating system.
```bash
$ godspeed devops-plugin remove
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select a devops plugin to remove. (Use arrow keys)
❯ @godspeedsystems/k8s  
(Move up and down to reveal more choices)
```

#### devops-plugin update
The `godspeed devops-plugin update` command allows the user to select a devops plugin from the list of installed plugins and update them.
```bash
$ godspeed devops-plugin update
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select devops plugin to update. (Use arrow keys)
❯ @godspeedsystems/k8s  
(Move up and down to reveal more choices)
```

### otel
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
The `godspeed otel enable` command allows the user to enable [observability](./telemetry/overview.md) in Godspeed to collect traces, metrics and logs. It installs `@godspeedsystems/tracing` package in your project and sets OTEL_ENABLED env variable to true.   

```bash
$ godspeed otel enable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel installed successfully!
Observability has been enabled
```

#### otel disable
The `godspeed otel disable` command allows the user to disable [observability](./telemetry/overview.md) in Godspeed. It uninstalls `@godspeedsystems/tracing` package from your project and sets OTEL_ENABLED env variable to false.   
```bash
$ godspeed otel disable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel uninstalled successfully!
Observability has been disabled in the project
```
