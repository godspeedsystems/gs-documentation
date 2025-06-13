---
sidebar_label: .saarthiignore
---

# Using .saarthiignore to Control File Access

The `.saarthiignore` file is a key feature for managing Saarthi's interaction with your project files. It allows you to specify files and directories that Saarthi should not access or modify, similar to how `.gitignore` works for Git.

## What is `.saarthiignore`?

*   **Purpose**: To protect sensitive information, prevent accidental changes to build artifacts or large assets, and generally define Saarthi's operational scope within your workspace.
*   **How to Use**: Create a file named `.saarthiignore` in the root directory of your VS Code workspace. List patterns in this file to tell Saarthi which files and directories to ignore.
*   **Scope**: `.saarthiignore` affects both Saarthi's tools and context mentions (like `@directory` attachments).

Saarthi actively monitors the `.saarthiignore` file. Any changes you make are reloaded automatically, ensuring Saarthi always uses the most current rules. The `.saarthiignore` file itself is always implicitly ignored, so Saarthi cannot change its own access rules.

## Pattern Syntax

The syntax for `.saarthiignore` is identical to `.gitignore`. Here are common examples:

*   `node_modules/`: Ignores the entire `node_modules` directory.
*   `*.log`: Ignores all files ending in `.log`.
*   `config/secrets.json`: Ignores a specific file.
*   `!important.log`: An exception; Saarthi will *not* ignore this specific file, even if a broader pattern like `*.log` exists.
*   `build/`: Ignores the `build` directory.
*   `docs/**/*.md`: Ignores all Markdown files in the `docs` directory and its subdirectories.

For a comprehensive guide on syntax, refer to the [official Git documentation on .gitignore](https://git-scm.com/docs/gitignore).

## How Saarthi Tools Interact with `.saarthiignore`

`.saarthiignore` rules are enforced across various Saarthi tools:

### Strict Enforcement (Reads & Writes)

These tools directly check `.saarthiignore` before any file operation. If a file is ignored, the operation is blocked:

*   [`read_file`](/advanced-usage/available-tools/read-file): Will not read ignored files.
*   [`write_to_file`](/advanced-usage/available-tools/write-to-file): Will not write to or create new ignored files.
*   [`apply_diff`](/advanced-usage/available-tools/apply-diff): Will not apply diffs to ignored files.
*   [`insert_content`](/advanced-usage/available-tools/insert-content): Will not write to ignored files.
*   [`search_and_replace`](/advanced-usage/available-tools/search-and-replace): Will not search and replace within ignored files.
*   [`list_code_definition_names`](/advanced-usage/available-tools/list-code-definition-names): Will not parse ignored files for code symbols.

### File Discovery and Listing

*   **[`list_files`](/advanced-usage/available-tools/list-files) Tool & `@directory` Attachments**: When Saarthi lists files or when you use `@directory` attachments, ignored files are omitted or marked with a 🔒 symbol (see "User Experience" below). Both use identical filtering logic.
*   **Environment Details**: Information about your workspace (like open tabs and project structure) provided to Saarthi is filtered to exclude or mark ignored items.

### Context Mentions

*   **`@directory` Attachments**: Directory contents respect `.saarthiignore` patterns. Ignored files are filtered out or marked with `[🔒]` prefix depending on the `showRooIgnoredFiles` setting.
*   **Single File Mentions**: Ignored files return "(File is ignored by .saarthiignore)" instead of content.

### Command Execution

*   **[`execute_command`](/advanced-usage/available-tools/execute-command) Tool**: This tool checks if a command (from a predefined list like `cat` or `grep`) targets an ignored file. If so, execution is blocked.

## Key Limitations and Scope

*   **Workspace-Centric**: `.saarthiignore` rules apply **only to files and directories within the current VS Code workspace root**. Files outside this scope are not affected.
*   **[`execute_command`](/advanced-usage/available-tools/execute-command) Specificity**: Protection for `execute_command` is limited to a predefined list of file-reading commands. Custom scripts or uncommon utilities might not be caught.
*   **Not a Full Sandbox**: `.saarthiignore` is a powerful tool for controlling Saarthi's file access via its tools, but it does not create a system-level sandbox.

## User Experience and Notifications

*   **Visual Cue (🔒)**: In file listings and `@directory` attachments, files ignored by `.saarthiignore` may be marked with a lock symbol (🔒), depending on the `showRooIgnoredFiles` setting (defaults to `true`).
*   **Ignore Messages**: Single file mentions return "(File is ignored by .saarthiignore)" instead of content.
*   **Error Messages**: If a tool operation is blocked, Saarthi receives an error: `"Access to [file_path] is blocked by the .saarthiignore file settings. You must try to continue in the task without using this file, or ask the user to update the .saarthiignore file."`
*   **Chat Notifications**: You will typically see a notification in the Saarthi chat interface when an action is blocked due to `.saarthiignore`.

This guide helps you understand the `.saarthiignore` feature, its capabilities, and its current limitations, so you can effectively manage Saarthi's interaction with your codebase.
