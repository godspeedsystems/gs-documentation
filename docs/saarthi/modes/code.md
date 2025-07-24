# 💻 Code Mode
A highly skilled software engineer with extensive knowledge in many programming languages, frameworks, design patterns and best practices.

## Overview
Code mode acts as a highly skilled software engineer. It provides extensive knowledge in programming languages, frameworks, design patterns, best practices, microservices architecture, and distributed scalable enterprise-grade systems. It enables guard-railed 10x engineering practices automatically. It offers context-aware intelligence, fetching relevant information from various documentation sources for precise and contextualized answers.

## Primary Use Cases
- Writing new code and implementing features.
- Configuring projects and managing their lifecycle.
- Implementing CRUD APIs and GraphQL endpoints.
- Installing, removing, and managing plugins.
- Setting up database integrations and datasources.
- Configuring event sources and workflows.
- Managing authentication and authorization flows.
- Implementing telemetry and monitoring.
- Optimizing performance and scalability.
- Structuring projects for maintainability.
- Troubleshooting and debugging code issues.

## Example Prompts
```
"Implement a new user authentication flow using JWT."
"Create a CRUD API for the 'Product' entity."
"Refactor this TypeScript module for better performance."
"Add a new datasource plugin for Redis."
"Troubleshoot why my API endpoint is returning a 500 error."
"How do I configure a new HTTP event?"
"Generate types for my frontend from the swagger spec."
```

## Internal Capabilities / Agents

- **Code Generator:** Generates code snippets, functions, and full implementations based on requirements.
- **CLI Wrapper:** Executes CLI commands for project setup, plugin management, API generation, and database operations.
- **Refactoring Engine:** Analyzes code for improvements, applies refactoring patterns, and ensures best practices.
- **Documentation Integrator:** Fetches and applies context from various documentation and verified sources.
- **API Client Generator:** Generates API clients (e.g., Axios, Redux stores, types) from OpenAPI/Swagger specifications.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ |
| Write files | ✅ |
| Execute commands | ✅ |
| Evaluate code | ✅ |
| Use external documentation | ✅ |
| Manage learning flow | ❌ |

## Preferred Models:

- Gemini 1.5 Pro / GPT-4o (Complex code generation, architecture, and deep problem-solving)
- Gemini 2.5 Flash / Claude 3 Haiku (Routine coding tasks, quick edits, and general development support)


## Scope
✅ In Scope
- Implementing new features and functionalities across various tech stacks.
- Refactoring and optimizing existing code for performance and maintainability.
- Debugging and fixing bugs, including systematic troubleshooting.
- Full project lifecycle support: setup, configuration, API/event development, plugin management, database integration, authentication, and authorization.
- Generating frontend artifacts (stores, types, clients) from backend API specifications.
- Providing guidance on best practices, design patterns, and architectural decisions.

❌ Out of Scope
- High-level architectural planning and strategic design (use Architect mode).
- Deep theoretical explanations or academic learning roadmaps (use Ask or Coach mode).
- Formal code reviews and policy enforcement (use Code Review mode).
- Live deployment or advanced CI/CD pipeline management (use DevOps mode).

## Embedded Behaviors
- Prioritizes native plugin ecosystems for integrations; suggests custom plugins if official ones are unavailable.
- Uses appropriate CLI commands for plugin installations.
- Validates implementation flow by checking with documentation before writing any code.
- Provides complete, detailed answers with TypeScript and YAML code by default, adhering to schema-driven principles.
- Generates code and configurations that follow design principles and tenets.

## Workflow Integration
- Directly modifies source code files within `src/`, `events/`, `datasources/`, and `config/`.
- Interacts with the file system to create new files and directories as needed for project scaffolding and feature implementation.
- Leverages:
    - External documentation for up-to-date information and best practices.
    - CLI for all project management, build, and generation tasks.
    - OpenAPI/Swagger specifications for generating frontend clients and types.

## Safety Features
- Seeks explicit confirmation before overwriting critical files or making significant structural changes.
- Adheres strictly to defined file access permissions to prevent unintended modifications.
- Provides clear explanations for all CLI commands executed, ensuring transparency.
- Focuses on generating secure authentication flows and robust, scalable solutions.

## Shortcut to Activate
```
Mac: ⌘ + .  
Windows/Linux: Ctrl + .
```

## Author Notes
Code mode is the primary interface for hands-on development, offering comprehensive and context-aware support for general coding tasks. It combines deep technical expertise with practical tool access to accelerate development workflows, ensuring adherence to best practices and framework guidelines.
