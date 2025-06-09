---
title: MySQL
description: Learn how to use MySQL with Prisma plugin.
keywords: [MySQL, Prisma, database, connection URL, schema]
---
MySQL, a widely used open-source relational database management system can be connected easily using the Prisma-as-datasource plugin.

### Pre-requisites

In order to use MySql database you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a MySQL database server running
 3.	and database connection URL

### CONNECTION URL
The format of the connection URL for MySQL looks as follows 
```
mysql://USER:PASSWORD@HOST:PORT/DATABASE
```
For example,
If your MySQL database is hosted on AWS RDS, the connection URL might look like this:
```
"mysql://johndoe:password@mysql–instance1.123456789012.us-east-1.rds.amazonaws.com:3306/mydb"
```

If you are running MySQL locally, your connection URL will be like this:
```
"mysql://root:password@localhost:3306/yourdb"
```

### Setting Environment Variable
You can define the database connection url as an environment variable in .env as :
```
DATABASE_URL="mysql://root:password@localhost:3306/yourdb"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/mysql.prisma

```
datasource db {
  provider = "MySQL"        // database provider name which you are using
  url      = env("DATABASE_URL")   // DATABASE_URL is the name of env variable
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mysql"    // dbName should be same as prisma schema file name
  previewFeatures = ["metrics"]
}
```

### Sample prisma schema for MySQL

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mysql"
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
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mysql.prisma

* Now you can view the event and workflows according to the defined prisma schema