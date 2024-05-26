# About the Express plugin
Find the **[Plugin Source Code here](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http)**

Embark on a journey of API development made sublime. The express-as-http plugin, renowned for its simplicity and velocity, (just like Fastify plugin) equips you with essential features to effortlessly handle HTTP routes, requests, and responses with best practices like schema driven development, single source of truth, configure over code and modular architecture. It allows you to seamlessly handle input/output validations, authentication, authorization and generation of swagger and Graphql spec as well. Elevate your server-side applications in Node.js with this gem.


## Introduction

The Godspeed Express Plugin is an integral part of the Godspeed framework, designed to facilitate the integration of event-driven and serverless functionalities into your projects. This plugin leverages the popular Express.js framework to handle HTTP events, making it easy to define event subscriptions and process incoming events.


## Features of the plugin

The Godspeed Express Plugin provides the following benefits:

1. **Modular Express Integration:** The plugin abstracts away the complexities of setting up an Express.js application, making it effortless to define routes and handlers for incoming HTTP ou can replace Express with Fastify or another HTTP service tomorrow without changing a single line of code in your business logic and http eventsource configurations, giving you flexibility. You can also provide same API using Graphql or Fastify service by just replacing `http` with `http & graphql & fastify` in your event definitions. For ex. `http & graphql & fastify.get.helloworld` 

2. **Unified event schema with validations and auth:** Developers can easily subscribe to specific HTTP events by defining routes and handlers using a uniform schema which handles authentication, authorization and validations, not just for Express but also other event sources.

3. **Customizable Configuration:** The plugin allows for easy configuration of Express settings, such as port, request body limits, file size limits, JWT authentication, authorization, swagger generation etc.

4. **Reusable pure function handlers:** The plugin works seamlessly with the Godspeed Core library, enabling the processing of cloud events in pure workflows, decoupled with Express API, making them reusable.

5. **File upload feature:** The Express plugin allows you to upload files as well.



## How to Use
- Create a godspeed project from the CLI and by default the Express plugin is integrated into your project if not, add the plugin from the CLI and select the `@godspeedsystems/plugins-express-as-http` to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
│    │ Name                              │ Description                                                     │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ ❯◯ │ express-as-http                   │ Godspeed event source plugin for express as http server         │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ aws-as-datasource                 │ aws as datasource plugin for Godspeed Framework                 │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ mailer-as-datasource              │ mailer as datasource plugin for Godspeed Framework              │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ excel-as-datasource               │ excel as datasource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
└────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘
```
- You will find two files added in your project related to the Express plugin at `src/eventsources/types/express.ts` - the type file and `src/eventsources/http.yaml` - the instance file.

### Type File

`eventsources/types/express.ts`

> You generally will not need to touch this file, unless you want to extend or customize the Express functionality
```typescript
import { ExpressEventSource } from '@godspeedsystems/plugins-express-as-http';
export default ExpressEventSource;
```

This is the file generated by the plugin add command. In case you want to customise the Express plugin to add new features like some middlewares not currently supported by the default plugin implementation, you can modify this `type` file in your project. Checkout the section [how to create custom event source](../create-custom-event-source.md)



### Instance file

`src/eventsources/http.yaml`

> Note: you can create as many Express instances in your project as http1, http2 and so on. The instance files keep configurations of each instance for the given type of plugin (in current case `type: express`)

```yaml
type: express
port: 3000
base_url: /api/v1 #the base url of the http service

#Bassic swagger setup
docs:
  endpoint: /api-docs # the url on which the service will start
  info: # info object as per swagger 3.0 spec
    title: Sample Godspeed App
    version: 1.1.0
    summary: some http calls
    description: lets play with Godspeed
    contact:
      name: API Support
      url: 'http://www.myfintech.com/support'
      email: support@myfintech.com
    license:
      name: Apache 2.0
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  servers:
    - url: 'http://localhost:3000'
      description: Public API server
    - url: 'http://localhost:3001'
      description: Internal API server

request_body_limit: 20000 # maximum size of the request body (in bytes)
file_size_limit: 50000 # How big a file can be uploaded (in bytes) Default is 50 MB.

#jwt settings to run by default on every event (endpoint)
authn:
  jwt:
    secretOrKey: mysecret #the secret
    audience: mycompany #aud in jwt token
    issuer: mycompany #iss in jwt token

# authorization policies to run by default on every event
# Uncomment this to start checking user roles.
# This will require jwt to be setup, or another middleware to setup the user information in inputs
authz:
  - id: check_user_role
    fn: com.gs.transform
    args: <%inputs.user.role === 'admin'%> #an inline JS based check of user role

# validation error handling, to transform error responses on wrong input or response
on_request_validation_error: validations.request.standardResponse
on_response_validation_error:
  - id: response_validation_error_handler
    fn: com.gs.return
    args: <%inputs%>

```

### Sample Express event 

`src/events/sample.yaml`

You can store one or more events in each YAML file stored in the `events` folder. The files can be organized and stored in any folder structure. 

```yaml
http.get./sample_api:
    fn: sample      #redirects to src/functions/sample.yaml
    # authn: false #to disable global default setting of JWT authn, say authn: false.
    # authz: overriden.custom.authz_fn #here you can add path to a JS/TS/YAML function file or put inline YAML workflow for custom authz
    id: # Swagger id. by default calculated from the event URI
    operationId: #Swagger if not set explicitly, the `id` is used. if `id` not set `summary` is used. If that is also not set, `${method}_${apiEndPoint}` with whitespace replaced by `_` is used
    tags: #swagger tags. by default, a tag is generated from the `folder_path+event_file_name`
    summary: #swagger description
    description: #swaggers summary 
    body: #swagger spec equivalent to swagger's requestBody
      content:
        application/json:
          schema:
            type: object
            properties:
              name: 
                type: string
              message: 
                type: string                         
    params: #swagger params
      - in: query
        name: user
        required: true  
        schema: 
          type: string   
    responses:    #swagger spec of responses   
      200:
        content:
          application/json:
            schema:
              type: string
    log: #custom attributes to add with log statements wherever they are printed by the handlers called by this event
      attributes:
        event_name: sample
    # authn: false
    # authz: false
    # on_request_validation_error:
    # on_response_validation_error:
```

#### Format of HTTP event URI
As is the case with all Godspeed event definitions, they follow a standard format, with only the
first line of the event definition changing as per the eventsource type. In case of http, the following structure represents the applicable composition of an event.
Specifying the event schema here, not only validates your input and response, handles authentication and authorization, but also generates your swagger spec and Graphql schema.

```yaml
http.<method>./<endpoint_url>: #the base_url is prepended to this endpoint path when the service runs
    fn: path.to.function #the event handler: could be a typescript, javascript or YAML function
    
    # Swagger params
    body: #requestBody - applicable for POST, PUT requests
    params: #headers, query, path params as per swagger spec
    responses: #response structure as per swagger spec
    id:
    operationId:
    tags:
    summary:
    description:
    
    #OTHER PARAMS
    # more common parameters to all event types across all event sources, as well applicable to http events
    on_request_validation_error:
    on_response_validation_error:
    authn: 
    authz:
    log:
      attributes:
```
- The event YAML defines properties for handling specific HTTP requests within the Express app. In the YAML, `<method>` should be replaced with actual HTTP methods such as `GET, POST, PUT, or DELETE`, specifying how the app handles those requests. The `<endpoint_url>` field should contain the API URL for the respective HTTP route.
- A function (event handler) will be triggered on sending a request to the respective url. The functions are created under `src/functions/`.


### Event Handlers: TS/JS based
The meta-framework supports pure functions. This means they take JSON as input and return JSON as output, irrespective of the eventsource from where the event is captured and response returned.
Hereby sharing a typescript function which shows all that you get in your function  handler
when an event is captured by _any event source_. The generic input structure is constant whether for Express, Fastify, Kafka, Salesforce, Socket etc.

```typescript
import { GSContext, PlainObject } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    //@ts-ignore
    const {
        inputs: {
            data: {
                params, body, query, user, headers, files
            }
        }, 
        childLogger, 
        logger,
        outputs,
        functions, 
        datasources,
        config,
        mappings
    }: {
        inputs: {
            data: {
                params: PlainObject,
                body: PlainObject,
                query: PlainObject,
                user: PlainObject,
                headers: PlainObject,
                files: any
            }
        }, 
        childLogger: any, // Pino logger with log.attributes set (which you saw in eventsource, event configurations as well)
        outputs: PlainObject,
        logger: any, //Pino logger (Plain jain Pino logger without any custom log attributes)
        functions: PlainObject, // The functions in the `src/functions` folder
        datasources: PlainObject, // The clients of the datasources you have configured in this proejct 
        config: PlainObject, //Plain JSON of the config folder as per the node-config module
        mappings: PlainObject //Plain JSON loaded from the mappings folder
    } = ctx;
    
    // Will print with workflow_name and task_id attributes
    childLogger.info('Server is running healthy');
    // Will print without workflow_name and task_id attributes
    logger.info('Inputs object \n user %o query %o body %o headers %o params %o', user, query, body, headers, params);
    logger.info('Outputs object has outputs from previous tasks with given ids %o', Object.keys(outputs));
    logger.info('Datasources object has following datasource clients %o', Object.keys(datasources));
    logger.info('Total functions found in the project %s', Object.keys(functions).length)
    
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        success: true,
        headers: {
            custom_response_header: 'something'
        }
    }
}
```

### Event Handlers: YAML based
Same response in a yaml workflow.

```yaml
summary: Returning response
tasks:
  - id: first_task
    fn: com.gs.return
    args: 
      data: <% 'Its working + inputs.body.name %>
      headers:
        custom_response_header: something
      # code: 200 Default value from com.gs.return is success and code is 200
```



## Setting Base Url
The base url is set in datasources/api.yaml

```
type: axios
base_url: /api/v1
```

## Configuring JWT

You can configure JWT settings within the eventsources/http.yaml. Here's an example of such a configuration:

```
type: express
jwt:
  issuer: <#config.issues#> # must be equal to the key iss in your jwt token
  audience: <#config.audience#> #must be equal to the key aud in your jwt token
  secretOrKey: <#config.secret#>
```
> Note: In order to add OAUTH2 you will need to customize the Express event source as it is not currently supported in the default implementation. Your PR Is welcome!

## File Upload

### Uploading file

The Express plugin allows you to upload your files

The default file size accepted is 50MB. If you wish to specify a custom file size, you can modify the value in `"./src/eventsources/http.yaml`".


### Example File Upload Event

```yaml
http.post./helloworld:
  fn: helloworld
  body:
    content:
      multipart/form-data:
        schema:
          type: object
          properties:
            fileName:
              type: string
              format: binary


  responses:
    200:
      content:
        application/json:
          schema:
            type: object

```

### Function to handle the uploaded files
Typescript
```typescript
  export default function (ctx: GSContext) {
    // You will get files in the ctx.inputs, along with params, body, query, user, headers
    const { files: { panCardFile } } = ctx.inputs.data;
    //do something like upload to S3
    return {
      data: 'Uploaded',
      success: true,
      code: 201,
      //headers: {}
    }
  }
```

### Example success response

![image](https://res.cloudinary.com/dzdcjchdc/image/upload/v1704369051/Screenshot_from_2024-01-04_17-20-32_dfzirt.png)

- Upon successful upload of the file in Postman, an autogenerated "tmp" folder is created within the scaffolding directory, containing the uploaded file.

## Plugin Explaination

This plugin is designed to integrate with the Godspeed framework and provides functionality related to event sources using Express.js, a popular Node.js web application framework. It allows you to create event sources that can listen for incoming HTTP requests and trigger actions based on those requests.

## Plugin Components

The plugin consists of several key components:

### 1. `EventSource` Class

- This class extends `GSEventSource`, a base class provided by the Godspeed framework for creating event sources.

- It initializes an Express.js server to listen for incoming HTTP requests based on the provided configuration options.

- The `subscribeToEvent` method is used to define how the plugin should respond to specific HTTP routes. It maps incoming HTTP requests to Godspeed Cloud Events, processes them using a provided function, and sends a response.

- The `createGSEvent` static method is used to create a Godspeed Cloud Event from an incoming Express.js request.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'ES' (event source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'express' in this case.

- `CONFIG_FILE_NAME`: In the context of an event source, this constant also serves as the event identifier. For a data source, it works as the data source name. In this plugin, it is set to 'http'.

- `DEFAULT_CONFIG`: A default configuration object with options like the port number for the Express.js server.


## Conclusion

Our Express plugin is a powerful addition to the Godspeed framework, allowing you to seamlessly integrate and manage event sources within your applications. With this plugin, you can effortlessly handle HTTP requests, define routes, and trigger actions, making it an essential tool for building robust and responsive applications.

We value your feedback and contributions. If you have questions, suggestions, or encounter any issues while using the plugin, please don't hesitate to reach out to us. Your insights and ideas can help us improve and enhance this plugin for the entire community.

We're excited to see what you'll create with the Express plugin, and we look forward to collaborating with you to make your projects even more successful. Happy coding!

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-express-as-http)
