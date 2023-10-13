---
title: Event Sources
---
# Overview

  Event sources in Godspeed framework captures event and allows you to define entry or trigger points of application. Like `express` type, event source will allow you to expose your application through REST API or a `cron` type event source to schedule a recurring call to a workflow.

  **Here kafka works as datasource and an eventsource. To have look at the configuration, events and workflows, Checkout [Kafka](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/kafka/README.md)**

## Types of Event Sources
  1. Event Source
    - It can act only as an event source
    - has its own client initilization
    - Eg,. express
  2. DataSource As an Event Source
    - It can act as event source as well as data source
    - Shares the client with the corresponding data source
    - Eg., kafka, rabbitMQ


## How to use an event source in Godspeed project?

  You can use Godspeed CLI to browse and install plugins which are published and maintained by Godspeed.

  ```bash
   > godspeed plugin add

   ~~~~~~ Godspeed CLI ~~~~~~
  ? Please select godspeed plugin to install. (Use arrow keys)
  ❯ @godspeedsystems/plugins-express-as-http
    @godspeedsystems/plugins-prisma-as-datastore
    @godspeedsystems/plugins-axios-as-datasource
    @godspeedsystems/plugins-cron
    @godspeedsystems/plugins-kafka
  ```


