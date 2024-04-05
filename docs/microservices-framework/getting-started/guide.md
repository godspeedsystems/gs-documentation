# Guide - How to build applications with godspeed.

In the previous section we got an understanding on how to setup godspeed for your local development and create a new project via cli commands. This section is dedicated to providing hands-on practice in constructing comprehensive backend services utilizing the Godspeed framework and its associated plugins. Additionally, it aims to facilitate a thorough understanding of all the fundamental concepts underpinning the Godspeed framework.

## First steps.

Let's create a project that includes a simple 'hello world' example for both [events](/docs/microservices-framework/event-sources/event-schema.md) and [functions](/docs/microservices-framework/workflows/overview.md) to provide an overview of how these components function within the Godspeed framework.

1. Create a project using Godspeed CLI with below command:

```bash
godspeed create hello-world # hello-world is the name of the app
```

Below is the sample for creating a project

```bash
> godspeed create hello-world # hello-world is the name of the app

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

Successfully created the project hello-world.
Use `godspeed help` command for available commands.

Happy building microservices with Godspeed! 🚀🎉
```

### The Project Scaffolding

Framework will give you below folder structure.

```
    ├── config
    │   ├── custom-environment-variables.yaml
    │   |
    |   ├── default.yaml
    |
    ├── eslintrc.json
    |
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── axios.ts
        |   |
        │   └── api.yaml
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions
        │   |
        |   └── helloworld.yaml
        |
        └── mappings
        |   |
        |   └── index.yaml
        |
        └── plugins
            |
            └── sample.js
```

:::tip Note

- The framework generates different folders like [config](/docs/microservices-framework/config-and-mappings/config.md),[datasources](/docs/microservices-framework/datasources/overview.md) , [events](/docs/microservices-framework/event-sources/event-schema.md), [eventsources](/docs/microservices-framework/event-sources/overview.md), [functions](/docs/microservices-framework/workflows/overview.md), [mappings](/docs/microservices-framework/config-and-mappings/mappings.md), [plugins](/docs/microservices-framework/inline-scripting/script-plugins.md),etc
- The `eslintrc.json` file includes a curated list of recommended plugins that can be incorporated into the project.
- We configure [swagger specs](/docs/microservices-framework/event-sources/event-types/http-events.md#swagger-specs) in src/eventsources/http.yaml

2. The default port number is `3000`, if you want to provide your custom port number, you can modify the port number from **"./src/eventsources/http.yaml"** also if you want to configure and use http eventsources advance features please checkout the [express-as-http](/docs/microservices-framework/event-sources/event-source-plugins#1-express-as-http) plugin

```yaml
type: express
port: 3000
```

3.  Run `godspeed serve` to start the development server.

```bash
godspeed serve
```

4. The server is up and running on port 3000 ([http://localhost:3000/api/v1/helloworld](http://localhost:3000/api/v1/helloworld))

:::tip Note

- Here, '/api/v1' is the base_url for the HTTP service. You can modify the base_url from [./src/eventsources/http.yaml](/docs/microservices-framework/event-sources/event-types/http-events#update-httpyaml-srceventsourceshttpyaml-).

![hello world output](./hello_world.png)

**Voila!** Your API backend is up and running. You can use Postman to test your API's.

### You can also run godspeed project in Repl:

<a href="https://replit.com/@GodspeedSystems/Godspeed-sample-project">
<img src="https://ik.imagekit.io/pavanKillada/replit.png?updatedAt=1699698406263" width="800" height="400" alt="replit" />
</a>

<br />

#### Now lets understand how our `helloworld` api endpoint is working behind the scene

### Event schema

**"./src/events/helloworld.yaml"**

```yaml
"http.get./helloworld":
  fn: helloworld
  authn: false
```

lets understand the first line from the above snippet `http.get./helloworld`: [[know more]](/docs/microservices-framework/event-sources/event-schema)

#### `http`: Protocol http eventsource

#### `get` : method

#### `/helloworld`: endpoint

We are exposing an endpoint with a `get` method on `http` protocol. this endpoint is calling a workflow [a simple function ] `fn`: `helloworld` second line of the above code snippet.

### Workflow schema

**"./src/events/helloworld.yaml"**

```yaml
id: helloworld
tasks:
  - id: first_task
    fn: com.gs.transform
    args:
      name: "Hello World!"
```

the helloworld event is calling the above code snippet ([workflow](<(/docs/microservices-framework/workflows/overview)>)) and executing a task from tasks with id `first_task`, which is then calling `fn: com.gs.transform` function that takes argument name in an [inline script](/docs/microservices-framework/inline-scripting/overview).

<br />
So far we have seen how can we use express with godspeed and also we created an endpoint which return a `hello world` message. Godspeed framework make it easy for you to get started quickly saving your time setting everthing from scratch.

Up to this point, we've explored integrating Express with Godspeed, also we created an endpoint that returns a simple 'hello world' message. The Godspeed framework streamlines the process, enabling you to kickstart your projects swiftly without the hassle of setting up everything from scratch.

### How to protect your route/endpoint with jwt tokens

configure the eventsource to enable jwt authentication

**"./src/eventsources/http.yaml"**

```
type: express
jwt:
  issuer: <#config.issues#> # must be equal to the key iss in your jwt token
  audience: <#config.audience#> #must be equal to the key aud in your jwt token
  secretOrKey: <#config.secret#>
```

And now update your event and set `authn: true`

**"./src/events/helloworld.yaml"**

```yaml
"http.get./helloworld":
  fn: helloworld
  authn: true
```

### [Use native workflows/functions](/docs/microservices-framework/workflows/native-language-functions)

Developers can write workflows in native Javascript and Typescript also, lets see how the above `helloworld.yaml` workflow would look like in js/ts to get the same output.

```js
import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";

export default async function execute(ctx: GSContext, args: PlainObject) {
  const responseData = { name: "Hello World!" };
  return new GSStatus(true, 200, undefined, responseData, undefined);
}
```

we are importing [GSContext](/docs/microservices-framework/workflows/native-language-functions#what-is-gscontext-) & [GSStatus](/docs/microservices-framework/workflows/native-language-functions#gsstatus) from core package of godspeed. go to their respective section to more about it.

### [Handle errors in workflow](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows#using-on_error)

Framework handles errors for you, all you need to do is add `on_error` in your workflows and see the magic.
You can handle errors on workflow level as well as task level. [[know more]](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows#using-on_error)

**"./src/events/helloworld.yaml"**

```yaml
summary: hello world summary
description: Lets hit an API and send data to Kafka
tasks:
  - id: first_task
    fn: com.gs.transform
    args:
      name: "Hello World!"
    on_error:
      continue: false
      response:
        code: 400
        data: "error occured"
```

:::tip Note
For further learning resources and materials to kickstart your Godspeed development journey, please clone the [gs-node-templates](https://github.com/godspeedsystems/gs-node-templates.git) repository. This repository contains two examples.

- hello_world
- LOS

In the given video, we explain the LOS code.

- Before running the LOS code, ensure that 'PostgreSQL' and 'Kafka' are running on your system. Modify the PostgreSQL URL according to your PostgreSQL connection string and configure Kafka settings in the '.env' file to align with your Kafka setup.

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/BTPHPoI3dh0" frameBorder="0" allowFullScreen></iframe>
</div>
