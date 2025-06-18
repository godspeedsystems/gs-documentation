import Codicon from '@site/src/components/Codicon';

# Custom Instructions

Custom Instructions allow you to personalize how Saarthi behaves, providing specific guidance that shapes responses, coding style, and decision-making processes.

:::info Instruction File Locations
You can provide custom instructions using dedicated files or directories within your workspace. This allows for better organization and version control.

**Workspace-Wide Instructions:** Apply to all modes in the project.
*   **Preferred Method: Directory (`.saarthi/rules/`)**
    ```
    .
    ├── .saarthi/
    │   └── rules/          # Workspace-wide rules
    │       ├── 01-general.md
    │       └── 02-coding-style.txt
    └── ... (other project files)
    ```
*   **Fallback Method: Single File (`.saarthirules`)**
    ```
    .
    ├── .saarthirules           # Workspace-wide rules (single file)
    └── ... (other project files)
    ```

**Mode-Specific Instructions:** Apply only to a specific mode (e.g., `code`).
*   **Preferred Method: Directory (`.saarthi/rules-{modeSlug}/`)**
    ```
    .
    ├── .saarthi/
    │   └── rules-code/     # Rules for "code" mode
    │       ├── 01-js-style.md
    │       └── 02-ts-style.md
    └── ... (other project files)
    ```
*   **Fallback Method: Single File (`.saarthirules-{modeSlug}`)**
    ```
    .
    ├── .saarthirules-code      # Rules for "code" mode (single file)
    └── ... (other project files)
    ```
The directory methods take precedence if they exist and contain files. See [Workspace-Level Instructions](#workspace-level-instructions) and [Mode-Specific Instructions](#mode-specific-instructions) for details.
:::

## What Are Custom Instructions?

Custom Instructions define specific behaviors, preferences, and constraints beyond Saarthi's basic role definition. Examples include coding style, documentation standards, testing requirements, and workflow guidelines.

## Setting Custom Instructions

### Global Custom Instructions

These instructions apply across all workspaces and maintain your preferences regardless of which project you're working on.

**How to set them:**

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Saarthi top menu bar
2.  **Find Section:** Find the "Custom Instructions for All Modes" section
3.  **Enter Instructions:** Enter your instructions in the text area
4.  **Save Changes:** Click "Done" to save your changes

### Workspace-Level Instructions

These instructions only apply within your current workspace, allowing you to customize Saarthi's behavior for specific projects.

#### Workspace-Wide Instructions via Files/Directories

Workspace-wide instructions apply to all modes within the current project and can be defined using files:

*   **Preferred Method: Directory-Based (`.saarthi/rules/`)**
    *   Create a directory named `.saarthi/rules/` in your workspace root.
    *   Place instruction files (e.g., `.md`, `.txt`) inside. Saarthi reads files recursively, appending their content to the system prompt in **alphabetical order** based on filename.
    *   This method takes precedence if the directory exists and contains files.
*   **Fallback Method: File-Based (`.saarthirules`)**
    *   If `.saarthi/rules/` doesn't exist or is empty, Saarthi looks for a single `.saarthirules` file in the workspace root.
    *   If found, its content is loaded.

#### Mode-Specific Instructions

Mode-specific instructions can be set in two independent ways that can be used simultaneously:

1.  **Using the Prompts Tab:**

![Saarthi Prompts tab showing mode-specific custom instructions interface](/img/custom-instructions/custom-instructions-2.png)
    * **Open Tab:** Click the <Codicon name="notebook" /> icon in the Saarthi top menu bar
    * **Select Mode:** Under the Modes heading, click the button for the mode you want to customize
    * **Enter Instructions:** Enter your instructions in the text area under "Mode-specific Custom Instructions (optional)"
    * **Save Changes:** Click "Done" to save your changes

        :::info Global Mode Rules
        If the mode itself is global (not workspace-specific), any custom instructions you set for it will also apply globally for that mode across all workspaces.
        :::

2.  **Using Rule Files/Directories:** Provide mode-specific instructions via files:
    *   **Preferred Method: Directory-Based (`.saarthi/rules-{modeSlug}/`)**
        *   Create a directory named `.saarthi/rules-{modeSlug}/` (e.g., `.saarthi/rules-docs-writer/`) in your workspace root.
        *   Place instruction files inside (recursive loading). Files are read and appended to the system prompt in **alphabetical order** by filename.
        *   This method takes precedence over the fallback file method for the specific mode if the directory exists and contains files.
    *   **Fallback Method: File-Based (`.saarthirules-{modeSlug}`)**
        *   If `.saarthi/rules-{modeSlug}/` doesn't exist or is empty, Saarthi looks for a single `.saarthirules-{modeSlug}` file (e.g., `.saarthirules-code`) in the workspace root.
        *   If found, its content is loaded for that mode.

Instructions from the Prompts tab, the mode-specific directory/file, and the workspace-wide directory/file are all combined. See the section below for the exact order.

## How Instructions are Combined

Instructions are placed in the system prompt in this exact format:

```
====
USER'S CUSTOM INSTRUCTIONS

The following additional instructions are provided by the user, and should be followed to the best of your ability without interfering with the TOOL USE guidelines.

[Language Preference (if set)]

[Global Instructions (from Prompts Tab)]

[Mode-specific Instructions (from Prompts Tab for the current mode)]

Mode-Specific Instructions (from Files/Directories):
[Contents of files in .saarthi/rules-{modeSlug}/ (if directory exists and is not empty)]
[Contents of .saarthirules-{modeSlug} file (if .saarthi/rules-{modeSlug}/ does not exist or is empty, and file exists)]

Workspace-Wide Instructions (from Files/Directories):
[Contents of files in .saarthi/rules/ (if directory exists and is not empty)]
[Contents of .saarthirules file (if .saarthi/rules/ does not exist or is empty, and file exists)]

====
```

*Note: The exact order ensures that more specific instructions (mode-level) appear before more general ones (workspace-wide), and directory-based rules take precedence over file-based fallbacks within each level.*

## Rules about .rules files

* **File Location:** The preferred method uses directories within `.saarthi/` (`.saarthi/rules/` and `.saarthi/rules-{modeSlug}/`). The fallback method uses single files (`.saarthirules` and `.saarthirules-{modeSlug}`) located directly in the workspace root.
* **Empty Files:** Empty or missing rule files are silently skipped
* **Source Headers:** Each rule file's contents are included with a header indicating its source
* **Rule Interaction:** Mode-specific rules complement global rules rather than replacing them

## Examples of Custom Instructions

* "Always use spaces for indentation, with a width of 4 spaces"
* "Use camelCase for variable names"
* "Write unit tests for all new functions"
* "Explain your reasoning before providing code"
* "Focus on code readability and maintainability"
* "Prioritize using the most common library in the community"
* "When adding new features to websites, ensure they are responsive and accessible"

:::tip Pro Tip: File-Based Team Standards
When working in team environments, using the `.saarthi/rules/` directory structure (and potentially `.saarthi/rules-{modeSlug}/` directories for specific modes) under version control is the recommended way to standardize Saarthi's behavior across your team. This allows for better organization of multiple instruction files and ensures consistent code style, documentation practices, and development workflows. The older `.saarthirules` file method can still be used but offers less flexibility.
:::

## Combining with Custom Modes

For advanced customization, combine with [Custom Modes](custom-modes) to create specialized environments with specific tool access, file restrictions, and tailored instructions.
