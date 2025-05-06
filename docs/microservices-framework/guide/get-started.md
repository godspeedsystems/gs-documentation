---
title: Getting Started with Godspeed
description: A comprehensive guide to installing the Godspeed Meta-Framework, creating your first project(aka service), running the development server, accessing Swagger UI, and testing a basic API.
keywords: [Godspeed, Meta-Framework, installation, setup, project (service) creation, CLI, running project (service) locally, Swagger UI, API testing, helloworld, guide, tutorial]
---

This guide provides a step-by-step guide to install and get started with Godspeed Meta-Framework. It covers the prerequisites and installation process, both manual and using easy installation scripts. You will learn how to create your first Godspeed project or service, run the development server, access the automatically generated Swagger UI, and test a basic helloworld API. The guide also includes troubleshooting tips for common errors and a walkthrough of the project's scaffolding structure.

Whether you're having trouble with setup, configurations or understanding the framework, try asking [Godspeed GPT](https://chatgpt.com/g/g-Zsh9qhlGw-vishwakarma) or you can [access the FAQs in the Guides section](/docs/microservices-framework/guides)


### Watch this One-Click Installation Guide

<div style={{ position: 'relative', paddingBottom: '50.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '100%', height: '80%' }} src="https://www.youtube.com/embed/xb0fgMmFywc?si=EhuxwGAXJSSmOUCX" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div>

## Installing Godspeed

### Quick Installation

### Windows Users

1. Download the [setup.bat](../../../static/setup.bat) file
2. Open Command Prompt as Administrator
3. Navigate to the download location
4. Run:
```bash
setup.bat
```

### Linux/Ubuntu Users

1. Download the [setup.sh](../../../static/setup.sh) file
2. Open terminal
3. Run:
```bash
sudo bash setup.sh
```

## Manual Installation

### Prerequisites

Before installing Godspeed manualy, ensure you have:

1. **Node.js** (v18 or higher)
2. **npm** (Node Package Manager)
3. **Git**
4. **VS Code** or any preferred code editor

### 1. Verify Prerequisites

Check if required tools are installed:

```bash
# Check Node.js version (should be v18 or higher)
node -v

# Check npm version
npm -v

# Check Git version
git -v
```

If any command returns an error, install the missing tool:
- [Download Node.js](https://nodejs.org/)
- [Download Git](https://git-scm.com/)

### 2. Install Godspeed command

Install the Godspeed framework globally:

```bash
npm install -g @godspeedsystems/godspeed
```

### 3. Verify Installation

Confirm successful installation:

```bash
godspeed --version
```

## Creating Your First Project

1. Create a new project:
```bash
godspeed create my-project
```

2. Navigate to project directory:
```bash
cd my-project
```

3. Start the development server:
```bash
godspeed serve
```
4. Access Swagger UI

  In Godspeed, the **Swagger UI** is typically accessed at the `/api-docs` endpoint, appended to the `base URL` and `port` where the server is running. Here’s the general format for accessing Swagger UI:
   ```plaintext
    http://<BASE_URL>:<PORT>/<http_docs_endpoint>` which is by default `localhost:3000/api-docs`
   ```
   
  Default port of your service is `3000` and Swagger endpoint is `/api-docs`. If you want to customise default settings, you can modify the `./src/eventsources/http.yaml`

  **To access Swagger UI, navigate to the following default url:**
   ```plaintext
    http://localhost:3000/api-docs
   ```
  ![img](../../../static/img/swagger_helloworld.png)

5. Test the Helloworld API

- In the Swagger UI, locate the `/helloworld` endpoint.

  Click the **`Try it out`** button and send a request to test the API, It will ask you to fill the name. Once you fill and submit the name parameter,(e.g. John) then following response will be returned from the server.
  ```
    Hello `John`      
  ```

## Troubleshooting

### Common Issues

1. **Git Not Found Error**
   ```
   Error: Not Able to reach Template repository
   ```
   Solution: Install Git and try again

2. **Windows Script Execution Error**
   ```
   Running scripts is disabled on this system
   ```
   Solution: Run PowerShell as Administrator and execute:
   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

3. **Port Already in Use**
   ```
   Error: Port 3000 is already in use
   ```
   Solution: Stop other services using port 3000 or modify port in `src/eventsources/http.yaml`
  

To understand working of this API [Lets Walkthrough your first Godspeed Project](https://godspeed.systems/docs/microservices-framework/guide/get-started#walking-through-your-first-godspeed-project)


## Walking through your first Godspeed project

- **Scaffolding of a meta-framework project**

![Scaffolding of a new project](../../../static/img/scaffolding_new_proj.png)

- The framework generates different folders like [config](/docs/microservices-framework/config-and-mappings/config.md), [datasources](/docs/microservices-framework/datasources/overview.md), [events](/docs/microservices-framework/event-sources/event-schema.md), [eventsources](/docs/microservices-framework/event-sources/overview.md), [functions](/docs/microservices-framework/workflows/overview.md), [mappings](/docs/microservices-framework/config-and-mappings/mappings.md), [plugins](/docs/microservices-framework/inline-scripting/script-plugins.md),etc
- The `eslintrc.json` file includes a curated list of recommended plugins that can be incorporated into the project.
- We configure [swagger specs](/docs/microservices-framework/event-sources/event-types/http-events.md#swagger-specs) in src/eventsources/http.yaml

:::tip
To understand more about the scaffolding structure of the project , Check [here](/docs/microservices-framework/guide/walkthrough#moving-forward)
::: 

- **Why is Swagger asking you to fill the name?**

  /helloworld API endpoint asks you to fill in the name parameter because the API has been configured to require this parameter as part of the query string.
  Go to `src/events/helloworld.yaml` file, which is the event schema of this API in YAML format.
  ```
    http.get./helloworld: # `http` server listening via `get` method on `/helloworld` endpoint
    fn: helloworld # the function handler to be called for this endpoint, available in `src/functions`
    params: # JSON-Schema of API parameters like query, headers, path params. Note: This is set as per Swagger standard's `parameters` syntax
      - name: name   # This is our name query param
        in: query    # Notice the in: query, it can be `path` or `headers` as well
        required: true # true means `name` parameter is required
        schema:
          type: string
    responses: # JSON-Schema of API responses for different status codes. Note: This is set as per Swagger standard's `responses` syntax
      200:
        content:
          application/json:
            schema:
              type: string
  ```
  In this helloworld.yaml file, the params section defines that the API requires a name parameter to be passed in the query string. Let’s break it down:
- **params:** This section describes the input the API expects. In this case, the API expects a name parameter, which  must be provided by the user when they call the /helloworld endpoint.
- **name: name:** This line specifies that the query parameter is called name.
- **in: query:** This tells Swagger and the Godspeed server that the name parameter should be included in the query string of the URL (e.g., /helloworld?name=John).
- **required: true:** The name parameter is mandatory. This means the API will not work unless this parameter is provided by the user.
- **schema: { type: string }:** The name parameter must be a string, which further validates that the input should be text.

:::tip
In the Godspeed meta-framework each API whether REST or Graphql API is called an `event`. All events, whether API calls or websocket messages, trigger workflows/functions which can be thought of as event handlers (see `fn:` instruction in the yaml above). 
The sync events return a response while async events dont have a concept of response.
:::

This naming approach may be new for you. The general norm across the larger developer community is to call only `async events` as `events` - for ex. Kafka or web socket message. But in Godspeed world we consider both sync APIs (REST, Graphql) and async events (Message bus, web socket, cron) - as events. 

### Testing the validation of API inputs and outputs

Almost every application needs validation of data sent in request to the API and response sent back by the service, to make sure that wrong data could not enter your service nor should it return wrong response for an API call. Let's try this feature in the framework.

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

### Swagger Collection

 If you need access to the Swagger collection of godspeed project, open it from `/docs` folder in your project. This is automatically generated from your API schema which we saw above. 

### Postman Collection

 If you need the Postman Collection, import the Swagger file from `src/docs` in Postman.

### For any help
Try the below command line which will show you the commands that can be used in the godspeed framework. Refer [the full CLI spec](/docs/microservices-framework/CLI.md) for more information, including [how to add plugins for eventsources and datasources](../CLI#using-plugins)  

```bash
   godspeed --help
```

### Video Tutorial - Short
There is a longer and detailed introduction video as well, below on this page.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '100%', height: '80%' }} src="https://www.youtube.com/embed/vudhjYjGeLQ?si=R4kTbH14-sAbKFBA" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div>


> If you want some pre-made examples please check the [examples repository](https://github.com/godspeedsystems/gs-node-templates)

### Video Tutorial - Longer and in depth

**Walkthrough the Loan Origination System project made using our meta framework**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/BTPHPoI3dh0" frameborder="0" allowfullscreen></iframe>
</div>

