---
sidebar_position: 3
title: Introduction to Godspeed CLI
---

# Godspeed CLI
The CLI is the primary way to interact with your Godspeed project from the command line. It provides a bunch of useful functionalities during the project development lifecycle.

## 4.1 Functionality
### Outside the dev container
- Creating a new project environment with dev container setup, which includes the folder structure, all the databases, message bus, cache, etc.
- Open up an existing project in the dev container, add/update a container in the dev environment, based on updated settings.
- List the versions of gs_service.
- Change the version of gs_service.

### Inside the dev container
- All Prisma commands including DB push, pull or migration.
- OAS 3 documentation file generation.
- Test suite/Postman collection generation.
- Running test suite.

## 4.2 Installation
```sh
npm install -g @mindgrep/godspeed
```

Once Godspeed CLI is installed, the `godspeed` command can be called from command line. When called without arguments, it displays its help and command usage.

```
$ godspeed
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed [options] [command]

Options:
  -v, --version                   output the version number
  -h, --help                      display help for command

Commands:
  create [options] <projectName>
  versions                        List all the available versions of gs_service
  prepare                         prepare the containers, before launch or after cleaning the containers
  version <version>
  help [command]                  display help for command
```

## 4.3 Options

### --version (-v)
The --version option outputs information about your current godspeed version.

```
$ godspeed -v
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
0.0.26
```

### --help (-h)
The --help option displays help and command usage.

```
$ godspeed
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed [options] [command]

Options:
  -v, --version                   output the version number
  -h, --help                      display help for command

Commands:
  create [options] <projectName>
  versions                        List all the available versions of gs_service
  prepare                         prepare the containers, before launch or after cleaning the containers
  version <version>
  help [command]                  display help for command
```

## 4.4 Commands: Outside the dev container

### create
The create command creates project structure for any microservice. When called without arguments, it creates project structure with examples.
```
$ godspeed create my_service
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
projectDir:  /home/gurjot/cli-test/my_service projectTemplateDir undefined
project created
Do you need mongodb? [y/n] [default: n] n
Do you need postgresdb? [y/n] [default: n] y
Please enter name of the postgres database [default: test] 
Do you need kafka? [y/n] [default: n] n
Do you need elastisearch? [y/n] [default: n] n
Please enter host port on which you want to run your service [default: 3000] 3100
Fetching release version information...
Please select release version of gs_service from the available list:
latest
1.0.0
1.0.1
1.0.10
1.0.11
1.0.12
1.0.13
1.0.2
1.0.3
1.0.4
1.0.5
1.0.6
1.0.7
1.0.8
1.0.9
base
dev
v1.0.13
Enter your version [default: latest] 1.0.13
Selected version 1.0.13
. . . . . . . . 
```

#### Options
```
$ godspeed help create
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed create [options] <projectName>

Options:
  -n, --noexamples                      create blank project without examples
  -d, --directory <existing_project_directory>  existing project template dir
  -h, --help                            display help for command
```

### update
The update can be executed in the following cases:
1. If you want to launch an existing project (i.e. copied from local/cloned from repo) instead of creating a new one, then execute `godspeed update` command before launching the project.
2. If you want to reloads the containers with updated project settings. For example, if you have not selected any database during the project creation and you want to include any database in the project later on, then execute `godspeed update` with the required settings.
3. If there is any change in gs_service image of standard tags (e.g. latest, stable) and you want to fetch the latest code for the same tag, then execute `godspeed update`command. It fetches the new docker image itself.

> Please note that the command should be executed from inside the project root directory.

:::note
Whenever you update your project using `godspeed update` and open the project in VScode dev container after update, then it is mandatory to do [`godspeed build`](#build) inside dev container for the first time.
:::

```
$ godspeed update
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Do you need postgresdb? [y/n] [default: n] 
Do you need kafka? [y/n] [default: n] 
Do you need elastisearch? [y/n] [default: n] 
Please enter host port on which you want to run your service [default: 3000] 
Fetching release version information...
Please select release version of gs_service from the available list:
latest
1.0.0
1.0.1
1.0.2
1.0.3
1.0.4
dev
stable
Enter your version [default: latest] 
Selected version latest
Removing dev_test_devcontainer_node_1                ... 
. . . . . . . . . .
Step 1/9 : FROM adminmindgrep/gs_service:latest
latest: Pulling from adminmindgrep/gs_service
824b15f81d65: Already exists
325d38bcb229: Already exists
d6d638bf61bf: Already exists
55daac95cedf: Already exists
4c701498752d: Already exists
a48b0ae49665: Pulling fs layer
4c393fb6deac: Pulling fs layer
4f4fb700ef54: Pulling fs layer
8992963a9530: Pulling fs layer
4f4fb700ef54: Verifying Checksum
4f4fb700ef54: Download complete
4c393fb6deac: Verifying Checksum
4c393fb6deac: Download complete
8992963a9530: Verifying Checksum
8992963a9530: Download complete
a48b0ae49665: Verifying Checksum
a48b0ae49665: Download complete
a48b0ae49665: Pull complete
4c393fb6deac: Pull complete
4f4fb700ef54: Pull complete
8992963a9530: Pull complete
Digest: sha256:7195b3c921f1278153c911e6e77cbcfb385a84c435bfcb7b8272ffcf9a3278ee
Status: Downloaded newer image for adminmindgrep/gs_service:latest
 ---> 988917710d1a
Step 2/9 : ARG USERNAME=node
 ---> Running in c70404bb4f3e
Removing intermediate container c70404bb4f3e
 ---> 47a7406b2473
Step 3/9 : ARG USER_UID=1000
 ---> Running in 51e68336d8d8
Removing intermediate container 51e68336d8d8
 ---> ce913f6898bb
Step 4/9 : ARG USER_GID=$USER_UID
 ---> Running in 7cf1c1f2a3ec
Removing intermediate container 7cf1c1f2a3ec
 ---> 91f045b32e0f
Step 5/9 : USER root
 ---> Running in f338d755a032
Removing intermediate container f338d755a032
 ---> fa9898eb4c23
Step 6/9 : RUN sudo groupmod --gid $USER_GID $USERNAME     && usermod --uid $USER_UID --gid $USER_GID $USERNAME     && chown -R $USER_UID:$USER_GID /workspace/development
 ---> Running in eba3659fb919
Removing intermediate container eba3659fb919
 ---> 414f34560b0d
Step 7/9 : USER node
 ---> Running in 23818c5f4882
Removing intermediate container 23818c5f4882
 ---> 1bd65323ae91
Step 8/9 : RUN sudo npm i -g @mindgrep/godspeed
 ---> Running in a66cb062390d
. . . . . . . . . .
 godspeed update dev_test is done.
```

### versions
The versions command lists all the versions available of gs_service.
```
$ godspeed versions
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
latest
1.0.0
1.0.1
1.0.10
1.0.11
1.0.12
1.0.13
1.0.2
1.0.3
1.0.4
1.0.5
1.0.6
1.0.7
1.0.8
1.0.9
base
dev
v1.0.13
```

### version
The version command helps to change the version of gs_service for any microservice. Execute the command from inside the project root directory.
```
$ godspeed version 1.0.13
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Generating prisma modules
Starting test1_devcontainer_postgres_1 ... 
Starting test1_devcontainer_postgres_1 ... done
Creating test1_devcontainer_node_run   ... 
Creating test1_devcontainer_node_run   ... done
Environment variables loaded from .env
. . . . . . . . . .
```


### help
The help command displays help and usage for any command.
```
$ godspeed help create
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed create [options] <projectName>

Options:
  -n, --noexamples                      create blank project without examples
  -d, --directory <projectTemplateDir>  local project template dir
  -h, --help                            display help for command
```

## 4.5 Commands: Inside the dev container

### prisma
You can run all the prisma commands in your project root directory inside the dev container. This command is useful for db migration and introspection. [Read more here](https://www.prisma.io/docs/concepts/components/prisma-cli). 
```
$ godspeed prisma <prisma command with args>
```

### build
You can build the complete project using this command. It is the first command which you need to run whenever you open your project in VScode Dev container. Refer [Open in Dev container](../microservices/setup/getting-started.md/#step-5-open-in-dev-container)
```
godspeed build
```

### dev
You can run your project using dev command.
```
godspeed serve
```

### gen-api-docs
You can get OAS 3 documentation generated automatically by executing this command in your project root directory inside the dev container.
```
$ godspeed gen-api-docs
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          

> proj_upd@1.0.0 gen-api-docs
> node ../gs_service/dist/api-specs/api-spec.js | pino-pretty

[1657529346164] INFO (GS-logger/7684 on 4c20ee3c4c38): Loading events from /workspace/development/app/src/events
[1657529346190] DEBUG (GS-logger/7684 on 4c20ee3c4c38): parsing files: /workspace/development/app/src/events/call_another_workflow.yaml,/workspace/development/app/src/events/create_user_then_show_all.yaml,/workspace/development/app/src/events/cross_db_join.yaml,/workspace/development/app/src/events/document.yaml,/workspace/development/app/src/events/helloworld.yaml,/workspace/development/app/src/events/httpbin_anything_coffee.yaml,/workspace/development/app/src/events/httpbin_anything.yaml,/workspace/development/app/src/events/run_tasks_in_parallel.yaml,/workspace/development/app/src/events/sum.yaml,/workspace/development/app/src/events/switch_case.yaml
[1657529346289] INFO (GS-logger/7684 on 4c20ee3c4c38): /workspace/development/app/docs/api-doc.yaml file is saved!
```
### Postman collection
step1: After executing $ godspeed gen-api-docs
go to docs under app and right click on api-doc.yaml file and download it

step2: In postman import the downloaded file in collection(collection->import->files->*select-file.yaml*-> import ) and test your api


### gen-test-suite
You can get test suite/postman collection generated automatically by executing this command in your project root directory inside the dev container. Now, you can import the collection in postman directly.
```
 godspeed gen-test-suite
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          

> proj_upd@1.0.0 gen-test-suite
> npm run gen-api-docs && mkdir -p tests && openapi2postmanv2 -s docs/api-doc.yaml -o tests/test-suite.json -p -O folderStrategy=Tags,includeAuthInfoInExample=false


> proj_upd@1.0.0 gen-api-docs
> node ../gs_service/dist/api-specs/api-spec.js | pino-pretty

[1657529443249] INFO (GS-logger/8145 on 4c20ee3c4c38): Loading events from /workspace/development/app/src/events
[1657529443273] DEBUG (GS-logger/8145 on 4c20ee3c4c38): parsing files: /workspace/development/app/src/events/call_another_workflow.yaml,/workspace/development/app/src/events/create_user_then_show_all.yaml,/workspace/development/app/src/events/cross_db_join.yaml,/workspace/development/app/src/events/document.yaml,/workspace/development/app/src/events/helloworld.yaml,/workspace/development/app/src/events/httpbin_anything_coffee.yaml,/workspace/development/app/src/events/httpbin_anything.yaml,/workspace/development/app/src/events/run_tasks_in_parallel.yaml,/workspace/development/app/src/events/sum.yaml,/workspace/development/app/src/events/switch_case.yaml
[1657529443374] INFO (GS-logger/8145 on 4c20ee3c4c38): /workspace/development/app/docs/api-doc.yaml file is saved!
Input file:  /workspace/development/app/docs/api-doc.yaml
Writing to file:  true /workspace/development/app/tests/test-suite.json { result: true, output: [ { type: 'collection', data: [Object] } ] }
Conversion successful, collection written to file
```

### gen-crud-api
You can get CRUD API generated automatically for datastores and elasticgraph datasources by executing this command in your project root directory inside the dev container.
```
$ godspeed gen-crud-api
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          

> eg_test@1.0.0 gen-crud-api
> npx godspeed-crud-api-generator

Select datasource / schema to generate CRUD APIs
(x) elasticgraph.yaml
( ) For all
( ) Cancel
```

### test
You can run the test suite generated in above command from the following two ways:
1. Postman: Import the collection in postman and run the test suite.
2. CLI: You can use below command to run the test suite from CLI.

> Please make sure your service is up and running before running the test suite.

```
 godspeed test
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          

> proj_upd@1.0.0 test
> newman run tests/test-suite.json

newman

Godspeed: Sample Microservice

→ Call another (sub) workflow from main workflow
  POST http://localhost:3000/another_workflow?bank_id=<string> [200 OK, 630B, 2.6s]
. . . . . . . . 
```

### help
The help command displays help and usage for any command. [Click here to know more](#help)

## 4.6 Generating Elasticgraph model from prisma schema 
### generate-elasticgraph-model

**You can convert the prisma schema to elasticgraph model by executing this commmand in your project root directory inside the dev container.**

```
$ godspeed generate-elasticgraph-model
                      _                                   _ 
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|                          
Usage: godspeed generate-elasticgraph-model [egClientName]
Enter the input path  : 
Enter the output path :

Elasticgraph model generated
```

:::note
- [egClientName] (optional): Specifies the name of the Elasticgraph client to be generated. If not provided, the default name `eg-model` will be used.
- If the specified input path does not exist, the CLI will display an error message.
- If the specified output path does not exist, the folder will be generated with [egClientName].
:::

