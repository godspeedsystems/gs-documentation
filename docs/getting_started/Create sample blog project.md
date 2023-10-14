
### Steps for creating a sample blog project.

Let's create a project which includes a prisma schema(`mongo.prisma`) for creating a blog app using mongodb.

1. Create a project using Godspeed CLI with below command:

```bash
godspeed create blog-app --from-example mongo-as-prisma # blog-app is the name of the app
```
Framework will give you below folder structure.
```

    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── prisma.ts
        |   |
        │   └── mongo.prisma
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions
            |
            └── helloworld.yaml


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

8. Run `godspeed dev` to start the development server.

```bash
godspeed dev
```
<img src="https://ik.imagekit.io/h7ozyeimg/Screenshot%20from%202023-10-14%2018-17-22.png?updatedAt=1697287888204"/>

**Voila!** Your API backend is up and running. You can use Postman to test your API's.

Happy building with Godspeed!
