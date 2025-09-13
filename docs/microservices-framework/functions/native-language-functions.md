---
title: Writing functions in Godspeed
description: Writing functions in Godspeed-Framework, covering topics such as setting up APIs, writing functions, and accessing datasources.
keywords: [Godspeed, API setup, functions, datasources, REST API, typeScript syntax]
---

# Writing functions in Godspeed

Since the framework currently supports Node.js, Deno and Bun.js ecosystems, the native languages currently supported are TypeScript and JavaScript. This allows users to create custom functions. A native language function enables us to incorporate additional features using JavaScript or TypeScript, where we have the capability to implement intricate business logic.

:::tip
In Godspeed, your function gets input in a standard JSON format and returns output in a standard JSON format, independent of the eventsource through which this function is triggered. Eventsource could be Express, Fastify, Apollo Graphql or event message bus like Kafka, RabbitMQ or socket message. This means Godspeed has a unified way to deal with all eventsources, providing a modular architecture and re-uasability of your functions.
:::

### Example Typescript function
```typescript
import { GSCloudEvent, GSContext } from "@godspeedsystems/core";
import Pino from 'pino';

export default function (ctx: GSContext) {
    const {
        inputs: {
            data: {
                params, //path parameters from endpoint url
                body,  // request body in case of http and graphql apis, event data in case of message bus or socket
                query, // query parameters from rest api
                user,  // user payload parsed from jwt token
                headers //request headers in case of http and graphql apis
            }
        }, 
        childLogger, // context specific logger. Read pino childLogger for more information
        logger, // Basic logger of the project, generally prefer childLogger for logging 
        outputs, // outputs of previously executed tasks
        functions, // all loaded functions from the src/functions/ folder
        datasources, //all configured datasources from src/datasources
        mappings  //mappings from src/mappings folder. this is useful for loading key value configurations for business logic of your project
    }: {
        inputs: GSCloudEvent, 
        childLogger: Pino.Logger, // you can also add custom attributes to childLogger
        logger: Pino.Logger,
        outputs: PlainObject, 
        functions: PlainObject, 
        datasources: PlainObject,
        mappings: PlainObject
    } = ctx;

    // Will print with workflow_name and task_id attributes. 
    childLogger.info('Server is running healthy');
    // Will print without workflow_name and task_id attributes
    logger.info('Inputs object \n user %o query %o body %o headers %o params %o', user, query, body, headers, params);
    logger.info('Outputs object has outputs from previous tasks with given ids %o', Object.keys(outputs));
    logger.info('Datasources object has following datasource clients %o', Object.keys(datasources));
    logger.info('Total functions found in the project %s', Object.keys(functions).length);

    // Returning only data
    return 'Its working! ' + body.name;

    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        // success: true,
        // headers: undefined
    }
    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        success: true,
        headers: undefined // or u can set response headers as key: value pairs, 
        //for example headers:{custom-header1:"xyz" }
    }
}
```

:::tip

For seeing how framework handles data returned from a function, including calculation of `code`, `success` and `data`, [read this section](./native-language-functions#handling-return-from-godspeed-functions) at the bottom of the page. 
:::

### GSContext

GSContext carries the loaded components of this project and as well the inputs of the current event. Every information you need to know or store about the event and the function executed so far, and as well the loaded `functions`, `datasources`, `logger`, `childLogger`, `config`, `mappings` etc, is available in the `GSContext` object.

:::tip note
 Every function has access to the ctx object, which is passed as an argument, and furthermore, you can access its properties by destructuring it.
:::

### More about GSContext

Check the code of GSContext interface [here](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts). GSContext has the contextual information of your current function and is available to the event handlers (`functions`). It is passed to any sub functions subsequently called by the event handler. 
It includes all the context specific information like tracing information, actor, environment, headers, payload etc.


<!-- 
#### args
The second parameter of the function call is args. This parameter is useful when this function is called from a YAML workflow in Godspeed. The `args` passed in the yaml task of the caller YAML workflow is passed as `args` here. It can be of any native type like object, array, string, number, boolean.

##### Caller YAML function
```yaml
  summary: some workflow
  tasks:
    - id: first_task
      fn: some_function
      args:
        name: mastersilv3r
``` 
##### Caller function

```ts 
import { GSContext, PlainObject } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
  const { logger } = ctx;
  // Accessing the argument passed from the YAML task
  const name = args.name;
  // Logging and returning a response
  logger.info(`Received name: ${name}`);
  return {
    success: true,
    code: 200,
    data: `Hello, ${name}!`
  };
}
```

##### Callee function
```typescript
  export default function (ctx: GSContext) {
    ctx.logger.info(args.name);  //Prints 'mastersilv3r'
  }
```
-->


<!-- 
```typescript
// Everything you need within a workflow, whether in native languages like JS/TS and tasks.

export class GSContext { //span executions
    outputs: { [key: string]: GSStatus; }; //DAG result. This context has a trace history and responses of all instructions in the DAG, which are are stored in this object against task ids

  log_events: GSLogEvent[] = [];

  config: PlainObject; //The config folder with env vars, default, and other config files. We use node-config module for Nodejs for the same.  

  datasources: PlainObject; //All the datasource exported clients

  log_events: GSLogEvent[] = []; //All the errors during an event handler workflow execution are captured in this list. Framework does not do anything with this. But a developer may want to have access to the errors that happened.

  config: PlainObject; //app config

  datasources: PlainObject; //app config

  mappings: PlainObject; // The static mappings of your project under /mappings

  functions: PlainObject; //All the functions you have written in /functions + all the Godspeed's YAML DSL functions
 //like com.gs.each_parallel

  plugins: PlainObject; // The utility functions to be used in scripts. Not be confused with eventsource or datasource as plugin.

  exitWithStatus?: GSStatus; // Useful when a YAML workflow is being executed. If this is set to non null value containing a GSStatus, the workflow will exit with this status. This will apply to only the immediate yaml workflow. But not its caller workflow. 

  logger: pino.Logger; // For logging using pino for Nodejs. This has multiple useful features incudign biding some key values with the logs that are produced.  

  childLogger: pino.Logger; //Child logger of logger with additional binding to print {workflow_name, task_id} with every log entry


  forAuth?: boolean = false; //Whether this native or yaml workflow is being run as parth of the authz tasks
}
``` -->


<!-- :::tip Check out GSContext alias [<span style={{ color: 'green' }}>ctx</span>](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts) from line 971 and how we extract the variables like inputs,outputs,datasources.
::: -->


#### Inputs

Inputs Provide you all the Information you passed to event like `headers`, `params`, `query`, `params` (path params), `body` & `user` (parsed JWT information).


```javascript
  const {inputs} = ctx;
  const body = inputs.data.body;
```
#### Outputs

To access outputs of tasks executed before the current task, developer can destruct ctx object just like how inputs and datasources.If we have more then one task, we can access first task outputs in second task with Outputs object. we should access first task output by useing it's id.

```javascript
  const {outputs} = ctx;
  const firstTaskOutput = outputs[firstTaskId]
```

### ChildLogger

With childLogger you have accessibility to Pino logger instance with context information set - for example the `log.attributes` set in eventsource or event level.

```javascript
    const { childLogger} = ctx;
    childLogger.info('inputs: %o', inputs.body);

```

### Returning from a function

### GSStatus

Developers can return pure JSON object in response, or return GSStatus if they use Typescript.
The GSStatus is a built-in class in Godspeed. We invoke it when we're prepared to define an API response manually and dispatch it.

GSStatus has the below properties.
```yaml
    success: boolean;
    code?: number;
    message?: string;
    data?: any;
    headers?: {
        [key: string]: any;
   };
```

We return with GSStatus as below

```typescript
 return new GSStatus(true, 200, 'OK', responseData, headers);
```

#### Different ways to return from a function
```typescript
    // Returning only data
    return 'Its working! ' + body.name;

    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        message: 'OK', //HTTP protocol message to be returned from service
        // success: true,
        // headers: undefined
    }
    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        message: 'OK', //HTTP protocol message to be returned from service
        success: true,
        // headers: undefined
    }
    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        message: 'OK', //HTTP protocol message to be returned from service
        success: true,
        headers: undefined
    }
    // SAME AS returning GSStatus like this
    return new GSStatus(true, 200, 'OK', 'Its working! ' + body.name, headers);  
```

:::tip
Check [event handler response](#handling-return-from-godspeed-functions) to know how framework handles GSStatus.
:::

### Invoking other functions
- All functions within a Godspeed project, including those written in YAML, JavaScript (JS), or TypeScript (TS), are accessible through the `ctx.functions` object.
- Ofcourse you can also `import` them in the standard Typescript or Javascript way

 ```ts
 export default async function (ctx: GSContext) {

    //Calling functions (yaml, js, ts) from within a ts/js function, 
    // all functions written inside src/functions folder are available under ctx.functions.
    const res = await ctx.functions['com.gs.helloworld2'](ctx);
    //Same As
    const res = await require('com/gs/helloworld2')(ctx);
    return res
    // works same as return new GSStatus(true, 200, 'OK', res );
}

 ```

### Invoking Datasource Clients from functions
Similarly, all datasource clients initialised in a Godspeed project are conveniently available under the `ctx.datasources` object.

There are two options for invoking datasource clients from functions:

**Option 1: Using the client key (Not Recommended for Prisma)**

Every datasource exposes a client key. The client may be a single instance like in the case of Axios, or multiple datasource client instances like in the case of AWS, or database models like in the case of Mongoose (depending on the plugin being used).

**Option 2: Using the execute method (Recommended)** 

All datasource plugins in godspeed have an execute method. This is recommended to utilise the full capabilities of the plugin wrapped over the native clients, like error handling checks and response codes, retries, caching etc.

```ts
 export default async function (ctx: GSContext, args: any) {
    // Calling datasource functions from ctx.datasources

    // OPTION 1 Using the client key
    const res = await ctx.datasources.aws.client.s3.listBuckets(args);

    // OPTION 2 Using the execute method
    const res = await ctx.datasources.aws.execute(ctx, {
    
    //Pass exactly same args as this aws service's method takes
        ...args,                 //Along with args, pass meta object
        meta: {                  // meta can contain {entityType, method}
          entityType: 's3', 
          method: 'listBuckets'
        }
    });
    if (!res.success) {
        return new GSStatus(false, res.code || 500, 'my response message', {message: "Internal Server Error", info: res.message})
    }
  //If a developer only returns data without setting keys like "success" or "code" in the response,
  // the framework assumes it is just the data.
  //In such cases, the response code defaults to 200, and success is assumed to be true.
    
    return res
    // works same as return new GSStatus(true, 200, 'OK', res );
}

 ```
### Handling return from godspeed functions

By default, all the framework defined functions or developer written functions, have to return either [GSStatus](#gsstatus) or data.   
Now lets see how the framework qualifies your return as GSStatus or simple data.
The framework sees that your returned data has one of `code` or `success` meta-keys.    
  
**i.** If both are present, it looks for the other GSStatus keys and set them.  
**ii.** If only code is present and lies between 200-399, then success is assumed to be true else false. It looks for the other GSStatus keys and set them.   
**iii.** If only success is present, then code is assumed to be 200. It looks for the other GSStatus keys and set them.   
**iv.** If it doesn't find any of these keys, it assumes all that you have returned is intended to be GSStatus.data then it adds `code: 200` and `success: true` internally to your response and create a `GSStatus` out of it to pass on to next tasks.   

<!-- **[Authz workflows](../authorization/authz-usecases.md/#authz-workflows)**

Check [reponse handling](../authorization/authz-usecases.md/#response-code-message-and-data-from-authorization-failure) in case of authorization workflows. -->

:::info
You can study the code [here](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/functions/com/gs/transform.ts) to understand the above scenario better.
:::

