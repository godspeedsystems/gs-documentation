# Create a blog project
### Steps for creating a sample blog project.

Let's create a project which includes a Prisma schema(`mongo.prisma`) for creating a blog app using mongodb.

1. Create a project using Godspeed CLI with below command:

```bash
godspeed create blog-app --from-example mongo-as-prisma # blog-app is the name of the app
```

In this sample project, we have utilized a MongoDB database, but you have the flexibility to choose any other database that Prisma supports and that meets your requirements [MySQL](https://dev.mysql.com/doc/), [PostgreSQL](https://www.postgresql.org/docs/) etc



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


#### Prisma supports wide range of databases
* [MySQL](https://dev.mysql.com/doc/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [SQLite](https://www.sqlite.org/docs.html)
* [CockroachDB](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart)
* [MariaDB](https://mariadb.org/documentation/)
* [MongoDB](https://www.mongodb.com/docs/guides/atlas/cluster/)


Prisma provides a unified and versatile database experience, enabling you to connect to diverse databases through a single schema definition. This ensures a consistent schema for interacting with various databases and generates a unified API, streamlining development for flexibility and ease. Whether you opt for MySQL, PostgreSQL, SQLite, or other supported databases, Prisma's unified approach simplifies both database management and application development.

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
