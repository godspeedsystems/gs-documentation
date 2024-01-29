# Kafka event
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

- To know about validation_error, refer [this](/docs/microservices-framework/event-sources/validations/validation-error.md)

:::tip note
- Response_validation_error, authz, authn are not applicable to this protocol since there is no response (thus no error handling for the same). Similarly, Kafka consumers don't require authentication or authorization, and hence, they are not specified here.
:::

<!-- #### On validation error handler
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
  ``` -->