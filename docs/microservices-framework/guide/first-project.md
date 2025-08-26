---
id: first-project
title: Your first Godspeed Project
description: understanding your first project(or service), running the development server, accessing Swagger UI and testing a basic API.
keywords: [Godspeed service, project (service) creation, running project (service) locally, Swagger UI, API testing, helloworld, guide, tutorial]
---

Follow these steps to set up and launch your new Godspeed project:

1.  **Create a new project:**
    ```bash
      godspeed create my-project
    ```

2.  **Navigate to the project directory:**
    ```bash
      cd my-project
    ```

3.  **Start the development server:**
    ```bash
      godspeed serve
    ```

### Accessing and Testing Your API with Swagger UI

Godspeed automatically generates interactive API documentation using Swagger UI.

1.  **Access Swagger UI:**
    The Swagger UI is typically available at:
    ```plaintext
        http://<BASE_URL>:<PORT>/<http_docs_endpoint>`
    ```
    By default, this is:
    ```plaintext
    http://localhost:3000/api-docs
    ```

    If you need to customize the default port (`3000`) or the Swagger endpoint (`/api-docs`), you can modify the `./src/eventsources/http.yaml` file.

2.  **Test the `/helloworld` API:**

      * In the Swagger UI, locate the `/helloworld` endpoint.
      * Click the **`Try it out`** button.
      * You will be prompted to fill in a `name` parameter. Enter a name (e.g., "John") and send the request.
      * The server will return the following response:
        ```
        Hello `John`
        ```

### Understanding Your First Godspeed Project

Let's dive into the structure and core concepts of your newly created Godspeed project.

#### Project Scaffolding

Godspeed generates a well-organized project structure:

  * The framework creates various folders inside, including:
      * [`config`](/docs/microservices-framework/config-and-mappings/config.md)
      * [`datasources`](/docs/microservices-framework/datasources/overview.md)
      * [`events`](/docs/microservices-framework/event-sources/event-schema.md)
      * [`eventsources`](/docs/microservices-framework/event-sources/overview.md)
      * [`functions`](/docs/microservices-framework/functions/overview.md)
      * [`mappings`](/docs/microservices-framework/config-and-mappings/mappings.md)
      * The `eslintrc.json` file contains a curated list of recommended ESLint plugins for your project.
      * Swagger specifications for your HTTP endpoints are configured in `src/eventsources/http.yaml`.

:::tip
For a deeper understanding of the project's scaffolding structure, refer to the [Walkthrough section](/docs/microservices-framework/guide/walkthrough#moving-forward)
:::

#### Why the `/helloworld` API Requires a Name

The `/helloworld` API endpoint asks for a `name` parameter because it's configured to require it as part of the query string.

Let's examine the event schema for this API in `src/events/helloworld.yaml`:

  ```yaml
  http.get./helloworld: # `http` server listening via `get` method on `/helloworld` endpoint
    fn: helloworld # the function handler to be called for this endpoint, available in `src/functions`
    params: # JSON-Schema of API parameters like query, headers, path params. Note: This is set as per Swagger standard's `parameters` syntax
      - name: name  # This is our name query param
        in: query    # Notice the in: query, it can be `path` or `headers` as well
        required: true # true means `name` parameter is required
        schema:
          type: string
    responses: # JSON-Schema of API responses for different status codes. Note: This is set as per Swagger standard's `responses` syntax
      200:
        content:
          application/json:
            schema:
              type: string
  ```

In this `helloworld.yaml` file:

  * **`params`**: This section describes the input the API expects. Here, it expects a `name` parameter.
  * **`name: name`**: Specifies that the query parameter is named `name`.
  * **`in: query`**: Indicates that the `name` parameter should be included in the URL's query string (e.g., `/helloworld?name=John`). It can also be `path` or `headers`.
  * **`required: true`**: The `name` parameter is mandatory for the API to function.
  * **`schema: { type: string }`**: The `name` parameter must be a string, enforcing text input.

:::tip
In the Godspeed meta-framework, every API (REST or GraphQL) and message (websocket, cron, message bus) is referred to as an **`event`**. All events trigger functions, which act as event handlers (see the `fn:` instruction in the YAML above). Synchronous events return a response, while asynchronous events do not.

This naming convention might be new to you. While the broader developer community typically refers to only `async events` (like Kafka or websocket messages) as `events`, Godspeed considers both synchronous APIs (REST, GraphQL) and asynchronous events (Message bus, websocket, cron) as `events`.
:::

### Testing API Input and Output Validation

Godspeed provides built-in validation for data sent to and from your APIs, ensuring data integrity.

1.  **Test missing `name` parameter:**
    Open your browser and navigate to `localhost:3000/helloworld`. Alternatively, run `curl -i localhost:3000/helloworld` from your terminal.
    This will return a `400` error, as you haven't provided the required `name` query parameter:

    ```json
    {
      "validation_error": {
        "success": false,
        "code": 400,
        "message": "request validation failed.",
        "error": "must have required property 'name' in query",
        "data": {
          "message": "The API cannot be executed due to a failure in request params schema validation.",
          "error": {
            "instancePath": "",
            "schemaPath": "#/required",
            "keyword": "required",
            "params": {
              "missingProperty": "name"
            },
            "message": "must have required property 'name' in query"
          }
        }
      }
    }
    ```

2.  **Test with `name` parameter:**
    Now, navigate to `localhost:3000/helloworld?name=mastersilv3r`. This should work correctly:

    ```
    Hello mastersilv3r
    ```

### API Collections

Godspeed helps you easily work with API clients.

  * **Swagger Collection:**
    Access the automatically generated Swagger collection for your project from the `/docs` folder within your project.

  * **Postman Collection:**
    To get a Postman Collection, simply import the Swagger file from `src/docs` into Postman.


### Video Tutorial - Short
There is a longer and detailed introduction video as well, below on this page.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '100%', height: '80%' }} src="https://www.youtube.com/embed/vudhjYjGeLQ?si=R4kTbH14-sAbKFBA" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div>


> If you want some pre-made examples please check the [examples repository](https://github.com/godspeedsystems/gs-node-templates)

### Video Tutorial - Longer and in depth

**Walkthrough the Loan Origination System project made using our meta framework**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/BTPHPoI3dh0" frameborder="0" allowfullscreen></iframe>
</div>
