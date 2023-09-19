---
sidebar_position: 13
title: Business Logic
---

## Introduction

You can express and run your business logic with Godspeed microservice or servlerless, in the two basic ways

- Within the Godspeed framework's runtime
  - As YAML function DAG (Godspeed DSL)
  - As JS/TS
- In a different runtime (Using any language or framework)
  - Via HTTP, gRpc or event interface

> The two basic concepts to learn here are functions and events

---

### With Godspeed microservice framework

The Godspeed framework's runtime has capability to execute a function DAG written in the Godspeed DSL, or in JS/TS. Both kinds of business logic expressions are executed by Godspeed, as [GSInstruction](./functions).

The framework patches in and executes the business logic as GSInstructions which also provide middleware hooking mechanism. This decouples the function logic and middleware from the runtime environment. When patched into a microservice, the function gets automatically exposed through REST, event driven and socket interfaces, based on the api schema settings.

> There is a standard way to define and patch business logic and middleware into a Godspeed microservice or in serverless workflows, during both the process load time and run time.

## Steps

---

- Use Godspeed CLI to generate the folder template (scaffolding) for a project. Import other modules in the project, as per the templating specifications.
- Write your business logic in YAML DSL or JS/TS, in the scaffolded module directory.
- Modify the microservice config including which namespace/functions of this project are to be exposed as REST/Event endpoints, with query validations.
- Start the Godspeed service specifying the path to the project folder.
