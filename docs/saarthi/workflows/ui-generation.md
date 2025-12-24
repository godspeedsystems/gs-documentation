---
sidebar_label: UI Generation
---

# 🎨 UI Generation Workflows

## Figma to UI Generation

**Description:**  
Convert Figma designs into responsive UI components and pages using a schema-first approach. 
This workflow prioritizes structure and fidelity by generating schemas before code.

**Prerequisites:**
- Figma file URL
- Figma Personal Access Token
- Optional: Swagger/OpenAPI spec JSON for API integration

**Process:**
1. **Input Collection** – User provides Figma URL, Token, and file type (App or Page).
2. **Schema Generation** – Saarthi uses `gs-nodegen-figma` tool to generate component schemas locally.
3. **Scaffolding** – Generates the project structure (or uses existing) via `gs-ui-init` tool.
4. **API Setup (Optional)** – If a Swagger spec is provided, generates API slices using `gs-codegen-openapi`tool and sets up the Redux store/provider.
5. **Component Implementation** – Iteratively reads schemas and Figma images to build responsive, atomic components and transfers necessary assets.
6. **Assembly & Routing** – Combines components into full web pages and configures application routing.
7. **Validation & Handoff** – Runs the development server and asks the user to confirm if the output meets requirements or if changes are needed before final delivery.

### 🔑 How to Get a Figma API Key

1. Go to **Figma → Settings → Security**.
2. Under **Personal Access Tokens**, click **Generate new token**.
3. Copy the generated token and store it securely.
4. Use this token when prompted by Saarthi or the CLI.

### 💡 Tips for Best Results
* **Organize Frames:** Keep components logically grouped and avoid deeply nested auto-layouts.
* **Clear Naming:** Use descriptive layer names in Figma to help with component identification.
* **Large Designs:** To generate large Figma files in one go, move to a paid Figma plan. On free or limited plans, prefer generating smaller pages or sections incrementally.

## ⚠️ Troubleshooting

<details>
<summary><strong>Windows CLI Argument Parsing</strong></summary>

When using the CLI on Windows (PowerShell), wrap option values for gs-tools in both single and double quotes to correctly escape special characters.

**Example:** `--url '"https://example.com/file?id=123"'`
</details>

<details>
<summary><strong>429 – Rate Limit Exceeded</strong></summary>

This indicates that your Figma API key has hit rate limits.

**Note:** Many Figma APIs used by this tool are **Tier-1 APIs** and are subject to the limits described in the [Figma rate-limit documentation](https://developers.figma.com/docs/rest-api/rate-limits/#rate-limits-tier-table).  
If you are on a limited or free plan, you may encounter frequent connection errors.

**Recommended actions:**
- Retry after some time.
- Use smaller design or page-level URLs.
- Move to a paid Figma plan for large or frequent exports.
</details>

<details>
<summary><strong>403 – Forbidden</strong></summary>

This means the token does not have access to the Figma file.

**Check the following:**
- Verify that the Figma account used to generate the token has access to the design.
- If you are on a paid plan, ensure the design is added to the correct paid team/workspace.
</details>

<details>
<summary><strong>500 Error or Timeout</strong></summary>

This can occur due to:
- Large or complex Figma designs
- API rate limits on free or limited plans
- Figma servers not responding in time

**Recommended actions:**
- Try generating smaller pages or sections instead of the full file.
- Retry later.
- Move to a paid Figma plan to reduce timeouts and API throttling.
</details>

---

## Prompt to UI Generation

**Description:**

Generate UI pages and components directly from text prompts or PRDs.
This workflow emphasizes predictability and reuse by leveraging the `gs-ui-kit` tool.

**Prerequisites:**
- A text prompt or PRD/TRD
- Project brief
- Optional: Swagger/OpenAPI spec JSON for API integration

**Process:**
1. **Scaffolding** – Sets up the UI project workspace via `gs-ui-init` tool.
2. **Requirement Gathering** – Captures project goals or parses the provided PRD.
3. **API Setup (Optional)** – Generates API slices via `gs-codegen-openapi` tool and wraps the app in a Redux provider.
4. **Strategy & Component Selection** – Analyzes requirements to create a `ui-details.md` plan, selecting necessary components and variants from `gs-ui-kit` tool.
5. **Build & Assemble** – Iteratively builds components (adapting from the kit or generating new ones) and assembles them into pages.
6. **Validation & Handoff** – Starts the development server, verifies navigation, and asks the user to confirm if the application is ready or requires refinement.


### 💡 Tips for Best Results
* **Be Explicit:** Clearly state the page purpose (e.g., "dashboard", "auth page") and specific behaviors.
* **Structure over Aesthetics:** Focus the prompt on layout and functionality first; refine styles later.
* **API Planning:** Identify which components need which endpoints early in the prompt.

---

## Image to UI Generation

**Description:**  

Generate UI pages and components directly from design images. 
This workflow balances creative freedom with guardrails using atomic design principles.

**Prerequisites:**
- One or more UI design images
- Page-level metadata (color palette, fonts, theme)
- Optional: Swagger/OpenAPI spec JSON

**Process:**
1. **Image Upload** – User provides design images for pages or sections.
2. **Scoping** – Define whether the image maps to a full page or a specific component.
3. **Scaffolding** – Sets up the UI project workspace.
4. **Metadata Capture** – User provides context (colors, fonts, themes).
5. **Generation** – Creates atomic components based on image analysis.
6. **Assembly** – Wires components into pages and connects optional APIs.
7. **Validation & Handoff** – Runs the application and asks the user to validate the visual fidelity and functionality before finishing.

### 💡 Tips for Best Results
 * **Use high-resolution images** – Clear contrast and crisp details lead to better code generation
 * **Provide actual asset files upfront** – Share logos, icons, illustrations, and image assets directly instead of relying on generated placeholders. This ensures visual accuracy and maintains brand consistency
 * **Define design tokens clearly** – Specify your color palette, typography, and spacing scale before generation
 * **Document theme details** – Be explicit about light/dark mode, shadows, borders, and other style properties
 * **Share design system guidelines** – If you have existing design standards, provide them to maintain consistency across generated components

 ---

## Choosing the Right Workflow

| Workflow       | Start With        | Best For                          |
|---------------|-------------------|----------------------------------|
| Figma → UI    | Figma designs     | Production-ready applications    |
| Prompt → UI   | Text / PRD        | Structured app bootstrapping     |
| Image → UI    | Design images     | Creative or non-standard designs |

---
