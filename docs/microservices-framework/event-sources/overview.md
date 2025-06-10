---
title: Eventsources
---
# About Eventsources

  Eventsources in Godspeed framework captures event and allows you to define entry or trigger points of application. For ex. the `type: express` eventsource will allow you to expose your application through REST API or a `type: cron` eventsource will allow to schedule a recurring call to a workflow. 
  
  The eventsources listen on the incoming events. They process incoming event as per the middleware set by you, including [authentication](../authentication/overview.md). Finally, they transform it to Godspeed's standard `GSCloudEvent` object, which is then made available to the event handlers and subsequent child workflows. 
  
  To have a look at supported eventsources and understanding their implementation, refer [Godspeed's gs-plugins mono-repo](https://github.com/godspeedsystems/gs-plugins). For ex. **[Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource)**


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

Godspeed framework adopts a pluggable approach that empowers you to define eventsources effortlessly. Our framework provides an interface that caters to diverse eventsource needs. Here's a glimpse into the exceptional eventsource plugins crafted by our core framework team.


## How to add plugin in your project?
You can use `godspeed plugin add` command to browse and install plugins which are published and maintained by Godspeed.

```bash
$  godspeed plugin add
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

You can directly install a plugin by specifying its package name:

Example:

```bash
$ godspeed plugin add @godspeedsystems/plugins-cron-as-eventsource
```

```bash
$ godspeed plugin add @godspeedsystems/plugins-kafka-as-datasource-as-eventsource 
```

**To learn more about Event sources in Godspeed, please watch the video provided below…**

<!-- <div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WaoWe1dekNk" frameBorder="0" allowFullScreen></iframe>
</div> -->

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/cp1qgIz1PNw?si=4Qngtu-WXoC-LQeY" frameborder="0" allowfullscreen></iframe>
</div>
