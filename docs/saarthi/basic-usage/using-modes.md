# Agents and Modes

Agents in Saarthi are specialized personas that tailor the assistant's behavior to your current task. Each mode offers different capabilities, expertise, and access levels to help you accomplish specific goals.

:::info Sticky Models
Each agent or remembers your last-used model. When switching modes, Saarthi automatically selects that model—no manual selection needed. Assign different models to different modes (e.g., Gemini 2.5 Preview for `🏗️ Architect` mode, Claude Sonnet 3.7 for `💻 Code` mode) and Saarthi will switch models automatically when you change modes.
:::

## Why Use Different Modes?

- **Task specialization:** Get precisely the type of assistance you need for your current task
- **Safety controls:** Prevent unintended file modifications when focusing on planning or learning
- **Focused interactions:** Receive responses optimized for your current activity
- **Workflow optimization:** Seamlessly transition between planning, implementing, debugging, and learning

## Switching Between Modes

Four ways to switch modes:

1. **Dropdown menu:** Click the selector to the left of the chat input
   
2. **Slash command:** Type `/<mode-name>` in the chat input
   
3. **Toggle command/Keyboard shortcut:** Use the keyboard shortcut below, applicable to your operating system. Each press cycles through the available modes in sequence, wrapping back to the first mode after reaching the end.
       
    | Operating System | Shortcut |
    |------------------|----------|
    | macOS | ⌘ + . |
    | Windows | Ctrl + . |
    | Linux | Ctrl + . |

4. **Accept suggestions:** Click on mode switch suggestions that Saarthi offers when appropriate

## Built-in Agents or Modes

- [Ask](/docs/saarthi/modes/ask.md)

- [Code-Generic](/docs/saarthi/modes/code.md)

- [Godspeed](/docs/saarthi/modes/godspeed.md)

- [Code-Review](/docs/saarthi/modes/code-review.md)

- [Debug](/docs/saarthi/modes/debug.md)

- [DevOps](/docs/saarthi/modes/devops.md)

- [Architect](/docs/saarthi/modes/architect.md)

- [Orchestrator](/docs/saarthi/modes/orchestrator.md)

<!-- 
### Code (Default)

| Aspect | Details |
|--------|---------|
| **Name** | `💻 Code` |
| **Description** | A skilled software engineer with expertise in programming languages, design patterns, and best practices |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `browser`, `command`, `mcp` |
| **Ideal For** | Writing code, implementing features, debugging, and general development |
| **Special Features** | No tool restrictions—full flexibility for all coding tasks |

### Ask

| Aspect | Details |
|--------|---------|
| **Name** | `❓ Ask` |
| **Description** | A knowledgeable technical assistant focused on providing thorough and complete answers. It's less inclined to switch to implementing code unless explicitly requested and may use diagrams for clarification. |
| **Tool Access** | Limited access: `read`, `browser`, `mcp` only (cannot edit files or run commands) |
| **Ideal For** | Code explanation, concept exploration, and technical learning |
| **Special Features** | Optimized for detailed, informative responses, often using diagrams for clarity, without modifying your project. |

### Architect

| Aspect | Details |
|--------|---------|
| **Name** | `🏗️ Architect` |
| **Description** | An experienced technical leader and planner who helps design systems and create implementation plans |
| **Tool Access** | Access to `read`, `browser`, `mcp`, and restricted `edit` (markdown files only) |
| **Ideal For** | System design, high-level planning, and architecture discussions |
| **Special Features** | Follows a structured approach from information gathering to detailed planning |

### Debug

| Aspect | Details |
|--------|---------|
| **Name** | `🪲 Debug` |
| **Description** | An expert problem solver specializing in systematic troubleshooting and diagnostics |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `browser`, `command`, `mcp` |
| **Ideal For** | Tracking down bugs, diagnosing errors, and resolving complex issues |
| **Special Features** | Uses a methodical approach of analyzing, narrowing possibilities, and fixing issues. Includes custom instructions to reflect, distill possibilities, add logs, and confirm before fixing. |

### Orchestrator

| Aspect | Details |
|--------|---------|
| **Name** | `🪃 Orchestrator` |
| **Description** | A strategic workflow orchestrator that breaks down complex tasks and delegates them to specialized modes.
| **Tool Access** | Access to `read`, `browser`, `command`, `mcp`, and restricted `edit` (mode configuration files only: `.saarthimodes`, `custom_modes.json`) |
| **Ideal For** | Managing multi-step projects, coordinating work across different modes, and automating complex workflows |
| **Special Features** | Uses the [`new_task`](../advanced-usage/available-tools/new-task) tool to delegate subtasks to other modes. |

### Code-Godspeed

| Aspect | Details |
|--------|---------|
| **Name** | `⚡ Code-Godspeed` |
| **Description** | A Godspeed meta-framework expert with deep knowledge of microservices architecture, distributed scalable enterprise grade systems and industry wide best practices |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `browser`, `command`, `mcp` |
| **Ideal For** | Developing and managing Godspeed applications, microservices architecture, and enterprise-grade systems |
| **Special Features** | Optimized for Godspeed framework development, providing access to Godspeed-specific tools and knowledge **Context-Aware Intelligence via RAG Integration**- fetches relevant information from vector databases, allowing precise answers contextualized to the user's codebase and documentation. |

---

### Activate Code-Godspeed Mode

**Code-Godspeed Mode** enables **retrieval-augmented generation (RAG)** powered by your codebase, docs, and the **Godspeed Systems framework** — delivering **production-grade microservices with embedded best practices and architectural guardrails**.

### Connect to the RAG-node MCP Server

To use this mode:

1. Open Saarthi’s **MCP Settings** (top-right of Saarthi pane).
2. Scroll down and click:
   * **Edit Global MCP** → Opens global `mcp_settings.json`.
3. Add your **Gemini API key** under the `env` block of the RAG-node server config:

```json
"RAG-node": {
    "type": "stdio",
    "command": "npx",
    "args": [
    "-y",
    "@godspeedsystems/rag-node"
    ],
    "disabled": false,
    "cwd": "/path/to/home/directory",
    "alwaysAllow": [
    "*"
    ],
    "env": {
    "GOOGLE_API_KEY": "AIXXXXXXXXXXXXXXXXXX"   // Add your Gemini API Key here
    }
}
```
🔗 [Get your Gemini API Key](https://makersuite.google.com/app/apikey)

### What Happens Next?

Once connected:

* Saarthi uses `mcp.handle-query` to forward your queries to the **RAG-node**.
* The node uses **FAISS vector search** + **Gemini embeddings** to:
  * Retrieve precise, source-traceable information.
  * Auto-generate config, functions, events, and workflows.
  * Provide *real-time guidance* aligned with Godspeed's architecture.

⚠️ *Currently supports only Google Gemini for embeddings.*

### Code Review

| Aspect | Details |
|--------|---------|
| **Name** | `🕵️ Code Review` |
| **Description** | An AI Code Review Assistant—an expert system specialized in comprehensive, context-aware code analysis |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `command`, `mcp` |
| **Ideal For** | Performing code reviews, identifying potential issues, and ensuring code quality |
| **Special Features** | Provides comprehensive code analysis, identifies potential issues, and suggests improvements |

To get review of your `Godspeed projects`, [Connect to the RAG-node MCP Server](/docs/saarthi/basic-usage/using-modes#connect-to-the-rag-node-mcp-server) first.

### DevOps Mode

| Aspect | Details |
|--------|---------|
| **Name** | `🛠️ DevOps` |
| **Description** | The ultimate DevOps Mastermind. Streamlines deployment tasks for all types of projects. |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `browser`, `command`, `mcp` |
| **Ideal For** | Automating deployments, managing infrastructure, and streamlining development workflows |
| **Special Features** | Local Docker Deployment: Automatically generates Dockerfile, docker-compose.yml, and .dockerignore. It builds and runs the project locally in Docker with minimal prompts. Render Deployment: Uses a new Render MCP tool (added to global MCPs). Just provide your Git repo URL and Render account details, and Saarthi handles the full Render deployment pipeline. | -->

## Customizing Modes

Tailor Saarthi's behavior by customizing existing modes or creating new specialized assistants. Define tool access, file permissions, and behavior instructions to enforce team standards or create purpose-specific assistants. See [Custom Modes documentation](../features/custom-modes) for setup instructions.
 