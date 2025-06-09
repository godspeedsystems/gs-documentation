---
title: Datasource Plugins Overview for Godspeed Framework
description: A comprehensive guide to Godspeed's pluggable datasource system. Learn about available plugins, installation process, and how to integrate various data sources into your Godspeed applications with ease.
keywords: [godspeed plugins, datasource plugins, plugin management, data integration, plugin installation, framework plugins, data sources, plugin system, plugin architecture]
---

# Datasource Plugins Overview

Godspeed framework adopts a pluggable approach that empowers you to define data sources effortlessly. Our framework graciously provides an interface that caters to diverse data source needs. Here's a glimpse into the exceptional datasource plugins crafted by our core framework team.

To seamlessly integrate these plugins into your project, simply run the command:

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
│  ◯   │ mangoose-as-datasource                 │ mongoose-as-datasource as datasource plugin for Godspeed Framework             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

you can specify plugin name to add directly to your project

```sh
godspeed plugin add @godspeedsystems/plugins-<plugin-name>
```

### Examples
```bash
$ godspeed plugin add @godspeedsystems/plugins-prisma-as-datastore
```

```bash
$ godspeed plugin add @godspeedsystems/plugins-kafka-as-datasource-as-eventsource 
```