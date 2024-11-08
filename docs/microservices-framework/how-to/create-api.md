# Creating APIs in Godspeed

## Step-by-Step Guide to create APIs in Godspeed framework

Creating a REST API in Godspeed involves defining an **HTTP event** to handle incoming requests and configuring a workflow/function to process the data and return a response. 
  
  Here’s a step-by-step guide to setting up a REST API in Godspeed.

### Step 1: Confirm HTTP EventSource Configuration
Open src/eventsources/http.yaml to confirm the Express plugin (the HTTP eventsource) is installed and configured correctly.
[Click here](/docs/microservices-framework/event-sources/event-source-plugins/Express%20Http%20Eventsource#instance-file) and check how the default http.yaml file look like

### Step 2: Define the API or HTTP Event
  In Godspeed, each API endpoint is represented by an HTTP event. 
  Here’s how to define an event to create a simple API that takes a name as input and returns a greeting.

 **Create an Event:**
  
  Create a YAML file in the src/events/ directory (e.g., greet-user.yaml).

  Define the HTTP Event in YAML: This event will handle POST requests at the /greet endpoint and expect a name in the request body.

  ```yaml
  http.post./greet:
  fn: greet-user-workflow   # name of the Workflow to handle the request
  summary: Greet a user
  description: Accepts a name in the request body and returns a greeting
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
              description: Name of the user to greet
          required:
            - name
  responses:
    200:
      description: Greeting message
      content:
        application/json:
          schema:
            type: object
            properties:
              message:
                type: string
                example: 'Hello, John!'
    400:
      description: Bad request if name is missing
      content:
        application/json:
          schema:
            type: object
            properties:
              error:
                type: string
                example: Invalid request. 'name' is required.       
  ```

### Step 4: Set Up the Workflow
  Now, create a workflow to process the request.  
  In the src/functions/ directory, create a file named greet-user-workflow.ts and define the workflow logic either in typescript or in yaml.

 #### Example typescript workflow:

```typescript
  import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
  export default function (ctx: GSContext, args: PlainObject) {
      const {
        inputs: {
              data: {
                body
              }
          }, 
      }= ctx;
      return new GSStatus(true, 200, undefined, 'Hello ' + body.name, undefined);  
  }

```
This workflow will take the name from the request and return a personalized greeting. 

#### Example workflow in yaml:
  ```yaml
    summary: Workflow to greet the user by name
    id: greet_user
    description: Workflow to greet the user by name
    tasks:
      - id: testing_inputs
        fn: com.gs.return
        args:
          name: <% inputs.body.name %>
  ```
### Step 5: Test the API

- **Start the Godspeed Server:**
  ```bash
  godspeed serve
  ```
- **Access Swagger UI:** 

In Godspeed, the **Swagger UI** is typically accessed at the `/api-docs` endpoint, appended to the `base URL` and `port` where the server is running. Here’s the general format for accessing Swagger UI:

```plaintext
http://<BASE_URL>:<PORT>/api-docs
```

**Example URLs**:

- If your server runs locally on port **3000**:
  ```plaintext
  http://localhost:3000/api-docs
  ```

- If your server is hosted on `example.com` and running on port **8080**:
  ```plaintext
  http://example.com:8080/api-docs
  ```

This URL format will provide access to Swagger UI for documenting and testing the APIs defined in your Godspeed project. This is generated automatically for all defined events.

- Test the /greet Endpoint:

  Select the POST /greet endpoint in Swagger.
  Provide a JSON body with a name:
  ```json
  {
    "name": "John"
  }
  ```
  Execute the request and verify the response.
  