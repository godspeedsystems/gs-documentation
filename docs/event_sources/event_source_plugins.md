 # Eventsource plugins

Godspeed framework adopts a pluggable approach that empowers you to define eventsources effortlessly. Our framework graciously provides an interface that caters to diverse eventsource needs. Here's a glimpse into the exceptional eventsource plugins meticulously crafted by our core framework team.

To seamlessly integrate these plugins into your project, simply wield the command:

```bash
$  godspeed plugin add
```
  ```bash
Output:

       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select a godspeed plugin to install. (Use arrow keys)
    @godspeedsystems/plugins-prisma-as-datastore 
    @godspeedsystems/plugins-express-as-http 
❯ @godspeedsystems/plugins-cron-as-eventsource 
    @godspeedsystems/plugins-axios-as-datasource 
    @godspeedsystems/plugins-aws-as-datasource 
    @godspeedsystems/plugins-excel-as-datasource 
    @godspeedsystems/plugins-mailer-as-datasource 
    @godspeedsystems/plugins-kafka-as-datasource-as-eventsource 
    @godspeedsystems/plugins-redis-as-datasource 
(Move up and down to reveal more choices)
```

you can specify plugin name to add directly to your project

```sh
godspeed plugin add <plugin-name>
```

## List of eventsource plugins

### 1. [express-as-http](https://www.npmjs.com/package/@godspeedsystems/plugins-express-as-http)

Embark on a journey of API development made sublime. The express-as-http plugin, renowned for its simplicity and velocity, equips you with essential features to effortlessly handle HTTP routes, requests, and responses. Elevate your server-side applications in Node.js with this gem.

### 2. [cron-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-cron-as-eventsource)

cron-as-eventsource is a plugin which running in the background that will execute events at a specified time, or in a regular intervals.


### 3. [kafka-as-datasource-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

Kafka is your dynamic data stream and event maestro! As a datasource, it floods your systems with real-time insights, turning data into decision-making gold. And when it comes to event sourcing, Kafka orchestrates a symphony of real-time events that power your applications and spark innovation. Experience the future of data and event handling with Kafka. 

