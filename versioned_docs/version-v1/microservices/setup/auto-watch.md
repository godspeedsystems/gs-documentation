---
sidebar_position: 7
title: 3.5 Auto watch and build
---

# Auto watch and build
The framework provides auto watch/build feature to detect the changes in you project files. This feature is only applicable when you are working inside dev container.
:::note
Please make sure VS code 'Run On Save' plugin is installed in your dev container environment.
:::
Here is the list of files which are being watched inside the dev container.

```
src/**/*.yaml|yml|js|json
src/**/*.ts
src/**/*.prisma
src/**/*.toml
```

** *.prisma files**
These files are being watched for [Datastore as datasources](../datasources/datastore.md)

> During any datastore setup via Prisma in the dev container, you don't need to setup anything explicitily, the watch feature automatically takes care of setting up the datastores. Refer [Prisma Datastore Setup](../datasources/datastore.md/#733-prisma-datastore-setup) for more information.

** *.toml files**
These files are being watched for configuration files of [Elasticgraph as datasource](../datasources/elasticgraph/elasticgraph.md/#753-configuration-files-of-elasticgraph). If there is any change in *.toml file then auto watch reindexes all the elasticgraph datasources configuration inside `src/datasources/eg_config/` directory.
