---
title: Event Source Plugins Overview for Godspeed Framework
description: A comprehensive guide to Godspeed's pluggable event source system. Learn about available plugins, installation process, and how to integrate various event sources into your Godspeed applications with ease.
keywords: [event sources, plugins, event-driven architecture, godspeed plugin, plugin management, event integration, plugin installation, framework plugins, event source plugins, plugin architecture]
---

# Event Source Plugins Overview

Godspeed framework adopts a pluggable approach that empowers you to define eventsources effortlessly. Our framework provides an interface that caters to diverse eventsource needs. Here's a glimpse into the exceptional eventsource plugins crafted by our core framework team.

## List of event source plugins

### 1. [express-as-http](https://www.npmjs.com/package/@godspeedsystems/plugins-express-as-http)

The Godspeed Express Plugin is a core component of the Godspeed framework, integrating with the popular Express.js framework to handle HTTP events. This plugin provides seamless, schema-driven development for HTTP-based event handling, offering features like input/output validation, authentication, and Swagger/GraphQL spec generation.

### 2. [cron-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-cron-as-eventsource)

Cron eventsource is a plugin which runs in the background and execute events at specified time or regular intervals.


### 3. [kafka-as-datasource-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

Kafka is a versatile messaging system designed to securely transfer data between various systems. Its functionality can be tailored through configuration, allowing it to serve as a reliable conduit for real-time event tracking or even function as a replicated distributed database. And when it comes to event sourcing, Kafka orchestrates a symphony of real-time events that power your applications and spark innovation. Experience the future of data and event handling with Kafka. 

### 4. [apollographql-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-graphql-as-eventsource)

GraphQL is a query language and runtime for APIs that enables clients to request precisely the data they need. It allows developers to describe the structure of the data they require, providing a more efficient and flexible alternative to traditional REST APIs. GraphQL empowers front-end developers to shape their API requests, minimizing over-fetching and under-fetching of data.

### 5. [fastify-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-fastify-as-http)

The Godspeed Fastify Plugin is designed to streamline the integration of event-driven and serverless functionalities into your projects. This plugin harnesses the power of Fastify, a fast and low overhead web framework for Node.js, to handle HTTP events. It simplifies the process of defining event subscriptions and processing incoming events, providing a robust foundation for building responsive and scalable applications.


## How to add plugin in your project?

To browse available plugins in Godspeed, simply use this command:

```bash
$  godspeed plugin add
```
You can directly install a plugin by specifying its package name:

Example:

```bash
$ godspeed plugin add @godspeedsystems/plugins-cron-as-eventsource
```

```bash
$ godspeed plugin add @godspeedsystems/plugins-kafka-as-datasource-as-eventsource 
```


