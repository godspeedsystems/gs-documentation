
# Cron event
[Cron](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource#godspeed-plugin-cron-as-eventsource) jobs are a standard method of scheduling tasks to run on your server. Cron is a service running in the background that will execute commands (jobs) at a specified time, or at a regular interval. Jobs and their schedules are defined in a configuration file called a crontab.

:::tip 
- event key prefix should be the type mensioned in the config yaml file.
- For cron expressions https://crontab.cronhub.io/
:::

### Cron Event 

( src/events/every_minute_task.yaml )
```yaml
# event for Scheduling a task for every minute.
cron.* * * * *.Asia/Kolkata:   # event key
  fn: every_minute

```

### Explanation of Cron Event Configuration:

- `cron.*`: This is the cron syntax for the field representing minutes. The asterisk (*) in this position means "every minute," so the event is scheduled to run every minute.

- `* * * * *`: These asterisks represent the other cron fields, which specify the schedule for hours, days of the month, months, and days of the week, respectively. 

- `Asia/Kolkata`: This is a timezone specification. It indicates that the event is scheduled to run in the Asia/Kolkata timezone. Kolkata is a city in India, and this timezone corresponds to the Indian Standard Time (IST).

<!-- 
### Cron workflow to schedule 
( src/functions/every_minute.yaml )

summary: this workflow will be running every minute
tasks:
  - id: print
    description: print for every minute
    fn: com.gs.return
    args:
      data: HELLO from CRON
-->

### Cron workflow to schedule ( src/functions/every_minute.ts )

```ts
import { GSCloudEvent, GSContext, PlainObject } from "@godspeedsystems/core";
/**
 * Prints a message every minute via cron
 */
export default function (ctx: GSContext) {
  const { logger, childLogger } = ctx;

  // Log using both loggers
  logger.info("HELLO from CRON");
  childLogger.info("HELLO from CRON");

  // Return the data
  return new GSStatus(true, 200, "message", "HELLO from CRON", undefined);
}
```




