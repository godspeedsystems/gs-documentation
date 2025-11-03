---
title: gs-nodegen-figma
---

# Generate UI components from Figma.

`gs-nodegen-figma` is a CLI command within the **Godspeed toolchain** that converts **Figma design data** into structured **YAML schemas and assets**. It simplifies complex Figma node structures into developer-friendly formats that can power automated UI generation, schema-driven tooling, or documentation workflows.

---

## Installation

You can run the tool directly using **npx** without installation:

```bash
npx @godspeedsystems/gs-tool gs-nodegen-figma --figma-url <file-url> --figma-api <personal-access-token>
```

For app-level extraction:

```bash
npx @godspeedsystems/gs-tool gs-nodegen-figma --figma-url <file-url> --figma-api <token> --file-type app
```

---

## Description

The `gs-nodegen-figma` command connects to the **Figma Node API** to fetch your design schema and refine it into a set of structured YAML files.
Depending on the selected mode (`page` or `app`), it organizes data into hierarchical folders (`pages → components`) under `.saarthi/nodegen-figma/`.

Each schema file captures the structural metadata of the design nodes, while the tool also downloads **visual image assets** for reference.
This allows developers and tools in the Godspeed ecosystem to **consume design data programmatically** without parsing raw Figma JSON.

---

## Features

- **Fetch and transform Figma designs** into clean, structured YAML schemas.
- **Organized folder structure** — splits designs by pages and components.
- **Automatic image asset extraction** for apps, pages, and components.
- **Supports both `page` and `app` modes** for flexible output generation.
- **Works with both public and private Figma files** (PAT required).
- **Graceful error handling** for invalid tokens, network issues, or malformed data.

---

## Command Options

| Option        | Description                                       | Required | Example                                      |
| ------------- | ------------------------------------------------- | -------- | -------------------------------------------- |
| `--figma-url` | URL of the Figma design file to extract.          | ✅       | `--figma-url https://www.figma.com/file/...` |
| `--figma-api` | Personal Access Token (PAT) for Figma API access. | ✅       | `--figma-api <your-token>`                   |
| `--file-type` | Extraction type: `"page"` (default) or `"app"`.   | ❌       | `--file-type app`                            |

---

## What This Tool Does

- Fetches schema data from the Figma Node API.
- Simplifies and refines raw Figma node data.
- Generates:
    - `.saarthi/nodegen-figma/app.yml` (root structure).
    - One folder per page (`[page-node-id]/`) containing:
        - `page.yml` — schema for the page.
        - `[component-node-id].yml` — schema for each component.

- Downloads corresponding image assets into `.saarthi/nodegen-figma/images/`.

---

## What This Tool Does NOT Do

- Does not generate React or UI components directly.
- Does not include a UI editor or visualization dashboard.
- Does not validate design adherence to frontend best practices.
- Does not support authentication methods other than **Personal Access Token (PAT)**.

---

## Usage Examples

### Page-Level Extraction (Default)

```bash
npx @godspeedsystems/gs-tool gs-nodegen-figma \
  --figma-url https://www.figma.com/file/xyz \
  --figma-api your-pat-token
```

### App-Level Extraction

```bash
npx @godspeedsystems/gs-tool gs-nodegen-figma \
  --figma-url https://www.figma.com/file/xyz \
  --figma-api your-pat-token \
  --file-type app
```

### Invalid Token Handling

```bash
npx @godspeedsystems/gs-tool gs-nodegen-figma \
  --figma-url https://www.figma.com/file/xyz \
  --figma-api wrong-token
```

👉 The command will return an error message and fail gracefully.

---

## Output Structure

```
.saarthi/
└── nodegen-figma/
    ├── app.yml
    ├── <page-node-id>/
    │   ├── page.yml
    │   ├── <component-node-id>.yml
    └── images/
        ├── app.png
        ├── <page-node-id>.png
        ├── <component-node-id>.png
```

---

## Special Considerations

- PAT is **mandatory** for all files (public or private).
- API quota limits may affect very large design files.
- The tool overwrites contents inside `.saarthi/nodegen-figma/` on each run.
- Assumes a valid and well-structured Figma document.

