# Data source Plugins

Godspeed framework has a pluggable approach to define data sources. The framework provides an interface to write different data sources. Here are few data source plugins which are managed by the core framework team.

## List of plugins

### 1. [Prisma-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

Prisma-as-datasource plugin provide functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through Prisma ORM.

How to use **prisma-as-datastore** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin prisma-as-datastore
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-prisma-as-datastore
```

2. Create a {databaseName}.prisma file in your projects, `src/datasources` folder, which is the Prisma schema file for the database.

3. Create a `prisma.ts` file in your `src/datasources/types` folder and paste below content.

```js
import { DataSource } from '@godspeedsystems/plugins-prisma-as-datasource';
export default DataSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.


### 2. [axios-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-axios-as-datasource)

Axios as a datasource: Level up your data-fetching game with Axios. Seamlessly integrate this powerful HTTP client into your app for smooth and efficient data transactions. Fetch, post, and interact with APIs effortlessly. Ready to make data requests a breeze? 🌐✨

How to use **axios-as-datasource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin axios-as-datasource
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-axios-as-datasource
```

2. Create a `api.yaml` file in your projects, `src/datasources` folder, which is the config file for the configuration.

3. Create a `axios.ts` file in your `src/datasources/types` folder and paste below content.

```js
import { DataSource } from '@godspeedsystems/plugins-axios-as-datasource';
export default DataSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.



### 3. [aws-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-aws-as-datasource)

AWS as a datasource plugin: Turbocharge your app by tapping into Amazon Web Services. Unleash the power of cloud-based data, storage, and more to supercharge your application. 🚀

How to use **aws-as-datasource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin aws-as-datasource
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-aws-as-datasource
```

2. Create a `aws.yaml` file in your projects, `src/datasources` folder, which is the config file for the configuration.

3. Create a `aws.ts` file in your `src/datasources/types` folder and paste below content.

```js
import { DataSource } from '@godspeedsystems/plugins-aws-as-datasource';
export default DataSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.


### 4. [excel-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-excel-as-datasource)

Excel as a datasource: Turn your spreadsheets into actionable insights. Seamlessly integrate Excel into your applications to harness data, charts, and calculations. Transform static numbers into dynamic, real-time intelligence. Ready to Excel? 📊

How to use **excel-as-datasource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin excel-as-datasource
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-excel-as-datasource
```

2. Create a `excel.yaml` file in your projects, `src/datasources` folder, which is the config file for the configuration.

3. Create a `excel.ts` file in your `src/datasources/types` folder and paste below content.

```js
import { DataSource } from '@godspeedsystems/plugins-excel-as-datasource';
export default DataSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.


### 5. [mailer-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-mailer-as-datasource)

Mailer as a datasource: Amp up your communication game by using a mailer as a powerful data source. Connect seamlessly to send information through emails. Transform your app into a messaging maestro, unlocking a world of possibilities. Ready to send your data soaring through the digital mail stream? 📧✨

How to use **mailer-as-datasource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin mailer-as-datasource
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-mailer-as-datasource
```

2. Create a `mailer.yaml` file in your projects, `src/datasources` folder, which is the config file for the configuration.

3. Create a `mailer.ts` file in your `src/datasources/types` folder and paste below content.

```js
import { DataSource } from '@godspeedsystems/plugins-mailer-as-datasource';
export default DataSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.


### 6. [redis-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-redis-as-datasource)

Redis as a datasource: Elevate your data game with the speed and efficiency of Redis. Use it as a powerhouse for caching, real-time analytics, and lightning-fast data retrieval. Embrace the key-value magic to supercharge your application's performance. Ready to Rediscover efficiency? 🚀

How to use **redis-as-datasource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin redis-as-datasource
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-redis-as-datasource
```

2. Create a `redis.yaml` file in your projects, `src/datasources` folder, which is the config file for the configuration.

3. Create a `redis.ts` file in your `src/datasources/types` folder and paste below content.

```js
import { DataSource } from '@godspeedsystems/plugins-redis-as-datasource';
export default DataSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.






