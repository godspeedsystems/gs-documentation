---
title: Generating CRUD API
--- 

Currently the framework generates CRUD API using Prisma's database model files and ORM client. It uses the [Prisma plugin](./datasources/datasource-plugins/Prisma%20Datasource.md) as the ORM. And it generates `http` eventsource based CRUD API by default. Currently supported http eventsources are [Express](./event-sources/event-source-plugins/Express%20Http%20Eventsource.md) and [Fastify](./event-sources/event-source-plugins/Fastify%20Eventsource.md). You can expose it via Graphql eventsource as well, with currently supported [Apollo Graphql plugin](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md).   

:::tip
You can use prisma commands without yourself installing prisma through Godspeed, via `godspeed prisma <prisma_command_and_args>`. The `godspeed prisma` command is a proxy to prisma commands with some add-on commands to handle prisma datasources.
:::

### Steps to generate CRUD API over REST and Graphql

### Step 1. Create a godspeed project 
Create a new project from the CLI and open the created project in vscode
  
   godspeed create my_new_project  #replace my_new_project with name of your project.

### Step 2. Add the prisma plugin
Add the 'prisma-as-datastore' plugin from the CLI of vscode

  [(See How to add Prisma plugin)](./datasources/datasource-plugins/Prisma%20Datasource.md#add-plugin)

### Step 3: Set your Database_Connection_URL

To connect with the database, give your db_connection_url in .env file.
 ```
    POSTGRES_URL= postgresql://postgres:postgres@172.23.0.2:5432/yourdb
    or
    MYSQL_URL = mysql://root:password@localhost:3306/yourdb
    or
    MONGO_ATLAS_URL = mongodb+srv://atlas_username:pswd@cluster0.w3bbqrp.mongodb.net/yourdb?retryWrites=true&w=majority&appName=Cluster0
 ```
### Step 4. Create prisma schema 

Now Create a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema) file in `src/datasources` directory

If your schema name is lending_service_db.prisma, your file content should look like this. 
  ```prisma
    datasource db {
      provider = "postgresql"  // or "mysql", "sqlite", "sqlserver" etc.
      url      = env("POSTGRES_URL")     // this is the variable name given to your db_connecion_url in .env
    }

    generator client {
      provider = "prisma-client-js"
      output   = "./prisma-clients/lending_service_db"
      previewFeatures = ["metrics"]
    }

    model User {
      id               Int               @id @default(autoincrement())
      pan_number       String            @unique ///@encrypted
    }
  ```

<!-- 
  3.1 If you already have an existing database, you can [introspect it](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-typescript-postgresql) and generate the Prisma model file using `prisma db pull`. This will generate your .prisma file. 
  
  3.2 Copy the generated file to `src/datasources` folder and rename it as per the name of this datasource that you want to keep. If you don't have an existing database setup with a model, then create a prisma model file from scratch.  -->
  
  Make sure to note the `output` parameter in the .prisma file which should point to location in `src/datasources/prisma-clients/<name_of_your_prisma_file>` and `previewFeatures` is to be added in case you want to generate metrics for prisma queries for telemetry. 

    
### Step 4. Generate prisma client
Run `godspeed prisma prepare`. It will generate your prisma client for given schema and DB and will place the generated client in the `src/datasources/prisma-clients/` folder.

 ```bash
  $ godspeed prisma prepare
 ```
  
### Step 5. Generate CRUD API
 
  The `godspeed gen-crud-api` command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/<db_name>.prisma

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
And your CRUD API will be generated.

Inspect generated events, definitions and functions.

  ![img](../../static/img/generated_crud_api.png)

  Generated events use definitions defined in `src/definitions` folder, which are in JSON schema format
    
  Generated functions are currently YAML functions

### Run and check Swagger spec 
  You can check the Swagger spec which would have been automatically generated. 

  #Run the project using `godspeed serve` command and then open your swagger endpoint in the browser and test your CRUD app from end to end.
  
   `localhost:<http_port>/<http_docs_endpoint>` which is by default `localhost:3000/api-docs`

### To expose same API via Graphql

  Simply add Graphql plugin and change your event URIs which have `http` to `http & graphql`, keeping the rest as the same. See how to use Graphql in detail in the [Apollo Graphql plugin documentation](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md)

#### To see generated CRUD API over http and graphql, check this video from 3:30

  <iframe width="560" height="315" src="https://www.youtube.com/embed/dVt6GPSgY7A?si=gYrEESjBpIOfuNM5&amp;start=205" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
