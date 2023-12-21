---
title: Eventsources
---
# Overview

  Eventsources in Godspeed framework captures event and allows you to define entry or trigger points of application. Like `express` type, eventsource will allow you to expose your application through REST API or a `cron` type eventsource to schedule a recurring call to a workflow. To know the design principles of the eventsource, refer [this](/docs/microservice-meta-framework/event-sources/event-source-plugins.md).

  **Here Kafka works as datasource and an eventsource. To have look at the configuration, events and workflows, checkout [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource)**


## Types of eventsources
  1. Eventsource
    - It can act only as an eventsource
    - has its own client initialization
    - Eg,. Express
  2. DataSource as an eventsource
    - It can act as eventsource as well as a datasource
    - shares the client with the corresponding datasource
    - eg., Kafka, RabbitMQ

## How to use an eventsource in Godspeed project?

  You can use Godspeed CLI to browse and install plugins which are published and maintained by Godspeed.
```bash
    godspeed plugin add
```

```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

To understand the actions taken when selecting the pre-defined plugins and their respective functionalities, please refer [this document](/docs/microservice-meta-framework/event-sources/event-source-plugins.md).

