# Steps for creating a new project.
## Creating a godspeed project.
Let's create a project that includes a simple 'hello world' example for both [events](/docs/events/overview.md) and [functions](/docs/workflows/overview.md) to provide an overview of how these components function within the Godspeed framework.

```bash
godspeed create **hello-world** # hello-world is the name of the app
```

** below is the sample for creating a project** 
    
```bash
   
     > **godspeed create hello-world** # hello-world is the name of the app

     ~~~~~~ Godspeed CLI ~~~~~~

      …  waiting   Cloning project template.
        success   Cloning template successful.
       …  waiting   Generating project with default examples.
       …  waiting   Generating project files.
         success   Successfully generated godspeed project files.
       …  waiting   Installing project dependencies.
         success   Successfully installed project dependencies.
         success   

       Successfully created the project hello-world.
       Use `godspeed --help` command for available commands. Happy building microservices with Godspeed!. 

```

  **For detailed documentation visit <https://docs.godspeed.systems>**


     
4. Running the dev server. Navigate to the project root directory and run.

```bash
> godspeed dev
```

5. It will start your app on localhost on default port number 3000, if you can modify the port number as per your requirement. You can try out your hello-world API is live.


## Run the sample project with Godspeed.
Let's create a project which includes a prisma schema(`mongo.prisma`) for creating a blog app using mongodb.

1. Create a project using Godspeed CLI with below command:

```bash
godspeed create blog-app --from-example mongo-as-prisma # blog-app is the name of the app
```

2. Navigate to you project folder

```bash
cd blog-app
```

3. Open the project in vscode using below command:

```bash
code .
```

4. Now to setup your database please follow the steps provided in README.md file of your blog-app project.

**If you want to know more about mongo cluster visit [Mongo-cluster](https://www.mongodb.com/docs/guides/atlas/cluster/)**


5. Open terminal in vscode and enter the below command

```bash
godspeed prisma prepare
```
**This command will generate the prisma client and will sync the database with prisma schema**

6. 3000 is the default port number,if you want to provide your custom port number, you can modify the port number from **"./src/eventsources/http.yaml"**

7. Now to generate the CRUD API'S enter the below command

```bash
godspeed gen-crud-api
```
**This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mongo.prisma**

8. Run `godspeed dev` to start the development server.

```bash
godspeed dev
```

**Voila!** Your API backend is up and running. You can use Postman to test your API's.

Happy building with Godspeed!
