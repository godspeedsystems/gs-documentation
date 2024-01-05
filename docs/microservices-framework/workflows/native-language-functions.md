# Native Language Workflows

"Since the framework currently supports Node.js and Bun.js ecosystems, the native languages currently supported are TypeScript and JavaScript. This allows users to create custom functions. A native language workflow enables us to incorporate additional features using JavaScript or TypeScript, where we have the capability to implement intricate business logic."


Framework exported interfaces/functions allow developer with flexibility to write js/ts workflows while empowering them with the frameworks capabilities.

### CTX 
:::note
 (Every function/workflow has access to the ctx object, which is passed as an argument, and furthermore, you can access its properties by destructuring it.)
:::

### what is CTX ?

CTX includes all the context specific information like tracing information, actor, environment, headers, payload, shared state (if this ctx is shared with other instruction threads, this part can be shared with them), immutable state (personal copy, personal view, for concurrency)

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

### datasources
    
With datasources we can access all Datasources, their clients and methods.

```javascript

const { datasources} = ctx;
const responseData = await datasources.mongo.client.Restaurant.create({
    data: inputs.body
})

```
### childLogger

with childLogger you have accessibility to framework logger.

```javascript

    const { childLogger} = ctx;
    childLogger.info('inputs: %o', inputs.body);

```

### GSStatus

The GSStatus is a built-in class in Godspeed. We invoke it when we're prepared to define an API response and dispatch it.

:::note

Every workflow response should be in GSStatus. it has the below properties.

### GSStatus Properties

```bash
    success: boolean;
    code?: number;
    message?: string;
    data?: any;
    headers?: {
        [key: string]: any;
   };
```
:::

We set the values as below

```js
response = new GSStatus(true, 200, undefined, responseData, undefined);
ctx.outputs[id] = response;
```


```js
module.exports = async(ctx)=>{

  const {GSStatus} = require('@godspeedsystems/core');
  const {inputs, childLogger, datasources} = ctx;
  const prismaClient = datasources.mongo.client;

  try {

    inputs.body = inputs.data.body;
    childLogger.info('inputs: %o', inputs.body);
    
    const responseData = await prismaClient.Restaurant.create({
      data: inputs.body
    })
    ctx.outputs[id] = responseData;

    return new GSStatus(true, 200, undefined, responseData, undefined);

  } catch (error) {

    return new GSStatus(false, 500, undefined, error, undefined);

  }
}

module.exports.id = 'main';
```

The above is a sample of how a js file is configured and used.For every function it comes up with a ctx called context which helps in maintained and passing the data with the functions and method



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