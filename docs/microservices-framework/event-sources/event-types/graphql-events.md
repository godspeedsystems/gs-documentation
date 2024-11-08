# Apollo Graphql Event

The GraphQL event configuration in Godspeed allows seamless integration of GraphQL APIs, emphasizing simplicity and efficiency in API development. The configuration file (Apollo.yaml) specifies the GraphQL type and port, ensuring alignment with the event key prefix.

### GraphQL Configuration 
The Apollo Graphql plugin is currently configured exactly the same as Express and Fastify eventsources. Except that it doesn't have swagger config and doesn't support file upload as of now.

(src/eventsources/apollo.yaml)
```yaml

type: graphql
port: 4000
# eventsource level default settings (can be overriden at event level)
authn:
authz:
on_request_validation_error:
on_response_validation_error:

```

:::tip note
Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is `apollo` as per the yaml file name (src/eventsources/apollo.yaml). The event schema follows REST standards, resembling HTTP events.
:::

### GraphQL Event 

(src/events/create_category.yaml)
```yaml
apollo.post./mongo/category:      // event key having prefix apollo
  summary: Create a new Category
  description: Create Category from the database
  fn: create
  body:
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
- use godspeed gen-graphql-schema to auto generate graphql schema.
- use godspeed serve to start server.

:::

This configuration emphasizes the simplicity of implementing GraphQL within the Godspeed framework, promoting efficiency and clarity in API development.

