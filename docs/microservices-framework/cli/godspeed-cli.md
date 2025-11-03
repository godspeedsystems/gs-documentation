---
sidebar_position: 1
title: Godspeed CLI
description: Overview of Godspeed Command Line Interface and its core commands.
---

## Overview
This document provides a detailed guide to the Godspeed Command Line Interface (CLI), the primary tool for interacting with Godspeed projects. It covers how to install the CLI and explains the usage and functionality of its various commands, including those for project creation, running the development server, building and previewing projects, generating CRUD APIs, managing plugins, working with Prisma, and enabling Open Telemetry. Troubleshooting steps for common CLI errors are also included.

## Core Commands

### 1. `godspeed create`
The `create` command creates project structure for your microservice. When called without arguments, it creates project structure with default examples

```bash
$  godspeed create my-service
```

```bash
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

…  waiting   Cloning project template.
✔  success   Cloning template successful.
…  waiting   Generating project with default examples.
…  waiting   Generating project files.
✔  success   Successfully generated godspeed project files.

dependencies installed successfully!

Successfully created the project my-service.
Use `godspeed help` command for available commands. 

Happy building microservices with Godspeed! 🚀🎉
```

### 2. `godspeed serve`
You can run your Godspeed project using `godspeed serve` command. This will build and run your project in auto-watch mode.

> 📌 Prerequisite: must be inside a godspeed project.

```bash
 godspeed serve
```

### 3. `godspeed build`
You can build your Godspeed project using `godspeed build` command. This will build your project and copy the contents in `/dist` folder. 
> 📌 Prerequisite: must be inside a godspeed project.

```bash
 godspeed build
```

### 4. `godspeed preview`
You can run your Godspeed project using `godspeed preview` command. 

> 📌 Prerequisite: `godspeed build` to be run prior because preview renders the project from the `dist` folder. 

```bash
 godspeed preview
```
### 5. `godspeed clean`
```
godspeed clean
```
Removes the dist/ directory and resets prior build artifacts.

### 6. `godspeed gen-graphql-schema`
```
godspeed gen-graphql-schema
```
> 📌 Prerequisite: must have installed graphQL plugin.

Generates a GraphQL schema automatically from your existing Godspeed events and functions.

---

## Other Commands
For specialized tools and commands, refer to:

- [Plugin CLI](./plugin-cli.md)
- [Prisma CLI](./prisma-cli.md)
- [OTEL CLI](./otel-cli.md)
- [gen-crud-api CLI](./gen-crud-api.md)
- [UI Tools](./ui-tools/overview.md)