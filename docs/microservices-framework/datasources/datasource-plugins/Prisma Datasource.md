---
title: Prisma Datasource Plugin
description: A powerful database ORM plugin that enables seamless integration with multiple databases in Godspeed applications. Features include type-safe queries, schema migrations, CRUD API generation, data encryption, and row/column level authorization.
keywords: [prisma, orm, database integration, datasource, generate crud apis, postgresql, mysql, mongodb, mongoose, sqllite, database migration, crud operations, godspeed prisma plugin, type safety, mongodb with prisma]
toc_min_heading_level: 2
toc_max_heading_level: 4
---


**[Link to Plugin Source Code](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)**

## Overview
Prisma-as-datasource plugin provides functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through [Prisma ORM](https://www.prisma.io/docs).

**"Prisma: Bridging Databases for Seamless Development. One Toolkit, Any Database."**

Prisma is a modern and open-source database toolkit that simplifies database access for developers. It offers a strongly typed query builder, schema migrations, support for various databases, real-time data synchronization, and enhanced security, making it a powerful tool for efficient and secure database interactions in web applications.

### How to Add plugin
Create a godspeed project from the CLI, open the created project in vscode and then add the plugin:

```
godspeed plugin add @godspeedsystems/plugins-prisma-as-datastore
```

### Related files
You will find a file in your project related to the Prisma plugin at `src/datasources/types/prisma.ts`.

```typescript title=prisma.ts

import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
export default DataSource;
```

## How to use

### 1. Write a prisma schema

  1.1 You can start using this plugin by writing a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema). For this you need to create a file with .prisma extension inside `src/datasources/`.

  1.2 Set the url field of the datasource block in your schema to your database connection URL as shown below:

  src/datasources/schema.prisma
  ```
    datasource db { 
      provider = "mysql"      // name of database provider
      url      = env("DB_URL")  // DB_URL string will be added in .env file
    }
    generator client {
      provider = "prisma-client-js"
      output = "./prisma-clients/schema"  //schema is the name of your prisma schema file
      previewFeatures = ["metrics"]
    }
  ```
  Set provider to the type of database you are using. In this case it’s mysql. The url property will take the value of the connection url which is defined in the .env file.
  :::tip
  Ensure you add the `output field` in your Prisma schema's generator block. This field should point to this location `src/datasources/prisma-clients/<prisma_schema_fileName/>` where the generated prisma client files will be stored.
  :::

### 2. Set your Database Connection URL

Set your Database Connection URL as environment variable in .env file as per the format. The format of the connection URL for your database depends on the [database](../../databases/Overview.md) you use. For PostgreSQL, it looks as below

 DB_URL = postgresql://USER:PASSWORD@HOST:PORT/DATABASE
 
 The parts spelled all-uppercased are placeholders for your specific connection details
 
 Example Connection String
  ```
    DB_URL = "postgresql://johndoe:password@localhost:5432/mydb?schema=public"
  ```
### 3. Generate data models

The next step is to generate or define the data models. Prisma uses the connection url you provided to connect to the database. 

#### 3.1 If you have an existing database

To connect with your existing database, first install prisma and run prisma db pull command by giving path of your schema.prisma file.
```
npm install prisma --save-dev

prisma db pull --schema = src/datasources/schema.prisma
```

If the command has run successfully Prisma will generate models from your database server and save in schema.prisma file. If the Prisma schema is new to you, have a look at their [documentation](https://www.prisma.io/docs/getting-started).

#### 3.2 If you don't have an existing database,

Then add the data models to your Prisma schema in datasources/schema.prisma as:

### Sample prisma schema

```
datasource db {
  provider = "PostgreSQL"    // database provider name which you are using
  url      = env("DB_URL")   // DB_URL is the name of env variable
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/schema"    // dbName should be same as prisma schema file name
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}

```
:::tip  Support for multiple prisma schema
:::
By default, only single prisma schema can be created in a project that can use only one database. To support multiple prisma schemas for different databases, you need to add `output` key in `generator client` block as given in the above sample prisma schema. 

### 4. Generate prisma client

Run `godspeed prisma prepare`. It will generate your prisma client for given schema and will place the generated client in the `src/datasources/prisma-clients/` folder. This is achieved internally by `prisma generate` command. 
It will also setup the provided schema on database. This is achieved internally by the command `prisma db push`

  ```bash
    $ godspeed prisma prepare
  ```
  
Once you have generated prisma client, multiple clients get generated in `src/datasources/prisma-clients` directory. Godspeed automatically loads all the clients present in this directory.

### Generate CRUD APIs
You can generate the CRUD API'S by entering the below command:
  ```bash
    godspeed gen-crud-api
  ```
* This command will generate the crud apis based on the sample schema provided at ./src/datasources/schema.prisma

* You can now view events and workflows generated under events and functions folder. They follow a structure similar to the APIs below.

Here is an additional subsection you can insert under the **“How to use”** section of your Prisma Datasource Plugin documentation. This integrates the `execute` method explanation and encourages its usage in TypeScript functions:

---

### Writing TypeScript Functions Using the `execute()` Method (Recommended)

Instead of calling Prisma models directly via `client.Model.method()`, we recommend using the `execute()` method provided by the Godspeed `prisma-as-datastore` plugin.

### Why use `execute()`?

The `execute()` method adds several powerful features on top of Prisma’s native client:

 <!-- **Authorization integration** using `authzPerms` for row/column-level filtering. -->
*  **Validation** of `entityType` and `method`, preventing accidental misuse.
*  **Automatic `BigInt` conversion** to avoid serialization issues.
*  **Consistent response structure** using `GSStatus` with `code`, `success`, and `data`.

### Example

```ts title=src/functions/devreg/create.ts

import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

module.exports = async (ctx: GSContext): Promise<GSStatus> => {
  const {
    inputs: { data: { body, user } },
    datasources,
    logger
  } = ctx;

  const registrationData = {
    name: body.name,
    email: body.email,
    createdBy: user.id,
  };

  const client: GSDataSource = datasources.godspeed;

  const response = await client.execute(ctx, {
    meta: {
      entityType: 'DeveloperRegistration',  //Model Name
      method: 'create'
    },
    ...registrationData                 // data to send
  });

  return response;
};
```

> This method ensures your function respects permission rules and maintains consistency with the Godspeed framework's response model.

---

### Sample API
If your schema name is mysql.prisma and model name is 'post', then your event and workflow to fetch data from the database, will look like :

```yaml title = src/events/post.yaml

http.get./mysql/post/{id}:
  summary: Fetch Post
  description: Fetch Post from database
  fn: com.biz.mysql.post.one
  params:
    - name: id
      in: path
      required: true
      schema:
        type: string
  responses:
    content:
      application/json:
        schema:
          type: object
```

```ts title = src/functions/com/biz/mysql/post/one.ts

import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";

module.exports = async (ctx: GSContext, args: PlainObject) => {
  const { inputs: { data: { params } }, logger, datasources } = ctx;
  const client: GSDataSource = datasources.mysql;
  const response = await client.execute(ctx, {
                    meta: {
                      entityType: 'Post',  //Model Name
                      method: 'findUnique'
                    },
                    where: {
                      id: params.id
                    } });
  return new GSStatus(true, 200, "Post fetched", response );
}
```
<!-- 
### More Examples

[Check more typescript function examples to interact with prisma datasource](/docs/microservices-framework/how-to/sample-ts-functions.md) -->

<!-- ```yaml title= src/functions/com/biz/post/one.yaml
summary: Fetch Post
tasks:
  - id: mysql_post_one
    fn: datasource.mysql.Post.findUnique
    args:
      where:
        id: <% inputs.params.id %>
``` -->

### Database Encryption
Godspeed provides AES-256 GCM both way deterministic hashing encryption in Prisma plugin. You can apply encryption only on `String` type fields.

#### Annotate prisma schema
In your prisma schema, add `/// @encrypted` annotation to the fields you want to encrypt.

<details>
<summary>sample schema to encrypt email field</summary>

```prisma title=src/datasources/mongo.prisma
datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL") //Connection string can be found in the .env file, you can add your own database connection string
}

generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mongo"
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  email     String   @unique  /// @encrypted
  name      String?
  role      Role     @default(USER)
  posts     Post[]
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String   @db.ObjectId
}

enum Role {
  USER
  ADMIN
}
```

</details>

#### Add secret
You can specify secret in `prisma_secret` variable in [config environment variables](../../config-and-mappings/config.md/#custom-environment-variablesyaml).
<!-- 
### Database Authorization
The plugin provides rows and columns level authorization access as explained in [Authorization](../../authorization/authz-usecases.md#d-restricting-datastore-access). If you are not allowed to access something, then empty data is returned.   
**-**empty rows (e.g. in case where query trespasses access boundaries)   
**-**empty fields (e.g. in case all the fields in the query are not allowed to access)    


:::info
Check the below clauses which are available in this plugin and provides database level restricted access. For further enhancements and updates in database access, check this [Github issue](https://github.com/godspeedsystems/gs-plugins/issues/162). 
:::

#### where
Additonal row level access to be applied on the DB query. For example, check below a sample authz instruction:
```yaml
authz: 
  - id: authz_task_1
    summary: return access columns
    fn: com.gs.transform
      args:
        can_access: 
          - col1
          - col2
        no_access:
          - col3
        where:
          tenant: <% inputs.headers.client_id %>
```
Here, `where` clause restricts returning only those rows where this condition is true.

#### select
Additional columns which should be returned in the DB query.

#### can_access
Columns which are allowed to access. When can_access is present no_access will be ignored.

#### no_access
Columns which are not allowed to access.

:::note Remember
If no_access/can_access is set, then you will not be able to specify:  
**a) ** where clause on columns not allowed. This includes direct field match, and nested AND and OR queries.       
**b) ** select clause on columns not allowed.
:::

<details>
<summary>Sample workflow with inline authz instruction</summary>
In the below workflow with inline authz instruction can_access, no_access and where conditions are provided. These conditions will be applied while fetching author details.

```yaml title=fetch_author.yaml
summary: Fetch author
tasks:
  - id: fetch_author
    fn: datasource.mysql.author.findUnique
    authz:
      - fn: com.gs.transform
        args:
          # can_access: 
          #   - col1
          #   - col2
          no_access:
            - col3
          where:
            tenant: <% inputs.headers.client_id %>
    args:
      where:
        id: <% inputs.params.id %>
```
</details>

<details>
<summary>Sample workflow calling a separate authz workflow</summary>

```yaml title=fetch_author.yaml
summary: Fetch author
tasks:
  - id: fetch_author
    fn: datasource.mysql.author.findUnique
    authz:
      - fn: authz_wf
        args: <% inputs %>
    args:
      where:
        id: <% inputs.params.id %>
```

In the below authz workflow can_access, no_access and where conditions are provided. These conditions will be applied while fetching author details.
```yaml title=authz_wf.yaml
summary: authz workflow
  - id: authz_task_1
    summary: return access columns
    fn: com.gs.transform
      args:
        can_access: 
          - col1
          - col2
        # no_access:
        #   - col3
        where:
          tenant: <% inputs.headers.client_id %>
```
</details> -->


      
