---
id: get-started
title: Getting Started
description: A comprehensive guide to install the Godspeed CLI, creating your first project(aka service), running the development server, accessing Swagger UI, and testing a basic API.
keywords: [Godspeed, Param, installation, setup, project (service) creation, CLI, running project (service) locally, Swagger UI, API testing, helloworld, guide, tutorial]
slug: /get-started
---

This guide provides a step-by-step guide to install and get started with Param Meta-Framework. It covers the prerequisites and installation process, both manual and using easy installation scripts. You will learn how to create your first project in Param framework and run the development server.

<!-- 
### Watch this One-Click Installation Guide

<div style={{ position: 'relative', paddingBottom: '50.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '100%', height: '80%' }} src="https://www.youtube.com/embed/xb0fgMmFywc?si=EhuxwGAXJSSmOUCX" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div> -->

## Install Godspeed CLI         

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
  

  **2. Install Godspeed CLI globally:**

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

### 1. "Running scripts is disabled on this system"

      * **Solution:** Run PowerShell as Administrator and execute:
        ```powershell
        Set-ExecutionPolicy RemoteSigned
        ```

### 2.  "Port Already in Use"
      * **Error:**
        ```
        Error: Port 3000 is already in use
        ```
      * **Solution:** Stop any other services using port `3000`, or modify the port in `src/eventsources/http.yaml`.
### 3. "godspeed: command not found"

If you successfully ran the install script but still see
`godspeed: command not found` or similar errors, follow these steps:

    **1. Verify Installation Location**
    The script installs Godspeed under your home directory (default: `~/.godspeed` or `/usr/local/bin`).
    Run:
    ```bash
    ls ~/.godspeed
    ```
    or
    ```bash
    which godspeed
    ```
    If you don’t see `godspeed` in the output, installation might not have completed. Re-run the script.

    **2. Add Godspeed to Your PATH**

    Depending on your shell/OS, you may need to manually add Godspeed’s binary directory to the PATH.
    Mac/Linux
    Add this line to your shell config (`~/.bashrc`, `~/.zshrc`, or `~/.profile`):
    ```bash
    export PATH="$HOME/.godspeed/bin:$PATH"
    ```

    Then reload your shell:
    ```bash
    source ~/.bashrc   # or source ~/.zshrc
    ```

    **Windows (PowerShell)**

    Check if Godspeed is installed in:
    ```
    C:\Users\<YourUser>\.godspeed\bin
    ```
    If yes, add it to your PATH:

    1. Open **System Properties → Advanced → Environment Variables**.
    2. Under "User variables" or "System variables," edit **Path**.
    3. Add:
      ```
      C:\Users\<YourUser>\.godspeed\bin
      ```
    4. Restart PowerShell.
    ---

    **3. Confirm PATH Update**

    Run:

    ```bash
    echo $PATH    (Mac/Linux)
    ```
    
    or

    ```powershell
    echo $env:Path   (Windows)
    ```
  ---
    You should see the Godspeed directory listed.

    **4. Re-Open Your Terminal**
    Sometimes changes only take effect after restarting the shell or opening a new terminal window.
  

### Additional Resources

  * **Godspeed CLI Help:**
    To see a list of available Godspeed commands, use:
    ```bash
    godspeed --help
    ```
  Refer to [the full CLI spec](/docs/microservices-framework/cli/godspeed-cli.md) for more detailed information, including [how to add plugins for eventsources and datasources](/docs/microservices-framework/cli/godspeed-cli#plugin-add-to-install-godspeed-plugin)





