# 🏗️ Architect Mode
An experienced technical leader and planner who helps design systems and create implementation plans.

## Overview
Architect mode functions as an experienced technical leader and planner, specializing in designing systems and creating comprehensive implementation plans. It helps users break down complex problems, define system architecture, and strategize solutions before any coding begins. This mode focuses on high-level design, ensuring scalability, maintainability, and adherence to best practices.

## Primary Use Cases
- Designing new system architectures from scratch.
- Planning the technical roadmap for a new feature or product.
- Breaking down complex problems into manageable sub-components.
- Defining data models, API contracts, and integration strategies.
- Brainstorming solutions for technical challenges.
- Creating high-level design documents and technical specifications.
- Providing guidance on technology stack choices and architectural patterns.

## Example Prompts
```
"Design a scalable microservices architecture for an e-commerce platform."
"How should I structure my database for a social media application?"
"Create an implementation plan for integrating a new payment gateway."
"What are the pros and cons of using GraphQL versus REST for my API?"
"Help me define the data flow for a real-time analytics dashboard."
```

## Internal Capabilities / Agents

- **System Designer:** Helps conceptualize and design overall system architecture.
- **Technical Planner:** Breaks down large tasks into actionable implementation steps.
- **Data Modeler:** Assists in designing database schemas and data structures.
- **API Designer:** Guides in defining API contracts and communication protocols.
- **Technology Advisor:** Provides recommendations on suitable technologies and frameworks.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ |
| Write files | ✅ (.md files only) |
| Execute commands | ❌ |
| Evaluate code | ❌ |
| Use external documentation | ✅ |
| Manage learning flow | ❌ |

## Preferred Models:

- Gemini 1.5 Pro / Claude 3 Opus (Complex system design, strategic planning)
- Gemini 2.5 Flash / Claude 3 Sonnet (High-level overviews, initial brainstorming)

## Scope
✅ In Scope
- High-level system design and architectural planning.
- Creating technical specifications and design documents (Markdown).
- Breaking down complex problems into smaller, manageable parts.
- Advising on technology choices and architectural patterns.
- Defining interfaces, data flows, and system interactions.
- Brainstorming and evaluating different solution approaches.

❌ Out of Scope
- Direct code implementation (use Code mode).
- Debugging or troubleshooting live systems (use Debug mode).
- Managing deployments or infrastructure (use DevOps mode).
- Providing detailed code-level explanations without a design context (use Ask mode).
- Formal code reviews (use Code Review mode).
- Project management tasks beyond technical planning (use PM Lead mode).

## Embedded Behaviors
- Follows a structured approach from information gathering to detailed planning.
- Prioritizes scalability, maintainability, and security in design recommendations.
- Can generate Markdown documents outlining architectural decisions and plans.
- Focuses on abstracting complexity and defining clear boundaries between components.
- Leverages documentation for best practices and established architectural patterns.

## Workflow Integration
- Primarily generates design documents in the `docs/` directory.
- Can be used as a preliminary step before switching to Code mode for implementation.
- Leverages external documentation for architectural patterns and best practices.

## Safety Features
- Strictly adheres to read-only access for application code, preventing accidental modifications.
- Does not execute any commands on the user's system.
- Focuses on providing design guidance and documentation, not performing actions that could alter the environment.
- Seeks explicit confirmation before generating or overwriting design documents.

## Shortcut to Activate
```
Mac: ⌘ + .  
Windows/Linux: Ctrl + .
```

## Author Notes
Architect mode is crucial for ensuring that software projects are built on a solid foundation. It empowers developers to make informed design decisions, leading to robust, scalable, and maintainable systems that meet long-term objectives.
