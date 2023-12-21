# Examples for different event schema 
## Kafka event
> A [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource) event is specified as `{datasourceName}.{topic_name}.{group_id}` in [the Kafka event specification](#example-spec-for-kafka-event).

Within the Kafka event structure, the content of the message is captured and made accessible as `inputs.body`, facilitating its integration into the handler workflow for processing.

#### Example spec for Kafka event

``` yaml
 # event for consume data from Topic
Kafka.publish-producer1.kafka_proj: // event key
  id: kafka_consumer
  fn: kafka_consume
  body: #same body structure for all the events
 ```

#### Example workflow consuming a Kafka event
  ```yaml
   # function for consume data
id: kafka_consumer
summary: consumer
tasks:
    - id: set_consume
      fn: com.gs.return
      args: <% inputs.body %>
  ```

#### On validation error handler
  ```yaml
  summary: Handle json scehma validation error
  id: error_handler
  tasks:
    - id: error_step1
      fn: datasource.kafka.publish
      args:
        data: # publish the event and validation error to kafka on a topic
          value:
            event: <% inputs.event %>
            validation_error: <% inputs.validation_error %>
  ```
## Cron event
[Cron](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource#godspeed-plugin-cron-as-eventsource)  jobs are a standard method of scheduling tasks to run on your server. Cron is a service running in the background that will execute commands (jobs) at a specified time, or at a regular interval. Jobs and their schedules are defined in a configuration file called a crontab.

```yaml
# event for Scheduling a task for every minute.

cron.* * * * *.Asia/Kolkata: //event key
  fn: every_minute

```
- `cron.*`: This is the cron syntax for the field representing minutes. The asterisk (*) in this position means "every minute," so the event is scheduled to run every minute.

- `* * * * *`: These asterisks represent the other cron fields, which specify the schedule for hours, days of the month, months, and days of the week, respectively. 

- `Asia/Kolkata`: This is a timezone specification. It indicates that the event is scheduled to run in the Asia/Kolkata timezone. Kolkata is a city in India, and this timezone corresponds to the Indian Standard Time (IST).






