# Data source Plugins

Godspeed framework has a pluggable approach to define data sources. The framework provides an interface to write different data sources. Here are few data source plugins which are managed by the core framework team.

## List of plugins

### 1. Prisma-as-datasource [npm](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

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
import { PrismaDataSource } from '@godspeedsystems/plugins-prisma-as-datasource';
export default PrismaDataSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.


### 2. axios-as-datasource [npm](https://www.npmjs.com/package/@godspeedsystems/plugins-axios-as-datasource)

"axios-as-datasource," This powerful plugin supercharges your applications by seamlessly connecting to 3rd party APIs. With its ease of use and versatility, it's your secret weapon for accessing external data sources effortlessly.






