---
title: Generating CRUD API
--- 

The gen-crud-api command in Godspeed is a powerful tool that automatically generates CRUD (Create, Read, Update, Delete) APIs for your data models. 
<!-- This command significantly simplifies the process of building back-end APIs, allowing you to focus on other parts of your application. -->

The framework generates CRUD API using Prisma's database model files and ORM client. It uses Godspeed's [Prisma plugin](./datasources/datasource-plugins/Prisma%20Datasource.md) as the ORM and generates **http** eventsource based CRUD APIs by default. 

**Currently supported eventsources:**
- Http eventsources: [Express](./event-sources/event-source-plugins/Express%20Http%20Eventsource.md),   [Fastify](./event-sources/event-source-plugins/Fastify%20Eventsource.md)
- Graphql eventsource: [Apollo Graphql](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md)  

### Steps to generate CRUD API over REST and Graphql

### Step 1. Create a godspeed project 
Create a new project from the CLI and open the created project in vscode
  
  [(See How to create)](./guide/get-started.md#step-2:-create-a-project-and-start-the-server)

### Step 2. Install the prisma plugin
Add the 'prisma-as-datastore' plugin from the CLI of vscode

  [(See How to add Prisma plugin)](./datasources/datasource-plugins/Prisma%20Datasource.md#add-plugin)

### Step 3: Set your Database Connection URL

Database connection URL is required to connect your project to a database and it should be configured within your project’s .env file.

**General Format**

Each database type has a specific URL format, but most follow the general structure:
```bash
protocol://username:password@host:port/database_name
```
Here, You can check the list of [**supported databases**](/docs/microservices-framework/databases/Overview#list-of-currently-supported-databases) and [**Connection URL format**](/docs/microservices-framework/databases/MySQL#connection-url) for the database you're using.

**Add the Database connection URL in .env file as:**
```.env
DATABASE_URL= "postgresql://postgres:postgres@localhost:5432/yourdb" //for postgres
 or
DATABASE_URL= "file:./enter_your_file_name.db"  //for SQLite
```
And then this environment variable is to be provided in the url field of the datasource block in the prisma schema 
(/src/datasources/_.prisma)
```
datasource db {
  provider = "database_provider_name",
  url      = env("DATABASE_URL") 
}
```
### Step 4. Create Prisma Schema 
Now Create a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema) file in `src/datasources` directory

If your schema name is **lms.prisma**, your file content should look like this. 

  ```prisma
    datasource db {
      provider = "Name of Database Provider"  // "mysql", "sqlite", "sqlserver" etc.
      url      = env("DATABASE_URL")     // this is the variable name given to your db_connecion_url in .env
    }

    generator client {
      provider = "prisma-client-js"
      output   = "./prisma-clients/lms"
      previewFeatures = ["metrics"]
    }

    model User {
      id               Int               @id @default(autoincrement())
      pan_number       String            @unique ///@encrypted
    }
  ```

  4.1 If you already have an existing database, you can [introspect it](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-typescript-postgresql) and generate the Prisma model file using `prisma db pull`. This will generate your .prisma file. 
  
  4.2 Copy the generated file to `src/datasources` folder and rename it as per the name of this datasource that you want to keep. If you don't have an existing database setup with a model, then create a prisma model file from scratch.
  
  4.3 Make sure to note the `output` parameter in the .prisma file which should point to location in `src/datasources/prisma-clients/<name_of_your_prisma_file>` and `previewFeatures` is to be added in case you want to generate metrics for prisma queries for telemetry. 

    
### Step 5. Generate prisma client and sync your database
Run `godspeed prisma prepare`. This command will generate the prisma client and will sync the database with prisma schema. The generated client will be stored in `src/datasources/prisma-clients/` folder.

 ```bash
  $ godspeed prisma prepare
 ```
  
### Step 6. Generate CRUD API
 
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
(x) lms.prisma
( ) For all
( ) Cancel

```
**And your CRUD API will be generated.**

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

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/dVt6GPSgY7A?si=gYrEESjBpIOfuNM5&amp;start=205" frameborder="0" allowfullscreen></iframe>
</div>
