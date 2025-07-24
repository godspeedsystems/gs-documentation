# Code Review Mode

A comprehensive AI-powered reviewer that performs multi-dimensional analysis of your codebase — including quality, compliance, completeness, and alignment with project documentation like PRD and TRD — with first-class support for Godspeed projects.

## Mode Name

**Code Review**

## Overview

The Code Review mode performs an **in-depth, context-aware review** across six critical dimensions: **Compliance, Code Quality, Readability, Linting, Correctness, and Completeness**. It goes beyond syntax checks to ensure the code aligns with architectural expectations and regulatory requirements using project-level documents like the PRD and TRD.

---

## Primary Use Cases

* Perform a full audit of project code
* Ensure feature completeness and spec alignment
* Detect compliance or security gaps (e.g., GDPR, logging policies)
* Validate readability and documentation quality
* Provide inline comments and a structured Markdown review report
* Apply framework-specific best practices for Godspeed

---
### 📄 Example Prompts

```plaintext

"Review this Godspeed project for correctness and completeness"
"Check this PR for compliance issues"
"Evaluate if this function matches the spec in the TRD"
"Run a full review excluding node_modules and .env"

```

## Model Behavior & Tool Access

| Capability           | Status                          |
| -------------------- | ------------------------------- |
| Read project files   | ✅                               |
| Write review reports | ✅ (`.md` + inline comments)     |
| Execute commands     | ✅ (via command group)           |
| Use Godspeed docs    | ✅ (via RAG MCP)                 |
| Modify source code   | ❌ (suggestions only, not edits) |

**Preferred Models:**

* Claude 3 Opus / GPT-4.5 for holistic analysis
* Claude 3 Sonnet for context parsing and inline comments

---

## 🚦 File Permissions

| Path         | Access                                            |
| ------------ | ------------------------------------------------- |
| `src/`       | ✅ Read-only                                       |
| `docs/`      | ✅ Read (`PRD.md`, `TRD.md`)                       |
| `reviews/`   | ✅ Write (`review-{date}.md`)                      |
| Project root | ✅ Read `.gitignore`, ignore config                |
| Commands     | ✅ Safe shell access (optional lint/scan triggers) |

---

## Scope of Review

### ✅ In Scope

* Source code in most languages (JS/TS/Go/Python/C++)
* Markdown docs: PRD, TRD, README
* Godspeed configuration files
* Git diffs, pull requests, and staged changes

### ❌ Out of Scope

* UI Design critiques (visual layer)
* Proprietary binary formats
* External services outside version control

---

## Embedded Behaviors

* Reads PRD and TRD to align with requirements and architecture
* Performs six-dimensional review:

  * **Compliance:** Checks for policy violations (e.g., GDPR, logging)
  * **Code Quality:** Reviews maintainability, structure, design
  * **Readability:** Assesses naming, comments, and logical flow
  * **Linting:** Checks formatting against coding guides
  * **Correctness:** Looks for logic bugs and edge cases
  * **Completeness:** Matches features against requirements in PRD/TRD
* Supports interactive setup to select review focus areas
* Auto-fetches Godspeed documentation via MCP for relevant validations

---

## 🔄 Workflow Integration

* Recommended directory structure:

  ```
  docs/
    ├── PRD.md
    └── TRD.md
  reviews/
    └── review-YYYY-MM-DD-HHMM.md
  ```
* Can initiate review with:

  ```
  /code-review
  > "Review this project"
  ```

---

## Review Formats

### Inline Comments

```ts
// SAARTHI-COMPL-001: HIGH | COMPLIANCE
// ISSUE: User data stored without encryption
// POLICY: GDPR - Article 32 (Security of processing)
// FIX: Encrypt data at rest using AES-256
```

### Structured Report

`reviews/review-YYYY-MM-DD-HHMM.md`
Sections include:

1. **Executive Summary**
2. **Findings by Severity**
3. **Compliance Matrix**
4. **Recommendations**
5. **Citations & Context Sources**

---

## 🛠 Configuration & Customization

* **docs/PRD.md**

  * Vision, features, success metrics, out-of-scope features
* **docs/TRD.md**

  * Architecture, tech stack, security, API design
* **`.reviewignore`**

  * List folders/files to exclude (e.g., `node_modules/`, `*.log`)

> The depth of review increases with richer PRD and TRD context.

---

## 🧪 Special Features

* Uses **MCP + RAG** to fetch Godspeed documentation
* Provides Godspeed-aligned feedback for event handlers, workflows, datasources
* Automatically generates structured and explainable test coverage comments for untested Godspeed flows
* Suggests improvements inline + via long-form report

---

## 🔐 Safety Features

* Suggestions only; does **not** modify source code
* Inline comments are non-destructive
* Command execution (linting/scanning) is sandboxed
* Reviews are fully reproducible via prompts + report log

---

## ⌨️ Shortcut to Activate

```
Mac: ⌘ + .  
Windows/Linux: Ctrl + .
```

---

## 📎 Related Modes

* `/qa`: For executing test cases post-review
* `/ask`: To explain review results or clarify issues
* `/coach`: For converting reviews into learning goals

---

## Troubleshooting & Tips

* **LLM Overflow:** On large projects, switch to models with bigger context windows.
* **API Rate Limits:** Pause and retry when hitting LLM provider quota.
* **Chat vs File Output:** If review is shown inline, prompt: “store the review in a file.”
* **Duplicate Warnings:** Restart session if feedback becomes repetitive.

---

## Author Notes

This mode was created to **bridge engineering accuracy with real-world requirements**, combining deep static analysis, contextual interpretation, and compliance scanning into one seamless review workflow — all powered by LLMs and framework-aware intelligence.


