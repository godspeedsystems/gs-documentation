---
id: plugins-sample-config
title: Configuring Godspeed Plugins
description: Configuring Godspeed Plugins
keywords: [Godspeed plugins, installation, yaml configs, configuring plugins in godspeed]
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
    status: [500,501] #default 500
    message: my custom expected message for retry
  max_attempts: 3
  type: exponential # can be constant or random as well. Check documentation
  min_interval: PT5s
  max_interval: PT15s

headers: #these will be set in every API call to the datasource
  Content-Type:    application/json
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
  key: <%config.kafka.ssl_key_path%>    # Path to the private key file
  cert: <%config.kafka.ssl_cert_path%>  # Path to the certificate file
  ca: <%config.kafka.ssl_ca_path%>   # Path to the CA certificate file (if required)
```

### Kafka EventSource (Consumer): `src/eventsources/kafka.yaml`.

```yaml
type: kafka
groupId: "kafka_proj"
# optional ssl config
ssl: 
  reject: false # Set to true if you want to enforce certificate validation
  key: <%config.kafka.ssl_key_path%>    # Path to the private key file
  cert: <%config.kafka.ssl_cert_path%>  # Path to the certificate file
  ca: <%config.kafka.ssl_ca_path%>   # Path to the CA certificate file (if required)
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
name: 'mcp-eventsource'          # A unique name for your capabilities
version: '1.0.0'                 # The version of your toolset
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