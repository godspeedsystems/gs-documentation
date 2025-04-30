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

You can directly install a plugin by specifying its NPM package name:

```bash
godspeed plugin add <plugin-package-name>
```
Example:

```bash
$ godspeed plugin add @godspeedsystems/plugins-express-as-http
```

```bash
$ godspeed plugin add @godspeedsystems/plugins-cron-as-eventsource
```

To understand the actions taken when selecting the pre-defined plugins and their respective functionalities, please refer [this document](/docs/microservices-framework/event-sources/event-source-plugins.md).
