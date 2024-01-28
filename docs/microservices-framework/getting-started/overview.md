# Starting with Godspeed's Node.js framework.

In this section, you will learn how to install the Godspeed framework using the command line interface (CLI) and how to either create a new project with the framework or integrate Godspeed into an existing project in NodeJS.

:::tip **We are coming with Godspeed Framework in Java as well. Where Developer's will be able to write events and workflows in same way as NodeJS, while for scripting tasks [`groovy`](https://groovy-lang.org/) can be used.**
:::


### Pre-requisites:

1. Node 18 and npm
2. Git
3. VS Code or any code editor

### Demonstration
<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/f1jlvaM7Sbo" frameborder="0" allowfullscreen></iframe>
</div>

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
You can create a project with pre-made examples as well. Check [Hello World](/docs/microservices-framework/getting-started/create-hello-world.md) and [Blog](/docs/microservices-framework/getting-started/create-blog-project.md) projects. 

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

## Swagger Specs

- To enable swagger ui add docs in "./src/eventsources/http.yaml"

- / is the default endpoint,if you want to provide your custom swagger endpoint, you can modify the endpoint from "./src/eventsources/http.yaml"

- Update http.yaml( src/eventsources/http.yaml )

```
type: express
port: 3000
docs:
  endpoint: /
```