---
sidebar_position: 1
title: Guides
---

This section will give answers to your most pressing questions about using the godspeed meta-framework. 
It is designed to be easy to follow and understand, with step-by-step instructions to help illustrate each process.

- **[How to create Rest APIs in Godspeed framework ?](/docs/microservices-framework/how-to/create-api)**

- **[How to generate CRUD APIs ?](/docs/microservices-framework/CRUD_API)**

- **[How to open Swagger UI ?](/docs/microservices-framework/guide/get-started#step-3-access-swagger-ui)**

- **[How to write typescript functions in godspeed ?](/docs/microservices-framework/workflows/native-language-functions)**

- **[How to access databases using Prisma ?](/docs/microservices-framework/databases/Overview)**

<!-- - **[How to access database using Mongoose ?](#)** -->
- **[Invoking Datasource clients from typescript functions ?](/docs/microservices-framework/how-to/call-datasource)**

<!-- - **[How to access database by creating custom datasource ?](#)** -->
- **[How to add authentication in your Rest endpoints ?](/docs/microservices-framework/authentication/jwt-authentication)**

- **[How to call REST APIs using axios ?](/docs/microservices-framework/how-to/axios-apis)**

- **[How to call APIs using custom datasource ?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to handle callbacks for example Payment Gateway Callback ?](/docs/microservices-framework/how-to/callbacks)**
 
- **[How to implement OAuth2 authentication in godspeed project ?](/docs/microservices-framework/authentication/oauth2-authentication)**

- **[How can I skip/disable authentication for a particular endpoint if it is giving "Unauthorized" in response?](/docs/microservices-framework/authentication/jwt-authentication#disabling-jwt-authentication-at-event-level)**


- **How to read variables from .env file in express.ts ?**

  If you have defined a variable in .env as
  ```
    FRONTEND_URL = http://localhost:3001
  ```
  You can read it in express.ts as:
  ```
    const frontendUrl = process.env.FRONTEND_URL ;
  ```
  And then use this variable in your ts code as:
  ```
    redirectUrl = `${frontendUrl}/verify?userId=${userId}
  ```
  Here, in the above example, we are redirecting user to frontEnd i.e. localhost:3001 passing userId as query parameter 

<!-- - **How to import prisma client in eventsource config file: express.ts**  

  Firstly import the prisma client in express.ts as:
  ```
  import {PrismaClient} from "../../datasources/prisma-clients/schemaName";
  ```
  then you can perform db queries by creating an object of PrismaClient as :
  ```
  const client = new PrismaClient();

  const existingUser = await client.user.findFirst({
       			 	where: { id: user.githubId }
     				 });
  const newUser = await client.user.create({ data: userObj });
  ``` -->


- **How can I access the custom environment variables in my project environment ?**

  To access the environment variables defined in yaml files under config/custom-environment-variables.yaml, first
  you need to export this variable in the environment so that the variables can get value from your environment.
  For Example, below is a sample of custom-environment-variables.yaml 
  ```
   jwt:
    issuer: JWT_ISS
    audience: JWT_AUD
    secretOrKey: JWT_SECRET
  ```
  To export above defined variables to your environment, use the following syntax based on the environment which you are using:
  For shell
   ```
    $ export JWT_SECRET=mysecret
    $ export JWT_ISS= mycompany
   ```
  For windows powershell
   ```
    $env:JWT_SECRET= "mysecret"
    $env:JWT_ISS= "mycompany"
     
   ```
  After exporting the environment variable, you can access this variable in your project by using 
  scripting <% config.jwt.issuer %>

- **How to update and run the project, if I have renamed some files in my `src` repo ?**

  With `godspeed clean` command you can remove all pre-compiled files from your `/dist` folder. It is useful to clean up the dist folder to remove old references to deleted/renamed files in `src`

- **How can I give the connection_url of my database server ?**
 
  You can add your own database connection string in .env file which is under root folder /.env
  Open this file and specify your database connection string here.

  Connection URL format: postgresql://username:password@host:port/database
  Example : 
   ```
    MY_DB_URL: postgresql://postgres:postgres@localhost:5432/test
   ```

- **After generating crud api, if I make some changes in models like adding a new column, then how to update it in prisma client and my database?**

  First run
   ``` 
     $ godspeed clean
   ```
 - This command will remove all pre-compiled prisma-schema files from your `/dist` folder then 
 - Do the changes in your prisma schema file located in the datasources/ directory, save it and then run
   ```
    $ godspeed prisma prepare
   ```
  It will generate prisma client with the changes you have made in the schema and will sync the database with your prisma schema.