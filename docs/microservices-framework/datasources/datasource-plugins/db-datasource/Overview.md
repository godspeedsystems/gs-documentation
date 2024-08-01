
Godspeed provides functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB with its Prisma-as-datasource plugin through [Prisma ORM](https://www.prisma.io/docs).

**"Prisma: Bridging Databases for Seamless Development. One Toolkit, Any Database."**

Prisma is a modern and open-source database toolkit that simplifies database access for developers. It offers a strongly typed query builder, schema migrations, support for various databases, real-time data synchronization, and enhanced security, making it a powerful tool for efficient and secure database interactions in web applications.

## Databases supported by Prisma 
Prisma supports a variety of data sources, allowing you to connect to and work with different database systems. As of my last knowledge update in September 2021, Prisma supports the following data sources:

**1. PostgreSQL**: Prisma has strong support for PostgreSQL, one of the most popular open-source relational database systems.

**2. MySQL**: Prisma can be used with MySQL, another widely used open-source relational database management system.

**3. SQLite**: SQLite is a serverless, self-contained, and zero-configuration database engine, and Prisma supports it as well.

**4. SQL Server**: Prisma offers support for Microsoft SQL Server, a popular commercial relational database management system.

**5. MongoDB (Experimental)**: Prisma also has experimental support for MongoDB, a NoSQL database, although this support may not be as mature as for relational databases.

**6. CockroachDB**: A distributed, resilient SQL database for large-scale, cloud-native applications.

**7. MariaDB**: An open-source, high-performance relational database system and MySQL-compatible alternative.

**8. PlanetScale**: PlanetScale is a database-as-a-service platform designed for distributed SQL databases. It provides a managed, scalable, and highly available database solution for modern, cloud-native applications.

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
You will find the a file in your project related to the Prisma plugin at `src/datasources/types/prisma.ts`.
```typescript title=prisma.ts
import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
export default DataSource;
```
Now, you can create your prisma schema in `src/datasources` directory. 

## How to use
You can start using this plugin by writing a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema) according to the database of your choice.

### Support for multiple prisma schema
By default, only single prisma schema can be created in a project that can use a single database as given in the above example.   
To support multiple prisma schemas for different databases, you need to add `output` key in `generator client` block as given in the below sample prisma schema:

<details>
<summary>Sample prisma schema </summary>

prisma title = src/datasources/db_name.prisma
```
datasource db {
  provider = "db_name"   // for example, mysql, postgresql or mongodb
  url      = env("DB_URL") // add your DB_URL string in .env
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

### Generate prisma client
This command will generate the prisma client and will sync the database with prisma schema
```bash
godspeed prisma prepare
```
Once you [generate prisma client](#generate-prisma-client), the multiple clients get generated in `src/datasources/prisma-clients` directory. Godspeed automatically loads all the clients present in this directory.

### Generate CRUD APIs
You can generate the CRUD API'S enter the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/db_name.prisma

* Now you can view the event and workflows according to the defined prisma schema

### Database Encryption
Godspeed provides AES-256 GCM both way deterministic hashing encryption in Prisma plugin. You can apply encryption only on `String` type fields.

#### Annotate prisma schema
In your prisma schema, add `/// @encrypted` annotation to the fields you want to encrypt.

<details>
<summary>sample schema to encrypt email field</summary>

```prisma title=src/datasources/mongo.prisma
datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL") //Connection string can be found in the .env folder. you can add your own database connection string
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

### Database authorization
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
