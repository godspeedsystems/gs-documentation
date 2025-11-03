---
title: gs-codegen-openapi
---

# gs-codegen-openapi

A code generator to scaffold Redux Toolkit API slices from OpenAPI/Swagger spec files, supporting filtered or full endpoint output for flexible frontend integration.

---

## Installation

You can run the tool using `npx`:

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --input-json ./config.json
```

---

## Description

`gs-codegen-openapi` is a CLI utility designed to generate Redux Toolkit API slices (RTK Query) from an OpenAPI (Swagger) schema file. It supports generating either a single output file with all endpoints or multiple files filtered by `operationId`.

This tool helps frontend developers quickly scaffold RTK Query hooks aligned with backend APIs, making integration seamless, consistent, and automated.

---

## What this tool does

### 🛠 Feature: RTK API Hook Generator from OpenAPI

- **Generates** Redux Toolkit API consumers from your OpenAPI spec.
- **Supports** full output or selective endpoint filtering via `operationId`.
- **Accepts** CLI arguments via a single JSON config file or inline JSON.
- **Supports** optional behaviors like tag grouping, parameter encoding, and argument flattening.

### Example CLI Usage

**With a config file:**

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --input-json ./config.json
```

**With inline JSON:**

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --input-json '{
  "schema-file": "./docs/godspeed-app-swagger.json",
  "output-folder": "./src/store",
  "output-file": "project.ts"
}'
```

**Single file output (all endpoints):**

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --schema-file ./docs/godspeed-app-swagger.json --output-folder ./src/store --output-file project.ts
```

### Output Example

### ⚙ Input Parameters (via `--input-json`)

```json
{
    "schema-file": "./docs/godspeed-app-swagger.json",
    "output-folder": "./src/store",
    "output-file": "project.ts",
    "tag": true,
    "encode-path-params": true,
    "encode-query-params": true,
    "flatten-arg": true
}
```

### Validation & Error Handling

- Fails if any `operationId` is **not unique**.
- Fails if any `operationId` contains **whitespace**.
- Logs detailed file paths and endpoint mapping.
