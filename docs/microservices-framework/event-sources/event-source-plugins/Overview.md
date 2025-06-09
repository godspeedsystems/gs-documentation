---
title: Event Source Plugins Overview for Godspeed Framework
description: A comprehensive guide to Godspeed's pluggable event source system. Learn about available plugins, installation process, and how to integrate various event sources into your Godspeed applications with ease.
keywords: [event sources, plugins, event-driven architecture, godspeed plugin, plugin management, event integration, plugin installation, framework plugins, event source system, plugin architecture]
---

# Event Source Plugins Overview

Godspeed framework adopts a pluggable approach that empowers you to define eventsources effortlessly. Our framework provides an interface that caters to diverse eventsource needs. Here's a glimpse into the exceptional eventsource plugins crafted by our core framework team.

## How to add plugin in your project?
To integrate these plugins into your project, simply use the command:

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

You can directly install a plugin by specifying package name:

c
Example:

```bash
$ godspeed plugin add @godspeedsystems/plugins-cron-as-eventsource
```

```bash
$ godspeed plugin add @godspeedsystems/plugins-kafka-as-datasource-as-eventsource 
```

To understand the actions taken when selecting the pre-defined plugins and their respective functionalities, please refer [this document](/docs/microservices-framework/event-sources/event-source-plugins.md).
