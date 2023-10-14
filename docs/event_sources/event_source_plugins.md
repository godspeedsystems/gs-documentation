# Godspeed Event Source Plugins:

Godspeed framework has a pluggable aproach to define event sources. The framework provides an interface to write different event sources. Here are few event source plugins which are managed by the core framework team.

## List of plugins

### 1. [express-as-http](https://www.npmjs.com/package/@godspeedsystems/plugins-express-as-http)

express-as-http is a plugin that simplifies building APIs by providing essential features for handling HTTP routes, requests, and responses. It's known for its simplicity and speed, making it a popular choice for building server-side applications in Node.js.

How to use **express-as-http** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin express-as-http
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-express-as-http
```

2. Create a `http.yaml` file in your projects, `src/eventsources` folder, which is the config file for the configuration.

3. Create a `express.ts` file in your `src/eventsources/types` folder and paste below content.

```js
import { EventSource } from '@godspeedsystems/plugins-express-as-http';
export default EventSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.


### 2. [cron-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-cron-as-eventsource)

cron-as-eventsource is a plugin which running in the background that will execute events at a specified time, or in a regular intervals.
express-as-http is a plugin that simplifies building APIs by providing essential features for handling HTTP routes, requests, and responses. It's known for its simplicity and speed, making it a popular choice for building server-side applications in Node.js.

How to use **cron-as-eventsource** plugin?

Simplest way to use this plugin in your Godspeed project is through Godspeed CLI. From your project root, You can run below command to use this.

```sh
godspeed add plugin cron-as-eventsource
```

OR

You can also manually add this plugin in your godspeed project. By following below steps.

1. Install the plugin npm module.

```sh
npm install @godspeedsystems/plugins-cron-as-eventsource
```

2. Create a `cron.yaml` file in your projects, `src/eventsources` folder, which is the config file for the configuration.

3. Create a `cron.ts` file in your `src/eventsources/types` folder and paste below content.

```js
import { EventSource } from '@godspeedsystems/plugins-cron-as-eventsource';
export default EventSource;
```

4. Run `godspeed dev` or `npm run dev` to restart the server.
