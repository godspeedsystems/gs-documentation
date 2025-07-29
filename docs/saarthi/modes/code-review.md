# 🕵️ Code Review Mode
A comprehensive AI-powered reviewer that performs multi-dimensional analysis of your codebase.

## Overview
The Code Review mode performs an **in-depth, context-aware review** across six critical dimensions: **Compliance, Code Quality, Readability, Linting, Correctness, and Completeness**. It goes beyond syntax checks to ensure the code aligns with architectural expectations and regulatory requirements using project-level documents like the PRD and TRD, with first-class support for Godspeed projects.


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/sV-xk8nC9Cc?si=SiPEDSpoRiROhc9q" frameborder="0" allowfullscreen></iframe>
</div>


## Primary Use Cases
- Performing a full audit of project code.
- Ensuring feature completeness and alignment with specifications.
- Detecting compliance or security gaps (e.g., GDPR, logging policies).
- Validating code readability and documentation quality.
- Providing inline comments and a structured Markdown review report.
- Applying framework-specific best practices for Godspeed projects.

## Example Prompts
```
"Review this Godspeed project for correctness and completeness."
"Check this PR for compliance issues."
"Evaluate if this function matches the spec in the TRD."
"Run a full review excluding node_modules and .env."
```

## Internal Capabilities / Agents

- **Compliance Checker:** Identifies policy violations (e.g., GDPR, logging).
- **Code Quality Analyzer:** Reviews maintainability, structure, and design.
- **Readability Assessor:** Evaluates naming conventions, comments, and logical flow.
- **Linting Integrator:** Checks formatting against coding guidelines.
- **Correctness Validator:** Looks for logic bugs and edge cases.
- **Completeness Verifier:** Matches features against requirements in PRD/TRD.
- **Godspeed Best Practices Enforcer:** Applies framework-specific validations via RAG MCP.

## Model Behavior & Tool Access
| Capability | Status |
|---|---|
| Read files | ✅ (project files, PRD.md, TRD.md, .gitignore) |
| Write files | ✅ (review reports in `.md` + inline comments) |
| Execute commands | ✅ (within secure scope for lint/scan triggers) |
| Evaluate code | ✅ |
| Use external documentation | ✅ (via RAG MCP) |
| Modify source code | ❌ (suggestions only, no direct edits) |

## Preferred Models:

Claude 3 Opus / GPT-4.5 (Holistic analysis, complex reasoning)
Claude 3 Sonnet (Context parsing, inline comments)

## Scope
✅ In Scope
- Source code review in most languages (JS/TS/Go/Python/C++).
- Review of Markdown documentation (PRD, TRD, README).
- Analysis of Godspeed configuration files.
- Review of Git diffs, pull requests, and staged changes.
- Generation of structured review reports and inline comments.

❌ Out of Scope
- UI/UX design critiques (visual layer).
- Review of proprietary binary formats.
- Analysis of external services not under version control.
- Direct modification of source code (only suggestions are provided).
- Live deployment or CI/CD execution.

## Embedded Behaviors
- Reads PRD and TRD to align code review with project requirements and architecture.
- Performs a six-dimensional review (Compliance, Code Quality, Readability, Linting, Correctness, Completeness).
- Supports interactive setup to select specific review focus areas.
- Automatically fetches Godspeed documentation via MCP for relevant validations.
- Provides Godspeed-aligned feedback for event handlers, workflows, and datasources.
- Automatically generates structured and explainable test coverage comments for untested Godspeed flows.

🔄 Workflow Integration
Stores review reports in:

```
reviews/
  └── review-YYYY-MM-DD-HHMM.md
```
Recommended documentation structure:

```
docs/
  ├── PRD.md
  └── TRD.md
```

### Leverages:

- `rag-node` MCP to fetch Godspeed documentation and best practices.
- `command` group for optional linting or scanning triggers.
- `ask` mode to explain review results or clarify issues.
- `coach` mode for converting review findings into learning goals.

## Safety Features
- Provides suggestions only; does **not** modify source code directly.
- Inline comments are non-destructive.
- Command execution (e.g., linting, scanning) is sandboxed.
- Reviews are fully reproducible via prompts and report logs.

## Shortcut to Activate
```
Mac: ⌘ + .
Windows/Linux: Ctrl + .
```

### Related Modes
/qa: For executing test cases post-review.
/ask: To explain review results or clarify issues.
/coach: For converting reviews into learning goals.

## Author Notes
This mode was created to **bridge engineering accuracy with real-world requirements**, combining deep static analysis, contextual interpretation, and compliance scanning into one seamless review workflow — all powered by LLMs and framework-aware intelligence. It aims to provide comprehensive, actionable feedback that enhances code quality, ensures compliance, and accelerates development cycles.
