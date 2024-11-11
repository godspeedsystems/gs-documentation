---
sidebar_position: 1
title: Guides and FAQs
---

This section will give answers to your most pressing questions about using the godspeed meta-framework. 
It is designed to be easy to follow and understand, with step-by-step instructions to help illustrate each process.

### Setting up the APIs of your service

- **[How to create Rest APIs in Godspeed framework?](/docs/microservices-framework/how-to/create-api)**

- **[How to generate CRUD APIs?](/docs/microservices-framework/CRUD_API)**

- **[How to open Swagger UI for your APIs?](/docs/microservices-framework/guide/get-started#step-3-access-swagger-ui)**

- **[How to generate postman collection for your APIs?](/docs/microservices-framework/guide/get-started#postman-collection)**  

- **[How to add JWT authentication in your Rest APIs?](/docs/microservices-framework/authentication/jwt-authentication)**

- **[How to use OAuth2 for user login and protection of your endpoints?](/docs/microservices-framework/authentication/oauth2-authentication)**

- **[How to disable authentication for a particular endpoint? ](/docs/microservices-framework/authentication/jwt-authentication#disabling-jwt-authentication-at-event-level)**

- **[How to call REST APIs using Axios?](/docs/microservices-framework/how-to/axios-apis)**

- **[How to call APIs using client SDK?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to handle API callbacks and webhooks?](/docs/microservices-framework/how-to/callbacks)**



### Writing your Workflows or Functions
In Godspeed, the words Workflows and Functions mean one and the same thing, i.e. your business logic.

- **[How to write typescript workflows in godspeed?](/docs/microservices-framework/workflows/native-language-functions)**

- **[How to write yaml workflows in godspeed?](/docs/microservices-framework/workflows/yaml-workflows/workflow-dsl)**

<!-- - **[When to prefer writing typescript workflows over yaml? And vice versa?]() -->

### Accessing other APIs, databases and other datastores from workflows
In Godspeed, datasource can mean any place where you send or retrieve data from. It could mean:
- External APIs
- Datastores
  - Databases (Types - SQL, NoSQL, graph, key value, columnar, OLAP, OLTP, document)
  - Caches
  - Search engine
  - Vector stores (specially useful for AI and recommendation engines)
  - File system or files
  - Memory

- **[How to access databases using Prisma?](/docs/microservices-framework/databases/Overview)**

- **[How to access databases using Mongoose?](/docs/microservices-framework/databases/MongoDB#mongoose-as-datasource-plugin)**

- **[How to access any datastore by creating a custom datasource?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to invoke datasource clients from typescript workflows?](/docs/microservices-framework/how-to/call-datasource)**

- **[How to invoke datasource clients from yaml workflows?](/docs/microservices-framework/how-to/call-datasource)**

- **[How to access the environment variables from the typescript workflows?](/docs/microservices-framework/how-to/short-faqs)**

- **[How to update and run the project after renaming any file?](/docs/microservices-framework/how-to/short-faqs#how-to-update-and-run-the-project-after-renaming-any-file)**

- **[How to handle secrets, api keys, connection_urls etc.?](/docs/microservices-framework/how-to/short-faqs#how-to-handle-secrets-api-keys-connection_urls-etc)**

- **[How to update CRUD APIs after change in db model?](/docs/microservices-framework/how-to/short-faqs#how-to-update-crud-apis-after-change-in-db-model)**
