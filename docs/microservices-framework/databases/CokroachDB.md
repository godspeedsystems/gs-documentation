Coackroch, a distributed database that is designed for scalability and high availability, is largely compatible with PostgreSQL, and can be used with Prisma plugin in the same way.

### Pre-requisites
In order to use Coackroch database you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a CoackrochDB database server running
 3.	and database connection URL

### CONNECTION_URL
CockroachDB uses the PostgreSQL format for its connection URL.
```
cockroachDB://USER:PASSWORD@HOST:PORT/DATABASE
```
You have to define the database connection url as an environment variable in .env as :
```
DATABASE_URL="cockroachDB://USER:PASSWORD@HOST:PORT/DATABASE"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/cockroachDB.prisma
```
datasource db {
  provider = "cockroachDB"
  url      = env("DATABASE_URL") 
}

```
### Sample prisma schema for cockroachDB 
<details>
<summary> Sample prisma schema for cockroachDB </summary>

```
datasource db {
  provider = "cockroachDB"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/cockroachDB"
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
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/cockroachDB.prisma

* Now you can view the event and workflows according to the defined prisma schema