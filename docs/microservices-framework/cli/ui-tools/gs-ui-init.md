---
title: gs-ui-init
---

# Initialize a UI workspace.


`gs-ui-init` is a CLI command within the **Godspeed toolchain** that scaffolds frontend UI projects using **Next.js** with standardized configurations. It eliminates repetitive setup steps, ensuring developers can start building immediately with a consistent and production-ready structure.

---

## Installation

You can use the command directly via **npx** without needing global installation:

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name project-name --framework next
```

To initialize the project in the **current directory** without creating a new folder:

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name project-name --framework next --skip-folder-creation
```

---

## Description

The `gs-ui-init` command scaffolds a **Next.js** project with batteries included—TypeScript, TailwindCSS, linting, and routing—so teams can focus on feature development instead of setup.

---

## Features

- **Instant project setup** with Next.js and pre-configured tools.
- **Consistent architecture** across all frontend projects in the Godspeed ecosystem.
- **`--skip-folder-creation` option** to initialize projects in the current directory.
- **Built-in validation** for project name and framework.
- **Safe scaffolding** — gracefully handles conflicts with existing files.

---

## Command Options

| Option                   | Description                                                          | Required | Example                  |
| ------------------------ | -------------------------------------------------------------------- | -------- | ------------------------ |
| `--name`                 | Name of the project to be created.                                   | ✅       | `--name my-ui`           |
| `--framework`            | Framework to use (currently only `next` supported).                  | ✅       | `--framework next`       |
| `--skip-folder-creation` | Scaffolds directly in the current directory instead of a new folder. | ❌       | `--skip-folder-creation` |

---

## What This Tool Does

- Scaffolds a **Next.js** frontend project with:
    - TypeScript
    - TailwindCSS
    - ESLint and Prettier
    - Routing setup

- Installs dependencies automatically (if environment permits).
- Provides uniform folder and file structure to streamline development.

---

## What This Tool Does NOT Do

- Does not scaffold backend or API services.
- Does not support other frameworks like Vue, Svelte, or Angular (yet).
- Does not overwrite existing files without explicit permission.

---

## Usage Examples

### Create a New Next.js UI Project

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name dashboard-ui --framework next
```

### Initialize in the Current Directory

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name dashboard-ui --framework next --skip-folder-creation
```

### Invalid Framework Example

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name dashboard-ui --framework vue
```
This will throw a validation error since only `next` is currently supported.

