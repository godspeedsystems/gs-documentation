---
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
---

npm [package](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

## Overview
Prisma-as-datasource plugin provide functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through [Prisma ORM](https://www.prisma.io/docs).

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
You can start using this plugin by writing a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema).

<details>
<summary>Sample prisma schema for mongo database</summary>

```prisma title=src/datasources/mongo.prisma
datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL") //Connection string can be found in the .env folder. you can add your own database connection string
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  email     String   @unique
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

### Support for multiple prisma schema
By default, only single prisma schema can be created in a project that can use only one database as given in the above example.   
To support multiple prisma schemas for different databases, you need to add `output` key in `generator client` block as given in the below sample prisma schema:

<details>
<summary>Support multiple prisma schemas</summary>

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
  email     String   @unique
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

Once you [generate prisma client](#generate-prisma-client), the multiple clients get generated in `src/datasources/prisma-clients` directory. Godspeed automatically loads all the clients present in this directory.

### Generate prisma client
This command will generate the prisma client and will sync the database with prisma schema
```bash
godspeed prisma prepare
```

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
