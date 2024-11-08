# Invoking Datasource clients from typescript functions

All datasources are available under ctx.datasources hood.

### OPTION 1
Every datasource exposes a client key. The client may be a single instance like in case of Axios, or multiple datasource client instances like in case of AWS, or database models like in case of Mongoose (depending on the plugin used).
```
    const res = await ctx.datasources.aws.client.s3.listBuckets(args);
```
### OPTION 2
All datasources have an execute method. This may be preferable in case you want to utlise the full capabilities of the plugin wrapped over the native clients, like error handling checks and response codes, retries, caching etc. 
```
    const res = await ctx.datasources.aws.execute(ctx, {
         //Pass exactly same args as this aws service's method takes
        
        ...args,
        meta: {entityType: 's3', method: 'listBuckets'}
        
        //Along with args, pass meta object
        // meta can contain {entityType, method}
    });
```
### Example Typescript Function

```ts
 export default async function (ctx: GSContext, args: any) {

    //Calling functions (yaml, js, ts) from within a ts/js function, in a meta framework's project's functions folder, all project functions are available under ctx.functions. 
    const res = await ctx.functions['com.gs.helloworld2'](ctx, args);
    //Same As
    const res = await require('com/gs/helloworld2')(ctx, args);
    // Calling datasource functions. All datasources are available under ctx.datasources hood.
    // OPTION 1
    // Every datasource exposes a client key. The client may be a single instance like in case of Axios, or multiple datasource client instances like in case of AWS, or database models like in case of Mongoose (depending on the plugin used).
    const res = await ctx.datasources.aws.client.s3.listBuckets(args);
    // OPTION 2
    // All datasources have an execute method. This may be preferable in case you want to utlise the full capabilities of the plugin wrapped over the native clients, like error handling checks and response codes, retries, caching etc. 
    const res = await ctx.datasources.aws.execute(ctx, {
         //Pass exactly same args as this aws service's method takes
        ...args,
        meta: {entityType: 's3', method: 'listBuckets'}
        //Along with args, pass meta object
        // meta can contain {entityType, method}
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