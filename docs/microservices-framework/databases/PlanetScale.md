
PlanetScale is also a relational database management system which can be connected using the Prisma-as-datasource plugin.

### Pre-requisites

In order to use PlanetScale database you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a PlanetScale database server running
 3.	and database connection URL

### CONNECTION_URL
The format of the connection URL for Planet Scale looks as follows 
```
planetscale://USER:PASSWORD@HOST:PORT/DATABASE
```

### Setting Environment Variable
You can define the database connection url as an environment variable in .env as :
```
DATABASE_URL="planetscale://root:password@localhost:3306/yourdb"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/planetscale.prisma
```
datasource db {
  provider = "planetscale"
  url      = env("DATABASE_URL") 
}
```

### Sample prisma schema for PlanetScale 
<details>
<summary> Sample prisma schema for PlanetScale </summary>

```
datasource db {
  provider = "planetscale"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/planetscale"
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
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/planetscale.prisma

* Now you can view the event and workflows according to the defined prisma schema
