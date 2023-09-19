---
sidebar_position: 3
title: 3.1 Getting started
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Getting started
Hereby is a step by step guide on running your first project. The setup is independent of the OS you are running it on.

:::info
You can also refer to tutorial on [Getting Started with Godspeed](https://www.youtube.com/watch?v=eEfqTAPAVlY).
:::

### 3.1.1 Glossary
**gs_service**: The framework code version. During this setup, you will be asked to select the version of gs_service.
**Remote containers/Dev containers**: Refer [VSCode Remote containers](https://code.visualstudio.com/docs/remote/containers) for more information.

### 3.1.2 Pre-requisites

Please ensure you have the following in your machine
- NVM, with Node LTS installed (Currently 16+)
- Visual Studio Code LTS, with the following plugins installed:
  1. `Remote Containers`
  2. `Run on Save` Refer [Run On Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave)
  3. `Godspeed Extension Pack`
- Docker-desktop should be up and running.
  > On Linux systems, please ensure that docker compose plugin is installed. You can verify it by executing `docker compose version` command. Refer [Install Compose plugin](https://docs.docker.com/compose/install/linux/) for more information.
- Git

** Hardware recommendations **
RAM: 8GB
Hard Disk: SSD

:::tip

- Depending your setup, you may need to run the above command using administrator privileges
- On Windows machines, sometimes Docker-desktop doesn't start. Make sure you have WSL installed with Ubuntu 18.04, for Docker to work fine.

:::

### 3.1.3 Steps to get started
#### Step1: Install the Godspeed CLI

```sh
npm install -g @mindgrep/godspeed
```

#### Step 2: Setting up a project on your local machine
:::note
- If you are creating a new project then follow [section 2.1](#21-create-a-new-project)
OR
- If you are setting up a project from any existing git repository then follow [section 2.2](#22-setting-up-a-project-from-an-existing-git-repository)
:::

##### 2.1 Create a new project
```sh
godspeed create my_test_project
```
During the setup, you will be asked which datastores you need. Also whether you need Kafka. Say yes or no, depending on your requirements.

> By default, `latest` version is selected for gs_service. You should select either `latest` or any highest semantic version available in the list.

##### 2.2 Setting up a project from an existing GIT repository
Clone the git repository on your local machine.
```sh
cd <your git repo>
godspeed update
```
During the setup, you will be asked which datastores you need. Also whether you need Kafka. Say yes or no, depending on your requirements.

> By default, `latest` version is selected for gs_service. You should select either `latest` or any highest semantic version available in the list.

#### Step3: cd to your project
```sh
cd <your project directory>

```

#### Step4: Start Visual Studio from the project directory
```sh
code .

```

#### Step 5: Open in Dev container
- Again click on the dev container tray icon. If this is your first time, click on `Open folder in Dev Container` . Else for every other time, click on `Re-open in Dev Container`

#### Step 6: Building the project
```sh
  godspeed build
```

#### Step 7:
Godspeed framework relies on [Prisma ORM](https://www.prisma.io/) to interact with databases. And for Prisma to work there should be [prisma client](https://www.prisma.io/docs/concepts/components/prisma-client) should be generated. Sometimes `godspeed build` don't generate that, If that is the case, Client should be generated manually using below command.

> To verify if prisma client is generated od not, Look for `generated-client` folder in `src/datasources`. If it is not there. Run below command.

```sh
  godspeed prisma generate --schema=<path/to/prisma/schema>
```

> In order to sync your models to the db, run the command below

```sh
  godspeed prisma push --schema=<path/to/prisma/schema>
```

#### Step 8: Start the service for local development in watch mode

```sh
  godspeed dev
```

:::tip
You can use `godspeed gen-crud-api` to autogenerate CRUD apis for your prisma file.
:::

:::tip
With the dev container running, we have auto watch and auto build enabled when you make changes to your project files. You don't need to run build manually everytime you make changes.
:::

### 3.1.4 Time to start the development
If you have successfully reached here, then it is time to start the development of your project!
