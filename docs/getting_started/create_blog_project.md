
# Run the sample project with Godspeed.
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

```yaml
type: express
port: 3000
```

7. Now to generate the CRUD API'S enter the below command

```bash
godspeed gen-crud-api
```
**This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mongo.prisma**

Command generates the below respective folders and files in the Events and Functions.

```bash

    .
    ├── src
        ├── datasources
        |
        ├── events
        |   ├── post.yaml
        │   └── user.yaml
        |
        ├── eventsources
        |
        └── functions/com/biz/mongo
            ├── post
            |   ├── create.yaml
            |   ├── delete.yaml
            |   ├── one.yaml
            |   ├── search.yaml
            |   └── update.yaml
            |
            └── user
                ├── create.yaml
                ├── delete.yaml
                ├── one.yaml
                ├── search.yaml
                └── update.yaml

```

8. Run `godspeed dev` to start the development server.

```bash
godspeed dev
```
9. Go to [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to see the API endpoints in the swagger.
:::note
Currently, the feature for generating Swagger specifications, which we had in [version 1](https://docs.godspeed.systems/docs/v1/microservices/swagger-specs), is coming soon in version 2.
:::
<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-24-45.png?updatedAt=1697316915416" alt="swagger spec default" />

10. Create a user in the Mongodb by giving the proper request body to the post API in the swagger and execute it.

<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-27-06.png?updatedAt=1697317104366" alt="swagger mongo user" />

11. An appropriate response will be returned on successful execution.

<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-27-20.png?updatedAt=1697317104433" alt="swagger response" />

**Voila!** Your API backend is up and running. You can use Postman to test your API's.

Happy building with Godspeed!
