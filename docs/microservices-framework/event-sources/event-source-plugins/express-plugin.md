
## Express-as-http Plugin 
**-** [Plugin Source Code](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http)


This plugin is designed to integrate with the Godspeed framework and provides functionality related to event sources using Express.js, a popular Node.js web application framework. It allows you to create event sources that can listen for incoming HTTP requests and trigger actions based on those requests.

## Plugin Features

The Godspeed Express Plugin provides the following benefits:

1. **Modular Express Integration:** The plugin abstracts away the complexities of setting up an Express.js application, making it effortless to define routes and handlers for incoming HTTP ou can replace Express with Fastify or another HTTP service tomorrow without changing a single line of code in your business logic and http eventsource configurations, giving you flexibility. You can also provide same API using Graphql or Fastify service by just replacing `http` with `http & graphql & fastify` in your event definitions. For ex. `http & graphql & fastify.get.helloworld` 

2. **Unified event schema with validations and auth:** Developers can easily subscribe to specific HTTP events by defining routes and handlers using a uniform schema which handles authentication, authorization and validations, not just for Express but also other event sources.

3. **Customizable Configuration:** The plugin allows for easy configuration of Express settings, such as port, request body limits, file size limits, JWT authentication, authorization, swagger generation etc.

4. **Reusable pure function handlers:** The plugin works seamlessly with the Godspeed Core library, enabling the processing of cloud events in pure workflows, decoupled with Express API, making them reusable.

5. **File upload feature:** The Express plugin allows you to upload files as well.

6. **Authenticating users using oauth2:** This will allow your users to sign in to your application using their existing Google/Linkedin/GitHub credentials.

## Plugin Components

The plugin consists of several key components:

### 1. `EventSource` Class

- This class extends `GSEventSource`, a base class provided by the Godspeed framework for creating event sources.

- It initializes an Express.js server to listen for incoming HTTP requests based on the provided configuration options.

- The `subscribeToEvent` method is used to define how the plugin should respond to specific HTTP routes. It maps incoming HTTP requests to Godspeed Cloud Events, processes them using a provided function, and sends a response.

- The `createGSEvent` static method is used to create a Godspeed Cloud Event from an incoming Express.js request.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'ES' (event source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'express' in this case.

- `CONFIG_FILE_NAME`: In the context of an event source, this constant also serves as the event identifier. For a data source, it works as the data source name. In this plugin, it is set to 'http'.

- `DEFAULT_CONFIG`: A default configuration object with options like the port number for the Express.js server.

## Conclusion

Our Express plugin is a powerful addition to the Godspeed framework, allowing you to seamlessly integrate and manage event sources within your applications. With this plugin, you can effortlessly handle HTTP requests, define routes, and trigger actions, making it an essential tool for building robust and responsive applications.

We value your feedback and contributions. If you have questions, suggestions, or encounter any issues while using the plugin, please don't hesitate to reach out to us. Your insights and ideas can help us improve and enhance this plugin for the entire community.

We're excited to see what you'll create with the Express plugin, and we look forward to collaborating with you to make your projects even more successful. Happy coding!

