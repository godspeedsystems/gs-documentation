# 🛠️ DevOps Mode
The ultimate DevOps Mastermind. Streamlines deployment tasks for all types of projects.

## Overview
DevOps mode functions as the ultimate DevOps Mastermind, designed to streamline deployment tasks, manage infrastructure, and automate development workflows for all types of projects. It provides comprehensive support for local Docker deployments and integrates with external platforms like Render, handling the full deployment pipeline with minimal user prompts.

## Primary Use Cases
- Automating deployments to various environments (local, cloud).
- Managing infrastructure as code (though not explicitly stated, implied by DevOps role).
- Streamlining continuous integration and continuous delivery (CI/CD) workflows.
- Generating Dockerfiles, docker-compose.yml, and .dockerignore for local containerization.
- Deploying projects to cloud platforms like Render using integrated MCP tools.
- Troubleshooting deployment failures and environment-related issues.

## Example Prompts
```
"Deploy this Node.js application to Render."
"Generate Docker configuration files for my project."
"Set up a CI/CD pipeline for my GitHub repository."
"Troubleshoot why my Docker container isn't starting."
"How can I automate my application's build and deployment process?"
```

## Internal Capabilities / Agents

- **Deployment Orchestrator:** Manages and executes deployment workflows for various platforms.
- **Containerization Assistant:** Generates and assists with Docker-related configurations.
- **Infrastructure Manager (Conceptual):** Provides guidance on infrastructure setup and management.
- **CI/CD Integrator:** Helps configure and integrate with CI/CD systems.
- **Environment Troubleshooter:** Diagnoses and resolves environment and deployment issues.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ |
| Write files | ✅ |
| Execute commands | ✅ |
| Evaluate code | ❌ |
| Use external documentation | ✅ |
| Manage learning flow | ❌ |

## Preferred Models:

- Gemini 1.5 Pro / Claude 3 Sonnet (Complex deployment scenarios, infrastructure guidance)
- Gemini 2.5 Flash / Claude 3 Haiku (Routine deployment tasks, Docker configuration)

## Scope
✅ In Scope
- Automating local Docker deployments (Dockerfile, docker-compose.yml, .dockerignore generation).
- Facilitating cloud deployments via integrated MCP tools (e.g., Render).
- Providing guidance on CI/CD pipeline setup and best practices.
- Assisting with environment variable management for deployments.
- Troubleshooting deployment-related errors and system configurations.

❌ Out of Scope
- Deep code-level debugging (use Debug mode).
- High-level architectural design (use Architect mode).
- Comprehensive feature implementation (use Code mode).
- Providing theoretical explanations without a specific DevOps context (use Ask mode).
- Formal code reviews (use Code Review mode).
- Direct management of cloud provider resources beyond integrated MCP tools.

## Embedded Behaviors
- Prioritizes automation and efficiency in deployment tasks.
- Provides clear, actionable steps for setting up deployment pipelines.
- Leverages integrated MCP tools for seamless cloud deployments.
- Can generate necessary configuration files for containerization.
- Focuses on practical solutions for common DevOps challenges.

## Workflow Integration
- Directly interacts with project files to generate Docker configurations.
- Executes commands for building, running, and deploying applications.
- Leverages MCP servers for interacting with external deployment platforms (e.g., Render).
- Can be used in conjunction with Code mode for implementing deployment-ready code.

## Safety Features
- Seeks explicit confirmation before initiating significant deployment actions.
- Ensures all commands are run within a secure and monitored environment.
- Provides clear explanations of potential impacts before making changes to deployment configurations.
- Prioritizes idempotent operations where possible to prevent unintended side effects.

## Shortcut to Activate
```
Mac: ⌘ + .  
Windows/Linux: Ctrl + .
```

## Author Notes
DevOps mode is designed to empower developers with robust automation and deployment capabilities, bridging the gap between development and operations. It aims to simplify complex deployment processes, ensuring applications are delivered efficiently and reliably.
