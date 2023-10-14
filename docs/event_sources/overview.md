---
title: Event Sources
---
# Overview

  Event sources in Godspeed framework captures event and allows you to define entry or trigger points of application. Like `express` type, event source will allow you to expose your application through REST API or a `cron` type event source to schedule a recurring call to a workflow. To know the design principles of the Event source, refer [this](design_priciples#three-fundamental-abstractions).

  **Here kafka works as datasource and an eventsource. To have look at the configuration, events and workflows, Checkout [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource)**


## Types of Event Sources
  1. Event Source
    - It can act only as an event source
    - has its own client initilization
    - Eg,. express
  2. DataSource As an Event Source
    - it can act as event source as well as data source
    - shares the client with the corresponding data source
    - eg., kafka, rabbitMQ

## How to use an event source in Godspeed project?

  You can use Godspeed CLI to browse and install plugins which are published and maintained by Godspeed.
```bash
    godspeed plugin add
```

  ```bash
   
     ,_,   ╔════════════════════════════════════╗
    (o,o)  ║        Welcome to Godspeed         ║
   ({___}) ║    World's First Meta Framework    ║
     " "   ╚════════════════════════════════════╝


? Please select a godspeed plugin to install. (Use arrow keys)
  @godspeedsystems/plugins-prisma-as-datastore 
  @godspeedsystems/plugins-express-as-http 
❯ @godspeedsystems/plugins-cron-as-eventsource 
  @godspeedsystems/plugins-axios-as-datasource 
  @godspeedsystems/plugins-aws-as-datasource 
  @godspeedsystems/plugins-excel-as-datasource 
  @godspeedsystems/plugins-mailer-as-datasource 
  @godspeedsystems/plugins-kafka-as-datasource-as-eventsource 
  @godspeedsystems/plugins-redis-as-datasource 
(Move up and down to reveal more choices)
  ```

To understand the actions taken when selecting the pre-defined plugins and their respective functionalities, please refer [this document](event_sources/event_source_plugins.md).

