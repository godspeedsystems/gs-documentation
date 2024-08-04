---
sidebar_position: 1
title: How To Guide
---
### Welcome to our "How to Guide"!

This section will give answers to your most pressing questions about using the godspeed meta-framework ? This "How to Guide" is designed to help you get the most out of our product, by providing clear and concise answers to all your frequently asked questions.
<!-- It is designed to be easy to follow and understand, with step-by-step instructions and screenshots to help illustrate each process.  -->

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
To export above defined variables, enter export command in the terminal as:
$ export MY_DATASOURCE_BASE_URL = https://httpbin.org/

After exporting the environment variable, you can access this variable in your project by using 
scripting <% config.my_datasource.base_url %>


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
