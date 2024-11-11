# FAQs

### How to update and run the project after renaming any file?
  
  With `godspeed clean` command you can remove all pre-compiled files from your `/dist` folder. It is useful to clean up the dist folder to remove old references to deleted/renamed files in `src`


### How to handle secrets, api keys, connection_urls etc.?
 
  You can add your own database connection string in .env file which is under root folder /.env
  Open this file and specify your database connection string here.

  Connection URL format: postgresql://username:password@host:port/database
  Example : 
   ```
    MY_DB_URL: postgresql://postgres:postgres@localhost:5432/test
   ```


###  To access the environment variables defined in config/custom-environment-variables.yaml

You can read it in two ways:
  Option1: directly from env
  Option2: through config file
  ```
    const frontendUrl = process.env.FRONTEND_URL ;
  ```
  And then use this variable in your ts code as:
  ```
    redirectUrl = `${frontendUrl}/verify?userId=${userId}
  ```
  Here, in the above example, we are redirecting user to frontEnd i.e. localhost:3001 passing userId as query parameter 

  You need to export this variable in the environment so that the variables can get value from your environment.
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

### How to update CRUD APIs after change in db model?

  First run
   ``` 
     $ godspeed clean
   ```
 - This command will remove all pre-compiled prisma-schema files from your `/dist` folder then 
 - Do the changes in your prisma schema file located in the datasources/ directory, save it and then run
   ```
    $ godspeed prisma prepare
   ```
  It will generate prisma client with the changes you have made in the schema and will sync the database with your prisma schema. -->