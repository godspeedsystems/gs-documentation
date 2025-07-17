---
title: Adding Middleware to a Prisma Datasource
description: Learn how to extend the Prisma datasource in Godspeed with custom middleware to modify queries and enforce data access policies.
keywords: [Godspeed, Prisma, middleware, datasource, execute method, query modification, data access]
---

# Adding Middleware to a Prisma Datasource

This guide explains how to add custom middleware to a Prisma datasource within the Godspeed framework. This allows you to intercept and modify Prisma queries before they are executed, enabling you to enforce data access policies, add default filters, or perform other custom logic.

## Prerequisites

*   A Godspeed project with the Prisma datasource plugin installed.
*   A Prisma schema defined in `src/datasources/schema.prisma`.
*   Basic familiarity with TypeScript and Prisma.

## Steps

1.  **Extend the Prisma DataSource:**

    *   Locate the `src/datasources/types/prisma.ts` file in your Godspeed project. This file typically exports the `DataSource` class from the `@godspeedsystems/plugins-prisma-as-datastore` package.
    *   Create a new class that extends the `DataSource` class. This new class will contain your custom middleware logic.

    ```typescript
    // src/datasources/types/prisma.ts
    import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
    import { GSContext, GSStatus } from '@godspeedsystems/core';

    export class CustomPrismaDataSource extends DataSource {
      // Your custom middleware logic will go here
    }

    export default CustomPrismaDataSource;
    ```

2.  **Override the `execute` method:**

    *   Within your new class, override the `execute` method. This method is the entry point for executing Prisma queries within the Godspeed framework.
    *   Inside the overridden `execute` method, you can access and modify the query arguments before calling the original `execute` method.

    ```typescript
    // src/datasources/types/prisma.ts
    import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
    import { GSContext, GSStatus } from '@godspeedsystems/core';

    export class CustomPrismaDataSource extends DataSource {
      async execute(ctx: GSContext, args: any): Promise<GSStatus> {
        // Your custom middleware logic will go here
        // Example: Add a default filter for 'isDeleted'
        if (args.meta.method === 'findUnique' || args.meta.method === 'findMany') {
          if (!args.where) {
            args.where = { isDeleted: false };
          } else if (!args.where.isDeleted) {
            args.where.isDeleted = false;
          }
        }
        return super.execute(ctx, args);
      }
    }

    export default CustomPrismaDataSource;
    ```

    *   **Explanation of the example:**
        *   The code checks if the query is a `findUnique` or `findMany` operation.
        *   If a `where` clause is not already present, it adds a default `isDeleted: false` filter.
        *   If a `where` clause exists, but doesn't contain `isDeleted`, it adds  `isDeleted: false` to the existing `where` clause.
        *   Finally, it calls the original `execute` method (`super.execute(ctx, args)`) to execute the modified query.

3.  **Update the default export:**

    *   Make sure your file `src/datasources/types/prisma.ts` exports the `CustomPrismaDataSource` class as default.

```typescript
    // src/datasources/types/prisma.ts
    import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
    import { GSContext, GSStatus } from '@godspeedsystems/core';

    export class CustomPrismaDataSource extends DataSource {
      async execute(ctx: GSContext, args: any): Promise<GSStatus> {
        if (args.meta.method === 'findUnique' || args.meta.method === 'findMany') {
          if (!args.where) {
            args.where = { isDeleted: false };
          } else if (!args.where.isDeleted) {
            args.where.isDeleted = false;
          }
        }
        return super.execute(ctx, args);
      }
    }

    export default CustomPrismaDataSource;
```

## Example: Prisma Schema


```prisma
// src/datasources/schema.prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
  output   = "./prisma-clients/schema"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  isDeleted Boolean  @default(false)
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  isDeleted Boolean  @default(false)
}
```