# Graphql Event

- The GraphQL event configuration in Godspeed allows seamless integration of GraphQL APIs, emphasizing simplicity and efficiency in API development. The configuration file (Apollo.yaml) specifies the GraphQL type and port, ensuring alignment with the event key prefix.

### GraphQL Configuration 

(src/eventsources/Apollo.yaml)
```yaml
type: graphql
port: 4000
```
:::tip note
Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is Apollo. The event schema follows REST standards, resembling HTTP events.
:::

### GraphQL Event 

(src/events/create_category.yaml)
```yaml
Apollo.post./mongo/category:
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

### GraphQL Workflow 

(src/functions/create.yaml)
```yaml
summary: Create Category
tasks:
  - id: mongo_category_create
    fn: datasource.mongo.Category.create
    args:
      data: <% inputs.body %>

```

:::tip note
- use gosdspeed gen-graphql-schema to auto generate graphql schema.
- use godspeed dev to start server.

:::

This configuration emphasizes the simplicity of implementing GraphQL within the Godspeed framework, promoting efficiency and clarity in API development.
