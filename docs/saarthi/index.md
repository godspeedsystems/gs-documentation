---
sidebar_label: Welcome
---
import SaarthiIcon from '@site/src/components/SaarthiIcon';

# Saarthi 

<SaarthiIcon /> Saarthi is an AI-powered autonomous coding agent that lives in your editor. It helps you code faster and smarter, whether you're starting a new project, maintaining existing code, or learning new technologies.

## What Can Saarthi Do?

- **Generate full stack and framework-aligned code** using Code mode with RAG
- **Refactor & Debug** existing code
- **Write & Update** documentation
- **Answer Questions** about your codebase
- **Automate Devops** Generates Docker configs and deploys to Docker or Render
- **Review code** Performs detailed reviews across six dimensions including compliance, completeness, and bugs.
- **Create** new files and projects
- **Test** manages all QA tasks
- **Manage Product** develop product strategy, competitive analysis, MVP planning and market positioning.

## Prerequisite:

[Python](https://www.python.org/downloads/) must be installed on your system before installing Saarthi.

## Quick Start

1. [Install Saarthi](./getting-started/installing.mdx)
2. [Connect Your AI Provider](./getting-started/connecting-api-provider.md)
3. [Try Your First Task](./getting-started/your-first-task.md)

## Key Features

### Multiple Agents
Saarthi adapts to your needs with specialized [agents and modes](./basic-usage/using-modes):


    **[💻 Code](./modes/code.md):** For general-purpose coding tasks, now with integrated support for Godspeed’s 4th-gen meta framework for backend development, enabling guard-railed 10x engineering practices—automatically.

    **[🏗️ Architect](./modes/architect.md):** For planning and technical leadership

    **[❓ Ask](./modes/ask.md):** For answering questions and providing information

    **[🪲 Debug](./modes/debug.md):** For systematic problem diagnosis

    **[🪃 Orchestrator](./modes/orchestrator.md):** For managing complex tasks and delegating work

    **[🕵️ Code Review](./modes/code-review.md):** Performing code reviews, identifying potential issues, and ensuring code 
    quality

    **[🛠️ DevOps](./modes/devops.md):** Streamlines deployment tasks for all types of projects.

    **[🔍 QA Lead Engineer](./modes/qa-modes.md)** - Managing all QA tasks, such as setting up testing environments and 
    writing test files, implements test cases, handles mocking and validates test execution.

    **[🎯 Product Manager](./modes/pm-lead.md):** Ideal to develop product strategy, idea validation, competitive 
    analysis, MVP planning and market positioning.

    **[🧑‍💻 Coach](./modes/coach.md):** An AI personal coach providing dynamic, personalized learning roadmaps, relevant resources and interactive exercises.

    **[Custom Modes](./features/custom-modes):** Create unlimited specialized agents for security auditing, performance optimization, documentation, or any other task
 

### Smart Tools
Saarthi comes with powerful [tools](./basic-usage/how-tools-work) that can:
- Read and write files in your project
- Execute commands in your VS Code terminal
- Control a web browser
- Use external tools via [MCP (Model Context Protocol)](./features/mcp/overview)

MCP extends Saarthi's capabilities by allowing you to add unlimited custom tools. Integrate with external APIs, connect to databases, or create specialized development tools - MCP provides the framework to expand Saarthi's functionality to meet your specific needs.

### Customization
Make Saarthi work your way with:
- [Custom Instructions](./features/custom-instructions) for personalized behavior
- [Custom Modes](./features/custom-modes) for specialized tasks
- [Local Models](./advanced-usage/local-models) for offline use
- [Auto-Approval Settings](./features/auto-approving-actions) for faster workflows


