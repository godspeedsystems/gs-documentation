# Starting with Godspeed's Node.js framework.

In this section, you will learn how to install the Godspeed framework using the command line interface (CLI) and how to either create a new project with the framework or integrate Godspeed into an existing project in NodeJS.

:::tip **We are coming with Godspeed Framework in Java as well. Where Developer's will be able to write events and workflows in same way as NodeJS, while for scripting tasks [`groovy`](https://groovy-lang.org/) can be used.**
:::


### Pre-requisites:

1. Node 18 and npm
2. Git
3. VS Code or any code editor

### Installation

Godspeed CLI is the command center of a Godspeed project. It allows you to create & manage your Godspeed project. It is shipped via [npm](https://www.npmjs.com/package/@godspeedsystems/godspeed). You can go ahead and install it using the below command.


```bash
   npm install -g @godspeedsystems/godspeed
```

### Install VSCode Plugin
Please refer to [this page](/docs/microservices-framework/vscode-extension/language-tools.md) to install Godspeed's VSCode plugin which will assist you with development.

### Creating your project
You can create a blank project like this.
```bash
  godspeed create <project_name>
```
You can create a project with pre-made examples as well. Check [Hello World](/docs/microservices-framework/getting-started/guide.md) and [Build a Full-Stack Web App with Godspeed and React](https://github.com/godspeedsystems/gs-node-templates/tree/master/FullStack_App_With_React). 

### Building and running your project

You can build your project using the `godspeed build` command, and clean using `godspeed clean`. You can start your server on localhost or production machine using `godspeed serve`. It will run in autowatch mode over your local file changes. 

### For any help
Try running in the below command line to see available Godspeed commands. Refer [the full CLI spec](/docs/microservices-framework/CLI.md) for more information.


```bash
   godspeed --help
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
  build                           build the godspeed project.
  devops-plugin                   manage(add, remove, update) godspeed plugins
                                  for devops.
  plugin                          manage(add, remove, update) eventsource and
                                  datasource plugins for godspeed.
  prisma                          proxy to prisma commands with some add-on
                                  commands to handle prisma datasources.
  help [command]                  display help for command

    
```

:::tip
To understand the general scaffolding structure of the project , Check [here](/docs/microservices-framework/getting-started/guide.md#scaffolding) 
:::