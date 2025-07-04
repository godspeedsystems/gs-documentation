---
id: plugins-sample-config
title: Configuring Godspeed Plugins
description: Configuring Godspeed Plugins
keywords:
  [
    Godspeed plugins,
    installation,
    yaml configs,
    configuring plugins in godspeed,
  ]
slug: /plugins
---

# Sample Yaml Configs for Godspeed Plugins:

1. AWS datasource Plugin

```yaml
type: aws
default_client_config: #any aws specific configurations
  credentials:
    accessKeyId: <%config.accessKeyId%>
    secretAccessKey: <%config.secretAccessKey%>
# service type is the name of the npm module for ex. @aws-sqk/client-dynamodb or @aws-sqk/client-s3 etc
# The `types` key can have service type to sdk's client names mappings when coding
types: #mappings
  dynamodb: DynamoDB
  s3: S3
  lambda: Lambda
  ssm: SSM
  sqs: SQS
services:
  s3:
    type: s3
    config:
      region: <%config.anotherAccessKeyId%>
      credentials:
        accessKeyId: <%config.anotherAccessKeyId%>
        secretAccessKey: <%config.anotherSecretAccessKey%>
  s3_1: #uses default config
    type: s3
  dynamodb:
    type: dynamodb
  sqs:
    type: sqs
  ssm:
    type: ssm
  lamdba:
    type: lambda
```

2. Axios

```yaml
# can use inline scripting in datasource and eventsource yamls
type: axios
base_url: https://httpbin.org # the base url of the api client
curlifiedLogs: true #will print the curl requests of each API hit. Useful for debugging
authn: # how to authenticate to this datasource
  fn: my_bank_api.auth_workflow # the token refresh function. It returns the headers to be set for the API call
  refreshOn: # if not specified datasource token is refreshed on 401 code by default
    statusCode: [401, 403]

retry: #default retry logic on all API calls. Can be overriden at the task level when calling the API
  when:
    status: [500, 501] #default 500
    message: my custom expected message for retry
  max_attempts: 3
  type: exponential # can be constant or random as well. Check documentation
  min_interval: PT5s
  max_interval: PT15s

headers: #these will be set in every API call to the datasource
  Content-Type: application/json
  #x-apikey:       <% config.my_bank_api.auth.x_apikey %>
  #Environment:    <% config.my_bank_api.auth.Environment %>
# Any additional data you keep in the config will be available
# in the respective datasource's GSDatasource implementation class inside `this.config`
# data:
#   clientId:       <% config.my_bank_api.auth.clientId %>
#   clientSecret:   <% config.my_bank_api.auth.clientSecret %>
#   grantType:      <% config.my_bank_api.auth.grantType %>
# some_random_key: some_value
```

3. CHatGPT

```yaml
type: chatgpt
model: gpt-4o
temperature: 1
max_tokens: 200
```

4. Cron

```yaml
type: cron
```

5. Dynamodb config ( src/datasources/dynamo.yaml )

```yaml
type: dynamodb
endpoint: <%config.endpoint%>
region: <%config.region%>
accessKeyId: <%config.accessKeyId%>
secretAccessKey: <%config.secretAccessKey%>
```

6. #### elasticgraph config ( src/datasources/elasticgraph.yaml )

```yaml
type: elasticgraph
deep: false
collect: false
schema_backend: "path to your elasticgraph-model"
```

### Excel Datasource Plugin

```yaml
type: excel
filepath: "/home/laptop/Desktop/test.ods"
```

### Fastify config (src/eventsources/http.yaml)

```yaml
type: fastify
port: 3000
```

### GraphQL Plugin

```
  type: graphql
  port: 4000
  authn:
    jwt:
      secretOrKey: ""
      audience: ""
      issuer: ""

  authz:
    id: ""
    fn: ""
    args: ""

  on_request_validation_error:""
  on_response_validation_error: ""
  log:
    attributes:
    eventsource_type: ""

```

### Kafka as Datasource (Producer) in `src/datasource/kafka.yaml`

```yaml
type: kafka
clientId: "kafka_proj"
brokers: ["kafka:9092"]
# optional ssl config
ssl:
  reject: false # Set to true if you want to enforce certificate validation
  key: <%config.kafka.ssl_key_path%> # Path to the private key file
  cert: <%config.kafka.ssl_cert_path%> # Path to the certificate file
  ca: <%config.kafka.ssl_ca_path%> # Path to the CA certificate file (if required)
```

### Kafka EventSource (Consumer): `src/eventsources/kafka.yaml`.

```yaml
type: kafka
groupId: "kafka_proj"
# optional ssl config
ssl:
  reject: false # Set to true if you want to enforce certificate validation
  key: <%config.kafka.ssl_key_path%> # Path to the private key file
  cert: <%config.kafka.ssl_cert_path%> # Path to the certificate file
  ca: <%config.kafka.ssl_ca_path%> # Path to the CA certificate file (if required)
```

#### Mailer config (src/datasources/mail.yaml)

```
type: mail
user: 'godspeed@gmail.com'
pass: 'rmeb bjak xcam xkub'
```

### MCP Event Source

Create or modify the `src/eventsources/mcp.yaml` file to define your MCP server's identity.

```yaml title="src/eventsources/mcp.yaml"
type: mcp
name: "mcp-eventsource" # A unique name for your capabilities
version: "1.0.0" # The version of your toolset
```

```yaml
type: mongoose
successResponseCodes: #default response codes for success responses
  create: 201
  find: 200
  findOne: 200
  aggregate: 200
  findOneAndUpdate: 201
  findOneAndDelete: 202
```

### Prisma

Prisma doesn't have a yaml config, in stead it would have a .prisma file

#### mongo.prisma

```prisma

datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL") //Connection string can be found in the .env folder. you can add your own database connection string
}

generator client {
  provider        = "prisma-client-js"
  output          = "./prisma-clients/mongo"
  previewFeatures = ["metrics"]
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String   @db.ObjectId
}

enum Role {
  USER
  ADMIN
}
```

### Redis config (src/datasources/redis.yaml)

```yaml
type: redis
url: redis://alice:foobared@awesome.redis.server:6380
```

### Salesforce config ( salesforce.yaml )

```yaml
type: salesforce
loginUrl: <%config.salesforce.loginUrl%>
username: <%config.salesforce.username%>
password: <%config.salesforce.password%>
```

### Sedngrid

```yaml
type: sendgrid
apiKey: <%process.env.SENDGRID_API_KEY%>
defaultSender: <%process.env.SENDGRID_DEFAULT_SENDER%>
```

### Express

```yaml
type: express  # Defines the type of event source (Express.js HTTP server)
port: 3000     # The port on which the HTTP service runs

# Base URL for the HTTP service (Uncomment to enable), All API endpoints will be prefixed with this URL
# base_url: /api/v1

# Basic Swagger Setup
docs:
  endpoint: /api-docs   # the url on which the service will start
  info:   # info object as per swagger 3.0 spec
    title: Sample Helloworld App
    version: 1.1.0
    summary: Some http calls
    description: Lets play with Godspeed
    contact:
      name: API Support
      url: 'http://www.helloworld.com/support'
      email: support@helloworld.com
    license:
      name: Apache 2.0
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  servers:
    - url: 'http://localhost:3000'
      description: Public API server
    - url: 'http://localhost:3001'
      description: Internal API server

request_body_limit: 20000   # set maximum size of the request body in bytes
file_size_limit: 50000      # set max file upload size in bytes (default is 50 mb)

# set jwt authn to run by default on every event
authn:
  jwt:
    secretOrKey: mysecret #the secret
    audience: mycompany #aud in jwt token
    issuer: mycompany #iss in jwt token

# Authorization Policies (Uncomment to enforce role-based access control)
# Requires JWT authentication or another middleware setting up `inputs.user.role`
# authz:
#   - id: check_user_role  # Unique ID for this authorization rule
#     fn: com.gs.transform  # Godspeed function to evaluate authorization logic
#     args: <%inputs.user.role === 'admin'%>  # Example: Allow only admin users

# Authorization can also be handled via a predefined workflow:
# authz: authz.check_user  # Reference a workflow inside the functions folder

# Handling Validation Errors
on_request_validation_error: validations.request.standardResponse
on_response_validation_error: validations.response.standardResponse

Alternatively, define custom error handling logic inline
on_response_validation_error:
  - id: response_validation_error_handler
    fn: com.gs.return
    args:
      success: false
      code: 500
      data:
        message: <% inputs.validation_error.data.message %>
```

### Text-to-SQL Plugin

```yaml
type: text-to-sql
config:
  gemini:
    apiKey: ${GEMINI_API_KEY}
  databases:
    postgres:
      enabled: true
      config:
        user: ${PG_USER}
        host: ${PG_HOST}
        database: ${PG_DB}
        password: ${PG_PASSWORD}
        port: ${PG_PORT}
    mysql:
      enabled: true
      config:
        host: ${MYSQL_HOST}
        user: ${MYSQL_USER}
        password: ${MYSQL_PASSWORD}
        database: ${MYSQL_DB}
    mongodb:
      enabled: true
      config:
        url: ${MONGODB_URL}
        database: ${MONGODB_DB}
    oracle:
      enabled: true
      config:
        user: ${ORACLE_USER}
        password: ${ORACLE_PASSWORD}
        connectString: ${ORACLE_CONNECT_STRING}
  cache:
    enabled: true
    ttl: 3600
```

### Mistral Plugin

```yaml
type: mistral
methods:
  generatetext:
    model: "mistral-large-latest"
  generatecode:
    model: "codestral-mamba-latest"
    instruction: "Output only executable code with detailed comments explaining each part. Avoid greetings or unrelated text."
  generatetextfromimage:
    model: "pixtral-12b"
  generatejson:
    model: "mistral-large-latest"
  moderate:
    model: "mistral-moderation-latest"
```

## Actionable Plugin Usage & Authoring Examples

### Authoring a Custom Datasource Plugin (TS)

```typescript
import { GSDatasource } from "@godspeedsystems/core";
export default class MyDatasource extends GSDatasource {
  async execute(ctx, args) {
    // Custom logic here
    return { data: "result" };
  }
}
```

### Using a Plugin in YAML

```yaml
type: my-custom-plugin
config:
  key: value
```

## Troubleshooting & FAQ

- **Q: Plugin not loading?**
  - Ensure it is installed and listed in `package.json`
- **Q: Plugin config not applied?**
  - Validate YAML structure and config keys
- **Q: Plugin errors at runtime?**
  - Check logs and ensure plugin matches Godspeed interfaces

## LLM Guidance & Prompt Templates

- **Prompt:** "Generate a Godspeed plugin YAML for a new eventsource."
- **Prompt:** "Write a TypeScript class for a custom datasource plugin."
- **Prompt:** "Show how to configure a plugin for S3 access."

## Best Practices & Anti-Patterns

**Best Practices:**

- Follow Godspeed plugin interface contracts
- Keep plugin configs modular and reusable
- Document all plugin options
- Use environment variables for secrets
- Test plugins in isolation before production

**Anti-Patterns:**

- Hardcoding secrets in plugin code
- Skipping documentation
- Ignoring plugin errors in logs
- Duplicating plugin logic

## Cross-links

- [Datasources](../datasources/overview.md)
- [Event Sources](../event-sources/overview.md)
- [API & Event](../API%20&%20Event.md)
- [Workflows](../workflows/overview.md)

## Plugin Lifecycle Diagram

```mermaid
graph TD
  A[Install Plugin] --> B[Configure in YAML]
  B --> C[Load at Startup]
  C --> D[Plugin Executes Logic]
  D --> E[Return Data/Result]
```

## Glossary

- **Plugin:** Extension for datasources/eventsources
- **GSDatasource:** Base class for datasource plugins
- **Config:** Plugin configuration block
- **Lifecycle:** Stages from install to execution

# Plugin Development Guide

## Step-by-Step Plugin Authoring

1. **Scaffold a Plugin**

   ```bash
   npm install -g generator-godspeed-plugin yo
   yo godspeed-plugin
   ```

   - Choose type: DataSource, EventSource, or both.
   - Follows standard structure:
     ```
     plugins/
       <plugin-name>/
         src/
           index.ts
         package.json
         README.md
         tsconfig.json
     ```

2. **Implement Plugin Logic**

   - Extend the appropriate abstract class:
     - `GSDataSource` (for datasources)
     - `GSEventSource` (for event sources)
     - `GSDataSourceAsEventSource` (for both)
   - Implement required methods:
     - `initClient()`: Initialize client (DB, API, etc.)
     - `execute(ctx, args)`: Main operation for datasources
     - `subscribeToEvent(eventKey, eventConfig, processEvent, event?)`: For event sources

3. **The processEvent Pattern**

   - Used by eventsource plugins to handle incoming events/messages.
   - Signature: `(event: GSCloudEvent, eventConfig: PlainObject) => Promise<GSStatus>`
   - Example:
     ```ts
     // Inside a plugin's subscribeToEvent:
     await processEvent(gsEvent, { key: eventRoute, ...eventConfig });
     ```

4. **Testing & Publishing**
   - Write unit/integration tests for plugin logic.
   - Use mock GSContext and event objects.
   - Publish to npm with a clear README and versioning.

## Table: Plugin Extensibility Points

| Plugin Type             | Abstract Class            | Required Methods                      |
| ----------------------- | ------------------------- | ------------------------------------- |
| DataSource              | GSDataSource              | initClient, execute                   |
| EventSource             | GSEventSource             | subscribeToEvent                      |
| DataSourceAsEventSource | GSDataSourceAsEventSource | initClient, execute, subscribeToEvent |

## Advanced Plugin Patterns

- **Caching:** Extend `GSCachingDataSource` for cache support (e.g., Redis)
- **Dual-role:** Use `GSDataSourceAsEventSource` for plugins like Kafka
- **Custom Config:** Accept and validate custom YAML config for plugin options

## Troubleshooting & FAQ

- **Q: Plugin not loaded?**
  - Check type in YAML and ensure npm package is installed
- **Q: Method not called?**
  - Ensure correct method names and signatures
- **Q: processEvent errors?**
  - Validate event and config objects, add error handling

## Best Practices

- Always extend the correct abstract class
- Document all config options and usage
- Write tests for all plugin logic
- Use semantic versioning and changelogs
- Publish with a clear README and usage examples

## Cross-links

- [Core Concepts](../workflows/overview.md)
- [Extensibility](../API%20&%20Event.md)
- [Lifecycle](../guide/advance-guide.md)

## Glossary

- **Abstract Class:** Base class to extend for plugin types
- **processEvent:** Callback for event handling
- **Extensibility Point:** Method or property to override/implement
- **Dual-role Plugin:** Acts as both datasource and eventsource

## Plugin Lifecycle & Extensibility Diagram

```mermaid
graph TD
  A[Scaffold Plugin] --> B[Extend Abstract Class]
  B --> C[Implement Required Methods]
  C --> D[Load by Framework]
  D --> E[Handle Events/Data]
  E --> F[Test & Publish]
```
