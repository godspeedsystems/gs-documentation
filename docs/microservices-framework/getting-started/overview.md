# Starting with Godspeed's meta-framework for Nodejs.

In this section, you will learn how to 
1. Install the meta-framework using the command line interface (CLI)
2. Check Express server setup
3. Check an HTTP endpoint and its controller (handler) function
4. Open your API endpoint in Swagger UI and test it out
5. See available plugins


### Pre-requisites:

1. Nodejs v18 (or Bunjs) 
2. Npm
2. Git
3. VS Code or any code editor
3. Linux, Mac, Windows and other OS supporting Nodejs or Bunjs

### Step 1: Installation

```bash
  npm install -g @godspeedsystems/godspeed
```

### Step 2: Create a project and start the server

1. `godspeed create my_new_project` #replace my_new_project with name of your project. This may take some time to install the required npm plugins and create your project. Be patient!

2. `cd my_new_project` #Go to your project folder
3. `godspeed serve` #Start the project
4. Check the logs. They will show http Express server is running on port 3000 
   ```
   [16:46:45.437] INFO (15281 on wwwabcomin-HP-EliteBook-840-G3): [Production Server][Running] ('express:' event source, '3001' port).
   ```

### Step 3: Test the helloworld API
1. Open `localhost:3000/api-docs` to open Swagger UI.

   ![img](../../../static/img/swagger_helloworld.png)
2. Check the `/helloworld` API endpoint in the Swagger UI. There is a `Try it out` button. Click that and hit the API. It will ask you to fill the name parameter for query. Why is Swagger asking for you to fill the name? Check the next point for that.
3. Checkout how helloworld API endpoint is defined in your project's `src/events/helloworld.yaml` file. YOu will notice the configuration of the API call are in YAML format.

  ```
    http.get./helloworld: # `http` server listening via `get` method on `/helloworld` endpoint
    fn: helloworld # the function handler to be called for this endpoint, available in `src/functions`
    params: # JSON-Schema of API parameters like query, headers, path params. Note: This is set as per Swagger standard's `parameters` syntax
      - name: name # This is our name query param
        in: headersss # Notice the in: query This could be `path` or `headers` as well
        required: true # Notice the `name` parameter is required
        schema:
          type: string
    responses: # JSON-Schema of API responses for different status codes. Note: This is set as per Swagger standard's `responses` syntax
      200:
        content:
          application/json:
            schema:
              type: string
  ```
:::tip
In the Godspeed meta-framework each API whether REST or Graphql API is called an `event`. This naming approach may be new for you. The general norm across the larger developer community is to call only `async events` as `events` - for ex. Kafka or web socket message. But in Godspeed world we consider both sync APIs (REST, Graphql) and async events (Message bus, web socket, cron) - as events. All events, whether API calls or websocket messages, trigger functions which can be thought of as event handlers (see `fn` instruction in the yaml above). The sync events return a response while async events dont have a concept of response.
:::

### Step 4: Test the validation of API inputs and outputs

Almost every application needs validation of data sent in inputs to the API and response sent back by the service. You want to make sure wrong data does not enter your service nor do you return wrong response for an API call. Let's try this feature in the framework.

1. Open your browser and hit the `/helloworld` endpoint via `localhost:3000/helloworld`. Or, run `curl -i localhost:3000/helloworld` from your terminal.
2. This should return an error with code `400` because you have not passed `name` in query - as expected by the schema of `helloworld` API. 

```
{
  "validation_error": {
    "success": false,
    "code": 400,
    "message": "request validation failed.",
    "error": "must have required property 'name' in query",
    "data": {
      "message": "The API cannot be executed due to a failure in request params schema validation.",
      "error": {
        "instancePath": "",
        "schemaPath": "#/required",
        "keyword": "required",
        "params": {
          "missingProperty": "name"
        },
        "message": "must have required property 'name' in query"
      }
    }
  }
}

```
3. If you hit `localhost:3000/helloworld?name=mastersilv3r`, it should work.
```
Hello mastersilv3r
```

 
3. If you need access to the Swagger collection, open it from `/docs` folder in your project. This is automatically generated from your API schema which we saw above. 

4. If you need the Postman Collection, import the Swagger file from `src/docs` in Postman.


Default port of your service is `3000` and Swagger endpoint is `/api-docs`. If you want to customise default settings, you can modify the ``./src/eventsources/http.yaml` For customisation and using advanced features please **checkout the [express-as-http](../event-sources/event-source-plugins/Express%20Http%20Eventsource) plugin**

### Video Tutorial - Short
There is a longer and detailed introduction video as well, below in this page.

> Note: This video mentions `godspeed dev`. This is now replaced with `godspeed serve` command. As well the `from-examples` param of `godspeed create` command is deprecated and is not advised to use. If you want some pre-made examples please check the [examples repository](https://github.com/godspeedsystems/gs-node-templates)

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '80%', height: '80%' }} src="https://www.youtube.com/embed/f1jlvaM7Sbo" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div>

### CLI

_To know more about all CLI commands, [click here](../CLI#supported-commands--arguments)_

### Building and running your project

**Building** You can build your project using the `godspeed build` command. This transpiles the TS files and copies all the source code into `/dist` folder of your project.

**Clean**  With `godspeed clean` you can remove all pre-compiled files from your `/dist` folder. While build overrides `dist` everytime, `clean` command is useful if you have deleted some files in your `src` repo. When you delete something from `src`, it doesn't delete the files in the `dist`. You may need to clean up the dist folder to remove old references to deleted files in `src`

**Local development in auto-watch mode** You can start your server on localhost using `godspeed serve`. It will run the project in autowatch mode over your local file changes.

**Production deployment:** Build your project and then run `godspeed preview` to serve directly from the `dist` folder 

#### Scaffolding of a meta-framework project
This will create a basic project with Express eventsource, a sample endpoint (event) and event handler function for the same. It will show you possible configurations of Express service with JWT authn and autorization workflows.

![Scaffolding of a new project](../../../static/img/scaffolding_new_proj.png)


- The framework generates different folders like [config](/docs/microservices-framework/config-and-mappings/config.md),[datasources](/docs/microservices-framework/datasources/overview.md) , [events](/docs/microservices-framework/event-sources/event-schema.md), [eventsources](/docs/microservices-framework/event-sources/overview.md), [functions](/docs/microservices-framework/workflows/overview.md), [mappings](/docs/microservices-framework/config-and-mappings/mappings.md), [plugins](/docs/microservices-framework/inline-scripting/script-plugins.md),etc
- The `eslintrc.json` file includes a curated list of recommended plugins that can be incorporated into the project.
- We configure [swagger specs](/docs/microservices-framework/event-sources/event-types/http-events.md#swagger-specs) in src/eventsources/http.yaml

:::tip
To understand more about the scaffolding structure of the project , Check [here](/docs/microservices-framework/getting-started/guide.md#the-project-scaffolding) 
:::

### Referencing pre-made project templates
Pre-made projects are a great place to start learning about the meta-framework. You can refer these pre-made examples to learn about different features of meta-framework, and reuse the code from there. Feel free to clone, refer and re-use the repos given below.

#### Basic Project

Repository - [Hello World](/docs/microservices-framework/getting-started/guide.md)

#### Full Stack App
A full stack app with Godspeed based backend and an embedded React project for frontend.

Repository - [With Godspeed and React](https://github.com/godspeedsystems/gs-node-templates/tree/master/FullStack_App_With_React).

#### Loan Origination System

A more complex fintech project with diverse use cases for issuing loans via multiple lenders, policies, loan offers, KYC, loan account creation etc in a microservice based design.

Repository - [Loan Origination System](https://github.com/godspeedsystems/gs-node-templates/tree/master/LOS). 

_Check the Readme.md and Setup.md files in this repo as it requires a docker container of Postgres and Kafka to be running. Dockerfile is provided in the project._

### Video Tutorial - Longer and in depth

**A walkthough on a meta-framework project with Loan Origination System example**
<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/BTPHPoI3dh0" frameBorder="0" allowFullScreen></iframe>
</div>



### For any help
Try running in the below command line to see available Godspeed commands. Refer [the full CLI spec](/docs/microservices-framework/CLI.md) for more information, including [how to add plugins for eventsources and datasources](../CLI#plugin)  


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
  serve                           run godspeed development server.
  clean                           clean the previous build.
  gen-crud-api                    scans your prisma datasources and generate
                                  CRUD APIs events and workflows
  build                           build the godspeed project.
  plugin                          manage(add, remove, update) eventsource and
                                  datasource plugins for godspeed.
  prisma                          proxy to prisma commands with some add-on
                                  commands to handle prisma datasources.
  help [command]                  display help for command

    
```
