SQLite is a lightweight, serverless database engine that operates in-memory by default. This means it doesn't require a separate database server process or a network connection to access data.
When you use SQLite with Prisma ORM, the database is created and managed entirely within your application's memory space.

### Pre-requisites

A godspeed project with “prisma-as-datastore plugin” installed

See [How to set up SQLite on your computer](https://www.prisma.io/dataguide/sqlite/setting-up-a-local-sqlite-database#setting-up-sqlite-on-windows) 

### Connecting to SQLite in Godspeed with Prisma

The SQLite data source connector connects Prisma ORM to a SQLite database file (which always has a .db extension).

#### Connection URL
The connection URL for SqLite will point to the location of the database file.

Format:
```
file: followed by the path to the file`
```
Example:
```
file:./testing.db
```

If the database file doesn't exist at the specified path, it will automatically be created in datasource directory of your godspeed project.

### Configure the datasource block in your Prisma schema

sqlite.prisma
```
datasource db {
  provider= "sqlite"
  url  = "file:./testing.db"  # target files from the project root
  or
  url  = "file:/Users/john/testing.db"   # target files from any other place in your file system
}
```

### Setting Environment Variables

SQLite operates in-memory and Prisma handles the connection automatically. For enhanced configuration management, you can store the database file path in an environment variable and reference it in your Prisma schema:

#### In your .env file
```
DATABASE_URL= file:./testing.db
```
#### In your Prisma schema
```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```
This approach allows you to easily switch between different database files at runtime if necessary.

### Sample prisma schema for SqLite
<details>
<summary> Sample prisma schema for SqLite </summary>

```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/sqlite"
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
After having saved your schema under datasources directory, you can run the command:
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema.

### Generate CRUD APIs
Then You can generate the CRUD API's by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/sqlite.prisma

* Go to the src/Events and src/Functions to vview the events and workflowss generated as per your defined prisma schema.