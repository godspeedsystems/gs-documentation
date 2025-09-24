# Workflows

Workflows in Saarthi are **sequences of actions** defined to automate common development and deployment tasks. They are customizable and bring consistency, guardrails, and speed to your engineering process — from setting up a Godspeed project to deploying on cloud, generating UIs, creating test strategies, or even drafting technical documents.  

Just **select a workflow from the panel and hit Enter** — Saarthi automates the rest.  


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/sKkJd94l_MU?si=SnNo4NYQLfooVSCa" frameborder="0" allowfullscreen></iframe>
</div>


## How to Use
1. Open Saarthi in your project environment.  
2. From the **Workflow Tab**, select the desired workflow.  
3. Provide inputs (if prompted).  
4. Saarthi executes all required steps automatically.  

---

## Available Workflows

### 1. Create Godspeed Project

**Description**
Creates a new Godspeed project with the provided name and offers optional next steps such as installing plugins or setting up a Prisma schema for datastore integration.

**Process**

1. Select the **Create Godspeed Project** workflow in Saarthi.
2. Enter a project name when prompted.
3. Choose whether to install plugins.
4. Choose whether to set up a Prisma schema.
5. Saarthi scaffolds the project with the standard Godspeed structure and optional configurations.

---

### 2. Godspeed DB Sync & CRUD Generation

**Description**
Validates the Prisma schema, prepares database synchronization, and generates CRUD APIs for defined models automatically.

**Requirements**

* A valid database connection string
* Verify your database server is running and accessible

**Process**

1. Validates if `schema.prisma` exists in the project.
2. Sets up `.env` with database URL if not already configured.
3. Runs `godspeed prisma prepare` to sync schema with the database.
4. Executes `godspeed gen-crud-api` to generate CRUD APIs for all models.

---

### 3. Generate Dockerfile

**Description**
Creates or optimizes a `Dockerfile` for your Godspeed project, ensuring containerization best practices are applied.

**Requirements**

* Docker installed and running on your machine

**Process**

1. Detects if the current project is a Godspeed service.
2. Suggests optimizations for an existing Dockerfile (if present).
3. Creates a `.dockerignore` file if missing.
4. Generates or updates a `Dockerfile` with best practices.
5. Provides a preview/diff before applying changes.

---

### 4. Setup Project on Docker Locally

**Description**
Guides you through setting up and running your Godspeed project in Docker locally.

**Requirements**

* Docker installed and running
* Valid Godspeed project directory
* Docker Compose (optional, for multi-container setups)

**Before You Use**

* Ensure Docker is installed (`docker --version`) and daemon is running
* Verify project compiles locally before containerizing
* Make sure required ports are available (e.g., 3000, 5432)
* Clean up unused containers/images to avoid conflicts

**Process**

1. Checks Docker installation and environment.
2. Validates the project structure.
3. Runs `docker-compose up --build` or guides manual setup.
4. Helps troubleshoot common container issues (port conflicts, missing envs).

---

### 5. GitHub Issue to PR with Review

**Description**
Converts a GitHub issue into a pull request with automated code review.

**Requirements**

* GitHub Personal Access Token
* Repository write access
* Git installed and configured locally
* Repo cloned locally and accessible to Saarthi

**Process**

1. Sets up github MCP server, if not already there.
2. Fetches issue details.
3. Creates a feature branch.
4. Implements changes.
5. Performs automated code review.
6. Opens a PR linked to the issue.

---

### 6. Implement Authentication in Godspeed

**Description**
Sets up authentication in your Godspeed microservice using supported auth methods.

**Process**

1. Adds auth configuration in Godspeed project.
2. Integrates chosen method (OAuth, JWT, or API Key).
3. Updates routes to include auth checks.

---

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


### 9. Download and Run Docker Container

**Description**
Pulls a Docker image and runs a container with custom configuration.

**Process**

1. Confirm Docker is installed and daemon is active
2. Prepare environment variables (`.env` or inline)
3. Pulls the specified Docker image (e.g., `postgres:latest`).
4. Configures ports and env vars.
5. Starts container.
6. Validates container is running.


### 10. Godspeed Coaching

**Description**
Provides an interactive learning experience for mastering the Godspeed framework.

**Process**

1. Assesses current skill level (beginner, intermediate, advanced)
2. Generates a tailored learning path.
3. Assigns hands-on exercises.
4. Tracks and reviews progress.

---

### 11. Implement Feature from PRD

**Description:**
Implements features step-by-step based on the Product Requirement Document (PRD).

**Process:**

1. Provide PRD path or summary.
2. Saarthi parses requirements into feature milestones.
3. Generates tasks for each milestone (UI, APIs, integrations).
4. Executes via orchestrator with approval checkpoints.

---

### 12. Create/Update Test Strategy

**Description:**
Creates or updates a comprehensive test strategy including scope, metrics, and environments.

**Process:**

1. Provide project PRD/TRD or repo path.
2. Saarthi drafts test strategy document.
3. User reviews suggested test scope and environments.
4. Updated strategy stored with versioning in `.saarthi/`.

---

### 13. Generate Test Cases

**Description:**
Generates detailed test cases (steps, expected results, traceability) from requirements.

**Process:**

1. Provide PRD/TRD or test strategy path.
2. Saarthi maps requirements to features.
3. Expands each into step-by-step test cases.
4. Exports cases in structured format (YAML/JSON/CSV).

---

### 14. Update Test Cases in Strategy

**Description:**
Maintains test documentation with version control, impact analysis, and traceability.

**Process:**

1. Load existing test strategy.
2. Detect updated/added requirements.
3. Generate or modify affected test cases.
4. Update test strategy with version history.

---

### 15. Deploy to Render

**Description:**
Deploys applications directly to the Render cloud platform.

**Process:**

1. Provide Render API key & app config.
2. Saarthi builds deployable artifact.
3. Pushes app to Render environment.
4. Confirms deployment status + logs.

---

### 16. Progress Review

**Description:**
Reviews code, tests, and documentation against defined quality metrics.

**Process:**

1. Point Saarthi to repo/project path.
2. Scans codebase for coverage, standards, and docs.
3. Generates quality score with insights.
4. Outputs improvement suggestions.

---

### 17. Create Docker Image

**Description:**
Builds Docker images from Dockerfiles for containerized deployment.

**Process:**

1. Provide Dockerfile path.
2. Saarthi validates Dockerfile best practices.
3. Builds Docker image locally or in CI.
4. Outputs image tag and push instructions.

---

### 18. Sprint Plan to Git Issues

**Description:**
Converts sprint planning items into actionable GitHub issues.

**Process:**

1. Provide sprint backlog (document or Jira export).
2. Saarthi extracts user stories & tasks.
3. Maps tasks into GitHub issues with labels.
4. Auto-creates issues in repo via GitHub API.

---

### 19. Generate High-Level TRD

**Description:**
Generates a Technical Requirements Document (TRD) with architecture diagrams.

**Process:**

1. Provide PRD or system description.
2. Saarthi analyzes features → identifies architecture needs.
3. Drafts TRD with modules, APIs, integrations.
4. Embeds diagrams (system context, sequence, components).

---

### 20. Generate Coding Guidelines

**Description:**
Creates coding standards with best practices, security, and compliance guidelines.

**Process:**

1. Select tech stack (e.g., Node, React, Python).
2. Saarthi generates language/framework guidelines.
3. Includes formatting, testing, security practices.
4. Saves guidelines in repo for team reference.

---

### 21. Learning Roadmap

**Description:**
Builds a personalized learning roadmap with exercises, resources, and progress tracking.

**Process:**

1. Provide target role or skill area.
2. Saarthi drafts skill breakdown into learning modules.
3. Assigns resources (docs, tutorials, exercises).
4. Tracks progress in roadmap file.

---

### 22. Assign Exercises

**Description:**
Assigns predefined or custom exercises with tracking.

**Process:**

1. Select skill area or upload custom exercise.
2. Saarthi maps it to roadmap modules.
3. Assigns to user/team with deadlines.
4. Tracks completion status.

---

### 23. Feedback-Driven Learning Path

**Description:**
Refines the learning experience using feedback, adjusting pace and content.

**Process:**

1. Collect feedback from learners.
2. Saarthi evaluates progress vs. goals.
3. Adjusts learning roadmap modules and timelines.
4. Updates exercises/resources accordingly.

---
<!-- 
## Troubleshooting
- **Authentication Failures** → Check API keys and permissions  
- **Docker Issues** → Verify Docker daemon status and port availability  
- **Workflow Failures** → Check logs, validate inputs, ensure dependencies are installed  
 -->
