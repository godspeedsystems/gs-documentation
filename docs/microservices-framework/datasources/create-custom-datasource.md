# Create a Custom Datasource

**A datasource** in Godspeed is any entity that provides a read/write mechanism for data. For example, an API, a SQL or NoSQL datastore which includes RDBMS or mongodb,postgresql, key value stores, document stores etc. The congfiguration for each datasource lies in src/datasources directory.

## Steps to Create a Custom Datasource in Godspeed

You can create and interact with custom data source in few steps by:

**1. Defining configuration file**

**2. Implementing datasource logic and**

**3. Creating event and workflow to manage interactions**

Lets understand how to implement the above steps :

### Step 1: Define Configuration file 

- Inside the `datasources` directory, create `YAML` files to setup your datasource integrations. For example, chatgpt.yaml or kafka.yaml. 

- In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined. 

:::tip
You can create multiple instances of same datasource type by creating multiple yaml files. For example, chatgpt1.yaml and chatgpt2.yaml. 

FYI you can do the same for eventsources as well, For example http1.yaml and http2.yaml where both are of `type: express` and run on different ports.
:::

Let's see an example of creating chatgpt as custom datasource.

```
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── chatgpt.ts
        |   |
        │   └── chatgpt.yaml
        │
        ├── events
        |
        ├── eventsources
        │   
        └── functions
```

### Example

Chatgpt Config file- `src/datasources/chatgpt.yaml`

```yaml
type: chatgpt  # should be same as the name of your datasource typescript file in `src/datasources/types/`

# custom configurations as per your datasource logic
model: gpt-4o  
temperature: 1
max_tokens: 200

```
This file defines the model, temperature, and token settings for the ChatGPT API.

## Step 2: Implement datasource logic

1. In `src/datasources/types`, create a TypeScript file for your datasource logic (e.g., `chatgpt.ts`).
2. Import `GSDataSource` and other required modules from `@godspeedsystems/core`.
3. Extend the `GSDataSource` abstract class to implement custom methods to interact with your custom datasource.
4. Initialize and return your client by implementing the abstract `initClient()` method of `GSDatasource`.
5. Once your client is initialized, then implement the  abstract `execute()` method of `GSDatasource`.

### Template for your custom datasource logic :
You can use the following template to start writing your custom datasource logic and then modify it as per your requirement.

```typescript
  import { GSContext,  GSDataSource, GSStatus, PlainObject,} from "@godspeedsystems/core";

  export default class DataSource extends GSDataSource {
  protected async initClient(): Promise<object> {
      try {
        
        // initialize your client

      } catch (error) {
      throw error;
      }
  }
  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
      try {

        // execute methods
        
      } catch (error) {
        throw error;
      }
  }
  }
  const SourceType = 'DS';
  const Type = "y"; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
  const CONFIG_FILE_NAME = "y"; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
  const DEFAULT_CONFIG = {};

  export {
    DataSource,
    SourceType,
    Type,
    CONFIG_FILE_NAME,
    DEFAULT_CONFIG
  }
 ```

### Example Datasource Logic for GPT plugin 

`src/datasources/types/chatgpt.ts`

```typescript

import { GSContext,  GSDataSource, GSStatus, logger, PlainObject,} from "@godspeedsystems/core";
import OpenAI from 'openai';

export default class DataSource extends GSDataSource {
protected async initClient(): Promise<object> {
  // initialize your client
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return client;
}

async execute(ctx: GSContext, args: PlainObject): Promise<any> {
  const client = this.client as OpenAI;
  const { prompt, meta: { fnNameInWorkflow } } = args;
  // Parse method from fnNameInWorkflow
  let method = fnNameInWorkflow?.split(".")[2];

  // Validate that client and method are available
  if (!client) {
    return new GSStatus(false, 500, "ChatGPT client is not initialized");
  }
  if (!method) {
    return new GSStatus(false, 400, "Method name is missing in fnNameInWorkflow");
  }

  // Use destructuring with defaults to get config values
  const {  model= 'gpt-4o',temperature = 1, max_tokens = 500 } = this.config;

    try {
      // execute methods
      if (method === "chat") {
        // Execute ChatGPT completion
        const response = await client.chat.completions.create({
          model,
          messages: [{ role: "user", content: prompt }],
          temperature,
          max_tokens,
        });
        const responseContent = response.choices[0]?.message?.content ?? "No response generated";
        return new GSStatus(true, 200, "Success", responseContent);
      } else {
        return new GSStatus(false, 400, `Invalid method: ${method}`);
      }
    } catch (error) {
      throw error;
    }
}
}
const SourceType = 'DS';
const Type = "chatgpt"; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
const CONFIG_FILE_NAME = "chatgpt"; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
const DEFAULT_CONFIG = {};

export {
  DataSource,
  SourceType,
  Type,
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG
}
```
<!-- 
<details>
<summary> Datasource Logic for Kafka: </summary> 

(src/datasources/types/kafka.ts)

   ```typescript
   import { GSContext, GSDataSource, PlainObject } from "@godspeedsystems/core";
   import { Kafka } from "kafkajs";

   export default class DataSource extends GSDataSource {
     protected async initClient(): Promise<PlainObject> {
       const kafka = new Kafka({
         clientId: this.config.clientId,
         brokers: this.config.brokers,
       });
       return kafka;
     }

     async execute(ctx: GSContext, args: PlainObject): Promise<any> {
       const { topic, message, meta: { fnNameInWorkflow } } = args;
       let method = fnNameInWorkflow.split(".")[2];

       if (this.client) {
         if (method === "producer") {
           const producer = this.client.producer();
           await producer.connect();
           const result = await producer.send({
             topic: topic,
             messages: [{ value: message }],
           });
           return result;
         } else {
           return "Invalid method";
         }
       }
     }
   }
```

#### Explanation of the Code:
- **initClient**: Initializes the Kafka client based on the configuration in `kafka.yaml`.
- **execute**: Defines a function that can either publish a message to Kafka or handle errors.
</details>
-->

## Step 3: Define an Event to trigger the Datasource

In the `src/events` directory, create an event file, e.g. `gpt.yaml`

**Example (src/events/gpt.yaml)**

```yaml
http.post./chatgpt:
  summary: "Generate response from ChatGPT"
  description: "Endpoint to send a user prompt to ChatGPT and retrieve the AI-generated response."
  fn: prompt
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            prompt:
              type: string
              description: "The user's prompt or question for ChatGPT to respond to."
          required:
            - prompt
  responses:
    200:
      description: "Successful response from ChatGPT"
      content:
        application/json:
          schema:
            type: string
```

## Step 4: Define the Workflow

In the `src/functions` directory, create a typescript workflow file (e.g., `prompt.ts`)

```typescript
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";
export default async function (ctx: GSContext, args: any) {
    const { inputs: {data: { body } }, }= ctx;
    const prompt = body.prompt;    
    const ds: GSDataSource = ctx.datasources.chatgpt;
    
    const response = await ds.execute(ctx, {
        prompt,
        meta: {fnNameInWorkflow: 'datasource.chatgpt.chat'}
    });
    return response;
}
```

## Step 5: Access and Test the Custom Datasource

1. **Start Your Godspeed Server**:
   ```bash
   godspeed serve
   ```

2. **Test the API Endpoint:**

  Use Swagger UI at http://localhost:3000/api-docs or a tool like Postman to test the endpoint.
  Send a POST request to /chatgpt with the prompt in the JSON body.

  Example request:

  ```json
    {
      "prompt": "How to create an API in godspeed ?"
    }
  ```

3. **Verify the Response**:
The API should respond with the ChatGPT-generated message in the format specified.


