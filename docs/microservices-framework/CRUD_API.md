---
title: Generating CRUD API
description: Learn how to automatically generate CRUD (Create, Read, Update, Delete) APIs in Godspeed using the gen-crud-api command and Prisma. This guide covers the steps from project creation and plugin installation to setting up your database connection, creating a Prisma schema, generating the client, and finally generating and testing the CRUD APIs.
keywords:
  [
    Godspeed,
    CRUD API,
    auto generate APIs,
    gen-crud-api,
    Prisma,
    database integration,
    ORM,
    REST API,
    crud api tutorial,
    mysql,
    postgresql,
    mongodb,
    sqlserver,
    sqllite,
  ]
---

# Generating CRUD APIs with Godspeed

## Overview

The Godspeed framework provides powerful CRUD API generation capabilities through the `gen-crud-api` command. This tool automatically creates standardized Create, Read, Update, and Delete (CRUD) endpoints based on your Prisma data models, significantly accelerating API development.

### Key Features

- Automatic CRUD endpoint generation
- Prisma ORM integration
- Express.js-based HTTP endpoints
- Swagger documentation generation
- Database schema synchronization

### Tutorial

Learn how to generate CRUD APIs in Godspeed:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/UOtFzRaoQnE?si=P_NqkqfdBVY1jJop" frameborder="0" allowfullscreen></iframe>
</div>

## Prerequisites

Before generating CRUD APIs, ensure you have:

- Godspeed CLI installed
- Access to a supported database
- Basic understanding of Prisma schema

## Step-by-Step Implementation Guide

### 1. Project Setup

**Create a new project or skip if already created.:**
`bash
    godspeed create my-project
    `

**Navigate to the project directory:**
`bash
    cd my-project
    `

For installation and getting started, visit the [Getting Started Guide](./guide/get-started)

### 2. Prisma Plugin Installation

Install the Prisma datasource plugin:

```bash
godspeed plugin add @godspeedsystems/plugins-prisma-as-datastore
```

For plugin configuration details, refer to the [Prisma Plugin Documentation](./datasources/datasource-plugins/Prisma%20Datasource.md#how-to-add-plugin)

### 3. Database Configuration

#### Connection URL Setup

Add your database connection URL to the `.env` file:

```env
# PostgreSQL example
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"

# SQLite example
DATABASE_URL="file:./database.db"
```

### Supported Databases

For database-specific connection formats, see:

- [Supported Databases List](/docs/microservices-framework/databases/Overview#list-of-currently-supported-databases)
- [Connection URL Formats](/docs/microservices-framework/databases/MySQL#connection-url)

### 4. Prisma Schema

Create a Prisma schema file in `src/datasources/`:
:::tip
When configuring the Prisma client in your Godspeed project, ensure you add the `output field` in your Prisma schema's generator block. This field should point to this location `src/datasources/prisma-clients/<prisma_schema_fileName/>` where the generated prisma client files will be stored.
:::

```prisma title=src/datasources/schema.prisma

datasource db {
  provider = "postgresql"  // or mysql, sqlite, sqlserver
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  output          = "./prisma-clients/schema"    //here schema is the name of prisma schema file
  previewFeatures = ["metrics"]
}

model User {
  id         Int      @id @default(autoincrement())
  email      String   @unique
  name       String
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}
```

#### Important Configuration Notes

1. Set the correct `provider` for your database
2. Configure the `output` path for generated client
3. Enable `metrics` in previewFeatures if needed for telemetry

#### Existing Database Integration

If you already have an existing database, you can introspect it and generate the Prisma model file using prisma db pull. This will generate your .prisma file.

Copy the generated file to src/datasources folder and rename it as per the name of this datasource that you want to keep. If you don't have an existing database setup with a model, then create a prisma model file from scratch.

### 5. Client Generation and Database Sync

Generate Prisma client and sync database:

```bash
godspeed prisma prepare
```

This command:

- Generates Prisma client
- Syncs database schema
- Creates client in `src/datasources/prisma-clients/`

### 6. CRUD API Generation

Generate CRUD endpoints:

```bash
godspeed gen-crud-api
```

Select your schema when prompted:

```
Select datasource / schema to generate CRUD APIs
(x) schema.prisma
( ) For all
( ) Cancel
```

### 7. Testing Generated APIs

Start the server and test APIs:

```bash
godspeed serve
```

Access Swagger documentation at:

```
http://localhost:3000/api-docs
```

## Generated Components

The generator creates:

1. Event definitions
2. API routes
3. Functions
4. Swagger documentation

![Generated CRUD Components](../../static/img/generated_crud_api.png)

## Actionable CRUD Event & Workflow Examples

### Example: User CRUD Event (YAML)

```yaml
http.post./user:
  fn: user_create
  summary: Create a new user
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name: { type: string }
            email: { type: string }
  responses:
    201:
      description: User created
      content:
        application/json:
          schema:
            type: object
            properties:
              id: { type: string }
              name: { type: string }
              email: { type: string }
```

### Example: User Create Workflow (TS)

```typescript
import { GSContext, GSStatus } from "@godspeedsystems/core";
export default async function (ctx: GSContext) {
  const { body } = ctx.inputs.data;
  const user = await ctx.datasources.prisma.client.user.create({ data: body });
  return new GSStatus(true, 201, "User created", user);
}
```

## Troubleshooting & FAQ

- **Q: CRUD events not generated?**
  - Ensure your Prisma schema is valid and in `src/datasources/`
  - Run `godspeed prisma prepare` before `gen-crud-api`
- **Q: Database connection errors?**
  - Check `.env` for correct `DATABASE_URL`
  - Ensure DB is running and accessible
- **Q: API not showing in Swagger?**
  - Confirm event YAML is in `src/events/` and follows correct schema
- **Q: Prisma client errors?**
  - Re-run `godspeed prisma prepare` after schema changes

## LLM Guidance & Prompt Templates

- **Prompt:** "Generate a Godspeed CRUD event and workflow for a Product entity with fields name, price, and stock."
- **Prompt:** "Write a TypeScript workflow for updating a user in Godspeed CRUD API."
- **Prompt:** "Show YAML for a DELETE /user/{id} endpoint with Prisma integration."

## Best Practices & Anti-Patterns

**Best Practices:**

- Keep your Prisma schema and event YAML in sync
- Use descriptive names for events and workflows
- Validate all input/output schemas
- Use environment variables for DB credentials
- Regularly update generated APIs as models evolve

**Anti-Patterns:**

- Editing generated files directly (regenerate instead)
- Hardcoding secrets in YAML or TS
- Skipping schema validation
- Ignoring Prisma warnings/errors

## Cross-links

- [API & Event](./API%20&%20Event.md)
- [Workflows](./workflows/overview.md)
- [Datasources](./datasources/overview.md)
- [CLI](./CLI.md)

## CRUD API Flow Diagram

```mermaid
graph TD
  A[Prisma Schema] --> B[Run godspeed prisma prepare]
  B --> C[Run godspeed gen-crud-api]
  C --> D[CRUD Event YAML Generated]
  D --> E[CRUD Workflows Generated]
  E --> F[Serve Project]
  F --> G[Test APIs via Swagger]
```

## Glossary

- **CRUD:** Create, Read, Update, Delete
- **Prisma:** ORM for database access
- **gen-crud-api:** Godspeed CLI command to auto-generate CRUD endpoints
- **Swagger:** Auto-generated API docs
- **Datasource:** Database or API client
- **Workflow:** Business logic handler for an event
