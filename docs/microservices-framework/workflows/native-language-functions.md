# Native Language Workflows

"Since the framework currently supports Node.js and Bun.js ecosystems, the native languages currently supported are TypeScript and JavaScript. This allows users to create custom functions. A native language workflow enables us to incorporate additional features using JavaScript or TypeScript, where we have the capability to implement intricate business logic."


Framework exported interfaces/functions allow developer with flexibility to write js/ts workflows while empowering them with the frameworks capabilities.

### GSContext
:::tip note
 (Every function/workflow has access to the ctx object, which is passed as an argument, and furthermore, you can access its properties by destructuring it.)
:::

### What is GSContext ?

[GSContext](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts) has the contextual information of your current workflow and is available to the event handlers (`functions`). It is passed to any sub workflows subsequently called by the event handler. 

It includes all the context specific information like tracing information, actor, environment, headers, payload, shared state (if this ctx is shared with other instruction threads, this part can be shared with them). You can also keep immutable state (personal copy, personal view, for concurrency) etc.

Every information you need to know or store about the event and the workflow executed so far, and as well the loaded `functions`, `datasources`, `logger`, `config`, `mappings` etc, is available in the `GSContext` object.


```js
// Everything you need within a workflow, whether in native languages like JS/TS, or in yaml workflows and tasks.

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
```


:::tip Check out GSContext alias [<span style={{ color: 'green' }}>ctx</span>](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts) from line 971 and how we extract the variables like inputs,outputs,datasources.
:::


### Inputs

Inputs Provide you all the Information you passed to event like headers, params, query params etc.


```javascript
  const {inputs} = ctx;
  inputs.body = inputs.data.body;
```
### Outputs

To access outputs of tasks executed before the current task, developer can destruct ctx object just like how inputs and datasources.If we have more then one task, we can access first task outputs in second task with Outputs object. we should access first task output by useing it's id.

```javascript
  const {outputs} = ctx;
  const firstTaskOutput = outputs[firstTaskId]
```

### Datasources
    
With datasources we can access all Datasources, their clients and methods.

```javascript

const { datasources} = ctx;
const responseData = await datasources.mongo.client.Restaurant.create({
    data: inputs.body
})

```
### ChildLogger

with childLogger you have accessibility to framework logger.

```javascript

    const { childLogger} = ctx;
    childLogger.info('inputs: %o', inputs.body);

```

### GSStatus
Developers can now exclusively return data from tasks, functions, and event handlers within a workflow.
For example:
```ts
const {GSStatus} = require("@godspeedsystems/core");

module.exports = ctx => {
  const {inputs} = ctx; 
  const responseData = inputs.data.body.name
  return responseData 
  //works same as return new GSStatus(true, 200, undefined, responseData, undefined);
};
  
```

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

We set the values as below
```js
response = new GSStatus(true, 200, undefined, responseData, undefined);
```

:::tip Note
Check [event handler response](#handling-event-handler-return) to know how framework handles GSStatus.
:::

<details>
<summary>How to use GSContext and return from a JS/TS workflow</summary>

```javascript
import { GSCloudEvent, GSContext, PlainObject } from "@godspeedsystems/core";
import Pino from 'pino';

export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
                params, body, query, user, headers
            }
        }, 
        childLogger, 
        logger,
        outputs, 
        functions, 
        datasources
    }: {
        inputs: GSCloudEvent, 
        childLogger: Pino.Logger, // Define CustomLogger if necessary
        logger: Pino.Logger,
        outputs: PlainObject, // Adjust the type accordingly
        functions: PlainObject, // Adjust the type accordingly
        datasources: PlainObject // Adjust the type accordingly
    } = ctx;

    // Will print with workflow_name and task_id attributes
    childLogger.info('Server is running healthy');
    // Will print without workflow_name and task_id attributes
    logger.info('Arguments passed %o', args);
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
        // code: 200,
        success: true,
        // headers: undefined
    }
    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        success: true,
        headers: undefined
    }  
}
```
</details>

The above is a sample of how a js file is configured and used. For every function it comes up with a ctx called [GSContext](#gscontext) which helps in maintaining and passing the data with the functions and method.

### Calling javascript function from Yaml workflow

In YAML workflows, it is possible to invoke JavaScript functions to introduce special functionality or extensions.

- Scaffolding 

![Scaffolding Image](https://res.cloudinary.com/dzdcjchdc/image/upload/v1702045959/Screenshot_from_2023-12-08_20-02-21_mxzkep.png)



- Event

<details>
<summary>Example event</summary>

```yaml
http.post./helloworld:
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object

  responses:
    200:
      content:
        application/json:
          schema:
            type: number
```
</details>

- Yaml workflow

```yaml
id: helloworld
tasks:
  - id: first_task
    fn: test
    args: 
      x: <% inputs.body.x %>
      y: <% inputs.body.y %>
```

- Javascript workflow

```js
const {GSStatus} = require('@godspeedsystems/core');

module.exports = async(ctx,args)=>{
    const responseData = parseInt(args.x)+parseInt(args.y);
    return new GSStatus(true, 200, undefined, responseData, undefined);
};

```

This is how we access the args `(ctx,args)` here args is a json object

:::info
GSStatus is a built-in class in Godspeed that we utilize to return responses from workflows.
:::

- Sample response

![Response Image](https://res.cloudinary.com/dzdcjchdc/image/upload/v1702045093/Screenshot_from_2023-12-08_19-45-45_zrxxil.png)


### Calling js function from an event

Likewise, you have the option to directly invoke a JavaScript function from an event.

- Event

<details>
<summary>Example event</summary>

```yaml
http.post./helloworld:
  fn: test
  body:
    content:
      application/json:
        schema:
          type: object

  responses:
    200:
      content:
        application/json:
          schema:
            type: number

```
</details>


- Javascript function


```js
const {GSStatus} = require('@godspeedsystems/core');

module.exports = async(ctx)=>{
    const x = parseInt(ctx.inputs.data.body.x)
    const y = parseInt(ctx.inputs.data.body.y)
    const responseData = x+y
    return new GSStatus(true, 200, undefined, responseData, undefined);
};

```
:::tip
When calling a JavaScript function directly from the event, ensure that you access the inputs from the `ctx`, as demonstrated in the provided JavaScript file.
:::

### Invoking functions from JS/TS functions

<!-- - When invoking functions from a JS/TS function in Godspeed, the framework ensures that calling functions will not lead to error propagation.
- They will instead return a GSStatus with {success: boolean, code: number, message: string, data: any}.  Why? Because the framework has a top level catch for all functions invoked through it.  -->
- All functions within a Godspeed project, including those written in YAML, JavaScript (JS), or TypeScript (TS), are accessible through the `ctx.functions` object.
- Similarly, all datasources utilized in a Godspeed project are conveniently available under the `ctx.datasources` object.
 
:::tip
 - Every information you require or intend to store about the current event, workflow, loaded functions, datasources, logger, config, mappings etc is readily available within the `GSContext` (ctx) object..
:::

- Follow the comments added in example below to understand how to call functions from ts/js functions.

 ```ts
 export default async function (ctx: GSContext, args: any) {

    //Calling functions (yaml, js, ts) from within a ts/js function, in a godspeed project's functions folder. All functions are available under ctx.functions. 
    const res = await ctx.functions['com.gs.helloworld2'](ctx, {nice: "name", ...args});

    //Calling datasource functions. All datasources are available under ctx.datasources hood.
    const res = await ctx.datasources.aws.execute(ctx, {

         //Pass exactly same args as this aws service's method takes
        ...args,

        //Along with args, pass meta object
        // meta can contain {entityType, method}
        meta: {entityType: 's3', method: 'listBuckets'},

        //Or meta can contain {fnNameInWorkflow} which is same as 
        //the 'fn' that we write when invoking datasource from yaml workflow
        //For example, this will also work

        //meta: {fnNameInWorkflow: 'datasource.aws.s3.listBuckets'}
    });
    if (!res.success) {
        return new GSStatus(false, res.code || 500, undefined, {message: "Internal Server Error", info: res.message})
    }
  //If a developer only returns data without setting keys like "success" or "code" in the response,
  // the framework assumes it is just the data. 
  //In such cases, the response code defaults to 200, and success is assumed to be true.
    
    return res
    // works same as return new GSStatus(true, 200, undefined, res );
}

 ```
### Handling event handler return
By default, all the framework defined functions or developer written functions, have to return either [GSStatus](#gsstatus) or data.   
Now lets see how the framework qualifies your return as GSStatus or simple data.
The framework sees that your returned data has one of `code` or `success` meta-keys.    

** [Non Authz (normal) workflows](../workflows/overview.md) **    
**i. ** If both are present, it looks for the other GSStatus keys and set them.  
**ii. ** If only code is present and lies between 200-399, then success is assumed to be true else false. It looks for the other GSStatus keys and set them.   
**iii. ** If only success is present, then code is assumed to be 200. It looks for the other GSStatus keys and set them.   
**iv. ** If it doesn't find any of these keys, it assumes all that you have returned is intended to be GSStatus.data then it adds `code: 200` and `success: true` internally to your response and create a `GSStatus` out of it to pass on to next tasks or workflows.   

** [Authz workflows](../authorization/authz-usecases.md/#authz-workflows) **   
Check [reponse handling](../authorization/authz-usecases.md/#response-code-message-and-data-from-authorization-failure) in case of authorization workflows.

:::info
You can study the code [here](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/functions/com/gs/transform.ts) to understand both of the above scenarios better.
:::

For example,
```javascript
import {GSStatus, GSContext} from "@godspeedsystems/core"

export default async function (ctx: GSContext, args: any) {
    const reqData =await ctx.inputs.data.body.name;
    return reqData;
    // same as "return new GSStatus(true, 200, undefined, reqData, undefined);"
}
```
