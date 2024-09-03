---
sidebar_position: 1
title: How To Guide
---
### Welcome to our "How to Guide"!

This section will give answers to your most pressing questions about using the godspeed meta-framework ? This "How to Guide" is designed to help you get the most out of our product, by providing clear and concise answers to all your frequently asked questions.
<!-- It is designed to be easy to follow and understand, with step-by-step instructions and screenshots to help illustrate each process.  -->

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

- **How to import prisma client in eventsource config file: express.ts**  

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
  ```

- **How to save and access Github OAuth2 credentials in godspeed project ?**

  Once you have registered you oauth app on github, you'll be provided with a Client ID and Client Secret. These credentials are essential for authenticating users with your app. [Click here](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) to see how to register an oauth app.
  Save this client_id and client_secret in your .env file
  ```
  .env

  GITHUB_CLIENT_ID= "**************"  
  GITHUB_CLIENT_SECRET= "***********************"  
  GITHUB_CALLBACK_URL= "http://localhost:3000/auth/github/callback"

  ```
  Then in your http.yaml file, add the following configuration under the authn section:
```
http.yaml

  authn:
    oauth2:
      github:
        client_id: <% process.env.GITHUB_CLIENT_ID %>  
        client_secret: <% process.env.GITHUB_CLIENT_SECRET %>    
        callback_url: <% process.env.GITHUB_CALLBACK_URL %>

    jwt:
      secretOrKey: <% process.env.JWT_SECRET %>  
      audience: <% process.env.JWT_AUDIENCE %>     
      issuer: <% process.env.JWT_ISSUER %>   
```

- **How can I skip/disable authentication for a particular endpoint if it is giving "Unauthorized" in response?**

  Check jwt configuration in the event source's configuration file (It will be http.yaml if using express). If jwt spec is set up here, then all endpoints will go through JWT authentication, unless you explicitly set authn:false in your event as:
  ```
  http.get./helloworld:
  fn: helloworld
  authn: false
  params: #same as Swagger params.
    - name: name
      in: query
      schema:
        type: string
  ```

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

- **How to build the project again, if I have renamed some files in my `src` repo ?**

  With `godspeed clean` command you can remove all pre-compiled files from your `/dist` folder. While build overrides `dist` everytime, `clean` command is useful to clean up the  dist folder to remove old references to deleted files in `src`

- **Where can I specify the connection_url of my database server ?**
 
  You can add your own database connection string in .env file which is under root folder /.env
  Open this file and specify your database connection string here.

  Connection URL format: postgresql://username:password@host:port/database
  Example : 
   ```
    MY_DB_URL: postgresql://postgres:postgres@localhost:5432/test
   ```

- **After generating crud api, if I make some changes in models like adding a new   column, then how to update it in prisma client and my database?**

  First, Do the changes in your prisma schema file located in the datasources/ directory, save it and then run 
   ``` 
     $ godspeed clean
   ```
  this command will remove all pre-compiled prisma-schema files from your `/dist` folder then run
   ```
    $ godspeed prisma prepare
   ```
  It will generate prisma client with the changes you have done in the schema and will sync the database with your  prisma schema

