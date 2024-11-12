# FAQs

### How to update and run the project after renaming any file?
  
  With `godspeed clean` command you can remove all pre-compiled files from your `/dist` folder. It is useful to clean up the dist folder to remove old references to deleted/renamed files in `src`


<!-- ### How to handle secrets, api keys, connection_urls etc.?

 
### How to export a variable in environment ? -->


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