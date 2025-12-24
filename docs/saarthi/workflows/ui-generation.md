---
sidebar_label: UI Generation
---
# UI Generation Workflows
### 7. Figma to UI Generation

**Description:**
Convert your Figma designs into responsive UI components and pages.

**Pre-requirements:**

* Figma file URL
* Figma Personal Access Token

**Process:**

1. **Select Workflow** – Choose `Figma to UI Generation` from workflows dropdown.
2. **Provide Figma Details** – Enter Figma URL + Access Token.
3. **Extract Components** – Saarthi generates component hierarchy with `gs-nodegen-figma`.
4. **Generate Scaffolding** – Creates project scaffolding + imports Godspeed UI components.
5. **Integrate APIs (optional)** – Provide Swagger spec → generates API slices with Redux.
6. **Run Strategy** – Orchestrator executes milestones → pages & components built step-by-step.

---

### 8. Prompt to UI Generation

**Description:**
Generate UI pages and components directly from a text prompt, if you don't have PRD, TRD, or Figma designs.
Saarthi automates **strategy creation, component scaffolding, API integration, and responsive UI development** — all inside your workspace.

**Requirements:**

* Prepare your PRD/TRD files simply give a text prompt.
* Project brief (you’ll be prompted for this if PRD/TRD are missing)
* If using API integration, have a **Swagger/OpenAPI spec JSON** ready.

**Process:**

1. **Provide Project Brief** – If no PRD/TRD found, Saarthi asks for a short description of the project.
2. **Scan Components** – Reads `components/gs-ui` and `components-list.txt` to detect available components.
3. **Finalize Components** – User helps confirm components and their variants.
4. **Generate Strategy** – Pages and components are mapped into milestones & steps.
5. **Run Strategy** – Orchestrator executes the plan, building responsive pages with integrated APIs (if provided).


