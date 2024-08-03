---
sidebar_position: 1
title: FAQs
---


- **How to build the project again, if I have deleted some files in my `src` repo ?**

 With `godspeed clean` command you can remove all pre-compiled files from your `/dist` folder. While build overrides `dist` everytime, `clean` command is useful if you have deleted some files in your `src` repo. 
 When you delete something from `src`, it doesn't delete the files in the `dist`. You may need to clean up the dist folder to remove old references to deleted files in `src`

 - **Where can I specify the connection_url of my database server ?**
You can add your own database connection string in .env file which is under root folder /.env
Open this file and specify your database connection string here.

 Connection URL format: postgresql://username:password@host:port/database

 Example : 
 MY_DB_URL: postgresql://postgres:postgres@localhost:5432/test

  - **                 **

   - **                 **