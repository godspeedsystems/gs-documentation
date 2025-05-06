---
title: Generating CRUD API
description: Learn how to automatically generate CRUD (Create, Read, Update, Delete) APIs in Godspeed using the gen-crud-api command and Prisma. This guide covers the steps from project creation and plugin installation to setting up your database connection, creating a Prisma schema, generating the client, and finally generating and testing the CRUD APIs.
keywords: [Godspeed, CRUD API, generate API, gen-crud-api, Prisma, database, ORM, REST API, Express.js, guide, tutorial, documentation]
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

### Video Tutorial
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

Create a new Godspeed project or skip if already created.
```bash
godspeed create my-crud-app

# Navigate to project directory
cd my-crud-app
```

For detailed project creation steps, see the [Getting Started Guide](./guide/get-started.md#step-2:-create-a-project-and-start-the-server).

### 2. Prisma Plugin Installation

Install the Prisma datasource plugin:
```bash
godspeed plugin add prisma-as-datastore
```

For plugin configuration details, refer to the [Prisma Plugin Documentation](./datasources/datasource-plugins/Prisma%20Datasource.md#add-plugin).

### 3. Database Configuration

#### Connection URL Setup
Add your database connection URL to the `.env` file:

```env
# PostgreSQL example
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"

# SQLite example
DATABASE_URL="file:./database.db"
```

#### Supported Databases
- PostgreSQL
- MySQL
- SQLite
- SQL Server
- CockroachDB

For database-specific connection formats, see:
- [Supported Databases List](/docs/microservices-framework/databases/Overview#list-of-currently-supported-databases)
- [Connection URL Formats](/docs/microservices-framework/databases/MySQL#connection-url)

### 4. Prisma Schema Configuration

Create a Prisma schema file in `src/datasources/`:

```prisma title=src/datasources/schema.prisma

datasource db {
  provider = "postgresql"  // or mysql, sqlite, sqlserver
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  output          = "./prisma-clients/schema"
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
For existing databases:
1. Use `prisma db pull` to introspect schema
2. Copy generated schema to `src/datasources/`
3. Customize schema as needed

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
3. Functions in yaml
4. Swagger documentation

![Generated CRUD Components](../../static/img/generated_crud_api.png)

## Troubleshooting

### Common Issues

1. Database Connection Errors
   - Verify connection URL format
   - Check database credentials
   - Ensure database is running

2. Schema Generation Issues
   - Validate Prisma schema syntax
   - Check output directory permissions
   - Verify database provider support

3. API Generation Problems
   - Confirm Prisma client generation
   - Check for schema validation errors
   - Verify event source configuration

Remember to regularly update generated APIs as your data models evolve, and maintain proper version control of your schema files.
