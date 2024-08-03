Microsoft SQL Server database can be connected using Prisma-as-datasource plugin.

### Pre-requisites
In order to use Microsoft SQL Server database, you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a Microsoft SQL Server database
    - Microsoft SQL Server on Linux for Docker
    - Microsoft SQL Server on Windows (local)
 3.	and database connection URL

### CONNECTION_URL
The format of the connection URL for MySQL looks as follows 
```
sqlserver://HOST[:PORT];database=DATABASE;user=USER;password=PASSWORD;encrypt=true
```
To know more about the connection_url format, you can check [details here.](https://www.prisma.io/docs/orm/overview/databases/sql-server) 

### Setting Environment Variable
```
Then define the database connection url as an environment variable in .env as :
```
DATABASE_URL="sqlserver://HOST[:PORT];database=DATABASE;user=USER;password=PASSWORD;encrypt=true"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.

src/datasources/sqlserver.prisma
```
datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL") 
}
```
### Sample prisma schema for Sql Server
<details>
<summary> Sample prisma schema for Sql Server database  </summary>

```
datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/sqlserver"
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
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mysql.prisma

* Now you can view the event and workflows according to the defined prisma schema