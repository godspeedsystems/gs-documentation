# Data Sources
## Overview

Data sources play a central role in the Godspeed Framework, serving as the origins or locations from which data can be collected and stored. This documentation provides an overview of data sources within the framework, their usage, and how to invoke them from within workflow tasks.

In the Godspeed Framework, data sources are fundamental components that enable users to access and manipulate data from various origins. Examples of data sources include databases,message bus, cache, file systems, and third-party APIs.

Data sources can be seamlessly integrated into your workflow tasks using a standardized syntax. The key element for invoking data sources is the fn attribute, which is namespaced under datasource. Here's an example of how data sources are used within a workflow task:

## Data source types

Data sources can be divided into two types, Datastore as datasource and API as a datasource


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704478971/Screenshot_from_2024-01-05_23-52-33_e8ihnh.png" alt="event types" />



```yaml
id: workflow_1
description: This workflow will fetch the user with userId from the mongo database
tasks:
  - id: task_1
    fn: datasource.mongo.User.findOne
    args:
      where:
        userId: <% inputs.params.userId %>
```

In this example:

`datasource.mongo.User.findOne` is the data source function, which can be described as below:

  - `datasource`: fixed namespace for all data sources
  - `mongo`: name of data source,this can be any data base that you select can checkout [database list](/docs/getting-started/advance-guide#prisma-supports-wide-range-of-databases)
  - `User`: entity name
  - `findOne`: method to be invoked in entity name


:::tip **Godspeed has a prisma as a datasource plugin as well, which means a uniformed access atleast for all prisma based datasources**
:::


To enable this seamless interaction with data sources, the Godspeed Framework allows you to configure data sources within your project. For instance, the example mentions the use of the "prisma-as-datastore" plugin to define the "mongo" data source. This configuration step ensures that the framework can establish connections and communicate effectively with the specified data source.

In the above example there is a `mongo` datasource defined in the project using [prisma-as-datastore](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore) plugin.