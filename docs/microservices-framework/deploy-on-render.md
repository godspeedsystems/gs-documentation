---
title: Deploying Godspeed Service on Render
description: A guide to deploying Godspeed applications on Render, covering project configuration, build commands, start commands, and Render dashboard setup.
keywords: [godspeed, render, deployment, cloud platform, node.js]
---
# Deploying Godspeed Service on Render

Render is a modern cloud platform that makes it easy to deploy and scale Godspeed applications. This guide will walk you through the steps to get your Godspeed project up and running on Render.

---

## Prerequisites

Before deploying, ensure you have:

- A working Godspeed project.
- `pnpm` configured as your package manager.
- The project built and running successfully locally (`godspeed serve`).
- A GitHub, GitLab, or Bitbucket repository with your Godspeed project code.

---

## Project Configuration on Render

When setting up your Render service:

### Root Directory

This helps Render locate the `dist` folder after build and correctly start your service.


Set the root directory to the base of your Godspeed project.

```plaintext
.
```
---

### Build Command

Render uses this command to install dependencies and build your Godspeed app:

```bash
pnpm install && pnpm run build
```

---

### Start Command

To run your app after build:

```bash
node dist/index.js
```

This starts the compiled Node.js service.

---

## Set Up on Render Dashboard

1. **Go to [Render.com](https://render.com) and log in.**
2. **Click "New Web Service".**
3. **Connect your repository** that contains the Godspeed project.
4. **Configure your service:**
   - **Environment:** `Node`
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `node dist/index.js`
   - **Root Directory:** `.`
   - **Branch:** Choose your deployment branch (e.g., `main`)
5. **Add Environment Variables** (from your `.env` or config):
   - Example: `DATABASE_URL`, `PORT`, `NODE_ENV`, etc.
6. **Click "Create Web Service"** and Render will start the build and deployment process.

---

## Tips

- Ensure `dist/` is generated in your local build with `pnpm run build`.
- Logs and deploy history are accessible from Render’s dashboard.
- Enable auto-deploy for continuous integration from your Git repo.
- Configure domains, HTTPS, and scaling from the settings.
