---
title: Event Sources
---
# Overview

  Event Sources in godspeeed framework allows you to define entry or trigger points of application. Like `express` type event source will allow you to expose your application through REST API or a `cron` type event source to schedule a recurring call to a workflow.

## Types of Event Source
  1. Event Source
    - it can act only as event source
    - has its own client initilization
    - eg,. express
  2. DataSource As Event Source
    - it can act as event source as well as data source
    - shares the client with the corresponding data source
    - eg., kafka, rabbitMQ

## How to use a event source in godspeed project?

  You can use Godspee CLI to browse and install plugins published and maintained by godspeed.

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