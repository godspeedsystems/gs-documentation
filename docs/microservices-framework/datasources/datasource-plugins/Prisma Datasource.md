---
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
---
**- ** [Prisma Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
     
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

## Overview
Prisma-as-datasource plugin provides functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through [Prisma ORM](https://www.prisma.io/docs).

**"Prisma: Bridging Databases for Seamless Development. One Toolkit, Any Database."**

Prisma is a modern and open-source database toolkit that simplifies database access for developers. It offers a strongly typed query builder, schema migrations, support for various databases, real-time data synchronization, and enhanced security, making it a powerful tool for efficient and secure database interactions in web applications.

## How to add plugin
### Add plugin
Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-prisma-as-datastore` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                │ excel as datasource plugin for Godspeed Framework                  │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource               │ mailer as datasource plugin for Godspeed Framework                 │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource │ kafka as datasource-as-eventsource plugin for Godspeed Framework   │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```

### Related files
You will find a file in your project related to the Prisma plugin at `src/datasources/types/prisma.ts`.
```typescript title=prisma.ts
import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
export default DataSource;
```

## How to use
You can start using this plugin by writing a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema).
`src/datasources` directory and giving your db_connection_url in .env file.  

<details>
#SamplePrisma
<summary>Sample prisma schema </summary>

prisma title = src/datasources/db_name.prisma
```
datasource db {
  provider = "db_name"   // for example, mysql, postgresql or mongodb
  url      = env("DB_URL") // add your DB_URL string in .env file
}

generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/db_name" // here you can give name for your prisma-client     
}

model User {

}

model Post {
  
}

```
</details>

### Support for multiple prisma schema
By default, only single prisma schema can be created in a project that can use only one database. To support multiple prisma schemas for different databases, you need to add `output` key in `generator client` block as given in the above sample prisma schema.

### Generate prisma client
Run `godspeed prisma prepare`. It will 

  4.1 Generate your prisma client for your given schema and DB. It will place the generated client in the `src/datasources/prisma-clients/` folder. This is achieved internally by `prisma generate` command. 

  4.2 It will setup the provided schema on the database which is provided in the .prisma file. This is achieved internally by the command `prisma db push`

  ```bash
  
  $ godspeed prisma prepare
 
  ```
Once you [generate prisma client](#generate-prisma-client), the multiple clients get generated in `src/datasources/prisma-clients` directory. Godspeed automatically loads all the clients present in this directory.

### Generate CRUD APIs
You can generate the CRUD API'S enter the below command:
```bash

godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mongo.prisma

* Now you can view the event and workflows according defined prisma schema

### Sample API
Here is a sample event and workflow which is fetching data from the database.
```yaml title=src/events/mongo.yaml
http.get./mongo/post/{id}:
  summary: Fetch Post
  description: Fetch Post from database
  fn: com.biz.mongo.post.one
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

```yaml title=com/biz/mongo/post/one.yaml
summary: Fetch Post
tasks:
  - id: mongo_post_one
    fn: datasource.mongo.Post.findUnique
    args:
      where:
        id: <% inputs.params.id %>
```

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

### Database Authorization
The plugin provides rows and columns level authorization access as explained in [Authorization](../../authorization/authz-usecases.md#d-restricting-datastore-access). If you are not allowed to access something, then empty data is returned.   
**- **empty rows (e.g. in case where query trespasses access boundaries)   
**- **empty fields (e.g. in case all the fields in the query are not allowed to access)    


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
</details>

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)
