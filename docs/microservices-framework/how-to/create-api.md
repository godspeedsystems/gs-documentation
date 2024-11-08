# Creating APIs in Godspeed

## Step-by-Step Guide to create APIs in Godspeed framework

Creating a REST API in Godspeed involves defining an **HTTP event** to handle incoming requests and configuring a workflow/function to process the data and return a response. 
  
  Here’s a step-by-step guide to setting up a REST API in Godspeed.

 ### Step 1: Set Up Your Godspeed Project
  If you haven’t already, start by setting up a new Godspeed project:

  Install Godspeed CLI:
  ```bash
  npm install -g @godspeedsystems/godspeed
  ```
  Create a New Project:
  ```bash
  godspeed create my_new_project
  cd my_new_project
  ```

### Step 2: Confirm HTTP EventSource Configuration
Check http.yaml Configuration: 

Open src/eventsources/http.yaml to confirm the Express plugin (the HTTP eventsource) is installed and configured correctly.

### Step 3: Define the API Event
  In Godspeed, each API endpoint is represented by an HTTP event. 
  Here’s how to define an event to create a simple API that takes a name as input and returns a greeting.

 **Create an Event:**
  
  Create a YAML file in the src/events/ directory (e.g., greetUser.yaml).

  Define the HTTP Event in YAML: This event will handle POST requests at the /greet endpoint and expect a name in the request body.
  ```yaml
  http.post./greet:
  fn: greetUserWorkflow   # Workflow to handle the request
  summary: 'Greet a user'
  description: 'Accepts a name in the request body and returns a greeting'
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
              description: "Name of the user to greet"
          required:
            - name
  responses:
    '200':
      description: 'Greeting message'
      content:
        application/json:
          schema:
            type: object
            properties:
              message:
                type: string
                example: 'Hello, John!'
    '400':
      description: 'Bad request if name is missing'
      content:
        application/json:
          schema:
            type: object
            properties:
              error:
                type: string
                example: 'Invalid request. 'name' is required.'        
  ```
### Step 4: Set Up the Workflow
  Now, create a workflow to process the request. This workflow will take the name from the request and return a personalized greeting.

  **Create a Workflow File:**
 
  In the src/workflows/ directory, create a file named greetUserWorkflow.yaml.

  Define the Workflow Logic in YAML: 

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
- Start the Godspeed Server:
  ```bash
  godspeed serve
  ```
- Access Swagger UI: 
  Open http://localhost:3000/api-docs in your browser to test your API endpoint. 
  This is generated automatically for all defined events.

- Test the /greet Endpoint:

  Select the POST /greet endpoint in Swagger.
  Provide a JSON body with a name:
  ```json
  {
    "name": "John"
  }
  ```
  Execute the request and verify the response.
  