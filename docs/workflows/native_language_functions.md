# Native Language Functions

Native language functions are primarily written in JavaScript or TypeScript. This allows users to create custom functions to extend and enhance workflow functionality.
A native language workflow enables us to incorporate additional features using JavaScript or TypeScript, where we have the capability to implement intricate business logic.

```js
module.exports = async(ctx) => {
    // In the current version, import all the libs with require
    const { GSStatus } = require("@godspeedsystems/core");
    const { inputs, childLogger } = ctx;
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

We use the varibles inside the ctx as follows

```js
 const { inputs, childLogger } = ctx;
 const maria_db_client = ctx.datasources['mariadb'].client;
```

We the set the values as below

```js
response = new GSStatus(true, 200, undefined, responseData, undefined);
ctx.outputs[id] = response;
```