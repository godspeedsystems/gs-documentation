---
title: MariaDB
description: Learn how to use MariaDB with Prisma plugin.
keywords: [MariaDB, Prisma, database, connection URL, schema]
---
MariaDB is a fork of MySQL, created to maintain MySQL’s features while ensuring open-source development. It can be connected using the same way as MySql with Prisma plugin.

### Pre-requisites
In order to use MariaDB database you need:
 1.	an existing godspeed project with “prisma-as-datastore plugin” installed
 2.	a MariaDB database server running
 3.	and database connection URL

### CONNECTION_URL
```
mariadb://USER:PASSWORD@HOST:PORT/DATABASE
```
### Setting Environment Variable
You have to define the database connection url as an environment variable in .env as :
```
DATABASE_URL="mariadb://USER:PASSWORD@HOST:PORT/DATABASE"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/mariaDB.prisma
```
datasource db {
  provider = "mariaDB"
  url      = env("DATABASE_URL") 
}
```
<details>
<summary> Sample prisma schema for mariaDB database  </summary>

```
datasource db {
  provider = "mariaDB"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mariaDB"
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
</details>

### Generate prisma client
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema

### Generate CRUD APIs
Then You can generate the CRUD API'S by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mariaDB.prisma

* Now you can view the event and workflows according to the defined prisma schema
