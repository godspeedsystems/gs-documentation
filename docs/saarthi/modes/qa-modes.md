# 🔍 QA Lead Engineer
Your AI-powered Quality Assurance (QA) assistant within Saarthi.

## Overview
The QA Lead Engineer acts as your single point of contact for all QA-related tasks. It internally coordinates with other specialized QA agents (QA Document Writer and QA Coder) to complete your requests, streamlining the testing process and automating various QA activities. 

> As a user, you will only interact with the **QA Lead Engineer** mode.

## Primary Use Cases
- Setting up the testing environment for new or existing projects.
- Writing various types of test files (unit, functional, integration).
- Generating detailed test coverage and status reports.
- Batch-generating multiple test files for entire projects or specific modules.

## Example Prompts
```
"Set up the testing environment for my project."
"Write a functional test for the `/api/users` endpoint."
"Generate an integration test report."
"Create tests for all functional routes in my codebase."
"I need a unit test for the `calculatePrice` function."
```

## Internal Capabilities / Agents

- **Test Environment Setup:** Detects framework, creates necessary test files and configurations, and integrates with Swagger specs.
- **Test File Generator:** Orchestrates the creation of unit, functional, and integration test files.
- **Test Report Generator:** Runs test suites with coverage and compiles comprehensive markdown reports.
- **Batch Test Creator:** Automates the generation of multiple test files based on project context.
- **QA Document Writer Integration:** Delegates the creation of test strategy documents.
- **QA Coder Integration:** Delegates the writing of actual test files.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ |
| Write files | ✅ (test files, reports, config files) |
| Execute commands | ✅ (within secure scope for testing) |
| Evaluate code | ✅ |
| Use external documentation | ✅ (via RAG MCP) |
| Manage QA workflow | ✅ |

## Preferred Models:

GPT-4.5 / Claude 3 Sonnet (Test strategy & report generation)
Claude 3 Opus / Gemini 1.5 Pro (Test file generation & code evaluation)

## Scope
✅ In Scope
- Automated test environment setup (Godspeed, Express, etc.)
- Generation of unit, functional, and integration tests.
- Comprehensive test reporting (coverage, status).
- Bulk test file generation for large codebases.
- Integration with PRD/TRD for test stub creation.
- Guidance on best practices for testing.

❌ Out of Scope
- Manual testing execution or human QA simulation.
- Direct modification of production code (only test files are generated/modified).
- Persistent session storage for test results (reports are generated as files).
- Live deployment or CI/CD pipeline management.
- Deep-dive debugging of application logic (refer to Debug mode).

## Embedded Behaviors
- Initiates conversations by offering clear task options (Setup, Write Single, Generate Report, Write Multiple).
- Guides users through necessary inputs (e.g., `.env` updates, PRD provision).
- Automatically detects project framework for tailored test setup.
- Updates `qa-context.json` to track testing progress.
- Provides clear completion messages for each task.

🔄 Workflow Integration
Stores test reports in:

```
docs/test/<type>/reports/YYYY-MM-DD-HHMM.md
```
Manages test progress and metadata in:

```
qa-context.json
```

### Leverages:

- `qa-document-writer` for test strategy documents.
- `qa-coder` for actual test file generation.
- `rag-node` MCP for testing best practices and framework-specific guidance.
- `command` group to execute test suites and manage files.

## Safety Features
- All commands run in a restricted, sandboxed shell.
- Emphasizes mandatory `.env` file updates to prevent production data impact.
- AI seeks explicit confirmation before making significant changes.
- User code execution for testing is isolated and guarded.

## Shortcut to Activate
```
Mac: ⌘ + .
Windows/Linux: Ctrl + .
```

### Related Modes
/debug: For troubleshooting and error diagnosis.
/code: For writing and modifying application code.
/orchestrator: For managing complex, multi-step projects.
/pmlead: For product strategy and requirements definition.

## Author Notes
This mode transforms Saarthi into a powerful QA automation partner, simplifying the often complex and time-consuming process of setting up and maintaining a robust testing suite. By orchestrating specialized agents, it provides a seamless experience for developers to ensure code quality and reliability, especially within the Godspeed framework.

---

# 📄 QA Document Writer
The QA Document Writer AI agent is responsible for generating comprehensive and actionable test strategy documents for specific functions, as assigned by the QA Lead Engineer.

## Overview
This mode focuses on creating detailed test strategy documents, including unit and functional test strategies. It follows strict templates and logic to ensure standardized and high-quality documentation, which then serves as a blueprint for the QA Coder.

## Primary Use Cases
- Generating unit test strategy documents.
- Generating functional test strategy documents.
- Documenting test cases and expected outcomes.

## Example Prompts
(This mode is typically invoked internally by QA Lead Engineer, not directly by user)

## Internal Capabilities / Agents
- **Strategy Template Engine:** Applies predefined templates for different test types.
- **Test Case Generator:** Creates detailed test cases based on function/feature descriptions.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ |
| Write files | ✅ (test strategy documents) |
| Execute commands | ❌ |
| Evaluate code | ❌ |
| Use external documentation | ✅ (via RAG MCP) |
| Manage documentation flow | ✅ |

## Preferred Models:

GPT-4.5 / Claude 3 Sonnet (Document generation)

## Scope
✅ In Scope
- Creation of unit test strategy documents.
- Creation of functional test strategy documents.
- Adherence to internal documentation standards.

❌ Out of Scope
- Writing actual test code (refer to QA Coder).
- Executing tests or generating reports.
- Direct user interaction (primarily an internal agent).

## Embedded Behaviors
- Receives instructions from QA Lead Engineer.
- Generates markdown files for test strategies.
- Ensures consistency in documentation format.

🔄 Workflow Integration
Stores test strategy documents in:

```
docs/test/strategies/<function_name>.md
```

### Leverages:

- `rag-node` MCP for best practices in test documentation.

## Safety Features
- Operates within a restricted scope, only generating documentation.
- No direct access to modify application code or execute commands.

## Shortcut to Activate
(This mode is typically invoked internally by QA Lead Engineer, not directly by user)

### Related Modes
/qa-lead-engineer: Orchestrates this mode.
/qa-coder: Consumes the output of this mode.

## Author Notes
The QA Document Writer ensures that every test written has a solid, well-documented strategy behind it, promoting clarity, consistency, and maintainability in the testing process.

---

# 🧪 QA Coder
The QA Coder AI agent is responsible for generating high-quality, maintainable test files for specific functions, based on the test strategy provided by the QA Document Writer.

## Overview
This mode focuses on translating test strategies into executable test code. It implements test cases, handles mocking, and ensures that the generated tests are robust and adhere to coding standards.

## Primary Use Cases
- Writing unit test files.
- Writing functional test files.
- Implementing test cases with appropriate assertions.
- Setting up mocks and stubs for dependencies.

## Example Prompts
(This mode is typically invoked internally by QA Lead Engineer, not directly by user)

## Internal Capabilities / Agents
- **Test Code Generator:** Translates test strategies into code.
- **Mocking Handler:** Integrates mocking libraries and patterns.
- **Assertion Builder:** Creates appropriate assertions for test cases.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ |
| Write files | ✅ (test files) |
| Execute commands | ✅ (for test execution) |
| Evaluate code | ✅ |
| Use external documentation | ✅ (via RAG MCP) |
| Manage code generation flow | ✅ |

## Preferred Models:

Claude 3 Opus / Gemini 1.5 Pro (Code generation & test execution)

## Scope
✅ In Scope
- Writing unit test files based on provided strategies.
- Writing functional test files based on provided strategies.
- Implementing test cases and assertions.
- Handling mocking and dependency injection for tests.

❌ Out of Scope
- Defining test strategies (refer to QA Document Writer).
- Generating test reports (refer to QA Lead Engineer).
- Direct user interaction (primarily an internal agent).

## Embedded Behaviors
- Receives test strategy from QA Lead Engineer.
- Generates test files in the appropriate project structure.
- Ensures generated code is clean, readable, and maintainable.

🔄 Workflow Integration
Stores test files in:

```
tests/<type>/<function_name>.test.ts
```

### Leverages:

- `rag-node` MCP for best practices in test coding and framework-specific testing.
- `command` group for executing generated tests.

## Safety Features
- Operates within a restricted scope, only generating test code.
- No direct access to modify production application code.
- Test execution is sandboxed and monitored.

## Shortcut to Activate
(This mode is typically invoked internally by QA Lead Engineer, not directly by user)

### Related Modes
/qa-lead-engineer: Orchestrates this mode.
/qa-document-writer: Provides test strategies to this mode.

## Author Notes
The QA Coder is the workhorse of the QA system, transforming strategic plans into concrete, executable tests. It ensures that the codebase is thoroughly tested, contributing significantly to the overall quality and stability of the project.