# Advance Guide

### Steps for creating a sample blog project.

Let's create a project which includes a Prisma schema(`mongo.prisma`) for creating a blog app using mongodb.

1. Create a project using Godspeed CLI with below command:

```bash
godspeed create blog-app --from-example mongo-as-prisma # blog-app is the name of the app
```

### Checkout other examples

:::tip **In this sample project, we have utilized a MongoDB database, but you have the flexibility to choose any other database that Prisma supports and that meets your requirements [MySQL](https://github.com/godspeedsystems/godspeed-codesandbox/tree/gs-projects-examples/Project-Examples/sql), [PostgreSQL](https://github.com/godspeedsystems/godspeed-codesandbox/tree/gs-projects-examples/Project-Examples/postgres) etc**
:::

Framework will give you below folder structure.

```
    ├── config
    │   ├── custom-environment-variables.yaml
    │   |
    |   ├── default.yaml
    |
    ├── eslintrc.json
    |
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
        │   |
        |   └── helloworld.yaml
        |
        └── mappings
        |   |
        |   └── index.yaml
        |
        └── plugins
            |
            └── sample.js
```

:::tip Note

- The framework generates different folders like [config](/docs/microservices-framework/config-and-mappings/config.md),[datasources](/docs/microservices-framework/datasources/overview.md) , [events](/docs/microservices-framework/event-sources/event-schema.md), [eventsources](/docs/microservices-framework/event-sources/overview.md), [functions](/docs/microservices-framework/workflows/overview.md), [mappings](/docs/microservices-framework/config-and-mappings/mappings.md), [plugins](/docs/microservices-framework/inline-scripting/script-plugins.md),etc
- The `eslintrc.json` file includes a curated list of recommended plugins that can be incorporated into the project.
  :::

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

- [MySQL](https://dev.mysql.com/doc/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [SQLite](https://www.sqlite.org/docs.html)
- [CockroachDB](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart)
- [MariaDB](https://mariadb.org/documentation/)
- [MongoDB](https://www.mongodb.com/docs/guides/atlas/cluster/)

Prisma provides a unified and versatile database experience, enabling you to connect to diverse databases through a single schema definition. This ensures a consistent schema for interacting with various databases and generates a unified API, streamlining development for flexibility and ease. Whether you opt for MySQL, PostgreSQL, SQLite, or other supported databases, Prisma's unified approach simplifies both database management and application development.

5. Open terminal in vscode and enter the below command

```bash
godspeed prisma prepare
```

**This command will generate the prisma client and will sync the database with prisma schema**

:::tip Note
We configure [swagger specs](/docs/microservices-framework/event-sources/event-types/http-events.md#swagger-specs) in src/eventsources/http.yaml
:::

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
        │   ├── types
        │   |    └── prisma.ts
        |   |
        │   └── mongo.prisma
        |
        ├── events
        |   ├── post.yaml
        │   └── user.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http.yaml
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

8. Run `godspeed serve` to start the development server.

```bash
godspeed serve
```

9. Go to [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to see the API endpoints in the swagger.

<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-24-45.png?updatedAt=1697316915416" alt="swagger spec default" />

<!--
    <img src="../../static/img/swagger_default.png" alt="swagger spec default" />
 -->

10. Create a user in the Mongodb by giving the proper request body to the post API in the swagger and execute it.
    <img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-27-06.png?updatedAt=1697317104366" alt="swagger mongo user" />

<!--
    <img src="../../static/img/swagger_request.png" alt="swagger spec default" />
 -->

11. An appropriate response will be returned on successful execution.
    <img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-27-20.png?updatedAt=1697317104433" alt="swagger response" />

<!--
    <img src="../../static/img/swagger_response.png" alt="swagger spec default" />
 -->

**Voila!** Your API backend is up and running. You can use Postman or swagger to test your API's.

Happy building with Godspeed!

---

## Actionable Advanced Usage Examples

### Multi-Datasource Workflow

```yaml
id: multi_source
summary: Fetch from two datasources and merge
 tasks:
  - id: fetch_user
    fn: datasource.mongo.User.findOne
    args:
      where:
        userId: <% inputs.body.userId %>
  - id: fetch_orders
    fn: datasource.sql.Order.findMany
    args:
      where:
        userId: <% outputs.fetch_user.data.id %>
  - id: merge
    fn: com.gs.transform
    args:
      data:
        user: <% outputs.fetch_user.data %>
        orders: <% outputs.fetch_orders.data %>
```

### Advanced Error Handling

```yaml
on_error:
  continue: false
  response:
    success: false
    code: 500
    data: "Custom error message"
```

### Custom Plugin Usage

```yaml
type: my-custom-plugin
config:
  api_key: <% config.custom.api_key %>
```

---

# Lifecycle & Bootstrapping

## Step-by-Step Initialization Flow

1. **App starts** (see `src/index.ts` in your project).
2. **Configuration is loaded** (from `config/`).
3. **Datasources are loaded and initialized** (from `src/datasources/`).
4. **Eventsources are loaded and initialized** (from `src/eventsources/`).
5. **Events are loaded and mapped to functions** (from `src/events/`).
6. **Functions and workflows are loaded** (from `src/functions/`).
7. **Mappings and validation logic are loaded** (from `src/mappings/`, `src/functions/validations/`).
8. **App is ready to receive and process events/requests**.

## Initialization Sequence Diagram

```mermaid
graph TD
  A[App Start] --> B[Load Config]
  B --> C[Load Datasources]
  C --> D[Load Eventsources]
  D --> E[Load Events]
  E --> F[Load Functions/Workflows]
  F --> G[Load Mappings/Validation]
  G --> H[Ready to Process Events]
```

## Troubleshooting Bootstrapping

- **Q: App fails to start?**
  - Check config files for syntax/errors
  - Ensure all required plugins are installed
- **Q: Datasource/eventsource not loaded?**
  - Validate type in YAML and plugin availability
- **Q: Events not mapped?**
  - Confirm event keys and function references

## Cross-links

- [Context Reference](../../context.md)
- [Core Concepts](../workflows/overview.md)

---

## Troubleshooting & FAQ

- **Q: Data not merged as expected?**
  - Check output references and task IDs
- **Q: Custom plugin not working?**
  - Validate plugin config and ensure it is installed
- **Q: Advanced error handler not triggered?**
  - Confirm `on_error` block is present and correctly indented

---

## LLM Guidance & Prompt Templates

- **Prompt:** "Generate a workflow that fetches from two datasources and merges results."
- **Prompt:** "Show an advanced error handling pattern in Godspeed YAML."
- **Prompt:** "Write a config for a custom plugin with dynamic API key."

---

## Best Practices & Anti-Patterns

**Best Practices:**

- Use modular workflows for complex logic
- Document all advanced patterns and custom plugins
- Validate all data transformations
- Use centralized error handling for reliability

**Anti-Patterns:**

- Overcomplicating workflows with too many dependencies
- Skipping documentation for custom logic
- Ignoring error handling in advanced flows
- Hardcoding values in advanced configs

---

## Cross-links

- [Workflows](../workflows/overview.md)
- [Plugins](../plugins/sample-configs.md)
- [Datasources](../datasources/overview.md)
- [Config](../config-and-mappings/config.md)

---

## Advanced Workflow Patterns Diagram

```mermaid
graph TD
  A[Start] --> B[Fetch from Datasource 1]
  B --> C[Fetch from Datasource 2]
  C --> D[Merge Results]
  D --> E[Error Handling]
  E --> F[Return Output]
```

---

## Glossary

- **Multi-Datasource:** Using more than one datasource in a workflow
- **Custom Plugin:** User-defined extension for Godspeed
- **Transform:** Task to manipulate/merge data
- **on_error:** Block for advanced error handling
