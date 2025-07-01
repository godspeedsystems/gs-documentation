---
title: OpenAPI Code Generator
description: A code generator to scaffold Redux Toolkit API slices from OpenAPI/Swagger spec files, supporting filtered or full endpoint output for flexible frontend integration.
---

# gs-codegen-openapi

## What is `gs-codegen-openapi`?

`gs-codegen-openapi` is a command-line tool that converts your OpenAPI/Swagger spec into usable API slice code powered by **Redux Toolkit Query (RTK Query)**.

It saves time by:

- Generating code automatically based on your schema
- Organizing endpoints by file or feature
- Producing clean, ready-to-use React hooks for your frontend

---

## Installation

You don’t need to install anything globally.

You can run the tool with either a **JSON config file** or inline input:

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --input-json ./config.json
```

or

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --input-json '{"schema-file": "./api.json", "output-folder": "./store", ...}'
```

You can also use a simple CLI version:

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --schema-file ./api.json --output-folder ./store --output-file api.ts
```

---

## CLI Options

You must provide your input via `--input-json`, either inline or from a file.
Below are the accepted options:

### Required

| Flag            | Type   | Description                                              |
| --------------- | ------ | -------------------------------------------------------- |
| `schema-file`   | string | Path to your OpenAPI/Swagger schema JSON file            |
| `output-folder` | string | Destination folder where generated files will be saved   |
| `output-file`   | string | _(OR)_ Single file to write all generated endpoints into |
| `output-files`  | object | _(OR)_ File map with endpoint arrays per output file     |

> **Note:** You must provide either `output-file` or `output-files` — not both.

---

### Optional Flags

| Flag                  | Type    | Default | Description                                         |
| --------------------- | ------- | ------- | --------------------------------------------------- |
| `tag`                 | boolean | `true`  | Group endpoints by OpenAPI tag                      |
| `encode-path-params`  | boolean | `true`  | Automatically encode route parameters (e.g., `:id`) |
| `encode-query-params` | boolean | `true`  | Automatically encode query params                   |
| `flatten-arg`         | boolean | `false` | Collapse endpoint arguments into flat structures    |

---

## Examples

### Generate a single file with all endpoints

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi \
  --schema-file ./swagger.json \
  --output-folder ./src/store \
  --output-file api.ts
```

### Generate multiple files filtered by endpoint name

```bash
npx @godspeedsystems/gs-tool gs-codegen-openapi --input-json '{
  "schema-file": "./swagger.json",
  "output-folder": "./src/store",
  "output-files": {
    "user.ts": ["fetchUser", "updateUser"],
    "booking.ts": ["createBooking", "fetchBooking"]
  }
}'
```

---

## Output Format

This tool outputs an array of file paths for the generated API files:

```json
["./src/store/user.ts", "./src/store/booking.ts"]
```

Each file will contain fully-typed RTK Query hooks like:

```ts
export const useFetchUserQuery = ...
export const useUpdateUserMutation = ...
```

---

## Output Example

If you use `output-files`:

```
src/store/
├── user.ts      ← contains fetchUser, updateUser
├── booking.ts   ← contains createBooking, fetchBooking
```

If you use `output-file`:

```
src/store/
└── api.ts       ← contains all endpoints
```

---

## What This Tool Does

- Converts OpenAPI schemas to fully usable RTK API slices
- Lets you split or combine endpoints into different files
- Filters endpoints using operation names
- Outputs clean, readable, and typed API code
- Configurable for different behaviors via optional flags

---

## What It Does NOT Do

- Does not validate your OpenAPI spec (must be correct JSON)
- Does not run or call real APIs — only generates code
- Does not manage backend or server communication

---

## Validation & Error Handling

- Throws an error if any `operationId` is duplicated
- Throws an error if any `operationId` contains whitespace
- Ensures either `output-file` or `output-files` is provided
- Logs detailed information about what’s generated

---

Need help ? Visit [GitHub → godspeedsystems](https://github.com/godspeedsystems)
