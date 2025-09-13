---
id: get-started
title: Getting Started with Godspeed
description: A comprehensive guide to install the Godspeed CLI, creating your first project(aka service), running the development server, accessing Swagger UI, and testing a basic API.
keywords: [Godspeed, Param, installation, setup, project (service) creation, CLI, running project (service) locally, Swagger UI, API testing, helloworld, guide, tutorial]
slug: /get-started
---

This guide provides a step-by-step guide to install and get started with Godspeed Meta-Framework. It covers the prerequisites and installation process, both manual and using easy installation scripts. You will learn how to create your first Godspeed project or service and run the development server.

<!-- 
### Watch this One-Click Installation Guide

<div style={{ position: 'relative', paddingBottom: '50.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '100%', height: '80%' }} src="https://www.youtube.com/embed/xb0fgMmFywc?si=EhuxwGAXJSSmOUCX" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div> -->

## Install Godspeed          

The following setup script installs all required prerequisites and Godspeed CLI automatically. This simplifies the onboarding process for new users by avoiding manual setup of individual dependencies.

### Installation Script

### Windows Users

Open Powershell as Administrator and run
```bash
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/zero8dotdev/install-godspeed-daemon/main/CompleteInstall.ps1" -OutFile "install.ps1"; Start-Process powershell -ArgumentList "-File .\install.ps1" -Verb RunAs
```

### Mac/Linux Users

```bash
curl -fsSL https://raw.githubusercontent.com/zero8dotdev/install-godspeed-daemon/main/CompleteInstall.sh | bash
```

### ✅ The above script will install:

| Component         | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| `nvm`             | Node Version Manager - helps switch between Node.js versions |
| `node`            | JavaScript runtime (installed via nvm)                       |
| `npm`             | Node package manager (comes with Node.js)                    |
| `pnpm`            | Efficient alternative to npm/yarn for managing dependencies  |
| `corepack`        | Node’s built-in tool for package manager handling            |
| `git`             | Version control system - required to clone repositories      |
| `godspeed` CLI    | Command-line interface to scaffold, run and manage services  |
---

## Manual Installation

  If you prefer manual setup, follow the steps below:

  **1. Ensure the Prerequisites are installed:**

  - nvm (Node Version Manager)
  - node.js (v18 or higher, installed via nvm)
  - git
  - corepack (comes with Node.js)
  - pnpm (can be enabled via corepack: corepack enable pnpm)
  

  **2. Install the Godspeed (Param framework) globally:**

  ```bash
  npm install -g @godspeedsystems/godspeed
  ```

## Verify Installation

Confirm successful installation:

```bash
godspeed --version
```

## Creating and Running Your First Project
Follow these steps to set up and launch your new Godspeed project:

1.  **Create a new project:**
    ```bash
    godspeed create my-project
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd my-project
    ```

3.  **Start the development server:**
    ```bash
    godspeed serve
    ```

### Accessing and Testing Your API with Swagger UI

Godspeed automatically generates interactive API documentation using Swagger UI.

1.  **Access Swagger UI:**
    The Swagger UI is typically available at:
    ```plaintext
        http://<BASE_URL>:<PORT>/<http_docs_endpoint>`
    ```
    By default, this is:
    ```plaintext
    http://localhost:3000/api-docs
    ```

    If you need to customize the default port (`3000`) or the Swagger endpoint (`/api-docs`), you can modify the `./src/eventsources/http.yaml` file.

2.  **Test the `/helloworld` API:**

      * In the Swagger UI, locate the `/helloworld` endpoint.
      * Click the **`Try it out`** button.
      * You will be prompted to fill in a `name` parameter. Enter a name (e.g., "John") and send the request.
      * The server will return the following response:
        ```
        Hello `John`
        ```
### Troubleshooting Common Issues

Here are solutions to some common issues you might encounter:

1.  **"Running scripts is disabled on this system"**

      * **Solution:** Run PowerShell as Administrator and execute:
        ```powershell
        Set-ExecutionPolicy RemoteSigned
        ```

2.  **"Port Already in Use"**
      * **Error:**
        ```
        Error: Port 3000 is already in use
        ```
      * **Solution:** Stop any other services using port `3000`, or modify the port in `src/eventsources/http.yaml`.

### Additional Resources

  * **Godspeed CLI Help:**
    To see a list of available Godspeed commands, use:

    ```bash
    godspeed --help
    ```

    Refer to [the full CLI spec](/docs/microservices-framework/CLI.md) for more detailed information, including [how to add plugins for eventsources and datasources](/docs/microservices-framework/CLI#plugin-add-to-install-godspeed-plugin)





