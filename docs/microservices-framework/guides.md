---
sidebar_position: 1
title: Guides and FAQs
description: A collection of guides and frequently asked questions about using the Godspeed Meta-Framework, covering topics such as setting up APIs, writing workflows and functions, and accessing datasources.
keywords: [Godspeed, guides, FAQs, API setup, workflows, functions, datasources, REST API, CRUD API, Swagger UI, Postman, authentication, JWT, OAuth2, callbacks, webhooks, TypeScript, inline scripting, databases, datastores, plugins, environment variables, secrets]
---

This section provides answers to common questions and step-by-step guides for using the Godspeed Meta-Framework. It covers essential topics including setting up and securing APIs (REST, CRUD, Swagger, Postman, JWT, OAuth2), writing business logic using workflows and functions (TypeScript and Javascript), and accessing various datasources like databases, APIs, and caches.

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

- **[How to use inline scripting in Godspeed YAML configurations and workflows?](/docs/microservices-framework/inline-scripting/overview)**



<!-- - **[When to prefer writing typescript workflows over yaml? And vice versa?]() -->

### Accessing other APIs, databases and datastores from workflows
In Godspeed, datasource can mean any place where you send or retrieve data from. It could mean:
- External APIs
- Datastores
  - Databases (Types - SQL, NoSQL, graph, key value, columnar, OLAP, OLTP, document)
  - Caches
  - Search engine
  - Vector stores (specially useful for AI and recommendation engines)
  - File system or files
  - Memory
  
- **[How to Send Emails with Nodemailer in Godspeed?](/docs/microservices-framework/datasources/datasource-plugins/Nodemailer%20Datasource.md)**

- **[How to access databases using Prisma?](/docs/microservices-framework/databases/Overview)**

- **[How to access databases using Mongoose?](/docs/microservices-framework/databases/MongoDB#mongoose-as-datasource-plugin)**

- **[How to access any datastore by creating a custom datasource?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to invoke datasource clients from typescript workflows?](/docs/microservices-framework/how-to/call-datasource)**

- **[How to access the environment variables from the typescript workflows?](/docs/microservices-framework/how-to/short-faqs)**

- **[How to update and run the project after renaming any file?](/docs/microservices-framework/how-to/short-faqs#how-to-update-and-run-the-project-after-renaming-any-file)**

- **[How to handle secrets, api keys, connection_urls etc.?](/docs/microservices-framework/config-and-mappings/config#step-1-define-environment-variables-in-yaml-configuration)**

- **[How to export a variable in environment ?](/docs/microservices-framework/config-and-mappings/config#step-2-set-environment-variable-values)**

