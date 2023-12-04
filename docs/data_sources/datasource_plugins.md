# Data source Plugins

Godspeed framework adopts a pluggable approach that empowers you to define data sources effortlessly. Our framework graciously provides an interface that caters to diverse data source needs. Here's a glimpse into the exceptional data source plugins meticulously crafted by our core framework team.

To seamlessly integrate these plugins into your project, simply wield the command:

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

you can specify plugin name to add directly to your project

```sh
godspeed plugin add <plugin-name>
```
## List of Datasource plugins

### 1. [prisma-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

Prisma-as-datasource plugin provide functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through Prisma ORM.


### 2. [axios-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-axios-as-datasource)

Axios as a datasource: Level up your data-fetching game with Axios. Seamlessly integrate this powerful HTTP client into your app for smooth and efficient data transactions. Fetch, post, and interact with APIs effortlessly. Ready to make data requests a breeze? 🌐✨


### 3. [aws-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-aws-as-datasource)

AWS as a datasource plugin: Turbocharge your app by tapping into Amazon Web Services. Unleash the power of cloud-based data, storage, and more to supercharge your application. 🚀


### 4. [excel-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-excel-as-datasource)

Excel as a datasource: Turn your spreadsheets into actionable insights. Seamlessly integrate Excel into your applications to harness data, charts, and calculations. Transform static numbers into dynamic, real-time intelligence. Ready to Excel? 📊

### 5. [Nodemailer-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-mailer-as-datasource)

Nodemailer as a datasource: Amp up your communication game by using a mailer as a powerful data source. Connect seamlessly to send information through emails. Transform your app into a messaging maestro, unlocking a world of possibilities. Ready to send your data soaring through the digital mail stream? 📧✨


### 6. [redis-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-redis-as-datasource)

Redis as a datasource: Elevate your data game with the speed and efficiency of Redis. Use it as a powerhouse for caching, real-time analytics, and lightning-fast data retrieval. Embrace the key-value magic to supercharge your application's performance. Ready to Rediscover efficiency? 🚀


### 7. [kafka-as-datasource-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

Kafka is your dynamic data stream and event maestro! As a data source, it floods your systems with real-time insights, turning data into decision-making gold. And when it comes to event sourcing, Kafka orchestrates a symphony of real-time events that power your applications and spark innovation. Experience the future of data and event handling with Kafka. 


