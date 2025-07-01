---
title: GS Tool (Godspeed CLI Runner)
description: description
---

## What is GS Tool?

[gs-tool](https://www.npmjs.com/package/@godspeedsystems/gs-tool) is a single CLI entry point to a suite of powerful developer tools from Godspeed.  
You don’t need to install multiple tools individually — just run them using their name.

Think of it as a launcher:  
You tell it what tool you want, and it takes care of the rest — input validation, running the logic, and giving you clean output.

---

## Installation

No global install required.

You can use `npx` or `pnpx` to run any tool directly:

```bash
npx @godspeedsystems/gs-tool <tool-name> [options]
```

Example:

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name my-project --framework react --template default
```

---

## Features

- Run any tool by its name
- Automatically checks your inputs for mistakes
- Gives clean and predictable output
- Installs any required dependencies if needed
- No setup or configuration required

---

## Examples

### Run a Tool

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name my-project --framework react --template default
```

This will:

- generate a new React project
- install all dependencies

---

### List All Available Tools

```bash
npx @godspeedsystems/gs-tool list
```

This shows you a list of all the tools you can run.

```bash
npx @godspeedsystems/gs-tool list --info
```

This shows you a list of all the tools in detail.

---

### Get Info About a Tool

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --info
```

Returns information about:

- What the tool does
- Which options it accepts
- output format

---

### Pass Input as JSON (inline)

```bash
npx @godspeedsystems/gs-tool gs-ui-init --input-json '{"name": "my-project"}'
```

---

### Pass Input from a File

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --input-json ./input.json
```

---

## Tool Output Format

All tools return a consistent output:

```json
{
  "success": true,
  "code": 200,
  "data": { ... }, // tool-specific result
  "message": "Output generated successfully"
}
```

If something goes wrong, it looks like:

```json
{
  "success": false,
  "code": 400,
  "error": {
    "message": "Invalid input"
  },
  "message": "Output generated successfully"
}
```

Have a tool idea or request? Submit it via [GitHub](https://github.com/godspeedsystems).
