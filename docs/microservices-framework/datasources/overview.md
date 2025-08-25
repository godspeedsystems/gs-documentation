# Data Sources
## Overview

Data sources play a central role in the Godspeed Framework, serving as the origins or locations from which data can be collected and stored. This documentation provides an overview of data sources within the framework, their usage, and how to invoke them from within function.

In the Godspeed Framework, data sources are fundamental components that enable users to access and manipulate data from various origins. Examples of data sources include databases, message bus, cache, file systems, and third-party APIs.

Data sources can be seamlessly integrated into your function tasks using a standardized syntax. The key element for invoking data sources is the fn attribute, which is namespaced under datasource. Here's an example of how data sources are used within a function task:

### Demonstration

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/NsH9hLCL92Y" frameborder="0" allowfullscreen></iframe>
</div>


## Datasource Types

Datasources can be divided into two types, "Datastore as datasource" and "API as a datasource"


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704478971/Screenshot_from_2024-01-05_23-52-33_e8ihnh.png" alt="event types" />


Example 1: Datastore as Datasource [prisma-as-datastore](/docs/microservices-framework/datasources/list-of-plugins#1-prisma-as-datasource)

<!-- ```yaml
id: function_1
description: This function will fetch the user with userId from the mongo database
tasks:
  - id: task_1
    fn: datasource.mongo.User.findOne
    args:
      where:
        userId: <% inputs.params.userId %>
``` -->
```ts
import { GSContext, GSStatus } from "@godspeedsystems/core";

module.exports = async (ctx: GSContext) => {
  const { inputs: { data: { params } }, logger, datasources } = ctx;

  const response = await datasources.mongo.client.Post.findUnique({
                         where: { id: params.id }
                  });
  return new GSStatus(true, 200, "Post fetched", response );
}
```

In this example:

`datasources.mongo.client.Post.findUnique` is the datasource function, which can be described as below:

  - `datasources`: fixed namespace for all data sources for typescript functions
  - `mongo`: name of datasource (name of prisma schema in case of prisma datasource), you can use any database provider, checkout [supported databases list](/docs/microservices-framework/databases/Overview#list-of-currently-supported-databases)
  - `Post`: entity name
  - `findUnique`: method to be invoked in entity name

the function is consuming the datasource `mongo` and finding one document from Post entity.

:::tip **Godspeed has "Prisma as datastore plugin", which provides a uniform access to all databases**
:::

To enable this seamless interaction with datasources, the Godspeed Framework allows you to configure data sources within your project. For instance, the example mentions the use of the "prisma-as-datastore" plugin to define the "mongo" data source. This configuration step ensures that the framework can establish connections and communicate effectively with the specified data source.

In the above example there is a `mongo` datasource defined in the project, you are free to name your datasource as you like. A default config of your datasource is present in `src/datasources` folder.


Example 2: API Datasource  [axios-as-datasource](/docs/microservices-framework/datasources/list-of-plugins#2-axios-as-datasource)

<!-- ```yaml
id: post_api_send_anthing
tasks:
  - id: send_anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api_datasource.post./anything
    args:
      data:
        message: <%inputs.body.message%>
``` -->
```ts
import { GSContext, GSDataSource, logger, PlainObject } from "@godspeedsystems/core";

export default async function (ctx: GSContext) {
    const res =  await ctx.datasources.api.execute(ctx, {
        meta: {
            method: 'get',
            url: '/anything',
        },
    });
    return res;
};
```
In the above example:
  - `datasources`: fixed namespace for all data sources
  - `api`: name of data source,
  - `get`: API method
  - `./anything`: API endpoint

