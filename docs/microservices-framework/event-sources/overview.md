---
title: Eventsources
---
# About Eventsources

  Eventsources in Godspeed framework captures event and allows you to define entry or trigger points of application. For ex. the `type: express` eventsource will allow you to expose your application through REST API or a `type: cron` eventsource will allow to schedule a recurring call to a workflow. 
  
  The eventsources listen on the incoming events. They process incoming event as per the middleware set by you, including [authentication](../authentication/overview.md). Finally, they transform it to Godspeed's standard `GSCloudEvent` object, which is then made available to the event handlers and subsequent child workflows. To have a look at supported eventsources and understanding their implementation, refer [Godspeed's gs-plugins mono-repo](https://github.com/godspeedsystems/gs-plugins). For ex. [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource)**


## Types of eventsources 
Based on functionality and the nature of the information they provide to the system, eventsources can be divided as below.

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

To understand the actions taken when selecting the pre-defined plugins and their respective functionalities, please refer [this document](/docs/microservices-framework/event-sources/event-source-plugins.md).


**To learn more about Event sources in Godspeed, please watch the video provided below…**

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WaoWe1dekNk" frameBorder="0" allowFullScreen></iframe>
</div>
