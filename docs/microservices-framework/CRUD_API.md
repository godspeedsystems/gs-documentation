---
title: Generating CRUD API
---

### Generating CRUD API

Currently the framework generates CRUD API using Prisma's database model files and ORM client. It uses the [Prisma plugin](./datasources/datasource-plugins/Prisma%20Datasource.md) as the ORM. And it generates `http` eventsource based CRUD API by default. Currently supported http eventsources are [Express](./event-sources/event-source-plugins/Express%20Http%20Eventsource.md) and [Fastify](./event-sources/event-source-plugins/Fastify%20Eventsource.md). You can expose it via Graphql eventsource as well, with currently supported [Apollo Graphql plugin](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md).   

:::tip
You can use prisma commands without yourself installing prisma through Godspeed, via `godspeed prisma <prisma_command_and_args>`. The `godspeed prisma` command is a proxy to prisma commands with some add-on commands to handle prisma datasources.
:::

### Steps to generate CRUD API over REST and Graphql
1. If you already have an existing database, you can [introspect it](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-typescript-postgresql) and generate the Prisma model file using `godspeed prisma db pull`. This will generate your .prisma file. 
  
  1.1 Copy the generated file to `src/datasources` folder and rename it as per the name of this datasource that you want to keep. If you don't have an existing database setup with a model, then create a prisma model file from scratch. 
  
  1.2 Make sure to note the `output` parameter in the .prisma file which should point to location in `src/datasources/prisma-clients/<name_of_your_prisma_file>` and `previewFeatures` is to be added in case you want to generate metrics for prisma queries for telemetry. 

  1.3 Also, you have to add a new variable to the .env file whose value is the direct database connection string.
  ```
    POSTGRES_URL= postgresql://postgres:postgres@172.23.0.2:5432/emp
  ```
If your file name is lending_service_db.prisma, your file content should look like this. 
  ```prisma
    datasource db {
      provider = "postgresql" // or "mysql", "sqlite", "sqlserver" etc.
      url      = env("POSTGRES_URL")
    }

    generator client {
      provider = "prisma-client-js"
      output   = "./prisma-clients/lending_service_db"
      previewFeatures = ["metrics"]
    }

    model User {
      id               Int               @id @default(autoincrement())
      pan_number            String            @unique ///@encrypted
    }
  ```
2. Run `godspeed prisma prepare`. It will 

  2.1 Generate your prisma client for your given schema and DB. It will place the generated client in the `src/datasources/prisma-clients/` folder. This is achieved internally by `prisma generate` command. 

  2.2 It will setup the provided schema on the database which is provided in the .prisma file. This is achieved internally by the command `prisma db push`

  ```bash

  $ godspeed prisma prepare
  ```
  
3. Generate CRUD API
 
  The `godspeed gen-crud-api` command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/<prisma_db_name>.prisma

  ```bash
  $  godspeed gen-crud-api
  ```

```

       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝



> blog-app@1.0.0 gen-crud-api
> npx @godspeedsystems/api-generator

Select datasource / schema to generate CRUD APIs
(x) mongo.prisma
( ) For all
( ) Cancel

```
  4. Inspect generated events, definitions and functions.

    ![img](../../static/img/generated_crud_api.png)

    4.1 Generated events use definitions defined in `src/definitions` folder, which are in JSON schema format
    
    4.2 Generated functions are currently YAML functions

  5. Swagger spec would have been automatically generated. 

  6. Open your swagger endpoint in the browser and test your CRUD app from end to end
  
   `localhost:<http_port>/<http_docs_endpoint>` which is by default `localhost:3000/api-docs`

  7. To expose same API via Graphql, simply add Graphql plugin and change your event URIs which have `http` to `http & graphql`, keeping the rest as the same. See how to use Graphql in detail in the [Apollo Graphql plugin documentation](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md)

  #### To see generated CRUD API over http and graphql, check this video from 3:30

    <iframe width="560" height="315" src="https://www.youtube.com/embed/dVt6GPSgY7A?si=gYrEESjBpIOfuNM5&amp;start=205" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
