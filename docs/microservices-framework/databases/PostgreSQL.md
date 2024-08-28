PostgreSQL can also be connected using the Prisma-as-datasource plugin.

### Pre-requisites
In order to use PostgreSQL database you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a PostgreSQL database server running
 3.	and database connection URL

### CONNECTION_URL
The format of the connection URL for PostgreSQL looks as follows 
```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```
For example,
If your PostgreSQL database is hosted on Heroku, the connection URL might look like this:
```
DATABASE_URL="postgresql://opnmyfngbknppm:XXX@ec2-46-137-91-216.eu-west-1.compute.amazonaws.com:5432/d50rgmkqi2ipus?schema=hello-prisma"
```

If you are running PostgreSQL locally, your connection URL will be like this:
```
DATABASE_URL="postgresql://johndoe:password@localhost:5432/mydb?schema=public"
```
### Setting Environment Variable
You can define the database connection url as an environment variable in .env as :
```
DATABASE_URL="postgresql://johndoe:password@localhost:5432/mydb?schema=public"
```
In the above examples, DATABASE_URL is just a variable name given to connection url, this same environment variable name will be then provided in the url field of the datasource block in your prisma schema src/datasources/fileName.prisma as:

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL") 
}

```
### Sample prisma schema for PostgreSQl
<details>
<summary> Sample prisma schema </summary>

```src/datasources/Postgre.prisma

datasource db {
  provider = "PostgreSQL"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/PostgreSQL"
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
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/Postgre.prisma

* Now you can view the event and workflows according to the defined prisma schema
