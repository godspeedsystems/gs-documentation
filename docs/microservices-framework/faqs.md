---
sidebar_position: 1
title: How To Guide
---
### Welcome to our "How to Guide"!

This section will give answers to your most pressing questions about using the godspeed meta-framework ? This "How to Guide" is designed to help you get the most out of our product, by providing clear and concise answers to all your frequently asked questions.
<!-- It is designed to be easy to follow and understand, with step-by-step instructions and screenshots to help illustrate each process.  -->

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
   my_datasource:
     base_url: MY_DATASOURCE_BASE_URL
     api_key: MY_DATASOURCE_API_KEY
     api_token: MY_DATASOURCE_API_TOKEN

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

- **How to build the project again, if I have deleted some files in my `src` repo ?**

  With `godspeed clean` command you can remove all pre-compiled files from your `/dist` folder. While build overrides `dist` everytime, `clean` command is useful if you have deleted some files in your `src` repo. 
  When you delete something from `src`, it doesn't delete the files in the `dist`. You may need to clean up the  dist folder to remove old references to deleted files in `src`

- **Where can I specify the connection_url of my database server ?**
  You can add your own database connection string in .env file which is under root folder /.env
  Open this file and specify your database connection string here.

  Connection URL format: postgresql://username:password@host:port/database
  Example : 
   ```
    MY_DB_URL: postgresql://postgres:postgres@localhost:5432/test
   ```

- **After generating crud api, if I make some changes in my models like add a new column, then how to update it   in prisma client and my database?**

  First, Do the changes in your prisma schema file located in the datasources/ directory, save it and then run 
   ``` 
     $ godspeed clean
   ```
  this command will remove all pre-compiled prisma-schema files from your `/dist` folder then run
   ```
    $ godspeed prisma prepare
   ```
  It will generate prisma client with the changes you have done in the schema and will sync the database with your  prisma schema

