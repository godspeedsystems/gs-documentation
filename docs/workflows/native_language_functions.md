# Native Language Functions

Native language functions are primarily written in JavaScript or TypeScript. This allows users to create custom functions to extend and enhance workflow functionality.
A native language workflow enables us to incorporate additional features using JavaScript or TypeScript, where we have the capability to implement intricate business logic.

```js
module.exports = async(ctx) => {
    // In the current version, import all the libs with require
    const { GSStatus } = require("@godspeedsystems/core");
    const { inputs, childLogger,outputs } = ctx;
    const maria_db_client = ctx.datasources['mariadb'].client;
    const redis_client = ctx.datasources['redis'].client;
    let response;
    
    try {
    inputs.body = inputs.data.body
    childLogger.info('inputs: %o', inputs.body);

    // 1. check amount
    if (inputs.body.amount <= 0) {
        throw "Invalid Amount"
    }

    // 2. get TSP List
    const tsp = await maria_db_client.tabTSP_List.findMany({
        where: {
            tsp: {
                equals: inputs.body.tsp
            },
            parent: {
                equals: inputs.body.customer
            }
        }
    })
    if (tsp.length == 0) {
        throw(`Customer doesn't exist ${inputs.body.customer}`);
    }
    // 3. get customer and check its status
    const customer = await get_customer_status_kyc_type(maria_db_client, redis_client, inputs.body.customer);
    childLogger.debug("Customer status %s" , customer.status)
    if (customer.status != "Active") {
        throw(`Customer is ${customer.status}`);
    }
    }}

```

The above is a sample of how a js file is configured and used.For every function it comes up with a ctx called context which helps in maintained and passing the data with the functions and method

### [GSContext(ctx)](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts)

Ctx is the of the builtin class of godspeed where it stores certain variables called inputs,outputs,datasources,exitwithstatus etc,It helps in passing the args from one functions to another

We use the varibles inside the ctx as follows

:::info Check out GSContext alias [<span style={{ color: 'green' }}>ctx</span>](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts) from line 971 and how we extract the variables like inputs,outputs,datasources.
:::



### inputs

Inputs are stored in the context (`ctx`), allowing universal access throughout the workflow.

#### In Yaml file

```yaml
  - id: return_with_status
    fn: com.gs.return 
    args: <% inputs.query.word %>
```

#### In JS file

```js
 module.exports=(ctx)=>{

    console.log(ctx.inputs.data.body.name)

    return ctx.inputs.data.body.name

}
```


### outputs

In the context (`ctx`), the outputs of each task are stored along with their respective task IDs. This facilitates subsequent operations that rely on the outputs of previous tasks.

```yaml
  - id: task_level_2
    fn: com.gs.return
    args: <% outputs.task_level_1 %>
```
This is how we use the outputs of previous task in a workflow


### Datasources

we can also access the datasource clients from ctx as follows

```js
 const { inputs, childLogger } = ctx;
 const maria_db_client = ctx.datasources['mariadb'].client;

```

### GSStatus

The [`GSStatus`](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts) is a built-in class in Godspeed. We invoke it when we're prepared to define an API response and dispatch it.

We the set the values as below

```js
response = new GSStatus(true, 200, undefined, responseData, undefined);
ctx.outputs[id] = response;
```