# Native Language Functions

Native language functions are primarily written in JavaScript or TypeScript. This allows users to create custom functions.
A native language workflow enables us to incorporate additional features using JavaScript or TypeScript, where we have the capability to implement intricate business logic.


Framework exported interfaces/functions allow developer with flexibility to write js/ts workflows while empowering them with the frameworks capabilities.

### CTX 
:::note
 (Every function/workflow has accessibility to ctx object which is passed as an orgument and further more you can access the properties by destructuring it.)
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






