# QA
Saarthi provides an AI-powered Quality Assurance (QA) assistant to help you automate and streamline testing in your project.

## Mode Name
🔍 QA Lead Engineer

## Overview

It acts as your single point of contact and internally coordinates with other specialized QA agents to complete your requests. As a user, you will only interact with the **QA Lead Engineer** mode.

You don't need to worry about how it works behind the scenes — just tell the QA Lead Engineer what you need, and it will handle the rest.

---

## Who You're Talking To

**`qa-lead-engineer`** is your AI QA partner. 
It can:

* Set up the testing environment for your project.
* Write test files (unit, functional, or integration).
* Generate detailed test reports.
* Batch-generate multiple test files for entire projects.

You’ll never need to talk to or even know how `qa-document-writer` and `qa-coder` work. Everything is orchestrated for you.

---

## Getting Started

You can begin the conversation by simply saying "Hello". Once you start the conversation with the QA Lead Engineer, you’ll be asked:

> "What task do you want me to do?"

You’ll be shown these options:

* ✅ **Setup Testing Environment**
* 🧪 **Write a Test File**
* 📄 **Generate Test Report**
* 🔁 **Write Multiple Test Files**

You can either select one from this list or describe your task directly — the agent will automatically understand what to do.

---

## Task Reference Guide

### 1. Setup Testing Environment

Use this when:

* You're testing a new project.
* Your project lacks proper test scaffolding.

**What the QA Lead Engineer will do:**

* Detect the framework (Godspeed, Express etc.).
* Create the necessary test files and configuration.
* Fetch and parse your Swagger spec for routes.
* Set up integration test stubs based on your PRD (Product Requirement Document). **(Note that integration tests cannot be written without PRD.)**
* Ask you to update the `.env` file with testing DB values (this step is **critical** to avoid affecting production).
* Generate or update the `qa-context.json` file with metadata.

**Your input required:**

* Replace `.env` with testing database URLs.
* Provide the PRD (and optionally TRD) when asked.

Once done, you'll be informed:

> “Testing setup is complete.”

---

### 2. Write a Test File

Use this to generate a test for a **single function, route, or feature**.

**Steps:**

1. QA Lead will ask whether you want to write a:

   * **unit**, **functional**, or **integration** test
2. You’ll be asked for the **name of the function/route/feature**.
3. The QA Lead will handle the rest:

   * Create a detailed test strategy.
   * Write the actual test file.
   * Update `qa-context.json` to mark progress.

Once finished, you’ll be informed:

> “The test file for your function/route/feature has been created and the task is completed.”

---

### 3. Generate Test Report

Use this when you want a **test coverage and status report**.

**Steps:**

1. QA Lead will ask if you want:

   * **unit**, **functional**, or **integration** test report
2. It will run the appropriate test suite with coverage enabled.
3. A comprehensive markdown report will be created containing:

   * Timestamp
   * Git branch and commit
   * Test coverage
   * PRD/TRD availability
   * Test-by-test breakdown (✅ Passed, ❌ Failed)

Reports will be saved in:

```
docs/test/<type>/reports/YYYY-MM-DD-HHMM.md
```

---

### 4. Write Multiple Test Files

Use this when you want to **generate tests in bulk**.

**How it works:**

* QA Lead will look into your `qa-context.json` file.
* It will find all routes/features in the `not_started` list for the test type you choose.
* For each:

  * It will write a test strategy.
  * Write the actual test file.
  * Mark it as `completed`.

Once all tests are written, you’ll see:

> “All test files from the `not_started` list for \<test\_type> tests have been written and the task is completed.”

---

## Notes & Warnings

* **Changing the `.env` file is mandatory** during setup. If you skip this, tests may affect production data.
* **PRD is required** for integration tests. If you don’t have one, you can still do functional/unit testing.
* You do not need to manually interact with `qa-document-writer` or `qa-coder`. Everything is automated.

---

## Best Practices

* Always start with **“Setup Testing Environment”** before writing tests.
* Keep your **PRD and TRD** ready in the `docs/` directory.
* Use **“Write Multiple Test Files”** when setting up tests for large codebases.
* Re-run **“Generate Test Report”** regularly to track QA coverage.

---

## Example Commands

You can interact casually, like:

* “Set up the testing environment for my project.”
* “Write a functional test for `/api/users`.”
* “Generate integration test report.”
* “Create tests for all functional routes.”


---

### QA Lead Engineer

| Aspect          | Details                                   |
| ----------------|------------------------------------------------------------------ |
| **Name**        | `QA Lead Engineer`                                                |
| **Description** | The QA Lead Engineer AI agent assists with QA-related tasks by following provided instructions for each task. This is the primary mode for all QA activities.      |
| **Tool Access** | `read`, `edit`, `browser`, `command`, `mcp`, `modes`                                                                                                              |
| **Ideal For**   | Initiating and managing all QA tasks, such as setting up testing environments and writing test files.                                                               |
| **Special Features** | Orchestrates the QA workflow by delegating tasks to the QA Document Writer and QA Coder modes.                                                              |

---

### QA Document Writer

| Aspect          | Details                                   |
| ----------------|------------------------------------------------------------------ |
| **Name**        | `QA Document Writer`                               |
| **Description** | The QA Document Writer AI agent is responsible for generating comprehensive and actionable test strategy documents for specific functions, as assigned by the QA Lead Engineer. |
| **Tool Access** | `read`, `edit`, `browser`, `command`, `mcp`, `modes`                                                                                                              |
| **Ideal For**   | Creating detailed unit and functional test strategy documents.                                                                                                    |
| **Special Features** | Follows strict templates and logic to create standardized test strategies. Activated by the QA Lead Engineer.                                                 |

---

### QA Coder

| Aspect          | Details                                   |
| ----------------|------------------------------------------------------------------ |
| **Name**        | `QA Coder`                                     |
| **Description** | The QA Coder AI agent is responsible for generating high-quality, maintainable test files for specific functions, based on the test strategy provided by the QA Document Writer. |
| **Tool Access** | `read`, `edit`, `browser`, `command`, `mcp`, `modes`                                                                                                              |
| **Ideal For**   | Writing unit and functional test files based on a provided strategy.                                                                                              |
| **Special Features** | Implements test cases, handles mocking, and validates test execution. Activated by the QA Lead Engineer.                                                      |