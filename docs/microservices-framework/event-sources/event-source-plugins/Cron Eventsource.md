Cron jobs are a standard method of scheduling tasks to run on your server. Cron is a service running in the background that will execute commands (jobs) at a specified time, or at a regular interval. Jobs and their schedules are defined in a configuration file called a crontab.


A brief description of how to use Cron plug-in in  godspeed framework as Event Source. 

## Steps to use cron plug-in in godspeed framework:

### Example usage :

1. Update configuration file based on your requirements in `eventsource/cron.yaml`.
#### cron config ( src/eventsources/cron.yaml )3

## How to Use
- Create a godspeed project from the CLI and by default the Express plugin is integrated into your project if not, add the plugin from the CLI and select the `@godspeedsystems/plugins-cron-as-eventsource` to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
│    │ Name                              │ Description                                                     │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ express-as-http                   │ Godspeed event source plugin for express as http server         │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ aws-as-datasource                 │ aws as datasource plugin for Godspeed Framework                 │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ mailer-as-datasource              │ mailer as datasource plugin for Godspeed Framework              │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ ❯◯ │ cron-as-eventsource               │ Cron as eventsource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
└────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘
```


```yaml
type: cron
```
event key prefix should be the `type` mensioned in the config `yaml` file.

#### cron event  ( src/events/every_minute_task.yaml )

```yaml
# event for Shedule a task for evrey minute.

cron.* * * * *.Asia/Kolkata: //event key
  fn: every_minute

```
For  cron expressions   `https://crontab.cronhub.io/`

#### cron workflow to schedule ( src/functions/every_minute.yaml )


```yaml
summary: this workflow will be running every minute
tasks:
  - id: print
    description: print for every minute
    fn: com.gs.return
    args:
      data: HELLO from CRON
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-cron-as-eventsource)
