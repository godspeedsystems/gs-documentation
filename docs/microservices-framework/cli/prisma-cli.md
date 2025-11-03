---
title: Prisma CLI – Database Setup and Synchronization
---

# Prisma CLI – Database Setup and Synchronization

## Overview
Godspeed wraps Prisma CLI with additional support.

## `godspeed prisma prepare`
```bash
godspeed prisma prepare
```
> 📌 Prerequisite: 
1. must have prisma plugin installed, 
2. schema file saved inside src/datasource/ folder with .prisma extension.
3. db connection url saved in .env

This command:

- Compiles the Prisma schema from src/datasources/`<your_schema>`.prisma
- Generates Prisma client
- Syncs database schema
- Creates client in `src/datasources/prisma-clients/`

Run this each time, you make changes in your schema models or modify your .env DB connection_url.

### Example Schema Setup
(Add example schema setup here if available in original content or create a generic one)

### `.env` Configuration
(Add .env configuration details here if available in original content or create a generic one)

### Notes on `prisma-as-datastore` plugin
(Add notes on prisma-as-datastore plugin here if available in original content or create a generic one)