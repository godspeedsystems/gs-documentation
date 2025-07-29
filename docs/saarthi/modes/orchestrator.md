# Orchestrator Mode
A strategic workflow orchestrator that breaks down complex tasks and delegates them to specialized modes.

## Overview
Orchestrator mode functions as a strategic workflow orchestrator. It is designed to break down complex, multi-step tasks into smaller, manageable subtasks and intelligently delegate them to the most appropriate specialized modes. This mode ensures efficient coordination across different specialties, automates complex workflows, and manages the overall progress of large projects.

## Primary Use Cases
- Managing complex, multi-stage software development projects.
- Breaking down large user stories or epics into actionable subtasks.
- Delegating specific tasks (e.g., coding, debugging, design) to relevant modes.
- Coordinating work that spans multiple domains or expertise areas.
- Automating sequences of operations involving different Saarthi modes.
- Tracking the progress of delegated tasks and integrating their results.

## Example Prompts
```
"Build a new user authentication system, including design, implementation, and testing."
"Refactor the entire data access layer and ensure all existing tests pass."
"Migrate our legacy API to a new microservices architecture."
"Automate the process of creating a new service, deploying it, and setting up monitoring."
"Coordinate the development of a new feature from product definition to deployment."
```

## Internal Capabilities / Agents

- **Task Decomposer:** Breaks down high-level tasks into granular subtasks.
- **Mode Selector:** Identifies and delegates subtasks to the most suitable specialized mode.
- **Workflow Manager:** Tracks the progress of delegated tasks and manages dependencies.
- **Result Integrator:** Collects and synthesizes results from completed subtasks.
- **Progress Reporter:** Provides updates on overall project status and next steps.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ |
| Write files | ✅ (mode configuration files only: `.saarthimodes`, `custom_modes.json`) |
| Execute commands | ✅ |
| Evaluate code | ❌ |
| Use external documentation | ✅ |
| Manage learning flow | ❌ |

## Preferred Models:

- Gemini 1.5 Pro / Claude 3 Opus (Complex workflow orchestration, strategic task management)
- Gemini 2.5 Flash / Claude 3 Sonnet (Routine task delegation, progress tracking)

## Scope
✅ In Scope
- Breaking down complex, multi-step projects into subtasks.
- Delegating subtasks to other specialized Saarthi modes using `new_task`.
- Managing the overall workflow and progress of delegated tasks.
- Coordinating efforts across different technical domains.
- Automating sequences of operations that involve multiple modes.

❌ Out of Scope
- Directly implementing code (delegates to Code mode).
- Performing detailed debugging (delegates to Debug mode).
- Designing system architectures (delegates to Architect mode).
- Providing theoretical explanations (delegates to Ask mode).
- Formal code reviews (delegates to Code Review mode).
- Direct deployment or infrastructure management (delegates to DevOps mode).

## Embedded Behaviors
- Prioritizes efficient task decomposition and delegation.
- Uses the `new_task` tool to initiate subtasks in other modes.
- Monitors the completion of subtasks and integrates their outcomes.
- Provides a high-level overview of project progress.
- Can adapt the workflow based on the results of completed subtasks.

## Workflow Integration
- Central to managing multi-mode workflows.
- Uses the [`new_task`](../advanced-usage/available-tools/new-task) tool to delegate subtasks.
- Can read and update mode configuration files to manage custom workflows.
- Leverages external documentation for best practices in project management and workflow design.

## Safety Features
- Seeks explicit confirmation before initiating complex, multi-mode workflows.
- Ensures that delegated tasks adhere to the safety features of their respective modes.
- Provides clear visibility into the progress and status of all subtasks.
- Focuses on coordination and delegation, minimizing direct code modifications.

## Shortcut to Activate
```
Mac: ⌘ + .  
Windows/Linux: Ctrl + .
```

## Author Notes
Orchestrator mode transforms Saarthi into a powerful project management and workflow automation tool. It enables seamless collaboration across specialized AI agents, ensuring that complex projects are executed efficiently, systematically, and with optimal resource utilization.
