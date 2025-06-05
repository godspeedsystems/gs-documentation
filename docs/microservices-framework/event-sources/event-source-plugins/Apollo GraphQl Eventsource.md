---
title: Apollo GraphQL Plugin for Godspeed Framework
description: An event source plugin that enables seamless integration of GraphQL APIs using Apollo Server in Godspeed applications. Simplifies schema generation and integration with diverse data sources for scalable and high-performance GraphQL applications.
keywords: [graphql, apollo server, event source, api development, godspeed plugin, query language, schema generation, data integration, scalable applications, high performance]
---

# Apollo GraphQL Plugin

GraphQL is a query language and runtime for APIs that enables clients to request precisely the data they need. It allows developers to describe the structure of the data they require, providing a more efficient and flexible alternative to traditional REST APIs. GraphQL empowers front-end developers to shape their API requests, minimizing over-fetching and under-fetching of data.


**Godspeed** leverages Apollo Server, a powerful and extensible open-source server built on GraphQL, to streamline the creation of GraphQL APIs. Apollo Server excels in automatic schema generation and seamless integration with diverse data sources, providing a robust foundation for scalable and high-performance GraphQL applications.

This guide offers a concise overview of integrating the GraphQL plugin into the Godspeed framework as an Event Source.

### Setting up GraphQL

### 1. Add the GraphQL plugin

```
  godspeed plugin add @godspeedsystems/plugins-graphql-as-eventsource
```

### 2. Tailor the configuration file according to your needs.

 File: (src/eventsources/grahpql.yaml)

  This configuration is same as Express or Fastify configuration, except that currently file upload is not supported and so is not swagger (since Swagger is not relevant for Graphql). 

  Everything else like authn, authz, port, log attributes is same. 

  ```yaml
  type: graphql
  port: 4000

  #jwt settings to run by default on every event (endpoint)
  authn:
    jwt:
      secretOrKey: mysecret #the secret
      audience: mycompany #aud in jwt token
      issuer: mycompany #iss in jwt token

  # authorization policies to run by default on every event
  # Uncomment this to start checking user roles.
  # This will require jwt to be setup, or another middleware to parse the user information in inputs. Currently Graphql, Epress and Fastify support creating user object from JWT token in incoming request.
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

### 3. Setup Graphql event & event handlers 

  Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is `graphql`. The event schema follows REST standards, resembling HTTP events.

  #### GraphQL Event 
  Its same as http event format. When creating Graphql schema, all `get` events are created as queries and rest are mutations.
  File: (src/events/create_category.yaml)

  ```yaml
  graphql.post./mongo/category: #this will become a mutation
    summary: Create a new Category
    description: Create Category from the database
    fn: create
    body:
      content:
        application/json:
          schema:
            type: object
            properties:
              name:
                type: string
    responses:
      content:
        application/json:
          schema:
            type: object
  ```

  #### GraphQL event handler 

  Every Graphql event has a `body`, `headers` and `user`. You can access the same in your Typescript, Javascript or YAML functions. Below is an example of a TS and YAML workflow.

  #### src/functions/create.ts

  ```ts
  export default function (ctx: GSContext) {
    const ds = ctx.datasources.mongoose;
    const response = ds.Category.create(ctx.inputs.data.body);
    return {
      code: 201,
      data: response
    }
  }
  ```

<!-- ``` 
  summary: Find one via Mongoose from Mongodb
  tasks:
    - id: mongo_category_create
      fn: datasource.mongoose.SomeModel.findOne
      args: #as an array
        - name: mastersilv3r #search clause: First argument
        - 'name age' #The projection: second argument
        - {} # Options: the third argument
``` -->

### 4. Auto generate graphql schema
```
  godspeed gen-graphql-schema
```

### 5. Start Server

Run `godspeed serve` and open `https://studio.apollographql.com/sandbox/explorer` on your browser and connect with the correct port on which you are running Apollo service.

This configuration emphasizes the simplicity of implementing GraphQL within the Godspeed framework, promoting efficiency and clarity in API development.

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/graphql-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-graphql-as-eventsource)
