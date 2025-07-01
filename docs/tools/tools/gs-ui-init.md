---
title: UI Project Scaffolder
description:
  gs-ui-init is a CLI tool in the Godspeed ecosystem used to scaffold frontend projects
  in React or Next.js. It automates the setup process with built-in support for
  TypeScript, TailwindCSS, linting, and routing. Depending on the chosen framework,
  it triggers either `create-react-router` or `create-next-app`.
---

# gs-ui-init

## What is `gs-ui-init`?

`gs-ui-init` is a command-line tool that lets you create a full-featured React or Next.js frontend project in seconds.

It’s designed for developers who want to:

- Skip the boilerplate
- Get started fast
- Standardize setups across teams
- Use modern tools like TypeScript, TailwindCSS, and routing — out of the box

---

## Installation

You don’t need to install anything globally. Just run:

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name my-app --framework react --template default
```

Replace:

- `my-app`: name of your project
- `react`: or `next`
- `default`: optional template type (currently only `default` is available)

---

## CLI Options

### `--name` (required)

The name of your new project. This will also be the folder name created on your system.

**Example:**

```bash
--name my-frontend-app
```

---

### `--framework` (required)

Choose which framework you want to use.

| Option  | Description                                |
| ------- | ------------------------------------------ |
| `react` | Create a React app (uses React Router)     |
| `next`  | Create a Next.js app with built-in routing |

---

### `--template` (required)

Defines the base template to use for the selected framework.

#### If `--framework react`, available templates are:

| Template        | Description                                  |
| --------------- | -------------------------------------------- |
| `default`       | Standard setup with TypeScript & TailwindCSS |
| `vercel`        | Optimized for Vercel deployments             |
| `netlify`       | Optimized for Netlify deployments            |
| `minimal`       | Barebones setup without extras               |
| `cloudflare`    | Cloudflare Pages-friendly setup              |
| `cloudflare-d1` | Includes Cloudflare D1 DB setup              |

#### If `--framework next`, only one template is available:

| Template   | Description                               |
| ---------- | ----------------------------------------- |
| `tailwind` | Next.js app with TailwindCSS + TypeScript |

> 💡 The `--template` value must match the selected framework.
> Invalid combinations will result in a validation error.

---

## Features

✅ Create React or Next.js projects  
✅ Built-in support for **TypeScript**, **TailwindCSS**, and **Routing**  
✅ Zero configuration required  
✅ Works with `npm` or `pnpm`

---

## How It Works

Depending on your selected framework:

- For `react`, it generates a React app with TypeScript, TailwindCSS, and React Router

- For `next`, it generates a Next.js app with TypeScript, TailwindCSS, linting, and routing

Once your project is scaffolded, the tool:

- Installs all dependencies

---

## Example Commands

### Create a React App

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name my-react-app --framework react --template default
```

### Create a Next.js App

```bash
npx @godspeedsystems/gs-tool gs-ui-init --name my-next-app --framework next --template tailwind
```

## Need Help?

Have feedback, feature requests, or issues?
Open a discussion or issue at [GitHub → godspeedsystems](https://github.com/godspeedsystems)
