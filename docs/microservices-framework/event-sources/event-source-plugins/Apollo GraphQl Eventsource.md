GraphQL is a query language and runtime for APIs that enables clients to request precisely the data they need. It allows developers to describe the structure of the data they require, providing a more efficient and flexible alternative to traditional REST APIs. GraphQL empowers front-end developers to shape their API requests, minimizing over-fetching and under-fetching of data.


**Godspeed** leverages Apollo Server, a powerful and extensible open-source server built on GraphQL, to streamline the creation of GraphQL APIs. Apollo Server excels in automatic schema generation and seamless integration with diverse data sources, providing a robust foundation for scalable and high-performance GraphQL applications.

This guide offers a concise overview of integrating the GraphQL plugin into the Godspeed framework as an Event Source.

## Steps to Utilize the GraphQL Plugin in the Godspeed Framework:

### Example Usage:

1. Add the GraphQL plugin to Godspeed-CLI with the `godspeed plugin add` command.

2. Tailor the configuration file according to your needs in `eventsource/graphql.yaml`.

## How to Use
- Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-graphql-as-eventsource` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
│    │ Name                              │ Description                                                     │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ ❯◯ │ graphql-as-eventsource            │ graphql as eventsource plugin for Godspeed Framework            │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ aws-as-datasource                 │ aws as datasource plugin for Godspeed Framework                 │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ mailer-as-datasource              │ mailer as datasource plugin for Godspeed Framework              │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ excel-as-datasource               │ excel as datasource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
└────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘
```



#### GraphQL Configuration (src/eventsources/Apollo.yaml)
```yaml
type: graphql
port: 4000
```

3. Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is `Apollo`. The event schema follows REST standards, resembling HTTP events.

#### GraphQL Event (src/events/create_category.yaml)
```yaml
graphql.post./mongo/category:
  summary: Create a new Category
  description: Create Category from the database
  fn: create
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
  responses:
    content:
      application/json:
        schema:
          type: object
```

#### GraphQL Workflow (src/functions/create.yaml)
```yaml
summary: Create Category
tasks:
  - id: mongo_category_create
    fn: datasource.mongo.Category.create
    args:
      data: <% inputs.body %>
```
4. use `godspeed gen-graphql-schema` to auto generate graphql schema.

5. use `godspeed serve `to start server. 

This configuration emphasizes the simplicity of implementing GraphQL within the Godspeed framework, promoting efficiency and clarity in API development.


- [Discord](https://discord.com/invite/mjBa3RvTP5)
- [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/graphql-as-eventsource)
- [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)
- [Npm Package](https://www.npmjs.com/package/@godspeedsystems/plugins-graphql-as-eventsource)
