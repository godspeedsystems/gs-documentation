# Starting with Godspeed's Node.js framework.

In this section, you will learn how to install the Godspeed framework using the command line interface (CLI) and how to either create a new project with the framework or integrate Godspeed into an existing project in NodeJS.

:::tip **We are coming with Godspeed Framework in Java as well. Where Developer's will be able to write events and workflows in same way as NodeJS, while for scripting tasks [`groovy`](https://groovy-lang.org/) can be used.**
:::


### Pre-requisite:

1. Node 18 and npm
2. Git
3. VS Code or any code editor

### Steps:

1. Installing Godspeed CLI
    
    Godspeed CLI is the command center of a Godspeed project. It allows you to create, manage, deploy, and monitor your Godspeed project.
    
2. Godspeed CLI is shipped via [npm](https://www.npmjs.com/). You can go ahead and install it using the below command.


```bash
   npm install -g @godspeedsystems/godspeed
```

** Try running in the below command line to see available godspeed commands.** Refer [this](/docs/CLI.md) for more information.

```bash
   godspeed --help
```
   
```bash
    > **godspeed --help**
    
    ~~~~~~ Godspeed CLI ~~~~~~
    
    Usage: Godspeed CLI [options] [command]
    
    CLI tool for godspeed framework.
    
    Options:
      -V, --version         output the version number
      -h, --help            display help for command
    
    Commands:
      create <projectName>  create a new godspeed project.
      dev                   run godspeed development server.
      clean                 clean the previous build.
      build                 build the godspeed project.
      devops-plugin         manage(add, remove, update) godspeed plugins for devops.
      plugin                manage(add, remove, update) eventsource and datasource plugins for godspeed.
      help [command]        display help for command
    
    For detailed documentation visit <https://docs.godspeed.systems>
    
```

